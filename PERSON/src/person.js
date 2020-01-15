class Person {
  constructor (name,age,gender,interests){
  this.name = "Ryan"
  this.age = 30
  this. gender = "male"
  this.interests = ["being a hardarse,agile,ssd hard drives"]

  sayHello() //= function() {
    console.log(
      "Hello,my name is " +
        this.name +
        " I am " +
        this.age +
        " years old. My interests are " +
        this.interests
    );
  }
};

// Person.sayHello();

// module.exports = {
//     person
// }
