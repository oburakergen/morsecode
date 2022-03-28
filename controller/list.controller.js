/*
 * Copyright (c) Burak ERGEN 2022.
 */

const { postData } = require('../helper/index.helper');

exports.cpu = async (req, res, next) => {
    await postData(res, next, 'cpu', '..-. .-. . . -- . --');
};

exports.arch = async (req, res, next) => {
    await postData(res, next, 'arch', '.- .-. -.-. ....');
};

exports.freemem = async (req, res, next) => {
    await postData(res, next, 'freemem', '..-. .-. . . -- . --');
};

exports.hostname = async (req, res, next) => {
    await postData(res, next, 'hostname', '.... --- ... - -. .- -- .');
};

exports.platform = async (req, res, next) => {
    await postData(res, next, 'platform', '.--. .-.. .- - ..-. --- .-. --');
};

exports.totalmem = async (req, res, next) => {
    await postData(res, next, 'totalmem', '- --- - .- .-.. -- . --');
};

exports.type = async (req, res, next) => {
    await postData(res, next, 'type', '- -.-- .--. .');
};

exports.uptime = async (req, res, next) => {
    await postData(res, next, 'uptime', '..- .--. - .. -- .');
};
