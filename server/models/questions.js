const { Schema } = require('mongoose');

const songQuestionSchema = new Schema({

	songquestion1: {
		artist: String,
		track: String,
		songClip: String, 
	},
	songquestion2: {
		artist: String,
		track: String,
		songClip: String, 
	},
	songquestion3: {
		artist: String,
		track: String,
		songClip: String, 
	},
	songquestion4: {
		artist: String,
		track: String,
		songClip: String, 
	},
	songquestion5: {
		artist: String,
		track: String,
		songClip: String, 
	},
	songquestion6: {
		artist: String,
		track: String,
		songClip: String, 
	},
	songquestion7: {
		artist: String,
		track: String,
		songClip: String, 
	},


});

const playlistQuestionSchema = new Schema({
	
	playlistquestion1: {
		type: Number, 
	},
	playlistquestion2: {
		type: Number, 
	},
	playlistquestion3: {
		type: Number, 
	},
});

module.exports = { playlistQuestionSchema, songQuestionSchema };