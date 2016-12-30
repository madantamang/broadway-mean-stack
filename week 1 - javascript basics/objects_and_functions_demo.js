// They can be made literally:
var myObj = {key1: "Hello", key2: "World"};
// or using the Object constructor:
var myObj = new Object();

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type including other objects.
var myObj = {myKey: "myValue", "my other key": 4};

// Objects can even contain functions (called methods)
// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
var myObj = { 
  name: "Destiny's Child",
  sayMyName: function() {
    console.log(this.name);
  }
}
myObj.sayMyName(); // outputs "Destiny's Child"

// Object attributes can also be accessed using the subscript syntax,
myObj["my other key"]; // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue"

// Objects are mutable; values can be changed and new keys added.
myObj.myThirdKey = true;

// If you try to access a value that's not yet set, you'll get undefined.
myObj.myFourthKey; // = undefined

// iterating through objects
for(var property in myObj) { // do something }

// JSON (JavaScript Object Notation) is just a special case of Object literal notation
// where the keys are strings wrapped in quotes
var json_stuff = {
  "firstName": "John",
  "lastName": "Doe",
  "Age": 25
}

// JS Object => JSON
JSON.stringify(myObj);

// JSON => JS Object
JSON.parse(json_stuff);