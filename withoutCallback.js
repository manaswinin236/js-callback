const cookies = [{ name: "Chocolate Cookies" }, { name: "Macaron Cookies" }];
const newCookie = { name: "Biscotti Cookies" };

// Progression 1: create a function to get all the cookies
function getAllCookies() {
  return cookies;
}

// Progression 2: using setTimeout() - use 1000 units for time parameter
function logAllCookiesWithDelay() {
  setTimeout(() => {
    console.log("All Cookies:", getAllCookies());
  }, 1000);
}

// Progression 3: Create a function to create cookies
// use setTimeout() -- use 2000 units for time parameter
function createCookieWithDelay(newCookie) {
  setTimeout(() => {
    cookies.push(newCookie);
    console.log("New Cookie created:", newCookie);
  }, 2000);
}

// Progression 4: calling functions
console.log("All Cookies (before creation):", getAllCookies());

logAllCookiesWithDelay();

createCookieWithDelay(newCookie);

// Wait for the delayed creation before logging all cookies
setTimeout(() => {
  logAllCookiesWithDelay();
}, 3000); // 3000 units to account for the delay in creating the new cookie
