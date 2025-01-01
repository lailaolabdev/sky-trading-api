const {createTestimonialService, updateTestimonialService, getTestimonialService, getTestimonialsService, deleteTestimonialService} = require('../../services/testimonial');
const validateTestimonial = require('../../validators/testimonialValidator');
const updateTestimonialValidator = require('../../validators/updateTestimonialValidator');
const searchQuery = require('./helper');


const createTestimonial = async (req, res) => {
    try{
        const {isValid, message} = validateTestimonial(req);
        if (!isValid) {
            return res.status(400).json({message})
        }
        const testimonial = await createTestimonialService(req);
        return res.status(200).json(testimonial);
    }catch(error){
        console.log({error});
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

const updateTestimonial = async (req, res) => {
    try{
        const {isValid, message} = updateTestimonialValidator(req);
        if (!isValid) {
            return res.status(400).json({message})
        }
        const testimonial = await updateTestimonialService(req);
        return res.status(200).json(testimonial);
    }catch(error){
        console.log({error});
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

const getTestimonial = async (req, res) => {
    try{
        const testimonial = await getTestimonialService(req);
        return res.status(200).json(testimonial);
    }catch(error){
        console.log({error});
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

const getTestimonials = async (req, res) => {
    try{
        const query = searchQuery(req);
        const testimonials = await getTestimonialsService(req, query);
        return res.status(200).json(testimonials);
    }catch(error){
        console.log({error});
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

const deleteTestimonial = async (req, res) => {
    try{
        const testimonial = await deleteTestimonialService(req);
        if(!testimonial.data) {
            return res.status(400).json({message: testimonial.message});
        }
        return res.status(200).json(testimonial);
    }catch(error){
        console.log({error});
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

module.exports = {createTestimonial, updateTestimonial, getTestimonial, getTestimonials, deleteTestimonial};