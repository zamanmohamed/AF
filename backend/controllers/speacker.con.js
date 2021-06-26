const Speaker = require('../models/speacker.model');

const createspeaker = async (req,res) => {
    if(req.body){
        const speaker = new Speaker(req.body);
        await speaker.save()
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

module.exports = {
    createspeaker
}