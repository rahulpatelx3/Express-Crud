const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl,(err)=>{
  if(err){
    console.error('Error in DB connection : '+JSON.stringify(err,undefined,2));
  }else{
    console.log('DB connected successfully.');
  }
});
module.exports=mongoose;