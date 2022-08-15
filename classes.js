class Human {
    name= ""
    constructor(name) {
        this.name = name
    }
}


class Student extends Human {
    grade = 100
    sayHi() {
        return `My name is ${this.name}`
    }
}

let student1 = new Student ("Cass")
let student2 = new Student ("Jess", 90)

console.log(student1.name) //Cass
console.log(student2)
console.log(student1.sayHi()) //Cass
