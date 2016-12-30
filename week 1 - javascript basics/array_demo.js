// Arrays are ordered lists of values, of any type.
var myArray = ["Hello", 45, true];

// Their members can be accessed using the square-brackets subscript syntax.
// Array indices start at zero.
myArray[1]; // = 45

// Arrays are mutable and of variable length (dynamically sized arrays)
myArray.push("World"); // adds to the end
myArray.length; // = 4

// Add/Modify at specific index
myArray[3] = "Hello";