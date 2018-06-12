const apiKeys = require('./apiKeys');
const events = require('./events');

apiKeys.retrieveKeys()
  .then(() => {
    events.initializer();
  });
