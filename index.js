const express = require('express')
const app = express()
const bp = require("body-parser")
app.set('view engine', 'ejs')
app.use(bp.urlencoded({extended:true}))
app.use(express.static("public"))
app.listen(process.env.PORT||3000, () => {
    console.log('On it...')
})
app.get('/', (req,res) => {
    res.render('index')
})