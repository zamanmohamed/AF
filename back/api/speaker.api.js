const express = require('express');
const router = express.Router();
const controller = require('../controller/speaker.con');


module.exports = function() {
    router.post('/createspeaker', controller.createspeaker);
    router.get('/getallspeaker', controller.getallspeaker);
    router.delete('/deletespeaker/:id', controller.deletespeaker);
    router.get('/getspeaker/:id', controller.getspeaker);
    router.post('/updatespeaker/:id', controller.updatespeaker);

    return router;
}