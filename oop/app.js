// CONSTRUCTOR FUNCTIONS

// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        
        return Math.abs(ageDate.getUTCFullYear() - 1970); 
    };
}

const james = new Person('James', '1/20/1985');
console.log(james);
console.log(james.calculateAge());

// BUILT-IN CONSTRUCTORS

// Strings
const name1 = 'Jeff';
const name2 = new String('Jeff');
name2.foo = 'bar';

if(name1 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
};

if(name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
};

// Numbers
const num1 = 5;
const num2 = new Number(5);

// Booleans
const bool1 = true;
const bool2 = new Boolean(true);

// Functions
const getSum1 = function(x, y){
    return x + y;
};

const getSum2 = new Function('x', 'y', 'return x + y');

console.log('getSum1: ', getSum1(1, 5));
console.log('getSum2: ', getSum2(5, 15));

// Objects
const john = { name: 'John' };
const john2 = new Object({ name: "John "});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);

// Regular Expressions
// *Use / to indicate the start and end of an expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+')
console.log(re1);
console.log(re2);