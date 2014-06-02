var mongoose = require('mongoose');
var Schema = mongoose.Schema;

answerSchema = new Schema({
    text: String,
    isCorrect: Boolean
});
    
module.exports = mongoose.model('Answer', answerSchema, 'answers');

