var genericAnimal = Object.create(null);
genericAnimal.name = 'Animal';
genericAnimal.gender = 'female';
genericAnimal.description = function() {
	return 'Gender: ' + this.gender + '; Name: ' + this.name;
};
console.log(genericAnimal.description());
//Gender: female; Name: Animal

//We can create other, more specific animals by using our sample object as a prototype. 
//Think of this as cloning the object, just like we took a chair and created a clone in the real world.
var cat = Object.create(genericAnimal);

//We just created a cat as a clone of the generic animal. We can add properties and functions to this:

cat.purr = function() {
	return 'Purrrr!';
};

//We can use our cat as a prototype and create a few more cats:

var colonel = Object.create(cat);
colonel.name = 'Colonel Meow';

var puff = Object.create(cat);
puff.name = 'Puffy';

//You can also observe that properties/methods from parents were properly carried over:

console.log(puff.description());
//Gender: female; Name: Puffy


//The new keyword and the constructor function
function Person(name) {
	this.name = name;
	this.sayName = function() {
		return "Hi, I'm " + this.name;
	};
}
var madam = new Person('madan);

