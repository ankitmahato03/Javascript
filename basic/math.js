const score = 400;
console.log(score);

// the score assign value javascript convert into number although it it nat a number

const balance = new Number(100)
console.log(balance);
// this is a number  typecastd

console.log(balance.toFixed(2));
const number = 1245.00

console.log(number.toPrecision(2))
//if you use precision keep in mind that the value goes round of after the number which you passed in precision in this case which is 2


const myAccountBal=124512541454

console.log(myAccountBal.toLocaleString('en-IN'));

console.log(Math.random());

console.log(Math.floor(Math.random()*10)+1);
