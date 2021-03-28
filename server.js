const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/bot-twitter'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/bot-twitter/index.js');
    res.sendFile(__dirname + '/bot-twitter/index.html');
});

app.listen(PORT, () =>{
    console.log('Servidor iniciado na porta ' +PORT);
})