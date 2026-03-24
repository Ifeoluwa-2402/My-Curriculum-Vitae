

// const section1 = document.querySelector(".test1");
// const section2 = document.querySelector(".test2");
// const section3 = document.querySelector(".test3");
// const section4 = document.querySelector(".test4");
// const section = document.querySelector(".test6");

// const para1 = document.createElement("p");
// const para2 = document.createElement("p");
// const para3 = document.createElement("p");
// const para4 = document.createElement("p");
// const para5 = document.createElement("p");
// const para8 = document.querySelector(".test5 p");


// // do not edit the code above here!


// // code for test 1 
// // Fix the following code

// let myName = "Default";
// myName = "Chris";

// let myAge = 42;

// // Don't edit the code below here!
// para1.textContent = myName;
// para2.textContent = `In 20 years, I will be ${myAge + 20}`;
// section1.appendChild(para1);
// section1.appendChild(para2);


// // code for practice 2 
// // insert your code here
// let result = 7 + 13 / 9 + 7;
// let result2 = (100 / 2) * 6;
// result *= result2;

// let finalResult = result.toFixed(2);
// let finalNumber = Number(finalResult);

// // Don't edit the code below here!
// para3.textContent = `Your finalResult is ${finalResult}`;
// const finalNumberCheck =
//   isNaN(finalNumber) === false
  //  ? "finalNumber is a number type. Well done!"
//     : `Oops! finalNumber is not a number.`;
// para4.textContent = finalNumberCheck;
// section2.appendChild(para3);
// section2.appendChild(para4);

// // code for practice 3

// const quoteStart = `Don't judge each day by the harvest you reap `;
// // Add your code here
// const quoteEnd = `but by the seeds that you plant.`;

// const finalQuote = quoteStart + quoteEnd;

// // Don't edit the code below here!
// para5.textContent = finalQuote;
// section3.appendChild(para5); 



// // code for practice 4
// const para6 = document.querySelector(".score");
// const para7 = document.querySelector(".response");
// const switchButton = document.querySelector(".switch");

// let machineActive = false;
// let response;
// let random = () => Math.floor( Math.random() * 100 ) + 1;
// let score = 0;



// // Don't edit the code below here!
// switchButton.addEventListener("click", () => {
//   machineActive = !machineActive;
//   para6.textContent = machineActive ? score = random() : 0;

//   // Add your code here
//   if (machineActive) {
//     if (score < 0 || score > 100) {
//       response = "This is not possible, an error has occurred."
//     } else if ( score >= 0 && score <= 19 ) {
//       response = "That was a terrible score — total fail!"
//     } else if ( score >= 20 && score <= 39 ) {
//       response = "You know somethings, but it's a pretty bad score. Needs improvement."
//     } else if ( score >= 40 && score <= 69 ) {
//       response = "You did a passable job, not bad!"
//     }  else if ( score >= 70 && score <= 89 ) {
//       response = "That's a great score, you really know your stuff."
//     }  else if ( score >= 90 && score <= 100 ) {
//       response = "What an amazing score! Did you cheat? Are you for real?"
//     } 
// } else {
//     response= "Switch on the machine";
// }
//   // do not edit the code below
//   para7.textContent = response;
//   switchButton.textContent = machineActive ? "Machine is on" : "Machine is off";
// });



//  // code for practice 5

// const names = [
//   "Chris",
//   "Li Kang",
//   "Anne",
//   "Francesca",
//   "Mustafa",
//   "Tina",
//   "Bert",
//   "Jada",
// ];
// const para = document.querySelector("p");
// // Don't edit the code above here!

// // Update the code below here

// const shortNames = names.filter(name => name.length < 5) 
// para8.textContent = shortNames;



// // code for practice 6
// let i = 500;
// const para9 = document.createElement("p");

// // Don't edit the code above here!

// // Add your code here
// function isPrime(num){
//   for(let i = 500; i <= 2; i--) {
//     if(i % 2 === 0) {
        
//     }
//   }
// }

// // Don't edit the code below here!       

// section.appendChild(para9);





const list = document.querySelector("ul");
const input = document.querySelector("input");
const addItem = document.querySelector(".add-item");

addItem.addEventListener('click', (e) => {
  e.preventDefault();

  let listOption = input.value;
  input.value = "";

  const myList = document.createElement("li");
  const mySpan = document.createElement("span");
  const btn = document.createElement("button");

  if(listOption) {
    myList.appendChild(mySpan);
    mySpan.textContent = listOption;
    myList.appendChild(btn)
    btn.textContent = "remove";

    list.appendChild(myList);
  }

  btn.addEventListener('click', () => {
    list.removeChild(myList);
  })
  input.focus();
})


/***
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

***/



// Construction function for Person Object

function Person(first, last, age, talent) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.talent = talent;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
}

const myFather = new Person("Solomon", "Olugbode", 50, "Teaching");
console.log(myFather)

document.getElementById('demo').innerHTML =
  `My father is ${myFather.fullName()}`;