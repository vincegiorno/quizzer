var mongoose = require('mongoose');
var Schema = mongoose.Schema;

scoreSchema = new Schema({
    testId: {
        type: String,
        ref: 'Test'
    },
    results: [Number],
    points: Number,
    percentage: Number
});

module.exports = mongoose.model( 'Score', scoreSchema, 'scores');
    

