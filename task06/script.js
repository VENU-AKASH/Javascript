// ==========================
// Task 1: Online Exam Portal
// ==========================

function onlineExam() {
    let studentName = "Santhosh Reddy";
    let subject = "JavaScript";
    let examDate = new Date();

    examDate.setFullYear(2026);
    examDate.setMonth(8); // September
    examDate.setDate(20);
    examDate.setHours(10);
    examDate.setMinutes(30);
    examDate.setSeconds(0);

    console.log("Student Name:", studentName);
    console.log("Subject:", subject);
    console.log("Exam Year:", examDate.getFullYear());
    console.log("Exam Month:", examDate.getMonth() + 1);
    console.log("Exam Date:", examDate.getDate());
    console.log("Exam Day:", examDate.getDay());
    console.log("Exam Time:", examDate.getHours() + ":" + examDate.getMinutes());
    console.log("Exam Scheduled Successfully");
}

onlineExam();


// ==========================
// Task 2: Flight Ticket Booking
// ==========================

function flightBooking() {
    let passengerName = "Santhosh Reddy";
    let source = "Hyderabad";
    let destination = "Delhi";
    let ticketPrice = 6500;

    let journeyDate = new Date();
    journeyDate.setFullYear(2026);
    journeyDate.setMonth(11); // December
    journeyDate.setDate(10);
    journeyDate.setHours(7);
    journeyDate.setMinutes(45);
    journeyDate.setSeconds(0);

    console.log("Passenger:", passengerName);
    console.log("From:", source);
    console.log("To:", destination);
    console.log("Ticket Price: ₹", ticketPrice);
    console.log("Journey Year:", journeyDate.getFullYear());
    console.log("Journey Month:", journeyDate.getMonth() + 1);
    console.log("Journey Date:", journeyDate.getDate());
    console.log("Journey Day:", journeyDate.getDay());
    console.log("Journey Time:", journeyDate.getHours() + ":" + journeyDate.getMinutes());
    console.log("Flight Booked Successfully");
}

flightBooking();


// ==========================
// Task 3: Electricity Bill Payment
// ==========================

function electricityBill() {
    let customerName = "Santhosh Reddy";
    let serviceNumber = "ELE123456";
    let amount = 1980;

    let paymentDate = new Date();
    paymentDate.setFullYear(2026);
    paymentDate.setMonth(9); // October
    paymentDate.setDate(8);
    paymentDate.setHours(11);
    paymentDate.setMinutes(15);
    paymentDate.setSeconds(30);

    console.log("Customer Name:", customerName);
    console.log("Service Number:", serviceNumber);
    console.log("Bill Amount: ₹", amount);
    console.log("Payment Year:", paymentDate.getFullYear());
    console.log("Payment Month:", paymentDate.getMonth() + 1);
    console.log("Payment Date:", paymentDate.getDate());
    console.log("Payment Day:", paymentDate.getDay());
    console.log("Payment Hours:", paymentDate.getHours());
    console.log("Payment Minutes:", paymentDate.getMinutes());
    console.log("Payment Seconds:", paymentDate.getSeconds());
    console.log("Electricity Bill Paid Successfully");
}

electricityBill();


// ==========================
// Task 4: Hotel Room Reservation
// ==========================

function hotelReservation() {
    let guestName = "Santhosh Reddy";
    let hotelName = "Royal Grand Hotel";
    let roomType = "Deluxe";
    let roomPrice = 3500;
    let nights = 2;

    let checkIn = new Date();
    checkIn.setFullYear(2026);
    checkIn.setMonth(10); // November
    checkIn.setDate(25);
    checkIn.setHours(14);
    checkIn.setMinutes(0);
    checkIn.setSeconds(0);

    let totalAmount = roomPrice * nights;

    console.log("Guest Name:", guestName);
    console.log("Hotel:", hotelName);
    console.log("Room Type:", roomType);
    console.log("Room Price: ₹", roomPrice);
    console.log("Nights:", nights);
    console.log("Total Amount: ₹", totalAmount);
    console.log("Check-in Year:", checkIn.getFullYear());
    console.log("Check-in Month:", checkIn.getMonth() + 1);
    console.log("Check-in Date:", checkIn.getDate());
    console.log("Check-in Day:", checkIn.getDay());
    console.log("Check-in Hours:", checkIn.getHours());
    console.log("Check-in Minutes:", checkIn.getMinutes());
    console.log("Check-in Seconds:", checkIn.getSeconds());
    console.log("Room Reserved Successfully");
}

hotelReservation();