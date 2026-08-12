// 1. Student Registration (Variables + Objects)
let student1 = {
    name: "Venu",
    age: 21,
    department: "CS",
    courseFee: 20000
  };
  console.log(student1);
  console.log(student1.age >= 18 ? "Eligible" : "Not Eligible");
  
  
  // 2. Employee Salary Calculator (Functions)
  function calculateSalary(basic, bonus, deduction) {
    return basic + bonus - deduction;
  }
  console.log("Total Salary =", calculateSalary(20000, 5000, 2000));
  
  
  // 3. Shopping Cart (Array)
  let cart3 = ["Laptop", "Mouse", "Keyboard", "Headphone"];
  cart3.push("Charger");            // add one product
  cart3.pop();                      // remove last product
  console.log("Total Products:", cart3.length);
  console.log("First:", cart3[0], "Last:", cart3[cart3.length - 1]);
  
  
  // 4. Login Validation (If Else)
  let storedUsername = "admin";
  let storedPassword = "12345";
  let enteredUsername = "admin";
  let enteredPassword = "12345";
  
  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    console.log("Login Success");
  } else {
    console.log("Invalid Username or Password");
  }
  
  
  // 5. Movie Ticket Booking (Ternary)
  let age5 = 20;
  console.log(age5 >= 18 ? "Eligible" : "Not Eligible");
  
  
  // 6. Employee Search (Array + Find)
  let employees6 = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
  ];
  console.log(employees6.find(emp => emp.name === "Kavin"));
  
  
  // 7. Product Filter (Filter)
  let products7 = [
    { name: "Pen", price: 20 },
    { name: "Chair", price: 800 },
    { name: "Bottle", price: 150 },
    { name: "Table", price: 1200 }
  ];
  console.log(products7.filter(p => p.price < 500));
  
  
  // 8. Student Marks (Map)
  let marks8 = [45, 56, 67, 89];
  console.log(marks8.map(m => m + 5));
  
  
  // 9. Attendance Checker (Every)
  let marks9 = [90, 85, 70, 65];
  console.log(marks9.every(m => m > 50));
  
  
  // 10. OTP Generator (Math + String)
  function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  console.log(generateOTP());
  
  
  // 11. Password Strength Checker (String)
  function checkPassword(pwd) {
    let hasNumber = /[0-9]/.test(pwd);
    let hasUpper = /[A-Z]/.test(pwd);
    let hasSpecial = /[!@#$%^&*]/.test(pwd);
    let hasLength = pwd.length >= 8;
    return (hasNumber && hasUpper && hasSpecial && hasLength) ? "Strong Password" : "Weak Password";
  }
  console.log(checkPassword("Abc@1234"));
  
  
  // 12. Product Search (Includes)
  let products12 = ["Laptop", "Mobile", "Watch", "Camera"];
  function searchProduct12(name) {
    return products12.includes(name) ? "Available" : "Not Available";
  }
  console.log(searchProduct12("Mobile"));
  
  
  // 13. Current Digital Clock (Date + setInterval)
  function showClock() {
    console.log(new Date().toLocaleTimeString());
  }
  setInterval(showClock, 1000);
  
  
  // 14. Countdown Timer
  let count14 = 10;
  let timer14 = setInterval(() => {
    console.log(count14);
    count14--;
    if (count14 < 0) clearInterval(timer14);
  }, 1000);
  
  
  // 15. Fake API Product Viewer (Fetch API)
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
      products.forEach(p => {
        console.log(p.image, p.title, p.price);
      });
    });
  
  
  // 16. Employee Dashboard (Reduce)
  let employees16 = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
  ];
  let total16 = employees16.reduce((sum, e) => sum + e.salary, 0);
  let average16 = total16 / employees16.length;
  let highest16 = employees16.reduce((max, e) => e.salary > max.salary ? e : max);
  console.log("Total:", total16);
  console.log("Average:", average16);
  console.log("Highest:", highest16);
  
  
  // 17. Online Food Order
  let cart17 = [];
  function addItem17(item) { cart17.push(item); }
  function removeItem17(item) { cart17 = cart17.filter(i => i !== item); }
  function totalItems17() { return cart17.length; }
  function printBill17() {
    console.log("Items:", cart17);
    console.log("Total Items:", totalItems17());
  }
  addItem17("Pizza");
  addItem17("Burger");
  addItem17("Fries");
  removeItem17("Burger");
  printBill17();
  
  
  // 18. Bank Account
  let account18 = {
    holder: "Venu",
    balance: 1000,
    deposit(amount) { this.balance += amount; },
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient balance");
      } else {
        this.balance -= amount;
      }
    },
    checkBalance() { console.log(this.balance); }
  };
  account18.deposit(500);
  account18.withdraw(300);
  account18.checkBalance();
  
  
  // 19. To-Do List
  let todos19 = [];
  function addTask19(task) { todos19.push({ id: Date.now(), task, done: false }); }
  function deleteTask19(id) { todos19 = todos19.filter(t => t.id !== id); }
  function updateTask19(id, newText) {
    let t = todos19.find(t => t.id === id);
    if (t) t.task = newText;
  }
  function showTasks19() { console.log(todos19); }
  
  
  // 20. Mini E-Commerce Product Management
  let products20 = [];
  function addProduct20(name, price, category, stock) {
    products20.push({ name, price, category, stock });
  }
  function searchProduct20(name) {
    return products20.find(p => p.name === name);
  }
  function filterByCategory20(category) {
    return products20.filter(p => p.category === category);
  }
  function totalStock20() {
    return products20.reduce((sum, p) => sum + p.stock, 0);
  }
  function totalInventoryValue20() {
    return products20.reduce((sum, p) => sum + (p.price * p.stock), 0);
  }
  addProduct20("Laptop", 50000, "Electronics", 5);
  addProduct20("Mouse", 500, "Electronics", 20);
  addProduct20("Shirt", 800, "Clothing", 10);
  console.log(searchProduct20("Mouse"));
  console.log(filterByCategory20("Electronics"));
  console.log(totalStock20());
  console.log(totalInventoryValue20());