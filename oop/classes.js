const personPrototypes = {
    greeting: function() {
        return `Hello there, ${this.firstName} ${this.lastName}!`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);

mary.firstName = "Mary";
mary.lastName = "Damon";
mary.age = 30;

console.log(mary.greeting());
mary.getsMarried("Jones");
console.log(mary.greeting());

const cody = Object.create(personPrototypes, {
    firstName: { value: "Cody" },
    lastName: { value: "Jones" },
    age: { value: 36 }
});

console.log(cody);
console.log(cody.greeting());