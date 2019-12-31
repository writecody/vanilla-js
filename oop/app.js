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

const james = new Person('James', '01-12-1982');
console.log(james);
console.log(james.calculateAge());
