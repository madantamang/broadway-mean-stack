// JavaScript functions are declared with the `function` keyword.
// This is a function statement
function myFunction(thing){
    return thing.toUpperCase();
}

// This is a function expression
var makeUpperCase = function() {
    return think.toUpperCase();
}

// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this when using Allman style.
function myFunction()
{
    return // <- semicolon automatically inserted here
    {
        thisIsAn: 'object literal'
    }
}
myFunction(); // = undefined

// JavaScript functions are first class objects, so they can be reassigned to
// different variable names and passed to other functions as arguments - for
// example, when supplying an event handler:
function myFunction(){
    // this code will be called in 5 seconds' time
}
setTimeout(myFunction, 5000);
// Note: setTimeout isn't part of the JS language, but is provided by browsers
// and Node.js.

setTimeout(function(){
    console.log("It's been 5 seconds!");
    // this code will be called in 5 seconds time
}, 5000);