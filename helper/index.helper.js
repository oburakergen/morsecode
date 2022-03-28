const redis = require('redis');
const axios = require('axios').default;

const client = redis.createClient(6379);

client.on('connect', () => {
    console.log('Connected!');
});

exports.postData = (res, next, name, code) => {
    client.get(name, async (e, c) => {
        if (e) {
            next(e);
        }

        if (c !== null) {
            console.log('Hit');

            return res.status(200).setHeader('Content-Type', 'application/json').json({
                data: JSON.parse(c),
            });
        }
        await axios.post('http://ik.olleco.net/morse-api/', {
            command: code,
        }).then((r) => {
            const data = JSON.stringify(r.data);

            client.setex(name, 300, data);

            return res.status(200).setHeader('Content-Type', 'application/json').json({
                data: JSON.parse(data),
            });
        });
    });
};
