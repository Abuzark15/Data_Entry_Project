const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./db-config/dbconfig')
const employeeRoute = require('./route/user.route')
const searchRoute = require('./route/searchData.route');
const createRoute = require('./route/create.route');
const deleteRoute = require('./route/delete.route');
const updateRoute = require('./route/update.route');
const loginroute = require('./route/login.route');


app.use(bodyParser.json());
app.use(cors());


app.use("/api/auth/login" , loginroute);
app.use("/api/getemployee", employeeRoute);
app.use("/api",searchRoute);
app.use("/api/createEmployee", createRoute);
app.use("/api/deleteEmployee", deleteRoute);
app.use("/api/updateEmployee", updateRoute);


app.listen(4001, () =>{
    console.log("server is up and running");
    
});


connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
});