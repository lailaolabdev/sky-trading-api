const testimonialModel = require("../../models/testimonialModel");

const createTestimonialService = async (req) => {
    try{
        const testimonial = new testimonialModel(req.body);
        const savedTestimonial = await testimonial.save();
        return {message: "CREATE_TESTIMONIAL_SUCCESSFUL", data: savedTestimonial._id}
    }catch(error){
        console.log({error});
        return {message: "CREATE_TESTIMONIAL_FAIL", data: null}
    }
}

const updateTestimonialService = async (req) => {
    try{
        req.body.updatedAt = new Date();
        const testimonial = await testimonialModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return {message: "UPDATE_TESTIMONIAL_SUCCESSFUL", data: testimonial._id}
    }catch(error){
        console.log({error});
        return {message: "UPDATE_TESTIMONIAL_FAIL", data: null}
    }
}


const getTestimonialService = async (req) => {
    try{
        const testimonial = await testimonialModel.findById(req.params.id);
        return {message: "GET_TESTIMONIAL_SUCCESSFUL", data: testimonial}
    }catch(error){
        console.log({error});
        return {message: "GET_TESTIMONIAL_FAIL", data: null}
    }
}

const getTestimonialsService = async (req, query) => {
    try{
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 25;

        const totalTestimonials = await testimonialModel.countDocuments(query);

        const testimonials = await testimonialModel.find(query).skip(skip).limit(limit).sort({createdAt: -1});
        return {message: "GET_TESTIMONIALS_SUCCESSFUL", data: {totalTestimonials, testimonials}}
    }catch(error){
        console.log({error});
        return {message: "GET_TESTIMONIALS_FAIL", data: null}
    }
}

const deleteTestimonialService = async (req) => {
    try{
        const testimonial = await testimonialModel.findByIdAndDelete(req.params.id);
        if(!testimonial){
            return {message: "TESTIMONIAL_NOT_FOUND", data: null}
        }
        return {message: "DELETE_TESTIMONIAL_SUCCESSFUL", data: testimonial._id}
    }catch(error){
        console.log({error});
        return {message: "DELETE_TESTIMONIAL_FAIL", data: null}
    }
}

module.exports = {createTestimonialService, updateTestimonialService, getTestimonialService, getTestimonialsService, deleteTestimonialService}