const pLimit=require("p-limit");
const cloudinary=require("cloudinary").v2;
const Category = require("../models/category")


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
    
    });

    const allCategories=async(req,res)=>{
        try{
            const categoryList= await Category.find();
            res.send(categoryList);
    }
        catch(err){
        res.status(500).json({error:err,success:false})
        }
    }

    const createCategory=async(req,res)=>{
        const limit=pLimit(2);
        const imagesToUpload=req.body.images.map((image)=>{
            return limit(async()=>{
                const result=await cloudinary.uploader.upload(image);
                return result;
            })
        });
        const uploadStatus=await Promise.all(imagesToUpload);
        const imgUrl=uploadStatus.map((item)=>{
            return item.secure_url;
        });
        if(!uploadStatus){
            return res.status(500).json({
                error:"Images not uploaded",
                status:false
            });
        }
        let category=new Category({
            name:req.body.name,
            images:imgUrl,
            color:req.body.color
        });
        if(!category){
            res.status(500).json({error:err,success:false});
        }
        category=await category.save();
        res.status(201).json(category);
    }

    module.exports={
        allCategories,
        createCategory
    }