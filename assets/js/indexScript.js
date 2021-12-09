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

let names = ["Drake", "Rihanna", "Kanye West", "The Weekend", "Idk", "Idk2"];
let namesPictures = ["drake", "rihanna", "kanye", "weekend", "weekend", "weekend"];

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
                    "Title3", 
                    "Title4", 
                    "Title5", 
                    "Title6", 
                    "Title7", 
                    "Title8", 
                    "Title9",
                    "Title10",
                    "Title11",
                    "Title12"];
let newsCaption = ["Kanye climbed the leaderboar with his new album", 
                    "Rihanna being honored a new title", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet",
                    "Lorem ipsum dolor sit amet" ];

let newsPicture = ["picture1.jpg", 
                    "picture1.jpg",
                    "picture1.jpg",
                    "picture1.jpg", 
                    "picture1.jpg", 
                    "picture1.jpg", 
                    "picture1.jpg",
                    "picture1.jpg",
                    "picture1.jpg",
                    "picture1.jpg",
                    "picture1.jpg",
                    "picture1.jpg"];
let newsContent = ["Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet", 
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

for(let i = 0; i < newsTitles.length; i++){
    let newNewsArticle = document.createElement("div");
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

    newNewsArticle.addEventListener("click", function(){
      var button = document.getElementById(`readMore${i}`);
      var additionalText = document.getElementById(`moreText${i}`);
      if(button.innerHTML == "Click/tap the box for more..."){
        button.innerHTML = "Click/tap the box to minimize...";
        $( "select#foo option:checked" ).val();
      }
      else{
        button.innerHTML = "Click/tap the box for more...";
        $( "select#foo option:checked" ).val();
      }
      $(additionalText).toggle();
    });
    
    news.appendChild(newNewsArticle);
}

// end of news