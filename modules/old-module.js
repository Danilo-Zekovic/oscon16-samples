/*
* old-module.js
* Danilo Zekovic
* Example of an old style module in JavaScript
*/

exports.operation = (function() {
  var num1 = 4; // this is a local variable

  function addNumbers (num2) {
    var sum = num1 + num2;
    return sum;
  }

  return {
    addNumbers : addNumbers
  };
})();
