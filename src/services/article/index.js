const articleModel = require("../../models/articalModel");

const createArticleService = async (req) => {
    try{
        const article = await articleModel.create(req);
        if(!article) {
            return {message: "CREATE_ARTICLE_FAIL", data: null};
        }
        return {message: "CREATE_ARTICLE_SUCCESSFUL", data: article._id};
    }catch(error) {
        return {message: "CREATE_ARTICLE_FAIL", data: null};
    }
};

const getArticlesService = async (req, query) => {
    try{
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 25;


        const articles = await articleModel.find(query).sort({createdAt: -1}).limit(limit).skip(skip).exec();
        const articlesCount = await articleModel.find(query).countDocuments();
        return {message: "GET_ARTICLES_SUCCESSFUL", data: { totalArticles: articlesCount,articles}};
    }catch(error) {
        return {message: "GET_ARTICLES_FAIL", data: null};
    }
};

const getArticleService = async (req) => {
    try{
        const article = await articleModel.findById(req.params.id);
        if(!article) {
            return {message: "ARTICLE_NOT_FOUND", data: null};
        }
        return {message: "GET_ARTICLE_SUCCESSFUL", data: article};
    }catch(error) {
        return {message: "GET_ARTICLE_FAIL", data: null};
    }
};

const updateArticleService = async (req) => {
    try{
        req.body.updatedAt = new Date();
        const article = await articleModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!article) {
            return {message: "ARTICLE_NOT_FOUND", data: null};
        }
        return {message: "UPDATE_ARTICLE_SUCCESSFUL", data: article._id};
    }catch(error) {
        return {message: "UPDATE_ARTICLE_FAIL", data: null};
    }
};

const deleteArticleService = async (req) => {
    try{
        const deletedArticle = await articleModel.findByIdAndDelete(req.params.id);
        console.log({deletedArticle});
        if(!deletedArticle) {
            return {message: "ARTICLE_NOT_FOUND", data: null};
        }
        return {message: "DELETE_ARTICLE_SUCCESSFUL", data: deletedArticle._id};
    }catch(error) {
        return {message: "DELETE_ARTICLE_FAIL", data: null};
    }
};

module.exports = { createArticleService, getArticlesService, getArticleService, updateArticleService, deleteArticleService };