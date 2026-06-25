const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();
app.listen(3003, ()=>{
  console.log("Server sucessfully started on post 3003");
})