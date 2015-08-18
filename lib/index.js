(function() {
  var AccessControlEntryType, Hoek, _, mongoose;

  _ = require('underscore');

  Hoek = require('hoek');

  mongoose = require('mongoose');

  AccessControlEntryType = require('./access-control-entry-type');

  module.exports = function(schema, options) {
    schema.add({
      _acl: {
        type: [AccessControlEntryType],
        "default": function() {
          return [];
        }
      }
    });
    schema.methods.aclPurge = function() {
      return this._acl = [];
    };
    return schema.methods.aclGrantAccess = function(userId, roles) {
      var x;
      Hoek.assert(userId, "The required parameter userId is missing.");
      Hoek.assert(roles, "The required parameter roles is missing.");
      userId = new mongoose.Types.ObjectId(id.toString());
      if (_.isString(roles)) {
        roles = [roles];
      }
      Hoek.assert(_.isArray(roles) && roles.length > 0, "The required parameter roles must be a string or an array of strings, and contain at least one");
      x = _.find(this._acl, function(x) {
        return x.userId === userId;
      });
      if (x) {
        return x.roles = _.union(x.roles, roles);
      } else {
        return this._acl.push({
          userId: userId,
          roles: roles
        });
      }

      /*
      perhaps need to mark path dirty
       */
    };

    /*
    if (options && options.index) {
      schema.path('lastMod').index(options.index)
    }
     */
  };

}).call(this);

//# sourceMappingURL=index.js.map
