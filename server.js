// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para obtener la predicción
app.get('/api/predict', (req, res) => {
    // Simulación de la predicción aleatoria (debes reemplazar esto con tu lógica real)
    const prediction = {
        btc: Math.random() > 0.5 ? 'Subirá' : 'Bajará',
        eth: Math.random() > 0.5 ? 'Subirá' : 'Bajará',
        sol: Math.random() > 0.5 ? 'Subirá' : 'Bajará'
    };

    res.json(prediction);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});