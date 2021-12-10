let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let selectDay = document.getElementById("day");
let selectMonth = document.getElementById("month");
let selectYear = document.getElementById("year");

for(let i = 1; i < 32; i++){
    var newOption = document.createElement("option");
    newOption.setAttribute("value", `${i}`);
    newOption.innerHTML = `${i}`;
    selectDay.appendChild(newOption);
}

for(let i = 0; i < months.length; i++){
    var newOption = document.createElement("option");
    newOption.setAttribute("value", `${months[i]}`);
    newOption.innerHTML = `${months[i]}`;
    selectMonth.appendChild(newOption);
}

for(let i = 2021; i > 1899; i--){
    var newOption = document.createElement("option");
    newOption.setAttribute("value", `${i}`);
    newOption.innerHTML = `${i}`;
    selectYear.appendChild(newOption);
}
// declaring form messages and checking all of the fields
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let form = id("register");
let nickname = id("nickname");
let password = id("password");
let passwordConfirm = id("passwordConfirm");
let email = id("email");
let day = id("day");
let month = id("month");
let year = id("year");
let errors = classes("error");
var numberMistakes;

//regex check for email and nickname
let nicknameRegexCheck = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,20}[0-9]{1,5}$/;
let emailRegexCheck = /^[a-zA-Z0-9]([a-z]|[0-9])+.?-?_?([a-z]|[0-9]).?([az]|[0-9])@[a-z]{3,}.([a-z]{2,4}.)?([a-z]{2,4})$/g;
let passwordRegexCheck = /^[A-Z0-9][a-z0-9]{5,20}$/;

form.addEventListener("submit", (e) => {
    numberMistakes = 0;
    e.preventDefault();
    write(nickname, 0, "Your nickname is invalid, example: Timmy123, Tody457..");
    write(password, 1, "Your password cannot be like that lol");
    write(passwordConfirm, 2, "Passwords must match");
    emailCheck(email, "Must conatin @, domain after @, example: name@domain.com");
    yearsCheckFebruary(day, month, year, "Invalid date for the month", "Invalid date in February");
    yearsCheck(year, "You must be over 16 years");
    if (numberMistakes == 0){
        alert("Sucesfull registration");
        setTimeout("location.reload(true);",0);
    }
});

form.addEventListener("reset", (e) => {
    setTimeout("location.reload(true);",0);
});

let write = (day, month, year, message1, message2) => {
    var daysNumber = 0;
    switch(day.value){
        case "January", "March", "May", "July", "August", "October", "December": daysNumber = 31; break;
        case "April", "June", "September", "November": daysNumber = 30; break;
        default: daysNumber = 28;
    }
    if(parseInt(year.value) % 4 == 0){
        daysNumber = 29;
    }
    if(day.value > daysNumber){
        errors[4].innerHTML = message1;
        numberMistakes++;
    }
    if (parseInt(day.value) > 29 && month.value == "February") {
        errors[4].innerHTML = message2;
        numberMistakes++;
    } 
    else {
        errors[4].innerHTML = "";
    }
};

let emailCheck = (id, message) => {
    if (id.value == "") {
      errors[3].innerHTML = message;
      numberMistakes++;
    } else errors[3].innerHTML = "";
  };

let yearsCheckFebruary = (id, message) => {
    if (id.value > "2003") {
      errors[5].innerHTML = message;
      numberMistakes++;
    } else errors[5].innerHTML = "";
};

let yearsCheck = (id, message) => {
    if (id.value > "2003") {
      errors[5].innerHTML = message;
      numberMistakes++;
    } else errors[5].innerHTML = "";
};
