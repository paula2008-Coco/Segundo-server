const express = require('express'); // Cargar la librería express
const app = express(); // Crear la aplicación

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Arrancar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
