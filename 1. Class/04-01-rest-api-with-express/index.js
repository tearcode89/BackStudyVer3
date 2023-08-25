import express from 'express';

const app = express();
app.get('/', (req,res) => {
    res.send('안녕 또 나야 😜')
})

app.listen(3000, () => {
    console.log(`express 서버는 현재 3000번을 사용하고 있어요!!`)
})