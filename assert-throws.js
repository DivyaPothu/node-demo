const assert = require('assert');

assert.doesNotThrow(
  function() {
    console.log("Nothing to see here");
  },
  Error
);

assert.throws(
  () => {
    throw new Error('Wrong valueee');
  },
  Error
);