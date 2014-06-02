var mongoose = require('mongoose');
var Schema = mongoose.Schema;

questionSchema = new Schema({
    stub: Boolean,
    text: String,
    answers: [Answer],
    points: Number,
    partial: Boolean
});

module.exports = mongoose.model('Question', questionSchema, 'questions');
    
