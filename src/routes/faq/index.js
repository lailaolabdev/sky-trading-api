const router = require("express").Router();
const {checkAuthorization} = require("../../middlewares");

const {createFaq, getFaqs, getFaq, deleteFaq, updateFaq} = require("../../controllers/faq")


router.post("/", checkAuthorization, createFaq);
router.get("/", checkAuthorization, getFaqs);
router.get("/faq-id/:id", checkAuthorization, getFaq);
router.delete("/:id", checkAuthorization, deleteFaq);
router.put("/:id", checkAuthorization, updateFaq);

module.exports = router;