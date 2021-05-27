const express = require("express");
const router = express.Router();
const adminsControllers = require("../controllers/admin-controller");

router.post("/signup", adminsControllers.signup);
router.post("/login", adminsControllers.login);
router.patch("/:id", adminsControllers.updateAdmin);
router.delete("/:id", adminsControllers.deleteAdmin);

module.exports = router;
