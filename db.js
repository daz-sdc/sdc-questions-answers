/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const {Product_data} = require('./schema.js')

const db = mongoose.connect('mongodb://localhost/SDC', () =>{
  console.log('Mongoose connected')
})
.catch((err)=>{
  console.log(err)
})



exports.getAll = (id, count)=>{
    return Product_data.find({product_id:id},{product_id:1, results:{$slice:Number(count)}})
}

exports.postQuestion = (body, name , id)=>{
  return Product_data.update({product_id:id},{$push:{results: {question_body: body, asker_name: name}}},{upsert:false})

}