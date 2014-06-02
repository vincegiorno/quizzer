var mongoose = require('mongoose');
var Schema = mongoose.Schema;

testSchema = new Schema({
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

module.exports = mongoose.model('Test', testSchema, 'tests');
    