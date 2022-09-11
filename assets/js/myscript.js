
// Function declaration

function ageCale(name, age){
     let currentDate=new Date();
     let currentYear =currentDate.getFullYear();
     let myAge =`Hi ${name} your age is ${currentYear - age}`;
     console.log(myAge);
}
ageCale('Mona', 2000);

// Function Expresion

const ageCalculator = function(name, age){
     let currentDate=new Date();
     let currentYear =currentDate.getFullYear();
     let myAge =`Hi ${name} your age is ${currentYear - age}`;
     console.log(myAge);
}
ageCalculator('Labib', 2014);

// Arrow Function 
const ageCal = (name, age)=>{
     let currentDate=new Date();
     let currentYear =currentDate.getFullYear();
     let myAge =`Hi ${name} your age is ${currentYear - age}`;
     console.log(myAge);
}
ageCal('Manik', 1984);