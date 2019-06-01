## 描述ajax上传图片过程
- mkdir ajax-img， touch index.js(名字自定义)
- npm  i express multer cors(自动生成json文件)
- index.js中输入以下代码
```
const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'yyy'})

const app = express()

app.get('/', (req,res)=>{
  res.send('hello')
})

app.post('/upload', upload.single('imgNewName'), (req,res)=>{ 
  res.send('看我') //响应“看我”
})
app.listen(3000) //端口
```
upload是路径，可自定义，imgNewName是图片名，非原名，yyy代表将请求到的图片放到yyy文件夹。可自定义。这样就能获取用户上传的图片。这一串字符就是用户上传的图片。
- 请求这个协议，就得到“看我”这个响应，可用jsbin等试一下。
## 爱心提示：
在我安装这三个工具的时候出现这样的提示，开始我以为是报错，就搜搜，最后发现这样的解释：大概是说，它们是Mac专属，Window和Linux安装就会这样提示，其实你已经安装成功，表害怕。
```
npm WARN ajax-img@1.0.0 No description
npm WARN ajax-img@1.0.0 No repository field.

+ express@4.17.1
+ multer@1.4.1
+ cors@2.8.5
updated 3 packages and audited 167 packages in 4.756s
found 0 vulnerabilities

```
## 这三是啥
multer 是express官方推荐的文件上传中间件，express是一款快速而极简的 Node.js Web框架。cors应该都知道。