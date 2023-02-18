const { Schema } = require('mongoose');

const songQuestionSchema = new Schema({
	one: { type: String},
	two: { type: String},
	three: { type: String},
	four: { type: String},
	five: { type: String},
	six: { type: String},
	seven: { type: String},
	eight: { type: String},
});

const playlistQuestionSchema = new Schema({
	one: { type: Number},
	two: { type: Number},
	three: { type: Number}
})

module.exports = { playlistQuestionSchema, songQuestionSchema };