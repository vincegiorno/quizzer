var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    exports.Answer = new Schema({
        text: String,
        isCorrect: Boolean
    });
    
    exports.Question = new Schema({
        stub: Boolean,
        text: String,
        answers: [Answer],
        points: Number,
        partial: Boolean
    });
    
    exports.Test = new Schema({
        _id: {
            type: Number,
            index: {unique: true}
        },
        name: {
            type: String,
            required: true
        },
        questions: [Question]
    });
    