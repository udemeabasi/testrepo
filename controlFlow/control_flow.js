// Declaration of variables (String)
let userRole = "admin"
let accessLevel;

// If else statement
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
// Definition of Output
console.log("Access Level:", accessLevel);

// Declaration of variables (Boolean)
let isLoggedIn = true;
let userMessage;

//Nested if... else statement
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber"
let userCategory;

//Execution of switch statement
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

//Use of ternary operator for isAuthenticated and authenticationStatus
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice task
let Person = "employee"
let accesslevel;

if (Person === "employee") {
    accessLevel = "Dietary Services";
} else if (Person === "Enrolled Member") {
    accessLevel = "Dietary Services and one-on-one interaction with a dietician";
  }  else if (Person == "Subscriber") {
     accessLevel = "Dietary services only"
} else {
    accessLevel = "Please enroll first to avail this facility";
}
// Definition of Output
console.log("Access Level:", accessLevel);
