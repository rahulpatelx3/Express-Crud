const express = require('express');
const Employee = require('../model/employee');

const getData = async (req,res,next)=>{
  try{
    const data = await Employee.find();
    res.json(data);
  }
  catch(error){
    res.json(error);
  }
}

const getDataById = async (req,res,next)=>{
  try{
    const data = await Employee.findById(req.params.id);
    if(!data){
      res.status(404).json({message: `No data found with ID : ${req.params.id}`});
      return;
    }
    res.json(data);
  }
  catch(error){
    res.json(error);
  }
}

const setData = async (req,res,next)=>{
  try {
    const data = await Employee.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
}

const updateData = async (req,res,next)=>{
  try {
    const data = await Employee.updateOne({
      "_id": req.params.id
    },
    {
      $set : req.body
    })
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
}

const deleteData = async (req,res,next)=>{
  try {
    const data = await Employee.findByIdAndDelete(req.params.id);
    if(!data){
      res.status(404).json({message: `No data found with ID : ${req.params.id}`});
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
}

module.exports={ getData,getDataById,setData,updateData,deleteData };