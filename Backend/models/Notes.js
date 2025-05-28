const mongoose = require('mongoose');
const {Schema}= mongoose;
const NotesSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        default: 'General'
    },
    videoUrl:{
        type: String,
        default: 'General'
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('notes', NotesSchema);