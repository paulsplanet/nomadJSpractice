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

/*
const calculator = {
  plus: function(a, b) {
    return a + b;
  }
};

const plus = calculator.plus(5, 5);
console.log(plus);
*/

/*
const title = document.getElementById("title");
// const title = document.querySelector("#title")
title.innerHTML = "Hi! from JS";
title.style.color = "blue";
document.title = "this is practice";
*/

/* 
function handleResize(){
  console.log("I have been resized")
};

window.addEventListener("resize", handleResize);
//window.addEventListener("resize", handleResize()); -> handleResize() means call the function now, imediately, without action
*/

/* 
const title = document.getElementById("title");

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/

const age = prompt("how old are you");
if (age > 18) {
  console.log("you can drink");
} else {
  console.log("you can't");
}
