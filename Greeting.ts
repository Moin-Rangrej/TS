// export{}


// Typescript is provide
// 1.static checking datatype 
// 2.provide properties like datatype(Intellisense)

// ----- VARIABLE TYPES IN TS-----

// assign string type
var greeting:string = "Good Afternoon"
console.log(greeting);

// assign number type
var mynum:number = 6666
console.log(mynum);

// assign boolean value
var isLoggedin: boolean = false
console.log(isLoggedin);

// null type
let n: null = null
console.log(n);

// undefined type
let u: undefined = undefined
console.log(u);

let num: number[] = [1,2,3]
console.log(num);


// Array with number type
let list1: Array<number> = [1,2,3]
console.log(list1);

// assign string and number both same time with value
let list2: [string,number] = ["Moin",55]
console.log(list2);

// enum is custom datatype for assign fixed values
enum Color {Red = 5, Green  , Blue}
let color: Color = Color.Green
console.log(color);

// Ex2
// assign all datatype values in enum
enum dayOfweek {
    SUN, MON, TUE, WED, THU, FRI, SAT , 55555 , true , 12.5
}
console.log(dayOfweek.FRI);
console.log("Hello",dayOfweek[12.5]);


let day = new Date().getDay()
console.log(day);


if (day=== dayOfweek.FRI) {
    console.log("Today is Friday");
}
else{
    console.log("Not day");
}

// Any type define any values or reassign values same variable name
let myVariable: any = 10

console.log(myVariable.name); //undefined
// myVariable() //same variable assign method
// console.log(myVariable.toUpperCase()) //number variable assign string method any does not give any error

//this all problem facing for using any that's why 
// used unknown datatype

let data: unknown;
data = 10
data = "hello"

let item:string;
// item = data
if (typeof data === 'string') {
    item = data
    console.log(item);  
}

//type inference

let infer;
infer = 10;
infer = true;

let infer2 = 20;
// infer2 = true; give an error

// type Union
// We give multiple datatypes and values on same variable
let multiType: number | boolean
multiType = 100;
multiType = true;
// multiType = "Hello" // we not give type string values on number and boolean type

// if used any on Union the typeScript intelligence not provide suggestion
// but we can use Union type the typescript smartly unserstand what's variable type and provide the suggestions

let anyType: any;
anyType = 20;

// ---------- FUNCTIONS IN TS ----------------

// in TS write a function with parameter also pass that datatype so TS understood
// what type of values pass on arguments

function multiply(a: number, b: number) {
    return a * b;
  }

console.log(multiply(5 , 5));
console.log(multiply(5,true));


// 1. optional parameter
// pass only one value on argument if return only one value without

function add(num1: number , num2?: number) {
        // return num1 + num2 //this is give me undefie num2
}

function add(num1: number , num2?: number) {
    if (num2) {
        return num1 + num2
    }
    else{
        return num2
    }
}

console.log(add(2,2));
console.log(add(2));



// 2. default parameter
// pass only one value on argument if return only one value without
// second value 

function sub(num1: number , num2: number = 20) {
    if (num2) {
        return parseInt(num1) - parseInt(num2)
    }
    else{
        return num2
    }
}

console.log(sub(20,10));
console.log(sub(45,55));


// ------ INTERFACE ----------
// to create interface and assign all variable properties in object like Person
// like form to fill multiple values to craete  interface 

interface Person{
    firstname: string,
    lastname: string,
    age?: number
}

function fullName(person: Person) {
    console.log(`${person.firstname} ${person.lastname} ${person.age}`);
}

let p = {
    firstname: 'Moin',
    lastname: 'Rangrej',
    age: 21
}

fullName(p)

// Class in TS

class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Jhon');
console.log(emp1.employeeName);
emp1.greet()

// Inheritance in TS

class Manager extends Employee{
   constructor(managerName: string){
    super(managerName);
   }
   
   delegateWork(){
        console.log(`Manager delegating Task`);
    }

}

let m1 = new Manager('Bruce')
m1.delegateWork()
m1.greet()
console.log(m1.employeeName);









