const mongoose = require('mongoose');

const employee = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  position: {
    type: String,
    require: true
  },
  office: {
    type: String,
    require: true
  },
  salary: {
    type: Number,
    require: false
  }
});
module.exports=mongoose.model('Employee',employee);