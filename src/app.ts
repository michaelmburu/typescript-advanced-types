// Intersection Types
type Admin = {
    name: string
    priviledges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Michael",
    priviledges: ['create-server'],
    startDate: new Date()

};

//console.log(e1)

type Combinable = string | number
type Numeric = number | boolean

// Intersection Types
type Universal = Combinable & Numeric

//FUNCTION OVERLOADS
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string'){ // Type Guards
        return a.toString() + b.toString()
    }
    return a + b
}

const result = add("M", "M")
type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name)
    if('priviledges' in emp){
        console.log('Priviledges: ' + emp.priviledges)
    } 
    if('startDate' in emp){
        console.log('StartDate: ' + emp.startDate)
    } 
}

printEmployeeInformation(e1)


class Car {
    drive() {
        console.log("Driving Car")
    }
}

class Truck {

    drive() {
        console.log("Driving Truck")
    }

    truck() {
        console.log("Driving Truck")
    }

    loadCargo() {
        console.log("Load Cargo")
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if('loadCargo' in vehicle){ //Can cause typos
        vehicle.loadCargo()
    }

    // Or

    // Much cleaner but only used to check in classes. Does not work on interfaces
    if(vehicle instanceof Truck) { 
        vehicle.loadCargo()
    }
   
}

//DISCRIMINATED UNION - Classes or Interface. Alternative of instance of.
interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function movingAnimal(animal: Animal){
    let speed
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
        default:
            break;
    }

    console.log(`${animal.type} moving at ${speed} Km/hr`)
}

movingAnimal({type: 'bird', flyingSpeed: 10})


// Two ways to type cast
// 1. Add <> before the element
// 2. add they keyword as at the end eg, (userInput as HTMLInputElement).value

//INDEX TYPES - Used when you know the type but want object to be flexible and hold x amount of properties
interface ErrorContainer { // { email: "Not a valid email", useername: "Not a valid username"}
    id: string
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    id: "1",
    email: 'd@d.com',
    username: "Must start with a capital"
}

console.log(errorBag)

//NULLISH COALESCING
const userInput1 = undefined
const storedData  = userInput1 ?? "DEFAULT" // Checks whether an object is null or undefined and returns the right hand

console.log(storedData)


