mongoose = require 'mongoose'
mongoosePluginsAcl = require 'mongoose-plugins-acl'


module.exports = SampleSchema = new mongoose.Schema
    name:
      type: String
      default: ''
  ,
    strict: true
    collection: 'sample'

SampleSchema.plugin mongoosePluginsAcl
