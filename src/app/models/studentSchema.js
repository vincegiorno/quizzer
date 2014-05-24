var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.Score = new Schema({
    testId: {
        type: String,
        ref: 'Test'
    },
    results: [Number],
    points: Number,
    percentage: Number
});
    
exports.Student = new Schema({
    _id: {
        type: Number,
        index: {unique: true}
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    scores:  [Score],
    canTakeTests: [Number]
});
