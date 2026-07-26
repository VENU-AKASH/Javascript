// Task 1 - Employee Profile

let empName = "Jeeva"
let empId = "EMP0018"
let empDepartment = "Full Stack"
let salary = 25000
let IsPermanent = true

console.log("Name : ",empName); //Name :  Jeeva
console.log("Employee ID : ",empId); //Employee ID :  EMP0018
console.log("Department : ",empDepartment); //Department :  Full Stack
console.log("Salary : ",salary); //Salary :  25000
console.log("Permanent : ",IsPermanent); //Permanent :  true


// Task 2 - Student Details

let student = {
    Name : "Jeeva",
    Age : 23,
    Course : "Java Full Stack Development",
    College : "SSASC",
    Passed : "PassedOut" 
}

console.log("Student Name :", student.Name); //Student Name : Jeeva
console.log("Course :", student.Course); //Course : Java Full Stack Development
console.log("Passed Status :", student.Passed); //Passed Status : PassedOut

// Task 3 - Shopping Cart

let cart = ["Milk","Rice","Oil","Sugar","Soap"]

console.log("First Product : ", cart[0]); //First Product :  Milk
console.log("Third Product : ", cart[2]); //Third Product :  Oil
console.log("Last Product : ", cart[cart.length-1]) //Last Product :  Soap
console.log("Count : ", cart.length) //Count :  5


// Task 4 - Company Employee Database

let employee = {
    name : "Jeeva",
    designation : "Java Full Stack Developer",
    salary : 25000,
    skills : ["HTML", "CSS", "JS", "React", "Java", "Spring boot", "SQL"]

}

console.log("Employee Name : ",employee.name) //Employee Name :  Jeeva
console.log("Designation : ",employee.designation) //Designation :  Java Full Stack Developer
console.log("Second Skill : ",employee.skills[1]) //Second Skill :  CSS


// Task 5 - Salary Calculation

let basicSalary = 25000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;

console.log("Total Salary : ", totalSalary); //Total Salary :3000


// Task 6 - GST Calculator

let productPrice = 5000;
let gst = 18;
let gstAmount = 5000 * (18 / 100);
let finalAmount = productPrice + gstAmount;

console.log("GST : ", gstAmount);  //GST : 900
console.log("Final Amount : ", finalAmount); //Final Amount :  5900


// Task 7 - Even or Odd

let num = 25;
let oddOrEven = num % 2 == 0 ? "Even Number" : "Odd Number";
console.log(oddOrEven) // Odd Number


// Task 8 - Login System

let Username = "admin";
let password = 12345;
let loginStatus = Username == "admin" && password == 12345 ? "Login Success" : "Invalid Credentials";

console.log(loginStatus) //Login Success


// Task 9 - Voting Eligibility

let age = 22;
age > 18 ? console.log("Eligible for vote") : console.log("Not Eligible"); //Eligible for vote


// Task 10 - EMI Eligibility

let empSalary = 40000
let experiance = 3
empSalary > 30000 && experiance >= 2 ? console.log("Eligible") :console.log("Not Eligible"); //Eligible


// Task 11 - Product Discount

let price = 5000;
let discount = 10;
let discountAmount = price * (discount / 100);
let finalPrice = price - discountAmount;

console.log("Discount Amount : ", discountAmount); //Discount Amount :  500
console.log("Final Price : ", finalPrice); //Final Price :  4500

// Task 12 - User Registration

let name = "jeeva";
let email = "jeeva@gmail.com";
let phone = 123455789;
let city = "Chennai";

console.log("Name : ", name); //Name :  jeeva
console.log("Email : ", email); //Email :  jeeva@gmail.com
console.log("Phone : ", phone); //Phone :  123455789
console.log("City : ", city); //City :  Chennai



// Task 13 - Social Media Profile

let user = {
    userName : "Joe",
    followers : 200,
    following : 150,
    posts : 27,
    verified : "verified"
}

console.log("User Name : ",user.userName); //User Name :  Joe
console.log("Followers : ", user.followers); //Followers :  200
console.log("Verified Status : ", user.verified); //Verified Status :  verified


// Task 14 - Restaurant Menu

let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];
console.log("Second Item : ", menu[1]); //Second Item :  Dosa
console.log("Fourth Item : ", menu[3]); //Fourth Item :  Meals
console.log("Last Item : ", menu[menu.length-1]); //Last Item :  Parotta


// Task 15 - Banking System

let accountBalance = 25000;
let withdraw = 8000;
let remainingBalance = accountBalance - withdraw;

console.log("Remaining Balance : ",remainingBalance); //Remaining Balance :  17000


// Task 16 - Mobile Store

let mobilePrice = 30000;
let exchange = 5000;
let coupon = 2000;

let afterDeduction = mobilePrice - exchange - coupon;

console.log("Mobile Final Price : ",afterDeduction) //Mobile Final Price :  23000



// Task 17 - Employee Promotion

let Experience = 5;
let Performance = true;
let approve = Experience >= 5 && Performance == true ? "Promotion Approved" : "Promotion Pending";
console.log(approve); //Promotion Approved



// Task 18 - Movie Ticket

let TicketPrice = 180;
let people = 5;
let totalPrice = TicketPrice * people;

console.log("Total Price : ", totalPrice);  //Total Price :  900



// Task 19 - Weather App

let Temperature = 38;
let day = Temperature > 30 ? "Hot Day" : "Normal Weather";

console.log("Weather : ",day);  //Weather :  Hot Day



// Task 20 - Mini HR Management (Real-Time)

let employeeInfo = {
    empCode: "EMP001",
    name: "Jeeva",
    department: "Full Stack Developement",
    designation: "Java Full Stack Developer",
    salary: 30000,
    skills: ["HTML","CSS","JavaScript","React", "Java", "Spring Boot", "SQL"],
    permanent: true
}

console.log("Employee Code : ",employeeInfo.empCode);  //Employee Code :  EMP001
console.log("Employee Name : ",employeeInfo.name);  //Employee Name :  Jeeva
console.log("Employee Department : ",employeeInfo.department);  //Employee Department :  Full Stack Developement
console.log("Employee Salary : ",employeeInfo.salary); //Employee Salary :  30000
console.log("Last Skill : ",employeeInfo.skills[employeeInfo.skills.length -1]);  //Last Skill :  SQL
console.log("Permanent Status : ",employeeInfo.permanent);  //Permanent Status :  true