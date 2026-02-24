interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age
}

const age = sumOfAge({name: "kapil", age: 25}, {name: "yadav", age: 12})
console.log("The sum of the age is " + age);
