let dayHour = parseInt(prompt("Enter a Hour of day:"));
let date = new Date();

let daily = date.setHours(dayHour);
let hour = date.getHours();
if (hour <= 11) {
    welcome = "Hi,Good Morning";
} else if (hour >= 12 && hour <= 15) {
    welcome = "Hi,Good Afternoon";
} else if (hour >= 16 && hour <= 18) {
    welcome = "Hi,Good Evening";
}
else {
    welcome = "Hi,Good Night";
}
document.write("<h2>" + welcome);
console.log(welcome);
// document.write("<br>" + hour + ":" + minute + ":" + second);