/* eslint-disable no-undef */
const express = require('express');
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const db = require('./db.js')

app.use(express.json());

app.get('/',(req,res)=>{
  res.status(200).send('success')
})

app.get('/qa', (req, res)=>{
    let count;
    let product_id = parseInt(req.query.product_id)
    if (req.query.count === undefined){
      count = 2
    } else{
      count = parseInt(req.query.count)
    }
    if (isNaN(product_id) || isNaN(count)){
      res.status(500).send('invaild input')
    } else{
      db.getAll(product_id, count)
      .then((response)=>{
        res.status(200).send(response[0])
      })
      .catch((err)=>{
        res.status(500).send(err)
      })

    }
})

app.post('/qa', (req,res)=>{
    // console.log(req.body)
    let body = req.body.body;
    let name = req.body.name;
    let id = req.body.product_id;
    console.log(new Date())

    // console.log(body, name, id)
    db.postQuestion(body, name , id)
    .then((response)=>{
      res.status(200).send(response)

    })
    .catch((err)=>{
      res.status(500).send(err)
    })

})

app.post('/qa/:id/answers',(req,res)=>{
  console.log(req.params)
  let body = req.body.body;
  let name = req.body.name;
  let email = req.body.email;
  let id = req.params.id;
  let photo = req.body.photo || []

  db.postAnswer(body, name, email, id, photo)
    .then((response)=>{
      res.status(200).send(response)
    })
    .catch((err)=>{
      res.status(500).send(err)
    })

})

app.put('/qa/:id/helpful', (req,res)=>{
  console.log(req.params.id)
  let id = req.params.id
  db.makerQSHelpful(id)
  .then((response)=>{
    res.status(200).send(response)
  })
  .catch((err)=>{
    res.status(500).send(err)
  })
})

app.put('/qa/:id/report', (req, res)=>{
  let id = req.params.id
  db.makeReportQ(id)
  .then((response)=>{
    res.status(200).send(response)
  })
  .catch((err)=>{
    res.status(500).send(err)
  })
})

app.put('/qa/answers/:id/reported', (req, res)=>{
  let id = req.params.id
  db.reportAns(id)
  .then((response)=>{
    res.status(200).send(response)
  })
  .catch((err)=>{
    res.status(500).send(err)
    console.log(err)
  })
})

app.put('/qa/answers/:id/helpfulness', (req, res)=>{
  let id = req.params.id
  db.markAnsHelpful(id)
  .then((response)=>{
    res.status(200).send(response)
  })
  .catch((err)=>{
    res.status(500).send(err)
    console.log(err)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




module.exports = app;