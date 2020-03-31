const express = require('express');
const router = express.Router();
const musicController = require('../controller/musicController');
const upload = require('../db/multer');
router.get("/", musicController.getAllMusic)
router.post("/", upload.upload.single("music"),musicController.addNewMusic);
router.delete("/:musicId", musicController.deleteMusic);
module.exports = router;