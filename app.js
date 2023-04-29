const express = require('express');
const catalogRouter = require('./routes/catalog')

const server = express();

server.listen(3000);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views')

server.use(express.static(__dirname + '/public'));

server.use('/catalog', catalogRouter);