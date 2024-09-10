// Importar Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Usar el puerto 5000 por defecto o el puerto asignado

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.send('Bienvenido a la página de inicio');
});

// Ruta para mostrar clientes
app.get('/clientes', (req, res) => {
    const clientes = [
        { id: 1, nombre: 'Cliente 1', email: 'cliente1@mail.com' },
        { id: 2, nombre: 'Cliente 2', email: 'cliente2@mail.com' },
        { id: 3, nombre: 'Cliente 3', email: 'cliente3@mail.com' }
    ];
    res.json(clientes); // Devolver los clientes en formato JSON
});

// Ruta para mostrar productos
app.get('/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', precio: 300 }
    ];
    res.json(productos); // Devolver los productos en formato JSON
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
