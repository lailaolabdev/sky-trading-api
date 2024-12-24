const {createArticleService, getArticlesService, getArticleService, updateArticleService, deleteArticleService} = require('../../services/article');
const validateArticle = require('../../validators/articleValidator');
const updateArticleValidator = require('../../validators/updateArticleValidator');
const searchQuery = require('./helper');

const createArticle = async (req, res) => {
    try{
        const {isValid, message} = validateArticle(req);
        if(!isValid) {
            return res.status(400).json({ message: message });
        }
        const articleInfo = await createArticleService(req.body);
        if(!articleInfo.data) {
            return res.status(400).json({ message: "CREATE_ARTICLE_FAIL" });
        }
        return res.status(200).json({ message: "CREATE_ARTICLE_SUCCESSFUL", data: articleInfo.data });
    }catch(error) {
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

const getArticles = async (req, res) => {
    try {
        const query = searchQuery(req);
        const articleInfo = await getArticlesService(req, query);
        if(!articleInfo.data) {
            return res.status(400).json({ message: "GET_ARTICLES_FAIL" });
        }
        return res.status(200).json({ message: "GET_ARTICLES_SUCCESSFUL", data: articleInfo.data });
    }catch(error) {
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

const getArticle = async (req, res) => {
    try {
        const articleInfo = await getArticleService(req);
        if(!articleInfo.data) {
            return res.status(400).json({ message: "GET_ARTICLE_FAIL" });
        }
        return res.status(200).json({ message: "GET_ARTICLE_SUCCESSFUL", data: articleInfo.data });
    }catch(error) {
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

const updateArticle = async (req, res) => {
    try {
        const {isValid, message} = updateArticleValidator(req);
        if(!isValid) {
            return res.status(400).json({ message: message });
        }
        const articleInfo = await updateArticleService(req);
        if(!articleInfo.data) {
            return res.status(400).json({ message: "UPDATE_ARTICLE_FAIL" });
        }
        return res.status(200).json({ message: "UPDATE_ARTICLE_SUCCESSFUL", data: articleInfo.data });
    }catch(error) {
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const articleInfo = await deleteArticleService(req);
        if(!articleInfo.data) {
            return res.status(400).json({ message: articleInfo.message });
        }
        return res.status(200).json({ message: "DELETE_ARTICLE_SUCCESSFUL", data: articleInfo.data });
    }catch(error) {
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

module.exports = { createArticle, getArticles, getArticle, updateArticle, deleteArticle };