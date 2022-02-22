const express = require('express')
const PORT = 8080
const app = express()
app.get('/', (req, res) => {
    res.send("new 안녕하세요.")
})

app.listen(PORT, () => {
    console.log(`포트 ${PORT}번에서 실행 중..`)
})