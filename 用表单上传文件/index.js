const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'yyy'})


const app = express()

app.get('/', (req,res)=>{
	res.send('hello')
})

app.post('/upload', upload.single('xxx'), (req,res)=>{
	res.set( 'Access-Control-Allow-Origin', 'http://null.jsbin.com')
	res.send(req.file.filename)
})
app.get('preview/:key', (req, res)=>{
	res.sendFile(`yyy/${req.params.key}`,{
		root: __dirname,
		headers:{
			'Content-Type':'image/jepg'
		},
	},(error)=>{
		res.status(404).send('file not found')
		console.log(error)
  })
})
app.listen(3000)