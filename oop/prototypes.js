// Prototype is an object. All objects inherit their properties and methods from a Prototype.

// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
        
    //     return Math.abs(ageDate.getUTCFullYear() - 1970); 
    // };
}
// PROTOTYPE METHODS
// Adding methods to prototypes outside of the prototype definition

// Calculate age
Person.prototype.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        
        return Math.abs(ageDate.getUTCFullYear() - 1970); 
};

const john = new Person('John', 'Doe', '1/12/1985');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(john);
console.log(mary);
console.log(john.calculateAge());

// Get full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
};

// Gets married

Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
};

console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));

// PROTOTYPAL INHERITANCE

// Shopper constructor
function Shopper(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

// Greeting prototype method
Shopper.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}!`
}

const shopper1 = new Shopper('Dave', 'Lark');
console.log(shopper1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membershipType) {
    Shopper.call(this, firstName, lastName);

    this.phone = phone;
    this.membershipType = membershipType;
};

// Inherit the Shopper prototype methods
Customer.prototype = Object.create(Shopper.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a customer
const customer1 = new Customer('Sara', 'Smith', '555-555-5555', 'Bronze');

// Overwrite Shopper.greeting() with a new Customer.greeting() to replace method that was inherited from Shopper
Customer.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}! We are happy to have you as a Customer!`
};

console.log(customer1.greeting());