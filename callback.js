const cookies = [{name:"Chocolate Cookies"}, {name:"Macaron Cookies"}];
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getAllCookies() {
  return cookies;
}

// Progression 2: using setTimeout()
// This function will log all cookies after 2 seconds
function logAllCookies() {
  setTimeout(() => {
    const allCookies = getAllCookies();
    console.log(allCookies);
  }, 2000);
}

// Progression 3: Create a function to create cookies
function createCookie(newCookie) {
  cookies.push(newCookie);
}

// Progression 5: calling functions
console.log("All Cookies (before creation):", getAllCookies());

createCookie(newCookie);
console.log("All Cookies (after creation):", getAllCookies());

logAllCookies();