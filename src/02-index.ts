//undestanding the interfae
interface User {
    name: string;
    age: number;
    address?:{ // ? indicates the optional parameter in the ts
        country: string;
        city: string;
        pincode: number;
    }
}
let user: User = {
    name:"Kapil",
    age: 2,
    address: {
        country: "India",
        city: "Bhopal",
        pincode: 462023
    }
}
let user2: User = {
    name: "yadav",
    age: 88,
    
}
 function isLegal(user: User): boolean{
    if(user.age >= 18){
        return true
    } else{
        return false
    }
 }

 const result = isLegal(user)
 if(result){
    console.log("is a legal");
 } else{
    console.log("is a illlegal");
    
 }




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