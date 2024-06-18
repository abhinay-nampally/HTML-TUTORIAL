//by using this keyword
// let employee={

//     empName : "Abhinay Nampally",
//     empId   : 22E410518,
//     experience: "5 years",
//     printExperience: function(){
//         console.log("experience =",this.experience);

//     },
//     printEmpId:function(){ 
//         console.log(`your id is ${empId}`);


//     }     
    

// };


let employee={
    calTax(){
        console.log("your Tax is 10%");
    },
};

let abhi1={
    calTax(){
        console.log("your tax is 20%");
    },
    salary:50000,
};
let abhi2={
    salary:50000,
};
let abhi3={
    salary:50000,
};
let abhi4={
    salary:50000,
};


abhi1.__proto__=employee;
abhi2.__proto__=employee;
abhi3.__proto__=employee;
abhi4.__proto__=employee;