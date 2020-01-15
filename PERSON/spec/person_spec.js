let Person = require("../src/person");
let person = new Person ('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives'])

describe("person", function() {
  it("name", function() {
    expect(person.sayHello).toBe("Hello, my name is Ryan");
  });
});
