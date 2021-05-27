const express = require("express");
const router = express.Router();
const conferenceControllers = require("../controllers/conference-controller");

router.post("/", conferenceControllers.createConference);
router.get("/", conferenceControllers.getAllConference);
router.get("/pending", conferenceControllers.getPendingConference);
router.get("/approved", conferenceControllers.getApprovedConference);
router.patch("/:id", conferenceControllers.updateApprove);

module.exports = router;
