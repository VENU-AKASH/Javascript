// Task 1: Student Registration Form

let StudentName = "Jeeva";
let Age = 23;
let Department = "BCA"
let CGPA = 8;

console.log("Student Name : ",StudentName);
console.log("Age : ", Age);
console.log("Deaprtment : ", Department);
console.log("CGPA : ", CGPA);


// Task 2: Employee Details

let EmployeeInfo = {
    id : "EMP001",
    name : "Jeeva",
    department : "Full Stack Developer",
    salary : 30000
}
console.log("Employee Name : ", EmployeeInfo.name);
console.log("Employee Salary : ", EmployeeInfo.salary);


// Task 3: Shopping Cart

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

console.log("First Product : ", products[0]);
console.log("Last Product : ", products[products.length -1]);
console.log("Number of Products : ", products.length)


// Task 4: Student Marks

let tamil = 80;
let enlgish = 95;
let maths = 90;
let science = 85;
let socailScience = 90;

let Total = tamil + enlgish + maths + science + socailScience;
let AverageMark = Total / 5;

console.log("Total : ", Total);
console.log("Average Mark : ", AverageMark);


// Task 5: Age Checker

let age = 20;
if(age >= 18){
    
    console.log("Eligible to Vote");
}
else{
    console.log("Not Eligible");
}


// Task 6: Login System

username = prompt("Enter name : ")
password = prompt("Enter password");

if(username === "admin" && password === "12345"){
    console.log("Login Successfull");
}
else{
    console.log("Invalid Username or Password");
}


// Task 7: Calculator

let num1 = 100;
let num2 = 50;

console.log("Addition : ", num1 + num2);
console.log("Subtraction : ", num1 - num2);
console.log("Multiplication : ", num1 * num2);
console.log("Division : ", num1 / num2);
console.log("Modulus : ", num1 % num2);


// Task 8: Electricity Bill

let CustomerName = "Jeeva";
let Units = 100;
let bill;

if(Units >= 0 && Units <= 100){
    bill = Units * 2;
}
else if(Units >= 101 && Units <= 200){
    bill = Units * 4;
}
else{
    bill = Units * 6;
}
console.log("Customer Name:", CustomerName);
console.log("Units:", Units);
console.log("Bill Amount: ₹" + bill);


// Task 9: Employee Salary

let BasicSalary = 15000;
let Bonus = 10000;
let GrossSalary = 25000;

console.log("Basic Salary : ", BasicSalary);
console.log("Bonus : ",Bonus);
console.log("Grosss Salary : ", GrossSalary);


// Task 10: Movie Ticket Price

let TricketPrice = 200;
let NumberOfTicket = 5;
let TotalAmount = TricketPrice * NumberOfTicket;
console.log("Ticket Price: ₹" + TricketPrice);
console.log("Number Of Tickets :", NumberOfTicket);
console.log("Totoal Amount : ", TotalAmount);


// Task 11: Product Discount

let ProductName = "Iphone"
let Price = 60000;
console.log("Original Price : ", Price);

if(Price > 5000){
    console.log("After Discount 20% : ",  Price * (20 / 100));
    console.log("Final Price : ", Price - (Price * (20 /100)));
}
else{
    console.log("After Discount 20% : ",  Price * (10 / 100));
    console.log("Final Price : ", Price - (Price * (10 /100)));
}


// Task 12: Function Practice

function studentDetails(Name, Department, CGPA){
    console.log("Name : ", Name);
    console.log("Department : ", Department),
    console.log("CGPA : ", CGPA);
}
studentDetails("Jeeva", "BCA", 8);


// Task 13: Bank Balance

let AccountHolder = "Jeeva";
let CurrentBalance = 300000;
let WithdrawAmount = 10000;

if(WithdrawAmount > CurrentBalance){
    console.log("Not Enought Balance");
}
else{
    CurrentBalance -= WithdrawAmount;
    console.log("Remaining Balance : ", CurrentBalance);
}


// Task 14: Mobile Recharge

let MobileNumber = 1234567890;
let RechargeAmount = 350;

console.log("Reacharge Successful");
console.log("Mobile Number : ", MobileNumber);
console.log("Reachage Amount :", RechargeAmount);


// Task 15: Restaurant Bill

let FoodItem = "Briyani"
let Quantity = 5;
let Price = 250;
let Total = Price * Quantity;
console.log("Food Item:", FoodItem);
console.log("Quantity:", Quantity);
console.log("Price : ₹" + Price);
console.log("Total Price : ", Total);

// ⭐ Mini Project (Best Task)
// Employee Management System


let Employees = [
    {
        id : "EMP001",
        name : "Jeeva",
        role : "Full Stack Developer",
        skills : ["HTML", "CSS", "JAVA SCRIPT", "REACT", "JAVA", "SPRING BOOT", "SQL"],
        salary : 35000,
        experience : 2
    },
    {
        id : "EMP002",
        name : "Joe",
        role : "Frontend Developer",
        skills : ["HTML", "CSS", "JAVA SCRIPT", "REACT"],
        salary : 30000,
        experience : 1
    }
]

function addEmployee(id, name, role, skills, salary, experience){
    let employeeInfo = {
        id : id,
        name : name,
        role : role,
        skills : skills,
        salary : salary,
        experience : experience

    }
    Employees.push(employeeInfo);
    console.log("Added");
}
addEmployee("EMP003", "Kishore", "Backend Developer", ["Java", "SpringBoot", "Sql"], 40000, 3)


function empDetails(Employee){
    for (const emp of Employee) {

        for(let key in emp){
            console.log(`Employee ${key} :  ${emp[key]}`);
        }
        console.log("\n")
}
}
empDetails(Employees);


function calculateSalary(Employee){
    let TotoalSalary = 0;
    for (const emp of Employee) {

        for(let key in emp){
            if(key == "salary"){
                console.log(`${emp["name"]} ${key} :  ${emp[key]}`);
                TotoalSalary += emp[key];
            }
            
        }
        console.log("\n")
    }
    return TotoalSalary;
}
let TotalSalarytoPay = calculateSalary(Employees)
console.log("Total Salary Company have to pay to their Employees : ",TotalSalarytoPay);