var _ = require('lodash');

var localEnvVars = {
  TITLE:      'api',
  SAFE_TITLE: 'api'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
