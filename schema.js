/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
// mongoose.set('debug', true);


const productSchema = new mongoose.Schema({
  product_id: Number,
  results: [
    {question_id: {type: Number},
      question_body: {type: String, reuqire: true},
      question_date: {type: Date, "default": new Date()},
      asker_name: {type:String, require: true},
      question_helpfulness: {type: Number, "default" : 0},
      reported: {type: Boolean, "default" : false},
      answers:  {type: mongoose.Schema.Types.Mixed, "default": {},
      id: {
        id: {type: Number, require:true},
        body:{type: String,require:true},
        date:{type: Date, "default": new Date()},
        answer_name: {type:String, require: true},
        helpfulness:{type: Number, 'default': 0},
        reported:{type:Boolean, 'default': false},
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
