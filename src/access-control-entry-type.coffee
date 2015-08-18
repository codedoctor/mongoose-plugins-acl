_ = require 'underscore'
mongoose = require 'mongoose'

AccessControlEntryType = 
  userId: 
    type: mongoose.Schema.ObjectId
    required: true
  roles: 
    type: [String]
    default: -> []
    required: true
