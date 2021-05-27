//const uuid = require("uuid/v4");

const place = require("../models/place");

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
  {
    id: "p2",
    title: "Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creator: "u2",
  },
];

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  const Place = await place.findById(placeId);
  res.json({ Place });
};

const getPlacesByUserId = async (req, res, next) => {
  const userID = req.params.uid;
  const places = await place.find({ creator: userID });
  res.json({ places });
};

const createPlace = async (req, res, next) => {
  const { title, description, address, creator } = req.body;

  const createPlace = new place({ title, description, address, creator });
  await createPlace.save();
  res.status(201).json({ place: createPlace });
};

const updatePlace = async (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.id;

  const updatePlace = await place.findById(placeId);

  updatePlace.title = title;
  updatePlace.description = description;

  await updatePlace.save();

  res.status(200).json({ place: updatePlace });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.id;
  const deletePlace = await place.findById(placeId);

  await deletePlace.remove();

  res.status(200).json({ place });
};

exports.getPlacesByUserId = getPlacesByUserId;
exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
