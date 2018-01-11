const assert = require('assert');
// we need 5 test cases. I provided 1 input
let inputs = ["","abc","231","orange","apple","google"]

let outputs = [undefined,"a","2","o","a","g"]

// Make this function return the first character of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
  if (str.length == 0) {
    return undefined;
  }
  return str[0];
}

function runTest(i) {
  var expected = outputs[i];
  var actual = f(inputs[i]);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
