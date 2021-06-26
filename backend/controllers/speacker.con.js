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

const getallspeaker = async (req,res) => {
    await Speaker.find({})
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    })
}

const getspeaker = async (req,res) => {
    await Speaker.findById(req.params.id)
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    })
}

const deletespeaker = async(req,res) => {
    await Speaker.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json('error: '+err));
}

module.exports = {
    createspeaker,
    getallspeaker,
    deletespeaker,
    getspeaker
}