const express = require('express');
const router = express.Router();
const controller = require('../controllers/speacker.con');


module.exports = function() {
    router.post('/createspeaker', controller.createspeaker);
    router.get('/getallspeaker', controller.getallspeaker);

    return router;
}