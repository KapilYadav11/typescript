function greet(user: {
    name: string,
    age: number
})
{
    console.log("Hello " + user.name);
    console.log("Age is " + user.age)
}

let user = { 
     name: "kapil",
     age: 22
}

greet(user);