// understanding about the readonly 
type User  = {
    name: string;
    age: number;
}

const user: Readonly<User>={
    name: 'kapil',
    age: 22
}
user.age = 12;





// understanding about the pick
// interface User {
//     id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string
// }

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// function updateUser(updateProps: UpdateProps){
//     console.log(`Name: ${updateProps.name}, Email: ${updateProps.email}`);
    
//}