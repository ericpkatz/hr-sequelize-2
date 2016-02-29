var db = require('../db');
var Department = db.models.Department;
module.exports = function(){
       return db.connect() 
        .then(function(db){
            return db.sync({force: true});
        })
        .then(function(){
            return Department.create({ name: 'Accounting', priority: 2});
        })
        .then(function(){
            return Department.create({ name: 'Engineering', priority: 1});
        })
        .then(function(){
            return Department.create({ name: 'HR', priority: 3});
        });
};