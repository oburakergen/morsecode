/**
 * Create a interface for routes
 * @public
 */
module.exports = (app) => {
    app.use('/', require('./main/index.route'));
    app.use('/list', require('./list/index.route'));
};
