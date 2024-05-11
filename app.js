// Date object for current date
const date1 = new Date();

let currentDay= String(date1.getDate()).padStart(2, '0');
let currentMonth = String(date1.getMonth()+1).padStart(2,"0");
let currentYear = date1.getFullYear();

// we will display the date as DD-MM-YYYY 
let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
let h2 = document.querySelector("h2").innerText = `Today date : ${currentDate}`;


let input = document.querySelector("#date");
// input value will not exceed from today value
input.max = new Date().toISOString().split("T")[0]; 


let btn = document.querySelector("button");

btn.addEventListener("click",function(){

    // Date object for dateOfBirth
    let date2 = new Date(input.value);

    let birthDay= String(date2.getDate()).padStart(2, '0');
    let birthMonth = String(date2.getMonth()+1).padStart(2,"0");
    let birthYear = date2.getFullYear();
    
    let birthDate = `${birthDay}-${birthMonth}-${birthYear}`;
    
    // for calculating age
    let year,month,day;
     year = currentYear - birthYear ;
    
    if(currentMonth >= birthMonth){
        month = currentMonth - birthMonth;
    }else{
        year--;
        month = 12 - (birthMonth - currentMonth);
        console.log(month);
    }

    if(currentDay >= birthDay){
        day = currentDay - birthDay;
    }else{
        month--;
        day = getDaysInMonth(birthYear,birthMonth) - (birthDay - currentDay); 
    }
   
     let h4 = document.querySelector("h4");
     h4.innerHTML = `You are <span>${year}</span> years,<span> ${month} </span> months and <span>${day}</span> days old`;
});

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
};