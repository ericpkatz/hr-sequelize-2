var Sequelize = require('sequelize');

var db = new Sequelize('sqlite:hr.db');

var Department = db.define('department', {
    name: Sequelize.STRING,
    priority: { type: Sequelize.INTEGER, defaultValue: 5 }
}, {
    classMethods: {
        getDepartments: function(){
            return this.findAll({ order: 'priority'});
        }
    }
});

var _conn;
module.exports = {
    connect: function(){
        if(_conn)
            return _conn;
        _conn = db.authenticate()
                    .then(function(){
                        return db;
                    });
        return _conn;
    }, 
    models: {
        Department: Department
    }
};