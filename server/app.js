/**
 * multer 文件上传
 * sqliter 数据库
 * uuid 唯一标识码
 * SnowFlake IdGenerator
 */
const express = require('express')
const multer = require('multer')
const app = express()

const port = 8080

// 跨域请求开放
app.use((req, res, next) => {
    // 设置跨域请求的域名，代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', "*")
    // 允许的header类型
    res.header("Access-Control-Allow-Headers", "*")
    // 跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, POST, GET, OPTIONS")
    if(req.method == "OPTIONS") res.sendStatus(200) //让options尝试请求快速结束
    else next()
})

app.use(express.json())

// 上传
const update = multer({
    dest: "./public/upload/temp"
})
app.use(update.any)

app.get('/', (req, res) => {
    res.send("hello world")
})


app.listen(port, () => {
    console.log(`启动成功：http://localhost:${port}`)
})