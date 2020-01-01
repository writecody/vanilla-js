class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}!`
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    // A static method can be accessed through the class itself but not an instance of the class
    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person("Mary", "Jones", '11/12/1980');

mary.getsMarried("Smith");
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

console.log(Person.addNumbers(1,2));

// Inheritance in ES6 classes (subclasses)

class SubPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hi there, ${this.firstName} ${this.lastName}!`
    }
}

// Extend subPerson class with Customer class

class Customer extends SubPerson {
    constructor(firstName, lastName, phone, membershipType) {
        super(firstName, lastName);

        // Any properties of Customer not extended from SubPerson (passed in as super() arguments) must be defined within the class, here.
        this.phone = phone;
        this.membershipType = membershipType;
    }

    static getMembershipCost() {
        return 500;
    }
}

const tracy = new Customer("Tracy", "Torres", "112-225-5939", "Standard");

console.log(tracy);
console.log(tracy.greeting());
console.log(Customer.getMembershipCost());