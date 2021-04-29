var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var useRoutes = require('./app/routes/user.routes');
//const port = 5000;
dotenv.config();
const port = process.env.PORT;
var cors = require('cors');
var app = express();

var database = require('./config/database.config');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', useRoutes);
database.mongoose;
app.listen(port, () => {
    console.log('Server started on ' + port);
})