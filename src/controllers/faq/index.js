const {createFaqService, getFaqsService, getFaqService, deleteFaqService, updateFaqService} = require("../../services/faq/index"); 
const validateFaqsData = require("../../validators/faqValidator");
const updateFaqValidator = require("../../validators/updateFAQsValidator");
const querySearch = require("./helper");
const createFaq = async (req, res) => {
    try{
        // console.log({body: req.body});
        const validFaq = validateFaqsData(req);
        if(!validFaq.isValid) {
            return res.status(400).json({message: validFaq.message})
        }
        const addFaq = await createFaqService(req);
        if(!addFaq.data) {
            return res.status(400).json({message: addFaq.message, data: null});
        }
        return res.status(200).json({message: addFaq.message, data: addFaq.data});
    }catch(error) {
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

const getFaqs = async (req, res) => {
    try{
        const query = querySearch(req);
        
        const faqs = await getFaqsService(req, query);
        if(!faqs.data) {
            return res.status(400).json({message: faqs.message, data: null});
        }
        return res.status(200).json({message: faqs.message, data: faqs.data});
    }catch(error) {
        console.log(error);
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

const getFaq = async (req, res) => {
    try{
        const faq = await getFaqService(req);
        if(!faq.data) {
            return res.status(400).json({message: faq.message});
        }
        return res.status(200).json({message: faq.message, data: faq.data});
    }catch(error) {
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }   
}

const deleteFaq = async (req, res) => {
    try{
        const deleteFaq = await deleteFaqService(req);
        if(!deleteFaq.data) {
            return res.status(400).json({message: deleteFaq.message});
        }
        return res.status(200).json({message: deleteFaq.message, data: deleteFaq.data});
    }catch(error) {
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

const updateFaq = async (req, res) => {
    try{
        const {isValid, message} = updateFaqValidator(req);
        if(!isValid) {
            return res.status(400).json({message: message});
        }
        const updateFaq = await updateFaqService(req);
        if(!updateFaq.data) {
            return res.status(400).json({message: updateFaq.message});
        }
        return res.status(200).json({message: updateFaq.message, data: updateFaq.data});
    }catch(error) {
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

module.exports = {createFaq, getFaqs, getFaq, deleteFaq, updateFaq};