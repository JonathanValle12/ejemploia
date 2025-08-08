import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {

    console.log("Holass");
    res.json({ status: 'OK!'})
})


export default app;