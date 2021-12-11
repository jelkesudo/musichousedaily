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
let nicknameRegexCheck = /^[A-Za-z]{1,20}[0-9]{3,20}$/;
let emailRegexCheck = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let passwordRegexCheck = /^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

form.addEventListener("submit", (e) => {
    numberMistakes = 0;
    e.preventDefault();
    checkName(nickname, 0, "Your nickname is invalid, you need at least 3 numbers, example: Jimmy123, Tody457..");
    passwordCheck(password, 1, "The password must contain one lowercase letter, one uppercase letter, one number, one unique character such as !@#$%^&? and be at least 6 characters long.");
    passwordConfirmCheck(password, passwordConfirm, 2, "Passwords must match");
    emailCheck(email, "Must conatin @, domain after @, example: name@domain.com");
    yearsCheck(year, "You must be over 16 years");
    if (numberMistakes == 0){
        alert("Sucesfull registration");
        setTimeout("location.reload(true);",0);
    }
});

form.addEventListener("reset", () => {
    setTimeout("location.reload(true);",0);
});

let checkName = (id, i, message) => {
    if (!nicknameRegexCheck.test(id.value)) {
      errors[i].innerHTML = message;
      numberMistakes++;
    } 
    else {
      errors[i].innerHTML = "";
    }
  };

let passwordCheck = (id, i, message) =>{
  if (id.value == "" || !passwordRegexCheck.test(id.value)) {
    errors[i].innerHTML = message;
    numberMistakes++;
  } 
  else {
    errors[i].innerHTML = "";
  }
}

let passwordConfirmCheck = (id, id2, i, message) =>{
  if (id.value != id2.value) {
    errors[i].innerHTML = message;
    numberMistakes++;
  } 
  else {
    errors[i].innerHTML = "";
  }
}

let emailCheck = (id, message) => {
    if (!emailRegexCheck.test(id.value)) {
      errors[3].innerHTML = message;
      numberMistakes++;
    } else errors[3].innerHTML = "";
  };

let yearsCheck = (id, message) => {
    if (parseInt(id.value) > 2005) {
      errors[5].innerHTML = message;
      numberMistakes++;
    } else errors[5].innerHTML = "";
};
