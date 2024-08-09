// let age=window.prompt("How old are you");
// console.log(age);

// let food=window.prompt("what is your favorite food");
// console.log(food);

let firstname;
let lastname;

document.getElementById("submit").onclick= function(){
    firstname=document.getElementById("firstname").Value;
    lastname=document.getElementById("lastname").Value;
    document.getElementById("p1").textContent=`Hi ${firstname} ${lastname}`;
    
   

}



