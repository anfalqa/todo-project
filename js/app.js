'use strict';
var name = prompt("What is your name?");
var gender = prompt("What is your gender? The answer should be either male or female.");
var age = prompt("What is your age? ");
ageValidation(age);

function genderType(gender){
    let con = confirm(`Are you want to skip the welcoming message? \n press ok`)
    if (con==false){
        if (gender == 'male')
         {
            alert("Welcome, MR. " + name);

        }
         else if (gender == 'female')
        {
            alert("Welcome, MS. " + name);

        } else {
            alert("invaled !! the gender should be either male or female.");
        }
    }}

function ageValidation(age){
    if(age<=0){
        alert("invalid !!! The age should be more than zero.");
        }
}

genderType(gender);
console.log(name);
console.log(gender);
console.log(age);
console.log("the answer of the questions");

var arr=["","",""];
arr[0]=prompt("Do you make your daily plan and stick to it?");
arr[1]=prompt("Do you like cats?");
arr[2]=prompt("Do you commit to drinking 3 liters of water per day?");

function userAnswirs(arr){
for(var i = 0 ; i <arr.length ; i++){
   
    if (arr[i] == "" || arr[i] == null) {
        arr[i]="invaled"
    }
    console.log(arr[i]);
}
}
userAnswirs(arr);
