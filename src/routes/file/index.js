const express = require("express");
const router = express.Router();

const {getPresignedUrl} = require("../../controllers/file");
const {checkAuthorization} = require("../../middlewares")

router.post("/presign-url", checkAuthorization, getPresignedUrl);

module.exports = router;