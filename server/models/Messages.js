const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    messageId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    text: {
        type: String,
        required: true,
        maxlength: 150
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        get: value => value.toDateString()
    }, 
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
})

module.exports = messageSchema;