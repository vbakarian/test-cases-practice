var assert = require('assert');

// we need 5 test cases. 
let inputs = [[1,2,3],[3,4,2,"x"],[],["12",21,2],["",""]]

let outputs = [6,9,0,23,0]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            sum += arr[i];
        } else if (arr.length === 0) {
            return 0;
        }
    }
    return sum;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

