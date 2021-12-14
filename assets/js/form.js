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

let nicknameBool = false;
let passwordBool = false;
let passwordConfirmBool = false;
let emailBool = false;
let yearBool = false;

//regex check for email and nickname
let nicknameRegexCheck = /^[A-Za-z]{1,20}[0-9]{3,20}$/;
let emailRegexCheck = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let passwordRegexCheck = /^[A-Za-z0-9]{5,20}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkName();
    passwordCheck();
    passwordConfirmCheck();
    emailCheck();
    yearsCheck();
    if (nicknameBool && passwordBool && passwordConfirmBool && emailBool && yearBool){
        alert("Sucesfull registration");
        setTimeout("location.reload(true);", 0);
    }
});

form.addEventListener("reset", () => {
    for(var i = 0; i < 6; i++){
      errors[i].innerHTML = "";
    }
});

function checkName() {
    if (nickname.value.match(nicknameRegexCheck)) {
      nicknameBool = true;
      errors[0].innerHTML = "";
    } 
    else {
      nicknameBool = false;
      errors[0].innerHTML = "Your nickname is invalid, you need at least 3 numbers, example: jimmy123, Tody457..";
    }
  };

function passwordCheck (){
  if (password.value == "" || !passwordRegexCheck.test(password.value)) {
    passwordBool = false;
    errors[1].innerHTML = "Your password should be at least 5 characters long and contain letters and numbers, it should not contain symbols";
  } 
  else {
    passwordBool = true;
    errors[1].innerHTML = "";
  }
}

function passwordConfirmCheck () {
  if (passwordConfirm.value == "" || password.value != passwordConfirm.value) {
    passwordConfirmBool = false;
    errors[2].innerHTML = "Passwords must match";
  } 
  else {
    passwordConfirmBool = true;
    errors[2].innerHTML = "";
  }
}

function emailCheck () {
    if (!emailRegexCheck.test(email.value)) {
      emailBool = false;
      errors[3].innerHTML = "Must conatin @, domain after @, example: name@domain.com";
    }
    else {
      emailBool = true;
      errors[3].innerHTML = "";
    }
  };

function yearsCheck () {
    if (parseInt(year.value) > 2005) {
      yearBool = false;
      errors[4].innerHTML = "You must be over 16 years";
    } 
    else {
      yearBool = true;
      errors[4].innerHTML = ""; 
    }
};

nickname.addEventListener("blur", checkName);
password.addEventListener("blur", passwordCheck);
passwordConfirm.addEventListener("blur", passwordConfirmCheck);
email.addEventListener("blur", emailCheck);
year.addEventListener("blur", yearsCheck);