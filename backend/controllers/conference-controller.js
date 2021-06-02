const Conference = require("../models/conference");

const createConference = async (req, res, next) => {
  const { title, speaker, date, discription } = req.body;

  const createConference = new Conference({
    title,
    speaker,
    date,
    discription,
    type: "pending",
  });
  await createConference.save();
  res.status(201).json({ place: createConference });
};

const getAllConference = async (req, res, next) => {
  const con = await Conference.find({});
  res.json(con);
};

const getPendingConference = async (req, res, next) => {
  const con = await Conference.find({ type: "pending" });
  res.json(con);
};

const getApprovedConference = async (req, res, next) => {
  const con = await Conference.find({ type: "approved" });
  res.json(con);
};

const updateApprove = async (req, res, next) => {
  const { type } = req.body;
  const placeId = req.params.id;

  const updateConference = await Conference.findById(placeId);

  updateConference.type = type;

  await updateConference.save();

  res.status(200).json({ conference: updateConference });
};

const getConferenceById = async (req, res, next) => {
  const Id = req.params.id;
  const Place = await Conference.findById(Id);
  res.json(Place);
};

exports.getConferenceById = getConferenceById;
exports.createConference = createConference;
exports.getAllConference = getAllConference;
exports.getPendingConference = getPendingConference;
exports.getApprovedConference = getApprovedConference;
exports.updateApprove = updateApprove;
