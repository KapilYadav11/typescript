"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
const m = new Manager("Kapil", 21);
console.log(m.isLegal());
//# sourceMappingURL=03-index.js.map