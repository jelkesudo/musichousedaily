// creating header in HTML

let navigation = document.createElement("nav");
let redosled = document.createElement("ul");

let pageName = ["Home", "Author", "Register"];
let links = ["index.html", "author.html", "login.html",];

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
    ["Home", "Author", "Register", "index.html", "author.html", "login.html"],
    ["Facebook", "Instagram", "Twitter", "https://www.facebook.com/", "https://www.instagram.com/", "https://www.twitter.com/"],
    ["Call center: +38163 45 67 890", "Adress: Zdravka Celara 16", "Work time for call center: 08am - 04pm"]
]

for(let i = 0; i < footerContent.length; i++){
    var ulFooter = document.createElement("ul");
    for(let j = 0; j < footerContent.length; j++){
        var liFooter = document.createElement("li");
        var contentFooter = document.createTextNode(`${footerContent[i][j]}`);
        if(i != 2){
            var aFooter = document.createElement("a");
            aFooter.setAttribute("href", `${footerContent[i][j + 3]}`);
            aFooter.setAttribute("target", "_blank");
            aFooter.appendChild(contentFooter);
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
