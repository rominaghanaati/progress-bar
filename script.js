const num = document.getElementById("num");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
let count = 0;
let count1 = 0;
let count2 = 0;

setInterval(() => {
    if( count === 82) {
        clearInterval()
    } else {
        count += 1;
        num.innerText = count + "%";
    }
}, 37)


setInterval(() => {
    if( count1 === 47) {
        clearInterval()
    } else {
        count1 += 1;
        num1.innerText = count1 + "%";
    }
}, 61);

setInterval(() => {
    if( count2 === 23) {
        clearInterval()
    } else {
        count2 += 1;
        num2.innerText = `${count2}%`;
    }
}, 125)