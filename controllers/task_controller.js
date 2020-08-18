const Task = require('../models/task');

// adding task to database
module.exports.add = function(req, res){
    req.body.duedate = req.body.duedate.substring(0, 15);

    // adding colors to database
    if(req.body.category === 'personal'){
        req.body.color = '#0f4c75';
    }else if(req.body.category === 'work'){
        req.body.color = '#d54062';
    }else if(req.body.category === 'school'){
        req.body.color = '#6f4a8e';
    }else if(req.body.category === 'cleaning'){
        req.body.color = '#14b1ab';
    }else{
        req.body.color = '#3b6978';
    }

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
    if(typeof(ids) === 'undefined'){
        return res.redirect('back');
    }else if(typeof(ids) === 'string'){
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