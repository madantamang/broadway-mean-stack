var fs=require("fs");
var math=require("mathjs");
var person=require("./person.js");
var greet = require("./mylibrary/greeting");
var http=require("http");


console.log("hello world...Starting Nodejs")

//Node.js - Global Objects

// Let's try to print the value of __filename
console.log( __filename );//This is the resolved absolute path of this code file. 


// Let's try to print the value of __dirname
console.log( __dirname );//The __dirname represents the name of the directory that the currently executing script resides in.

//reading file 
fs.readFile("testfile.txt",function (err,data) {
   if(err){
   	console.log('error reading file');
   }
   	console.log(data.toString());
   
})

//using greeting.js module
console.log('greet ' + greet.sayHelloInEnglish());
console.log('greet ' + greet.sayHelloInSpanish());

// using person.js library
var myFriend1 = new person("John", "Doe", 50, "blue");
console.log(myFriend1.firstName);
console.log(myFriend1.about())

//using mathjs library from npm
console.log('square root of 4=',math.sqrt(4));                    // 2i 

//creating nodejs server 
	http.createServer(function (request, response) {
	   // Send the HTTP header 
	   // HTTP Status: 200 : OK
	   // Content Type: text/plain
	   response.writeHead(200, {'Content-Type': 'text/plain'});
	   
	   // Send the response body as "Hello World"
	   response.end('Hello World\n');
	}).listen(8081);

console.log('server running at localhost:8081');
