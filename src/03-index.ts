interface User {
    name: string;
    age: number;
    isLegal(): boolean;
}

class Manager implements User {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18
    }
}

const m = new Manager("Kapil", 21);
console.log(m.isLegal());