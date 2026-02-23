// this is the type-intersection example
type Employee  = { // jabki interface k aandar = nhi use karte hain hum
    name: string;
    startDate: string;
}

type Boss = {
    name: string;
    department: string;
}

type TeamLead = Employee & Boss;

let e: Employee = {
    name: "kapil",
    startDate: "01-02-2003",
}

let b: Boss = {
    name: "kapil",
    department: "computer",
}


let t: TeamLead = {
    name: "kapil",
    startDate: "01-02-2003",
    department: "computer"
}