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

// deleting task from database
module.exports.delete = function(req, res){
    let ids = req.body.task;
    if(typeof(ids) === 'string'){
        Task.findByIdAndDelete(ids, function(err, task){
            if(err){
                console.log('Error in finding and deleting task');
                return;
            }
            return res.redirect('back');
        });
    }else{
        for(let i of ids){
            Task.findByIdAndDelete(i, function(err, task){
                if(err){
                    return;
                }
            });
        }
        return res.redirect('back');
    }
}