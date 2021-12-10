// changing title on the start of the index page

var title = ["music", "artists", "albums"];

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

let names = ["Drake", "Rihanna", "Ye", "The Weekend", "Billie Eilish", "Eminem"];
let namesPictures = ["drake", "rihanna", "kanye", "weekend", "billie", "eminem"];

let carouselBlock = document.getElementById("carouselBlock");
let artistCarousel = document.createElement("div");
artistCarousel.setAttribute("class", "carousel");

for(artist in names){
  let anchorArtists = document.createElement("a");
  let artistDiv = document.createElement("div");

  anchorArtists.setAttribute("id", `${namesPictures[artist]}`);

  artistDiv.setAttribute("class", "carouselItem");

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
  $('.carousel').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 430,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});

//end of carousel

// news

function readMoreText(){

}

let news = document.querySelector("#news");

let newsTitles = ["Kanye drops new album \"Donda\"", 
                    "Rihanna named 11th national hero of Barbados", 
                    "Drake's new album just got out", 
                    "Kim and Ye divorce after 6 years of marriage", 
                    "Eminem released a new album", 
                    "Billie Eilish has a fragerance!!!", 
                    "Weekend tour shedueled for November 2022", 
                    "\"Bad guy\" reaches 1 Billion streams", 
                    "Title9",
                    "Title10",
                    "Title11",
                    "Title12"];
let newsCaption = ["Kanye climbed the leaderboar with his new album!", 
                    "Rihanna being honored in her home country!", 
                    "Certified Lover Boy hits top charts!", 
                    "Kim needed someone who \"she can spend her life with\"", 
                    "After a long wait, we finnaly got it!", 
                    "Lorem ipsum dolor sit amet", 
                    "It is right around the corner...", 
                    "Billie has reached an amaizing milestone", 
                    "Lorem ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet" ];

let newsPicture = ["kanye-chant.jpg", 
                    "rihanna-barbados.jpg",
                    "drake-clb.jpg",
                    "kim-and-kanye.jpg", 
                    "eminem-album.jpg", 
                    "billie-fragrance.jpg", 
                    "weekend-concert.jpg",
                    "bad-guy-billie.jpg",
                    "kanye-chant.jpg",
                    "weekend-concert.jpg",
                    "kanye-chant.jpg",
                    "kanye-chant.jpg"];
let newsContent = ["Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "\"May you continue to shine like a diamond\", the countrys prime minister, Mia Mottley, said at an investiture ceremony for the pop singer, fashion icon and entrepreneur, in reference to her 2012 hit Diamonds.", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet" ];
let sortNews = ["kanye", "rihanna", "drake", "kanye", "eminem", "billie", "weekend", "billie", "", "", "", ""];
for(let i = 0; i < newsTitles.length; i++){
    let newNewsArticle = document.createElement("div");
    
    newNewsArticle.setAttribute("class", `${sortNews[i]}`);
    newNewsArticle.setAttribute("class", "newsArticle");

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
      $(additionalText).toggle();
    });
    
    news.appendChild(newNewsArticle);
}

// end of news