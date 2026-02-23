//interface with the class ,  constructor and object
interface People{
    name: string;
    age: number;
    greet: () => string
}

let person: People ={
    name: "Yadav",
    age: 22,
    greet: () => {
        return "Hello"
    }
}
class Manager implements People {
    name: string;
    age: number;
    pincode: number;

    constructor(name: string, age: number){
    this.name = name;
    this.age = age;
    this.pincode = pincode
    }
}




//undestanding the interfae
// interface People{
//     name: string;
//     age: number;
//     greet: () => string
// }
// let person: People = {
//     name: "Kapil",
//     age: 21,
//     greet: () => {
//         return "hi"
//     }
// }
// let greeting = person.greet();
// console.log(greeting);



//understanding interface 
//      address:{ 
//         country: string;
//         city: string;
//         pincode: number;
//      }
// }
// interface User {
//     name: string;
//     age: number;
//     address: Address
//     //     country: string;
//     //     city: string;
//     //     pincode: number;
//     //}
// }
// let user: User5 = {
//     name:"Kapil",
//     age: 2,
//     address: Address 
//     //{
//     //     country: "India",
//     //     city: "Bhopal",
//     //     pincode: 462023
//     // }
// }
// let user2: User = {
//     name: "yadav",
//     age: 88,
//     address: Address
    
// }
//  function isLegal(user: User): boolean{
//     if(user.age >= 18){
//         return true
//     } else{
//         return false
//     }
//  }

//  const result = isLegal(user)
//  if(result){
//     console.log("is a legal");
//  } else{
//     console.log("is a illlegal");
    
//  }




// function isEven(num: number): boolean{
//     if(num % 2 == 0){
//         return true
//     } else {
//         return false
//     }
// }
// const answ = isEven(11);
// console.log(answ);





// function greet(name: string): string{
//     return "Hello" + name
// }




// function sum(a: number, b: number): number{
//     return a + b
// }