const express = require('express');
const app = express();
const path = require('path')
const routeHome = require('./routes/home')
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(3000, () => {
    console.log('Servidor Funcionando')
});
app.use('/', routeHome);