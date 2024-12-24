const faqModel = require("../../models/faqModel");

const createFaqService = async (req) => {
    try{
        const faq = new faqModel(req.body);
        await faq.save();
        return {message: "CREATE_FAQ_SUCCESSFUL", data: faq._id};
    }catch(error) {
        return {message: "CREATE_FAQ_FAIL", data: null};
    }
}

const getFaqsService = async (req, query) => {
    try{
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 25;
        
        const faq = await faqModel.find(query).limit(limit).skip(skip).sort({createdAt: -1});
        return {message: "GET_FAQ_SUCCESSFUL", data: {totalFaqs: faq.length, faqs: faq}};
    }catch(error) {
        return {message: "GET_FAQ_FAIL", data: null};
    }
}

const getFaqService = async (req) => {
    try{
        const faq = await faqModel.findById(req.params.id);
        if(!faq) {
            return {message: "FAQ_NOT_FOUND", data: null};
        }
        return {message: "GET_FAQ_SUCCESSFUL", data: faq};
    }catch(error) {
        return {message: "GET_FAQ_FAIL", data: null};
    }
}


const deleteFaqService = async (req) => {
    try{
        const deletedFaq = await faqModel.findByIdAndDelete(req.params.id);
        if(!deletedFaq) {
            return {message: "FAQ_NOT_FOUND", data: null};
        }
        return {message: "DELETE_FAQ_SUCCESSFUL", data: deletedFaq._id};
    }catch(error) {
        return {message: "DELETE_FAQ_FAIL", data: null};
    }
}


const updateFaqService = async (req) => {
    try{
        req.body.updatedAt = new Date();
        const faqInfo = await faqModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!faqInfo) {
            return {message: "FAQ_NOT_FOUND", data: null};
        }
        return {message: "UPDATE_FAQ_SUCCESSFUL", data: faqInfo._id};
    }catch(error) {
        return {message: "UPDATE_FAQ_FAIL", data: null};
    }
}

module.exports = {createFaqService, getFaqsService, getFaqService, deleteFaqService, updateFaqService}