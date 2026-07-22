// ==========================
// Task 1 - Employee Profile
// ==========================
let employeeName = "Naveen";
let employeeId = "EMP1001";
let department = "Frontend";
let salary = 25000;
let isPermanent = true;

console.log("Task 1");
console.log("Name :", employeeName);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Salary :", salary);
console.log("Permanent :", isPermanent);


// ==========================
// Task 2 - Student Details
// ==========================
let student = {
    name: "Rahul",
    age: 20,
    course: "B.Tech",
    college: "ABC College",
    passed: true
};

console.log("\nTask 2");
console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed Status :", student.passed);


// ==========================
// Task 3 - Shopping Cart
// ==========================
let cart = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log("\nTask 3");
console.log(cart[0]);
console.log(cart[2]);
console.log(cart[4]);
console.log(cart.length);


// ==========================
// Task 4 - Company Employee Database
// ==========================
let employee = {
    name: "Praveen",
    designation: "Frontend Developer",
    salary: 35000,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

console.log("\nTask 4");
console.log("Employee Name :", employee.name);
console.log("Designation :", employee.designation);
console.log("Second Skill :", employee.skills[1]);


// ==========================
// Task 5 - Salary Calculation
// ==========================
let basicSalary = 25000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;

console.log("\nTask 5");
console.log("Total Salary :", totalSalary);


// ==========================
// Task 6 - GST Calculator
// ==========================
let productPrice = 4500;
let gst = 18;

let gstAmount = productPrice * gst / 100;
let finalAmount = productPrice + gstAmount;

console.log("\nTask 6");
console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmount);


// ==========================
// Task 7 - Even or Odd
// ==========================
let number = 25;

console.log("\nTask 7");
console.log(number % 2 === 0 ? "Even Number" : "Odd Number");


// ==========================
// Task 8 - Login System
// ==========================
let username = "admin";
let password = "12345";

console.log("\nTask 8");
console.log(
    username === "admin" && password === "12345"
        ? "Login Success"
        : "Invalid Credentials"
);


// ==========================
// Task 9 - Voting Eligibility
// ==========================
let age = 22;

console.log("\nTask 9");
console.log(age >= 18 ? "Eligible for Vote" : "Not Eligible");


// ==========================
// Task 10 - EMI Eligibility
// ==========================
let empSalary = 40000;
let experience = 3;

console.log("\nTask 10");
console.log(
    empSalary > 30000 && experience >= 2
        ? "Eligible"
        : "Not Eligible"
);


// ==========================
// Task 11 - Product Discount
// ==========================
let price = 5000;
let discount = 10;

let discountAmount = price * discount / 100;
let finalPrice = price - discountAmount;

console.log("\nTask 11");
console.log("Discount Amount :", discountAmount);
console.log("Final Price :", finalPrice);


// ==========================
// Task 12 - User Registration
// ==========================
let userName = "Naveen";
let email = "naveen@gmail.com";
let phone = "9876543210";
let city = "Hyderabad";

console.log("\nTask 12");
console.log("----- User Details -----");
console.log("Name :", userName);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);


// ==========================
// Task 13 - Social Media Profile
// ==========================
let profile = {
    username: "naveen123",
    followers: 1500,
    following: 300,
    posts: 120,
    verified: true
};

console.log("\nTask 13");
console.log("Username :", profile.username);
console.log("Followers :", profile.followers);
console.log("Verified Status :", profile.verified);


// ==========================
// Task 14 - Restaurant Menu
// ==========================
let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("\nTask 14");
console.log("Second Item :", menu[1]);
console.log("Fourth Item :", menu[3]);
console.log("Last Item :", menu[4]);


// ==========================
// Task 15 - Banking System
// ==========================
let accountBalance = 25000;
let withdraw = 8000;

let remainingBalance = accountBalance - withdraw;

console.log("\nTask 15");
console.log("Remaining Balance :", remainingBalance);


// ==========================
// Task 16 - Mobile Store
// ==========================
let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;

let mobileFinalAmount = mobilePrice - exchange - coupon;

console.log("\nTask 16");
console.log("Final Amount :", mobileFinalAmount);


// ==========================
// Task 17 - Employee Promotion
// ==========================
let exp = 5;
let performance = true;

console.log("\nTask 17");
console.log(
    exp >= 5 && performance
        ? "Promotion Approved"
        : "Promotion Pending"
);


// ==========================
// Task 18 - Movie Ticket
// ==========================
let ticketPrice = 180;
let people = 5;

let totalTicketAmount = ticketPrice * people;

console.log("\nTask 18");
console.log("Total Amount :", totalTicketAmount);


// ==========================
// Task 19 - Weather App
// ==========================
let temperature = 38;

console.log("\nTask 19");
console.log(
    temperature > 35 ? "Hot Day" : "Normal Weather"
);



// Task 20 - Mini HR Management
// 
let employeeHR = {
    empCode: "EMP1001",
    name: "Rahul",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("\nTask 20");
console.log("Employee Code :", employeeHR.empCode);
console.log("Employee Name :", employeeHR.name);
console.log("Department :", employeeHR.department);
console.log("Salary :", employeeHR.salary);
console.log("Last Skill :", employeeHR.skills[3]);
console.log("Permanent Status :", employeeHR.permanent);