const express = require('express');
const router = express.Router();
const controller = require('../controllers/speacker.con');


module.exports = function() {
    router.post('/createspeaker', controller.createspeaker);
    router.get('/getallspeaker', controller.getallspeaker);
    router.delete('/deletespeaker/:id', controller.deletespeaker);
    router.get('/getspeaker/:id', controller.getspeaker);

    return router;
}
