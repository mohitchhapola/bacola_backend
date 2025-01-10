const express=require("express")
const router=express.Router();
const {allCategories,createCategory}=require("../controllers/Category")




router.get("/",allCategories)

router.post('/create', createCategory);

    module.exports = router;
