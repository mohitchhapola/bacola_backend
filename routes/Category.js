const express=require("express")
const router=express.Router();
const {allCategories,createCategory}=require("../controller/Category")




router.get("/",allCategories)

router.post('/create', createCategory);

    module.exports = router;
