//Bara'a Abo-Asal : Write a JavaScript program to display the current day and time in the following format.
// Ex: Today is : Tuesday. Current time is : 10 PM : 30 : 38


function displayTimeAndDate() {
    const now = new Date(); // create a new Date object with the current date and time
    const options = { weekday: 'long' }; // set the option to display the day of the week in long format
    const dayOfWeek = now.toLocaleString('en-US', options); //this method gets the day of the week in long format
    const minutes = now.getMinutes(); //get the current minutes (0-59)
    const seconds = now.getSeconds(); //get the current seconds (0-59)
    let hours = now.getHours(); //get the current hour (0-23)
    let period = '';
    // if (hours > 12) {
    //     hours = hours - 12;
    //     period = 'PM';
    // }
    // else {
    //     hours = hours;
    //     period = 'AM';
    // }
    hours >= 12 ? (hours = hours - 12, period = 'PM') : (hours = hours, period = 'AM');
    return(`Today is: ${dayOfWeek}. Current time: ${hours} ${period} : ${minutes} : ${seconds}`);
}

console.log(displayTimeAndDate())