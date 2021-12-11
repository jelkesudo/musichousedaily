// form generation
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

//end of form generation

// declaring form messages and checking all of the fields

let form = document.getElementById("register");
let nickname = document.getElementById("nickname");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirm");
let email = document.getElementById("email");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let errors = document.getElementsByClassName("error");
var numberMistakes;

//regex check for email and nickname
let nicknameRegexCheck = /^[A-Za-z]{1,20}[0-9]{3,20}$/;
let emailRegexCheck = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let passwordRegexCheck = /^[A-Za-z0-9]{5,20}$/;

form.addEventListener("submit", (e) => {
    numberMistakes = 0;
    e.preventDefault();
    checkName(nickname, "Your nickname is invalid, you need at least 3 numbers, example: Jimmy123, Tody457..");
    passwordCheck(password, "Your password should be at least 5 characters long and contain letters and numbers");
    passwordConfirmCheck(password, passwordConfirm, "Passwords must match");
    emailCheck(email, "Must conatin @, domain after @, example: name@domain.com");
    yearsCheck(year, "You must be over 16 years");
    if (numberMistakes == 0){
        alert("Sucesfull registration");
        setTimeout("location.reload(true);", 0);
    }
});

form.addEventListener("reset", () => {
    setTimeout("location.reload(true);", 0);
});

let checkName = (check, message) => {
    if (!nicknameRegexCheck.test(check.value)) {
      errors[0].innerHTML = message;
      numberMistakes++;
    } 
    else {
      errors[0].innerHTML = "";
    }
  };

let passwordCheck = (check, message) =>{
  if (check.value == "" || !passwordRegexCheck.test(check.value)) {
    errors[1].innerHTML = message;
    numberMistakes++;
  } 
  else {
    errors[1].innerHTML = "";
  }
}

let passwordConfirmCheck = (check, check2, message) =>{
  if (check2.value == "" || check.value != check2.value) {
    errors[2].innerHTML = message;
    numberMistakes++;
  } 
  else {
    errors[2].innerHTML = "";
  }
}

let emailCheck = (check, message) => {
    if (!emailRegexCheck.test(check.value)) {
      errors[3].innerHTML = message;
      numberMistakes++;
    } else errors[3].innerHTML = "";
  };

let yearsCheck = (check, message) => {
    if (parseInt(check.value) > 2005) {
      errors[5].innerHTML = message;
      numberMistakes++;
    } else errors[5].innerHTML = "";
};
