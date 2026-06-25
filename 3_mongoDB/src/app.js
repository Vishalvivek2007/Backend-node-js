const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());


/*

GET 
POST
DELETE
*/

app.post("/notes" , async (req , res)=>{
  const data = req.body;
  await noteModel.create({
    title:data.title ,
    description: data.description
  
});
res.status(200).json({
  message:"Note created successfully"
})
})
// find()  => gives [{},{},{}] or []
// findOne() => gives {} or NULL

app.get('/notes' , async (req, res)=>{
  const data = await noteModel.find();
  res.status(200).json({
    message:"Notes fetched successfully",
    data:data
  })
})

app.delete('/notes/:id' , async (req,res)=>{
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    "message": "Note deleted successfully"
  })
})

app.patch('/notes/:id' , async (req,res)=>{
  const id = req.params.id;
  const data = req.body;
  await noteModel.findByIdAndUpdate(id , data);
  res.status(200).json({
    "message": "Note updated successfully"
  })
})


module.exports = app;

