
// Function declaration

// function ageCal(name, age){
//      let currentDate=new Date();
//      let currentYear =currentDate.getFullYear();
//      let myAge =`Hi ${name} your age is ${currentYear - age}`;
//      console.log(myAge);
// }
// ageCal('Mona', 2000);

// Function Expresion

// const ageCal = function(name, age){
//      let currentDate=new Date();
//      let currentYear =currentDate.getFullYear();
//      let myAge =`Hi ${name} your age is ${currentYear - age}`;
//      console.log(myAge);
// }
// ageCal('Mona', 2000);

// Arrow Function 
const ageCal = (name, age)=>{
     let currentDate=new Date();
     let currentYear =currentDate.getFullYear();
     let myAge =`Hi ${name} your age is ${currentYear - age}`;
     console.log(myAge);
}
ageCal('Mona', 2000);