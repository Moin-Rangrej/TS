// export{}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Typescript is provide
// 1.static checking datatype 
// 2.provide properties like datatype(Intellisense)
// ----- VARIABLE TYPES IN TS-----
// assign string type
var greeting = "Good Afternoon";
console.log(greeting);
// assign number type
var mynum = 6666;
console.log(mynum);
// assign boolean value
var isLoggedin = false;
console.log(isLoggedin);
// null type
var n = null;
console.log(n);
// undefined type
var u = undefined;
console.log(u);
var num = [1, 2, 3];
console.log(num);
// Array with number type
var list1 = [1, 2, 3];
console.log(list1);
// assign string and number both same time with value
var list2 = ["Moin", 55];
console.log(list2);
// enum is custom datatype for assign fixed values
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color);
// Ex2
// assign all datatype values in enum
var dayOfweek;
(function (dayOfweek) {
    dayOfweek[dayOfweek["SUN"] = 0] = "SUN";
    dayOfweek[dayOfweek["MON"] = 1] = "MON";
    dayOfweek[dayOfweek["TUE"] = 2] = "TUE";
    dayOfweek[dayOfweek["WED"] = 3] = "WED";
    dayOfweek[dayOfweek["THU"] = 4] = "THU";
    dayOfweek[dayOfweek["FRI"] = 5] = "FRI";
    dayOfweek[dayOfweek["SAT"] = 6] = "SAT";
    dayOfweek[dayOfweek[55555] = 7] = 55555;
    dayOfweek[dayOfweek["true"] = 8] = "true";
    dayOfweek[dayOfweek[12.5] = 9] = 12.5;
})(dayOfweek || (dayOfweek = {}));
console.log(dayOfweek.FRI);
console.log("Hello", dayOfweek[12.5]);
var day = new Date().getDay();
console.log(day);
if (day === dayOfweek.FRI) {
    console.log("Today is Friday");
}
else {
    console.log("Not day");
}
// Any type define any values or reassign values same variable name
var myVariable = 10;
console.log(myVariable.name); //undefined
// myVariable() //same variable assign method
// console.log(myVariable.toUpperCase()) //number variable assign string method any does not give any error
//this all problem facing for using any that's why 
// used unknown datatype
var data;
data = 10;
data = "hello";
var item;
// item = data
if (typeof data === 'string') {
    item = data;
    console.log(item);
}
//type inference
var infer;
infer = 10;
infer = true;
var infer2 = 20;
// infer2 = true; give an error
// type Union
// We give multiple datatypes and values on same variable
var multiType;
multiType = 100;
multiType = true;
// multiType = "Hello" // we not give type string values on number and boolean type
// if used any on Union the typeScript intelligence not provide suggestion
// but we can use Union type the typescript smartly unserstand what's variable type and provide the suggestions
var anyType;
anyType = 20;
// ---------- FUNCTIONS IN TS ----------------
// in TS write a function with parameter also pass that datatype so TS understood
// what type of values pass on arguments
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 5));
console.log(multiply(5, true));
// 1. optional parameter
// pass only one value on argument if return only one value without
function add(num1, num2) {
    // return num1 + num2 //this is give me undefie num2
}
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num2;
    }
}
console.log(add(2, 2));
console.log(add(2));
// 2. default parameter
// pass only one value on argument if return only one value without
// second value 
function sub(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2) {
        return parseInt(num1) - parseInt(num2);
    }
    else {
        return num2;
    }
}
console.log(sub(20, 10));
console.log(sub(45, 55));
function fullName(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname, " ").concat(person.age));
}
var p = {
    firstname: 'Moin',
    lastname: 'Rangrej',
    age: 21
};
fullName(p);
// Class in TS
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Jhon');
console.log(emp1.employeeName);
emp1.greet();
// Inheritance in TS
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating Task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
