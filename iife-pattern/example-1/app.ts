//1. Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
(function () {
  const isGlobal = false;
  console.log("iife,", isGlobal);
})();

//2. The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it.
var result = (function () {
  var x = 10;
  var y = 20;
  return x + y;
})();

console.log(result); // Output: 30

//3. IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.
//Here’s an example demonstrating how an IIFE can be used to create private variables:
var counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 3
