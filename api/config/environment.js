var _ = require('lodash');

var localEnvVars = {
  TITLE:      'Petals and Pistols',
  SAFE_TITLE: 'Petals_and_Pistols',
  SECRET_KEY: 'notsosecretanymoreisityounaughtything'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
