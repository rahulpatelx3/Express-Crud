const express = require('express');
const router = express.Router();
const { getData,getDataById,setData,updateData,deleteData } = require('../controller/employeeController');

router.get("/",getData);
router.get("/:id",getDataById);
router.post("/",setData);
router.put("/:id",updateData);
router.delete("/:id",deleteData);
module.exports=router;