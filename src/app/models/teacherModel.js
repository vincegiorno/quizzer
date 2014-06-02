var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.Class = new Schema({
    name: String,
    members: [{
        type: Number,
        ref: 'Student'
    }]
});

exports.Teacher = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tests: [{
            type: String,
            ref: 'Test'
    }],
    students: [{
            type: Number,
            ref: 'Student'
    }],
    classes: [{
            type: Schema.ObjectId,
            ref: 'Class'
    }]
});
