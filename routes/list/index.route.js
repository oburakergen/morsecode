
const router = require('express').Router();
const myList = require('../../controller/list.controller');

router.get('/cpu', myList.cpu);
router.get('/arch', myList.arch);
router.get('/freemem', myList.freemem);
router.get('/hostname', myList.hostname);
router.get('/platform', myList.platform);
router.get('/totalmem', myList.totalmem);
router.get('/type', myList.type);
router.get('/uptime', myList.uptime);

module.exports = router;
