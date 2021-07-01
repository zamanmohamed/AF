const express = require('express');
const router = express.Router();
const controller = require('../controller/conference.con');


module.exports = function() {
    router.post('/createconference', controller.createconference);
    router.get('/getallconference', controller.getallconference);
    router.delete('/deleteconference/:id', controller.deleteconference);
    router.get('/getconference/:id', controller.getconference);
    router.get('/getconferencespeaker/:id', controller.getconferencespeaker);
    router.post('/updateconference/:id', controller.updateconference);


    return router;
}