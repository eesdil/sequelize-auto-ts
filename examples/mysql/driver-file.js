"use strict";
var models = require('./sequelize-models');
models.initialize('test001', 'dbuser', 'password', {
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
var findall = models.UsersModel.findAll();
findall
    .catch(function (error) {
    throw error;
})
    .done(function (users) {
    console.log('Returned ' + users.length + ' users.');
    users.forEach(function (user) {
        console.log(user.UserName + ' (' + user.UserID + ')');
    });
});