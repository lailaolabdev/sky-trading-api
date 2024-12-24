const {createTestimonial, updateTestimonial, getTestimonial, getTestimonials, deleteTestimonial} = require('../../controllers/testimonial');
const express = require("express");
const router = express.Router();

const {checkAuthorization} = require("../../middlewares")

router.post("/", checkAuthorization, createTestimonial);    
router.put("/:id", checkAuthorization, updateTestimonial);
router.get("/testimonial-id/:id", checkAuthorization, getTestimonial);
router.get("/", checkAuthorization, getTestimonials);
router.delete("/:id", checkAuthorization, deleteTestimonial);

module.exports = router;