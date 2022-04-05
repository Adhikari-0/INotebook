const mongoose = require('mongoose');
const { Schema } = mongoose;


const NotesSchema = new Schema({

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'note'
  },

  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true,
    
  },
  tag:{
    type: String,
    default: 'general'
  },
  date:{
    type: Date,
    default: Date.now
  },
   
  });
  const User = mongoose.model('note',NotesSchema);
  module.exports = User;