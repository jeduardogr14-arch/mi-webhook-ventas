const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log("Datos recibidos:", req.body);
    res.status(200).send("¡Recibido con éxito!");
});

app.listen(3000, () => {
    console.log("Servidor listo en el puerto 3000");
});
