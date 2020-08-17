const Task = require('../models/task');

// render home page
module.exports.home = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error in finding tasks');
            return;
        }
        return res.render('home', {
            title: 'My To-Do App',
            tasks: tasks
        });
    });
}