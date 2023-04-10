var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 0;

setInterval( () => {
    if (count <= 998) {
        count = count + 2;
        counter.innerText = count;  
    }
}, 1)

setTimeout(() => {
    followers.innerText = 'Followrs on Instagram';
}, 2000)