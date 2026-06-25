const express = require('express');

const app = express();  
app.use(express.json());

let notes=[];

app.post('/notes' , (req , res)=>{ 
  console.log(req.body);
  notes.push(req.body);
  res.status(201).json({
    message: "Note sucessfuly created"
  })
})



app.get('/notes' ,(req,res)=>{
  res.status(200).json({
    message:"Notes fetched successfully",
    notes: notes
  })
})


app.delete('/notes/:id' , (req,res)=>{
    const index= req.params.id;
    notes.splice(index , 1);
    res.status(200).json({
      "message": "Note deleted successfully"
    })
  })

module.exports = app;