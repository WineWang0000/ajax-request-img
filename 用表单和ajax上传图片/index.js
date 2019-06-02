const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'yyy'})

const app = express()
app.options('./upload', cors())

app.get('/', (req,res)=>{
	res.send('hello')
})

app.post('/upload', upload.single('xxx'), (req,res)=>{
	res.set( 'Access-Control-Allow-Origin', '*')
	res.send(req.file.filename)
})

app.get('/preview/:key', (req, res)=>{
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
var post = process.env.PORT || 3000
app.listen(post)