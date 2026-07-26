// Task 1: Employee Login System

let username = prompt("Enter Name : ");
let password = prompt("Enter Password : ");

if (username === "admin" && password === "12345") {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

// Task 2: E-Commerce Discount

let amount = Number(prompt("Enter Amount:"));
let finalPrice;
if (amount >= 5000) {
  console.log("20% Discount Applied");
  finalPrice = amount - amount * (20 / 100);
} else {
  console.log("No Discount");
  finalPrice = amount;
}
console.log("Final Price : ", finalPrice);
// Challenge
// Calculate final amount after discount.

// Task 3: ATM Withdrawal
// Concepts
// Comparison
// if else
let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {
  balance -= withdraw;
  console.log("Transaction Success");
  console.log("Balance:", balance);
} else {
  console.log("Insufficient Balance");
}

// Task 4: Student Grade System
let mark = 87;

if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 80) {
  console.log("Grade B");
} else if (mark >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Task 5: Traffic Signal
// Use switch
let signal = "green";

switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid");
}
// Task 6: Online Shopping Delivery Charge
// Order >=1000 → Free Delivery

let Order = 800;
let TotalAmount;
if (Order >= 1000) {
  TotalAmount = Order;
} else {
  TotalAmount = Order + 80;
}
console.log("Total Amount : ", TotalAmount);

// Task 7: User Age Verification

let age = prompt("Enter you age : ");
if (age < 0) {
  console.log("Age cannot be in negative");
} else if (age < 18) {
  console.log("Not Eligible");
} else {
  console.log("Your are Eligible");
}

// Task 8: Find Largest Number
// let a=10;
// let b=20;

// if(a>b){
// console.log(a);
// }else{
// console.log(b);
// }
let a = 700;
let b = 900;
let c = 800;

if (a >= b && a >= c) {
  console.log("Largest Number is ", a);
} else if (b > c) {
  console.log("Largest Number is : ", b);
} else {
  console.log("Largest Number is : ", c);
}

// Task 9: Mobile Password

let pin = prompt("Pin : ");
if (pin.length === 4) {
  console.log("Login Success");
} else {
  console.log("Invalid PIN");
}

// Task 10: Product Stock

// Available
let Stock = 10;
if (Stock > 0) {
  console.log("Avilable");
} else if (Stock == 0) {
  console.log("Out of Stock");
} else {
  console.log("Cannot be in Negative");
}

// Task 11: Employee Salary Bonus

// Bonus 2000
let Salary = 40000;
let Bonus = 0;
if (Salary > 50000) {
  Bonus = 10000;
} else if (Salary > 30000) {
  Bonus = 5000;
} else {
  Bonus = 2000;
}
console.log("Salary with Bonus : ", Salary + Bonus);

// Task 12: Electricity Bill

let Units = 50;
let EBbill = 0;
if (Units >= 0 && Units <= 100) {
  EBbill = Units * 2;
} else if (Units >= 101 && Units <= 200) {
  EBbill = Units * 4;
} else if (Units > 200) {
  EBbill = Units * 6;
}
console.log("Electricity Bill : ", EBbill);

// Task 13: Movie Ticket Booking

let Age = 20;
let TicketPrice = 0;
if (Age < 5) {
  console.log("Ticket Free");
} else if (Age >= 5 && Age <= 18) {
  console.log("Ticket Price ₹100");
} else if (Age > 18) {
  console.log("Ticket Price ₹200");
}

// Task 14: Hospital Token System

let condition = "Emergency";
switch (condition) {
  case "Emergency":
    console.log("Token 1");
    break;

  case "Senior Citizen":
    console.log("Priority");
    break;

  case "Normal":
    console.log("Regular Queue");
    break;

  default:
    console.log("Invalid");
}

// Task 15: Company Attendance

let attendance = "Present";
if (attendance === "Present") {
  console.log("Working");
} else if ((attendance = "Leave")) {
  console.log("Leave Approved");
} else {
  console.log("Absent & Salary Deducted");
}

// Task 16: Grocery Cart Total
let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;
if (total > 1000) {
  total = total - total * (10 / 100);
  console.log("10% discount Applied");
}
console.log("Total : ", total);

// Task 17: Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
for (let i = 0; i < products.length; i++) {
  console.log(i + 1, products[i]);
}

// Task 18: Employee Database
let employee = {
  name: "Rahul",
  role: "Developer",
  salary: 50000,
};
for (let key in employee) {
  console.log(employee[key]);
}

// Task 19: Type Casting

let num = Number("100");
let bool = Boolean("true");
let str = String(200);
console.log(num);
console.log(bool);
console.log(str);

// Task 20: Banking Menu

let operation = "Deposit";
let option = 2;

switch (option) {
  case 1:
    console.log("Deposit");
    break;

  case 2:
    console.log("Withdraw");
    break;

  case 3:
    console.log("Balance");
    break;

  case 4:
    console.log("Exit");
    break;

  default:
    console.log("Invalid Choice");
}

// Mini Project
// Employee Management System (Console)
// Features:
// Add Employee
// Show Employee Details
// Calculate Bonus
// Check Attendance
// Print Salary
// Exit

let employeeInfo = [
  {
    id: "EMP01",
    name: "Jeeva",
    salary: 30000,
    attendance: "Present",
  },
];
let menuChoice = Number(
  prompt(
    "\nEnter 1 for Add Employee\nEnter 2 for Show Employee Details\nEnter 3 for Calculate Bonus\nEnter 4 for Check Attendance\nEnter 5 for Print Salary\nEnter 6 for Exit\n",
  ),
);
console.log(menuChoice);
let idOfEmp;
switch (menuChoice) {
  // Add Employee
  case 1:
    let id = prompt("Enter id : ");
    let name = prompt("Enter name : ");
    let salary = prompt("Enter salary : ");
    let attendance = prompt("Enter attendence status : ");

    let newEmp = {
      id: id,
      name: name,
      salary: salary,
      attendance: attendance,
    };
    employeeInfo.push(newEmp);
    console.log("Employee Added");
    break;

  // Show Employee Details
  case 2:
    idOfEmp = prompt("Enter the id of the employee you want to see : ");
    for (let emp of employeeInfo) {
      if (emp.id == idOfEmp) {
        for (let key in emp) {
          console.log(`${key} : ${emp[key]}`);
        }
      }
    }
    break;

  // Calculate Bonus
  case 3:
    idOfEmp = prompt("Enter the id of the employee you want to see : ");
    for (let emp of employeeInfo) {
      if (emp.id == idOfEmp) {
        if (emp.salary > 50000) {
          console.log("Bonus is 10000");
        } else if (emp.salary > 30000) {
          console.log("Bonus is 5000");
        } else {
          console.log("Bonus is 2000");
        }
      }
    }
    break;

  // Check Attendance
  case 4:
    idOfEmp = prompt("Enter the id of the employee you want to see : ");
    for (let emp of employeeInfo) {
      if (emp.id == idOfEmp) {
        if (emp.attendance == "Present") {
          console.log("Working");
        } else if (emp.attendance == "Leave") {
          console.log("Leave Approved");
        } else {
          console.log("Absent");
        }
      }
    }
    break;

  // Print Salary
  case 5:
    idOfEmp = prompt("Enter the id of the employee you want to see : ");
    for (let emp of employeeInfo) {
      if (emp.id == idOfEmp) {
        console.log(`${emp.id} salary is ${emp.salary}`);
      }
    }
    break;

  //Exit
  case 6:
    console.log("Thanks for comming, see you again");
    break;

  default:
    console.log("You Entered invalid number");
}