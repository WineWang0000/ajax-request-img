const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'yyy'})


const app = express()

app.get('/', (req,res)=>{
	res.send('hello')
})

app.post('/upload', upload.single('xxx'), (req,res)=>{
	console.log(req.file)
	res.send('看我')
})
app.listen(3000)