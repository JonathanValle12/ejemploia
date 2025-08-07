import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK!'})
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Backend corriendo en http://localhost:${port}`)
})
