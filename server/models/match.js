const { Schema, model } = require('mongoose');

const matchSchema = new Schema({
	sender: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	receiver: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	status: {
		type: Number,
		min: 0,
		max: 2,
	},
	messages:[{
		type: Schema.Types.ObjectId,
		ref: 'Message',
	}],
	
});


const Match = model('Match', matchSchema);

module.exports = Match;

