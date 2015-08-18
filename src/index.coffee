_ = require 'underscore'
Hoek = require 'hoek'
mongoose = require 'mongoose'

AccessControlEntryType = require './access-control-entry-type'

module.exports = (schema, options) ->
  schema.add  
          _acl:
            type: [AccessControlEntryType]
            default: -> []


  schema.methods.aclPurge = ->
    this._acl = []


  schema.methods.aclGrantAccess = (userId, roles) ->
    Hoek.assert userId, "The required parameter userId is missing."
    Hoek.assert roles, "The required parameter roles is missing."

    userId = new mongoose.Types.ObjectId id.toString()
    roles = [roles] if _.isString(roles)
    Hoek.assert _.isArray(roles) && roles.length > 0, "The required parameter roles must be a string or an array of strings, and contain at least one"

    x = _.find this._acl, (x) -> x.userId is userId

    if x
      x.roles = _.union x.roles, roles
    else
      this._acl.push {userId: userId, roles: roles}      

    ###
    perhaps need to mark path dirty
    ###

  ###
  if (options && options.index) {
    schema.path('lastMod').index(options.index)
  }
  ###

  