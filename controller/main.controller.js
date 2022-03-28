/*
 * Copyright (c) Burak ERGEN 2022.
 */

exports.index = async (req, res) => {
    return res.status(200).render('index', {
        title: 'asd',
    });
};
