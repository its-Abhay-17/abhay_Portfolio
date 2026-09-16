const express = require('express');
const app = express()
const port = 3000
const path = require('path')
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public/')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})