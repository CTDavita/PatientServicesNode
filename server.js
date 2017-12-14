var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/patientRoutes'); //importing route
console.log('Patient Service routes: ' + routes);
routes(app); //register the route

app.listen(port);

console.log('Patient Service RESTful API server started on: ' + port);