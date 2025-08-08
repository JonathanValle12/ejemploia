import express from 'express';

const app = express();
app.use(express.json());

// OJO: sin prefijo /api aquí
app.get('/health', (req, res) => {
    console.log("Holass");

    res.json({ status: 'OK!' });
});

// aquí el resto de tus rutas
export default app;