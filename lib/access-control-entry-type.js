(function() {
  var AccessControlEntryType, _, mongoose;

  _ = require('underscore');

  mongoose = require('mongoose');

  AccessControlEntryType = {
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true
    },
    roles: {
      type: [String],
      "default": function() {
        return [];
      },
      required: true
    }
  };

}).call(this);

//# sourceMappingURL=access-control-entry-type.js.map
