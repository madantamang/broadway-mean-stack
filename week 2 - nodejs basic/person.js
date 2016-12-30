//var exports=module.exports={};
// person.js
// var exports = module.exports = {};
        
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.about = function() {
        console.log(this.firstName + " " + this.lastName +' is '+ this.age +' years old guys with ' + this.eyeColor + " colour eye");
    };
}
module.exports=person;
