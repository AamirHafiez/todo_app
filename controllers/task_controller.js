const Task = require('../models/task');

// adding task to database
module.exports.add = function(req, res){
    req.body.duedate = req.body.duedate.substring(0, 15);
    Task.create(req.body, function(err, task){
        if(err){
            console.log('Error in creating task in database');
            return;
        }
        res.redirect('back');
    });
}