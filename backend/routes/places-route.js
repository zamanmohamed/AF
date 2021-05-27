const express = require("express");
const router = express.Router();
const placesControllers = require("../controllers/place-controller");

router.get("/", (req, res, next) => {
  res.json({ DUMMY_PLACES });
});

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.post("/", placesControllers.createPlace);

router.patch("/:id", placesControllers.updatePlace);

router.delete("/:id", placesControllers.deletePlace);

module.exports = router;
