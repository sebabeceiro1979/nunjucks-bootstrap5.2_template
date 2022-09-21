const express = require("express");
const router = express.Router();

const pagesController = require("./controllers/pagesController");

router.get("/", pagesController.showHome);
router.get("/link1", pagesController.showLink1);
router.get("/link2", pagesController.showLink2);
router.get("/about", pagesController.showAboutUs);
router.get("/contact", pagesController.showContact);

module.exports = router;