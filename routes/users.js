/**
 * Create a interface for routes
 * @public
 */
module.exports = (app) => {
    app.use('/', require('./main/index.route'));
    app.use('/admin', require('./admin/index.route'));
    app.use('/address', require('./address/index.route'));
    app.use('/auth', require('./auth/index.route'));
};
