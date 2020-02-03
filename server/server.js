const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

/* importing routes */
const listRoutes = require('./routes/list.routes');

/* middleware */
app.use(helmet());
app.use(cors());

/* middleware - former body-parser:  przy odebraniu zapytania typu POST, będziemy mieć dostęp do danych w obiekcie req.body */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* compression */
app.use(compression());

/* api */
app.use('/api', listRoutes);

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

/* connecting server to MongoDB */
mongoose.connect(config.DB, {  useNewUrlParser: true, useUnifiedTopology: true } );
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    //loadDataToDb();
});

db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, () => {
    console.log('Server is running on port:', config.PORT);
});