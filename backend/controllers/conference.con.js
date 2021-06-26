const Conference = require('../models/conference.model');

const createconference = async (req,res) => {
    if(req.body){
        const conference = new Conference(req.body);
        await conference.save()
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}


const getallconference = async (req,res) => {
    await Conference.find({})
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    })
}


const getconference = async (req,res) => {
    await Conference.findById(req.params.id)
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    })
}

const getconferencespeaker = async (req,res) => {
    if(req.params && req.params.id){
        await Conference.findById(req.params.id)
        .populate('speakers', 'name')
        .then(data => {
            res.status(200).send({speakers: data.speakers});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        })
    }
}


const deleteconference = async(req,res) => {
    await Conference.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json('error: '+err));
}

module.exports = {
    createconference,
    getallconference,
    deleteconference,
    getconference,
    getconferencespeaker
}