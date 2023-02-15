const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    text: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        get: value => value.toDateString()
    }, 
},
{
    toJSON: {
        getters: true
    },
    id: false,
})

const Message = model('Message', messageSchema);


module.exports = Message;