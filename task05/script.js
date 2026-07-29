// Task 1 - Student Registration
let studentName = "venu akash";
let department = "CSE";
let cgpa = 8.1;

let status = cgpa >= 5 ? "Eligible" : "Not Eligible";

console.log("Student Name :", studentName);
console.log("Department :", department);
console.log("CGPA :", cgpa);
console.log("Status :", status);


// Task 2 - Online Shopping Bill
let productPrice = 2500;
let quantity = 3;

let total2 = productPrice * quantity;
let discount2 = total2 > 5000 ? total2 * 0.10 : 0;
let finalPrice = total2 - discount2;

console.log("Total :", total2);
console.log("Discount :", discount2);
console.log("Final Price :", finalPrice);


// Task 3 - Employee Salary
let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;

let netSalary = basicSalary + bonus - tax;

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Net Salary :", netSalary);


// Task 4 - Movie Ticket Booking
let movie = "Lion King";
let ticketPrice = 180;
let tickets = 5;

let total4 = ticketPrice * tickets;

console.log("Movie :", movie);
console.log("Tickets :", tickets);
console.log("Total :", total4);


// Task 5 - Login System
let username = "admin";
let password = "1234";

let inputUser = "admin";
let inputPass = "1234";

if (inputUser === username && inputPass === password) {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password");
}


// Task 6 - Electricity Bill
let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
} else {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}

console.log("Total Bill :", bill);


// Task 7 - Restaurant Order
let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("First Item :", menu[0]);
console.log("Last Item :", menu[menu.length - 1]);
console.log("Total Items :", menu.length);

menu.push("Fried Rice");
menu.splice(menu.indexOf("Idly"), 1);

console.log("Updated Menu :", menu);


// Task 8 - Employee Object
let employee = {
    name: "venu akash",
    role: "Full stack developer",
    salary: 40000
};

console.log("Employee Name :", employee.name);
console.log("Role :", employee.role);
console.log("Salary :", employee.salary);


// Task 9 - Product Inventory
let products9 = ["Mouse", "Keyboard", "Monitor", "CPU", "Speaker"];

for (let i = 0; i < products9.length; i++) {
    console.log(i + 1, products9[i]);
}

// Task 10 - Function
function calculateArea(length, width) {
    return length * width;
}

console.log("Area =", calculateArea(20, 10));


// Task 11 - Bank Deposit
let balance = 5000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    balance -= amount;
    return balance;
}

console.log("Current Balance :", balance);
deposit(2000);
console.log("After Deposit :", balance);
withdraw(1000);
console.log("Final Balance :", balance);


// Task 12 - Callback Function
function addition(a, b, callback) {
    let result = a + b;
    console.log(result);
    callback();
}

function onComplete() {
    console.log("Calculation Completed");
}

function calculate(operation, a, b) {
    operation(a, b, onComplete);
}

calculate(addition, 10, 20);

// Task 13 - Generator Function
function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let gen = couponGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// Task 14 - Currying
function discount(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(discount(10)(20)(30));


// Task 15 - Spread Operator
let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack);


// Task 16 - Rest Operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(10, 20, 30, 40, 50));


// Task 17 - Array Destructuring
let colors = ["Red", "Blue", "Green", "Yellow"];

let [c1, c2, c3, c4] = colors;

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);


// Task 18 - Object Destructuring
let user = {
    name: "venuakash",
    city: "theni",
    role: "Developer"
};

let { name, city, role } = user;

console.log(name);
console.log(city);
console.log(role);


// Task 19 - Shopping Cart
let cart = ["Mobile", "Laptop", "Watch"];

cart.push("Headphones");
console.log("After push :", cart);

cart.pop();
console.log("After pop :", cart);

cart.shift();
console.log("After shift :", cart);

cart.unshift("Tablet");
console.log("After unshift :", cart);


// Task 20 - Product Search
let products20 = ["Laptop", "Mouse", "Keyboard", "Monitor", "Speaker"];

let search = "Monitor";

if (products20.includes(search)) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}