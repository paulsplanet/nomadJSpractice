// go for default, use let i really need it
/* String
const what = "string"; */

/* Boolean, true=1 false=0
Boolean is not a string
const what = false; */

/* Float
const what = 55.53; */

/* Array 
const daysOfWeek = ["Mon", "Tue", "Wed", "The", "Fri", "Sat", "Sun"] */

/* Object 

const paulInfo = {
  name: "paul",
  age: 36,
  gender: "Male",
  isHandsome: true,
  favFood: [
    { name: "Ricecake", fatty: true },
    {
      name: "Burger",
      fatty: true
    }
  ]
};

console.log(paulInfo);

paulInfo.gender = "Female";

console.log(paulInfo);*/

/* function sayHello(name, age) {
   return `"hello" ${name} you are ${age} years old`;
}

const greetPaul = sayHello("paul", 36);
console.log(greetPaul);
*/

const calculator = {
  plus: funcation(a, b){return a + b;}
};

const plus = calculator.plus(5, 5);
console.log(plus);