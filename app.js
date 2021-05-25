// const names = require('./names');
// const nameHi = require('./code');

// nameHi(names.john);
// nameHi(names.michael);

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);