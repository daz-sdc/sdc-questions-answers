/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
mongoose.set('debug', true);


const productSchema = new mongoose.Schema({
  product_id: Number,
  results: [
    {question_id: {type:Number, require:true},
      question_body: {type: String, reuqire: true},
      question_data: {type: Date, "default": new Date()},
      asker_name: {type:String, require: true},
      question_helpfulness: {type: Number, "default" : 0},
      reported: {type: Boolean, "default" : false},
      answers:  {type: mongoose.Schema.Types.Mixed, "default": {},
      id: {
        id: {type: Number, require:true},
        body:{type: String,require:true},
        data:{type: Number, require: true},
        answer_name: {type:String, require: true},
        helpfulness:{type: Number},
        photos: [{type : Array , "default" : [] }]
      }
    }
    }

  ]

}, { minimize: false })

const Product_data = mongoose.model('Product_data', productSchema, 'product_data')
// const ProductETL = mongoose.model('productcopy',productETLSchema, 'productcopy')


module.exports = {
    Product_data
}

// const productSchema = new mongoose.Schema({
//   product_id: Number,
//   results: [
//     {question_id: {type:Number, require:true},
//       question_body: {type: String, reuqire: true},
//       question_data: {type: Number, require: true},
//       asker_name: {type:String, require: true},
//       question_helpfulness: {type: Number, require: false},
//       reported: {type: Number, require: true},
//       answers: {answers_id:{
//         answer_id: {type: Number, require:true},
//         body:{type: String,require:true},
//         data:{type: Number, require: true},
//         answer_name: {type:String, require: true},
//         helpfulness:{type: Number},
//         photos: [{type : Array , "default" : [] }]
//       }}
//   }
//   ]

// })

// const questionSchema= new mongoose.Schema({
//   _id: String,
//   id: Number,
//   product_id: {type: Number, require: true},
//   body: {type: String, require: true},
//   date_written: {type: Date, require: true},
//   asker_name: {type: String, require: true},
//   asker_email: {type:String, require: true},
//   reported: Boolean,
//   helpful: Boolean,
//   answers: [{type : Array , "default" : [] }]
// })

// const answersSchema = new mongoose.Schema({
//   _id: String,
//   id: Number,
//   question_id: {type: Number, require: true},
//   body: {type:String, require: true},
//   date_written: {type:Date, require: true},
//   answerer_name: {type: String, require: true},
//   answerer_email: {type:String, require: true},
//   reported: Number,
//   helpful: Number,
//   // photos: [{type : Array , "default" : [] }]
// })

// const photosSchema = new mongoose.Schema({
//   _id:String,
//   answer_id: {type: Number, require: true},
//   url: {type: String, require: true},
// })

// const Product = mongoose.model('product',productSchema)
// const Question = mongoose.model('question', questionSchema)
// const Answers = mongoose.model('answers', answersSchema)
// const Photos = mongoose.model('photos', photosSchema)


// module.exports = {
//   Product,
//   Question,
//   Answers,
//   Photos
// }
