var mongoose = require('mongoose');
var Schema = mongoose.Schema;

studentSchema = new Schema({
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

module.exports = mongoose.model('Student', studentSchema, 'students');