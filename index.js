const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./db');
const router = require('./route/router');

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on PORT : ${PORT}`);
})