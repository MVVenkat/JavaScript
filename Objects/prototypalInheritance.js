// By Douglas Crockford
// Prototypal Inheritance
// Remember the object's [[prototype]] points to constructors prototype

function objectTest(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let person = {
  name: "Vinay",
  friends: ["Shelby", "Court", "Van"],
};

let anotherPerson = objectTest(person);
console.log(anotherPerson.name); // Vinay
anotherPerson.friends.push("Raju");
console.log(anotherPerson.friends);

// Reference types are modified since source (person) is same for all the objects created.
let yetAnotherPerson = objectTest(person);
console.log(yetAnotherPerson.friends);

// The same functionality as "objectTest" is achieved by Object.create
let anotherPersonMaybe = Object.create(person, {
  name: {
    value: "Greg",
  },
});

console.log(anotherPersonMaybe.name); // "Greg"
