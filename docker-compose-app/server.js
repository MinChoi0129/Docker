// Requiring modules
const express = require('express');
const redis = require('redis');

// Generating redis client with setting client:number = 0
const client = redis.createClient({
    host: "redis-server",
    port: 6379
})
client.set("number", 0)

// Generating express app at 8080
const app = express();
app.get('/', (req, res) => {
    res.send("안녕하세요.")
})

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        res.send("현재 숫자 :" + number)
        client.set("number", parseInt(number) + 1)
    })
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(PORT+"번에서 애플리케이션 실행 중..")
})