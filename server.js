const express = require('express');
const app = express()
const port = 3000
const path = require('path')
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public/')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.render('index.ejs');
})

app.get("/about",(req,res)=>{
  res.render('about.ejs');
})

app.get("/service",(req,res)=>{
  res.render('service.ejs');
})

app.get("/contact",(req,res)=>{
  res.render('contact.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})