var express = require('express');
var Department = require('./db').models.Department;

var app = express();

module.exports = app;

app.get('/departments', function(req, res, next){
    Department.getDepartments()
        .then(function(departments){
            res.send(departments); 
        });
});