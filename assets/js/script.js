console.log("OK");
if( window.location.pathname == '/musichousedaily/index.html' || window.location.pathname == '/musichousedaily/'){
  indexPage();
}
if(window.location.pathname == '/musichousedaily/register.html'){
  registerPage();
}

//dark mode button

let picToggle = document.getElementById("togglePicture");

let picToggleForm = document.getElementById("formPicture");

let toggleDark = document.getElementById("iChange");

let black = window.getComputedStyle(document.documentElement).getPropertyValue('--pageColor');

let lessDark = window.getComputedStyle(document.documentElement).getPropertyValue('--whiteLetters');

let white = window.getComputedStyle(document.documentElement).getPropertyValue('--titlesOther');

$("#toggleNightMode").click(() =>{
  if(toggleDark.classList.contains("fa-toggle-off")){
    toggleDark.classList.remove("fa-toggle-off");
    toggleDark.classList.add("fa-toggle-on");

    picToggle.src = "assets/img/headPhoneDark.gif";

    black = document.documentElement.style.setProperty("--pageColor", "#2e2e2e");
    white = document.documentElement.style.setProperty("--whiteLetters", "#121212");
    lessDark = document.documentElement.style.setProperty("--titlesOther", "#FFFFFF");
  }
  else{
    toggleDark.classList.add("fa-toggle-off");
    toggleDark.classList.remove("fa-toggle-on");

    picToggle.src = "assets/img/headPhoneWhite.gif";

    black = document.documentElement.style.setProperty("--pageColor", "#121212");
    white = document.documentElement.style.setProperty("--whiteLetters", "#FFFFFF");
    lessDark = document.documentElement.style.setProperty("--titlesOther", "#121212");
  }
});

$("#toggleNightModeRegister").click(() =>{
  if(toggleDark.classList.contains("fa-toggle-off")){
    toggleDark.classList.remove("fa-toggle-off");
    toggleDark.classList.add("fa-toggle-on");

    picToggleForm.src = "assets/img/headPhoneDark.gif";

    black = document.documentElement.style.setProperty("--pageColor", "#2e2e2e");
    white = document.documentElement.style.setProperty("--whiteLetters", "#121212");
    lessDark = document.documentElement.style.setProperty("--titlesOther", "#FFFFFF");
  }
  else{
    toggleDark.classList.add("fa-toggle-off");
    toggleDark.classList.remove("fa-toggle-on");

    picToggleForm.src = "assets/img/headPhoneWhite.gif";

    black = document.documentElement.style.setProperty("--pageColor", "#121212");
    white = document.documentElement.style.setProperty("--whiteLetters", "#FFFFFF");
    lessDark = document.documentElement.style.setProperty("--titlesOther", "#121212");
  }
});

$("#toggleNightModeNoPicture").click(() =>{
  if(toggleDark.classList.contains("fa-toggle-off")){
    toggleDark.classList.remove("fa-toggle-off");
    toggleDark.classList.add("fa-toggle-on");

    black = document.documentElement.style.setProperty("--pageColor", "#2e2e2e");
    white = document.documentElement.style.setProperty("--whiteLetters", "#121212");
    lessDark = document.documentElement.style.setProperty("--titlesOther", "#FFFFFF");
  }
  else{
    toggleDark.classList.add("fa-toggle-off");
    toggleDark.classList.remove("fa-toggle-on");

    black = document.documentElement.style.setProperty("--pageColor", "#121212");
    white = document.documentElement.style.setProperty('--whiteLetters', '#FFFFFF');
    lessDark = document.documentElement.style.setProperty('--titlesOther', '#121212');
  }
});

//end of dark mode button

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
  document.documentElement.scrollTop = 0;
}

function indexPage(){
  // changing title on the start of the index page

  var title = ["reviews", "artists", "albums"];

  let spanTitle = document.querySelector('.contentText span');

  var counter=0;
  function changeHeading(){
    spanTitle.innerHTML=title[counter];
    counter++;
    if(counter>2){
      counter=0;
    }
  }

  setInterval(changeHeading, 2000);

  //end of changing title on the start of the index page

  //carousel

  let names = ["Show All", "Drake", "Rihanna", "Ye", "The Weekend", "Billie Eilish", "Eminem"];
  let namesPictures = ["all", "drake", "rihanna", "kanye", "weekend", "billie", "eminem"];

  let carouselBlock = document.getElementById("carouselBlock");
  let artistCarousel = document.createElement("div");
  artistCarousel.setAttribute("id", "carousel");

  for(artist in names){
    let anchorArtists = document.createElement("a");
    let artistDiv = document.createElement("div");

    anchorArtists.setAttribute("class", `${namesPictures[artist]}`);

    artistDiv.classList.add("carouselItem");

    let picture = document.createElement("img");
    picture.src = `assets/img/carousel/carousel_${namesPictures[artist]}.jpg`;
    picture.alt = namesPictures[artist];

    let artistsName = document.createElement("div");
    artistsName.setAttribute("class", "artistName");

    let artistsNameP = document.createElement("p");
    artistsNameP.innerHTML = `${names[artist]}`;

    artistsName.appendChild(artistsNameP);

    artistDiv.appendChild(picture);
    artistDiv.appendChild(artistsName);

    anchorArtists.appendChild(artistDiv);
    artistCarousel.appendChild(anchorArtists);

  }

  carouselBlock.appendChild(artistCarousel);





  $(document).ready(function(){
    $("#carousel").slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: true
          }
        }
      ]
    });
  });

  //end of carousel

  // news

  let news = document.querySelector("#news");

  let newsTitles = ["Kanye drops new album \"Donda\"", 
                      "Rihanna named 11th national hero of Barbados", 
                      "Drake's new album just got out", 
                      "Kim and Ye divorce after 6 years of marriage", 
                      "Eminem released a new album", 
                      "Billie Eilish has a fragerance!!!", 
                      "Weekend tour shedueled for November 2022", 
                      "\"Bad guy\" reaches 1 Billion views", 
                      "\"Jesus is king\" still on the top",
                      "Drake withdraws Grammy 2022 nominations",
                      "\"Blinding lights\" all-time No.1 Billboard single",
                      "\"Moms spageti\" is real?!"];

  let newsCaption = ["Kanye climbed the leaderboar with his new album!", 
                      "Rihanna being honored in her home country!", 
                      "Certified Lover Boy hits top charts!", 
                      "Kim needs someone who \"she can spend her life with\"", 
                      "After a long wait, we finnaly got it!", 
                      "When will it be able?", 
                      "It is right around the corner...", 
                      "Billie has reached an amaizing milestone!", 
                      "But we are waiting for Donda to rise!",
                      "What could be the reason?",
                      "Does it really deserve the title?",
                      "Once a dream, now we can proudly say a reality" ];

  let newsPicture = ["kanye-chant.jpg", 
                      "rihanna-barbados.jpg",
                      "drake-clb.jpg",
                      "kim-and-kanye.jpg", 
                      "eminem-album.jpg", 
                      "billie-fragrance.jpg", 
                      "weekend-concert.jpg",
                      "bad-guy-billie.jpg",
                      "kanye-jeesus.jpg",
                      "drake-gramy.jpg",
                      "blinding-lights.jpg",
                      "moms-spagetti.jpg"];

  let newsContent = ["Kanye West's 10th album arrives barely finished and with a lot of baggage. Its 27 tracks include euphoric highs that lack connective tissue, a data dump of songs searching for a higher calling.", 
                      "\"May you continue to shine like a diamond\", the countrys prime minister, Mia Mottley, said at an investiture ceremony for the pop singer, fashion icon and entrepreneur, in reference to her 2012 hit Diamonds.", 
                      "Drake's sixth album sounds good but feels labored. Melancholic and often incisive, it becomes an overlong and very familiar journey through the life, mind, and heart of Drake. The Certified Lover Boy is selectively honest, occasionally heartless, and set in his ways.", 
                      "Days after Kim Kardashian honoured Kanye West during her People's Choice Awards speech, the rapper has made another public plea for them to rekindle their romance. 'I need you to run right back to me,' West said on Thursday night, during a performance of hit song 'Runaway', at the Free Larry Hoover benefit concert, before adding: 'More specifically, Kimberly.'", 
                      "\"Music to be murdered by\" is the new album by Eminem that recently dropped on all streaming platforms. All harcore fans of Eminem waited for this moment, for the king of rap and lyrics to be one more in the spotlight", 
                      "The perfume additionally features notes of amber and musk, as well as cocoa and berries. Eilish will be dropping online at 9 a.m. PST (12 p.m. EST) on November 10. Priced at $68 USD, Eilish will be available in stores all across the globe.", 
                      "The Weekend is shifting around his 2022 tour plans, pushing back the start of the trek to next summer and moving his gigs from arenas to stadiums. In a statement, the Weeknd said, “Due to constraints of arenas and the demand for more shows I want to do something bigger and special for you which requires stadiums.” Ticket holders will be refunded automatically, and they'll also get priority to buy tickets for the new shows when they're announced. Dates will be detailed soon.", 
                      "\"Bad Guy\" surpassed one billion views in November 2020; to celebrate, Google created an 'Infinite Bad Guy' interactive site that allowed users to switch between over 15,000 different covers of the song available on YouTube.", 
                      "Jesus Is King is the ninth studio album by American rapper Kanye West, that got a lot of streams since it was released, but statistics show that Donda may surpass his ninth album by a lot!",
                      "Rapper and singer Drake has withdrawn his two nominations for the 2022 Grammy Awards. The Canadian star, a previous four-time Grammy winner, had been in the running for Best Rap Album for his sixth studio record Certified Lover Boy, and Best Rap Performance for single Way 2 Sexy featuring Future and Young Thug.",
                      "The Weeknd's hit single Blinding Lights has officially been crowned the all-time No 1 song on the Billboard single charts, ousting Chubby Checker's 1960s hit the Twist. The song, an instant synth-pop classic, debuted in late November 2019 and topped the weekly Billboard Hot 100 for four weeks in April and May 2020, going on to spend a record-shattering 90 consecutive weeks on the chart.",
                      "Mom's Spaghetti existed sporadically before it set up shop in the southwest corner of Union Assembly, the new downtown Detroit venture operated by Michigan restaurant group Union Joints. The company launched in 1995 in nearby Clarkston, operating a restaurant out of a shuttered 19th Century Baptist Church—its big draw is the mac and cheese, so the company knows its way around a noodle. Union Joints helped Eminem and his manager, Paul Rosenberg, launch their pasta place in 2017 with a pop-up to help celebrate the arrival of the rapper's album Revival." ];

  let sortNews = ["kanye", "rihanna", "drake", "kanye", "eminem", "billie", "weekend", "billie", "kanye", "drake", "weekend", "eminem"];

  let anchorArtistsId = artistCarousel.children;

  for(let i = 0; i < newsTitles.length; i++){
      let newNewsArticle = document.createElement("div");
      
      newNewsArticle.setAttribute("class", "newsArticle");
      newNewsArticle.classList.add(`${sortNews[i]}`);
      newNewsArticle.classList.add("show");

      let newTitle = document.createElement("h2");
      newTitle.innerHTML = `${newsTitles[i]}`;

      let newImg = document.createElement("img");
      newImg.src = `assets/img/news/${newsPicture[i]}`;

      let newCaption = document.createElement("p");
      newCaption.innerHTML = `${newsCaption[i]}`;
      newCaption.setAttribute("class", "titleNews");

      let newContent = document.createElement("p");
      newContent.innerHTML = `${newsContent[i]}`;
      newContent.setAttribute("id", `moreText${i}`);

      newNewsArticle.appendChild(newImg);
      newNewsArticle.appendChild(newTitle);
      newNewsArticle.appendChild(newCaption);

      var readMoreText = document.createTextNode("Click/tap the box for more...");
      var readMore = document.createElement("span");
      readMore.setAttribute("id", `readMore${i}`);
      readMore.style.display = "block"

      newNewsArticle.appendChild(newContent);

      readMore.appendChild(readMoreText);
      newNewsArticle.appendChild(readMore);

      $(newNewsArticle).click(function(){
        var button = document.getElementById(`readMore${i}`);
        var additionalText = document.getElementById(`moreText${i}`);
        if(button.innerHTML == "Click/tap the box for more..."){
          button.innerHTML = "Click/tap the box to minimize...";
        }
        else{
          button.innerHTML = "Click/tap the box for more...";
        }
        $(additionalText).slideToggle('slow');
      });


      news.appendChild(newNewsArticle);
  }

  let newsArticle = document.getElementById("news").children;

  // end of news

  //sort

  let aArrayID = Array.prototype.slice.call(anchorArtistsId, 0);

  let newsArticleID = Array.prototype.slice.call(newsArticle, 0);

  for(let i = 0; i < aArrayID.length; i++){
    aArrayID[i].addEventListener("click", function(){
      filterArtists(`${namesPictures[i]}`);
    });
  }

  function filterArtists(check/*namesPicture*/) {
    var articles, i;
    articles = document.getElementsByClassName("newsArticle");
    if (check == "all"){
      check = "";
    }
    for (i = 0; i < articles.length; i++) {
      articles[i].classList.remove("show");
      if (articles[i].className.indexOf(check) > -1){
        articles[i].classList.add("show");
      }
    }
  }

}

function registerPage(){
  console.log("OK");
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
}