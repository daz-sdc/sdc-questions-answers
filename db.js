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
    return Product_data.find({product_id:id},{product_id: 1, results:{$slice:Number(count)}})
}

exports.postQuestion = (body, name , id)=>{
  return Product_data.update({product_id:id},{$push:{results: {question_body: body, asker_name: name, question_id: Date.now() }}},{upsert:false})
}

exports.postAnswer = (body, name, email, id, photo) =>{
  return  Product_data.update({'results.question_id':id},
  {$set: {[`results.$.answers.${Date.now()}`]:{id: Date.now(), body:body, answer_name:name, date: new Date(), helpfulness: 0, reported: false, photos: photo, }}})

}

exports.makerQSHelpful = (id) =>{
  return Product_data.update({'results.question_id': id},
  {$inc: {'results.$.question_helpfulness':  1}})
}

exports.makeReportQ = (id) =>{
  return Product_data.update({'results.question_id':id},
  {$set: {'results.$.reported':  true}})
}

exports.reportAns = (id) =>{
  let target = `results.answers.${id}`
  let report = `results.$.answers.${id}.reported`
  return Product_data.updateOne({[target]:{$exists:true}},
  {$set: {[report]: true}})
}

exports.markAnsHelpful = (id) =>{
  let target = `results.answers.${id}`
  let report = `results.$.answers.${id}.helpfulness`
  return Product_data.updateOne({[target]:{$exists:true}},
    {$inc: {[report]:  1}})
}