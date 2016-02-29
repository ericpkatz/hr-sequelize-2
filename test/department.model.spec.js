var expect = require('chai').expect;
var db = require('../db');
var Department = db.models.Department;
var seed = require('./seed');
describe('Department', function(){
    
    beforeEach(function(done){
        seed()
            .then(function(){
                done();
            });
    });
   it('exists', function(){
       expect(Department).to.be.ok;
   }); 
   
   describe('getDepartments', function(){
       var departments;
       beforeEach(function(done){
           Department.getDepartments()
            .then(function(_departments){
                departments = _departments;
                done(); 
            });
       });
       it('there are 3 departments', function(){
           expect(departments.length).to.equal(3);
       });
       it('the top department is engineering', function(){
           expect(departments[0].name).to.equal('Engineering');
       });
   });
});