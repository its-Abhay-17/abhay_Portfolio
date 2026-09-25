const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express()
const port = process.env.PORT ||3000;
const path = require('path')
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const main = require('./models/init')
const contact = require('./models/contact-model')
const service = require('./models/service-model')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public/')))
main() 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.render('index.ejs');
})

app.get("/about",(req,res)=>{
  res.render('about.ejs');
})

app.get("/service",async(req,res)=>{
  let services = await service.find({});
  console.log("Services",services);
  res.render('service.ejs',{services});
})

app.get("/contact",(req,res)=>{
  res.render('contact.ejs');
})

app.post("/contact",async(req,res)=>{
  let {username,eMail,phoneNumber,msg} = req.body
  let addingNew = new contact({
    username:username,
    eMail:eMail,
    phoneNumber,
    msg:msg
  })

  await addingNew.save()
  console.log(addingNew)
  res.redirect('/home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})