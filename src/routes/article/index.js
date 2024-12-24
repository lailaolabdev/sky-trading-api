const {createArticle, updateArticle, getArticle, getArticles, deleteArticle} = require("../../controllers/article");
const {checkAuthorization} = require("../../middlewares");
const express = require("express");
const router = express.Router();

router.post("/", checkAuthorization, createArticle);
router.put("/:id", checkAuthorization, updateArticle);
router.get("/article-id/:id", checkAuthorization, getArticle);
router.get("/", checkAuthorization, getArticles);
router.delete("/:id", checkAuthorization, deleteArticle);

module.exports = router;