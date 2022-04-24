
const n = prompt("Enter your year");

if ((n % 4 == 0) && !(n % 100 == 0)) {
    alert(`${n} is a leap year`);
}else{
    alert(`${n} is not a leap year`);
}