//darko mode button from stackoverflow

let picToggle = document.getElementById("togglePicture");

let toggleDark = document.getElementById("iChange");

let black = window.getComputedStyle(document.documentElement).getPropertyValue('--pageColor');
console.log(black);
let white = window.getComputedStyle(document.documentElement).getPropertyValue('--whiteLetters');
console.log(white);
$("#toggleNightMode").click(() =>{
  if(toggleDark.classList.contains("fa-toggle-off")){
    toggleDark.classList.remove("fa-toggle-off");
    toggleDark.classList.add("fa-toggle-on");

    picToggle.src = "assets/img/headPhoneDark.gif";

    black = document.documentElement.style.setProperty('--pageColor', '#FFFFFF');
    white = document.documentElement.style.setProperty('--whiteLetters', '#121212');
  }
  else{
    toggleDark.classList.add("fa-toggle-off");
    toggleDark.classList.remove("fa-toggle-on");

    picToggle.src = "assets/img/headPhoneWhite.gif";

    black = document.documentElement.style.setProperty("--pageColor", "#121212");
    white = document.documentElement.style.setProperty('--whiteLetters', '#FFFFFF');
  }
});

$("#toggleNightModeNoPicture").click(() =>{
  if(toggleDark.classList.contains("fa-toggle-off")){
    toggleDark.classList.remove("fa-toggle-off");
    toggleDark.classList.add("fa-toggle-on");

    black = document.documentElement.style.setProperty('--pageColor', '#FFFFFF');
    white = document.documentElement.style.setProperty('--whiteLetters', '#121212');
  }
  else{
    toggleDark.classList.add("fa-toggle-off");
    toggleDark.classList.remove("fa-toggle-on");

    black = document.documentElement.style.setProperty("--pageColor", "#121212");
    white = document.documentElement.style.setProperty('--whiteLetters', '#FFFFFF');
  }
});

//end of dark mode button from stackoverflow

// creating header in HTML

let navigation = document.createElement("nav");
let redosled = document.createElement("ul");

let pageName = ["Home", "Register", "Author"];
let links = ["index.html", "register.html", "author.html"];

for(let i = 0; i < pageName.length; i++){
    var liChange = document.createElement("li");
    var aChange = document.createElement("a");
    var content = document.createTextNode(`${pageName[i]}`);
    liChange.appendChild(content);
    aChange.setAttribute("href", `${links[i]}`);
    aChange.appendChild(liChange);
    redosled.appendChild(aChange);
}

var headMenu = document.getElementById("menu");
navigation.appendChild(redosled);

var logoLink = document.createElement("a");
var logo = document.createElement("i");

logo.setAttribute("class", "fas fa-headphones");

logoLink.appendChild(logo);
logoLink.setAttribute("href", "index.html");

headMenu.appendChild(logoLink);
headMenu.appendChild(navigation);

// end of creating header in HTML

//footer creation
let futer = document.getElementById("footer");

var footerContent = [
    ["Home", "Author", "Register", "Documentation ", "index.html", "author.html", "login.html", "Dokumentacija.pdf"],
    ["Facebook", "Instagram", "Twitter", "Dribble", "https://www.facebook.com/", "https://www.instagram.com/", "https://www.twitter.com/", "https://dribbble.com/"],
    ["Call center: +38163 45 67 890", "Adress: Zdravka čelara 16", "Work time for call center: 08am - 04pm", "Music House Daily 2021"]
];

for(let i = 0; i < footerContent.length; i++){
    var ulFooter = document.createElement("ul");
    for(let j = 0; j < footerContent.length + 1; j++){
        var liFooter = document.createElement("li");
        var contentFooter = document.createTextNode(`${footerContent[i][j]}`);
        if(i != 2){
            var aFooter = document.createElement("a");
            aFooter.setAttribute("href", `${footerContent[i][j + 4]}`);
            if(i == 1){
                aFooter.setAttribute("target", "_blank");
            }
            aFooter.appendChild(contentFooter);
            if(i == 0 && j == 3){
              aFooter.innerHTML += "<i class=\"fas fa-file-pdf\"></i>";
              aFooter.setAttribute("target", "_blank");
            }
            liFooter.appendChild(aFooter);
        }
        else{
            liFooter.appendChild(contentFooter);
        }
        ulFooter.appendChild(liFooter);
    }
    futer.appendChild(ulFooter);
}

futer.innerHTML += '<div class="copyright">&copy;Copyright <a href="https://jelkesudo.github.io/portfolio/" target="_blank">Filip Jelić</a> 2021 - Visoka ICT</div>';
// adding copyright and link to the portfolio page
// end of footer creation

$("#backToTheTop").click(toTop);

mybutton = document.getElementById("backToTheTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 1;
    $(mybutton).fadeIn();
  } 
  else {
    $(mybutton).fadeOut();
  }
}

function toTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}