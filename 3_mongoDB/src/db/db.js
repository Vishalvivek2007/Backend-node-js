const mongoose = require("mongoose");

async function connectDB(){
  await mongoose.connect("mongodb+srv://main:M25bLvv78XVdGnmq@cluster0.amtan7r.mongodb.net/NotesDB");
  
  console.log("Sucessfully connected to the database");
}



module.exports=connectDB;