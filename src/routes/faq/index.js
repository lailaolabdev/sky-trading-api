const router = require("express").Router();
const {checkAuthorization} = require("../../middlewares");

const {createFaq, getFaqs, getFaq, deleteFaq, updateFaq} = require("../../controllers/faq")


router.post("/", checkAuthorization, createFaq);
router.get("/", getFaqs);
router.get("/faq-id/:id", getFaq);
router.delete("/:id", checkAuthorization, deleteFaq);
router.put("/:id", checkAuthorization, updateFaq);

module.exports = router;