const express = require('express')
const PORT = 8080
const app = express()
app.get('/', (req, res) => {
    res.send("hi염.")
})

app.listen(PORT, () => {
    console.log(`포트 ${PORT}번에서 실행 중..`)
})