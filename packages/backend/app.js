const express = require('express');
const router = require('./router');
const { errorsHandler } = require('./middleware');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router); // http://127.0.0.1:5000/api/
app.use(errorsHandler.errorHandler);
module.exports = app;
