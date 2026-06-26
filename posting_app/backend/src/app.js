
const express = require('express')
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model')
const upload =multer({storage : multer.memoryStorage()});
const cors = require("cors");
const app  = express()


app.use(cors())
app.use(express.json())


app.post('/create-post' , upload.single("image") , async (req ,res)=>{

  const result = await uploadFile(req.file.buffer)
  const post = await postModel.create({
    image:result.url,
    caption:req.body.caption
  })
  res.status(201).json({
    message:"file successfully uploaded and url generated",
    post:post
  })
});


app.get('/posts' , async(req,res)=>{
  const posts = await postModel.find();

  
  res.status(200).json({
    message:"posts fetched sucessfully",
    posts:posts
  })
})
module.exports = app;