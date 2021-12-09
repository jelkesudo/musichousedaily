// changing title on the start of the index page

var title = ["music", "artists", "playlists"];

let spanTitle = document.querySelector('.contentText span');

//end of changing title on the start of the index page

//carousel

//end of carousel

// news
let news = document.querySelector("#news");

let newsTitles = ["Title1", 
                    "Title2", 
                    "Title3", 
                    "Title4", 
                    "Title5", 
                    "Title6", 
                    "Title7", 
                    "Title8", 
                    "Title9"];
let newsCaption = ["Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", ];

let newsPicture = ["assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg"]

for(let i = 0; i < newsTitles.length; i++){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newsArticle");

    let newTitle = document.createElement("h2");
    newTitle.innerHTML = `${newsTitles[i]}`;

    let newImg = document.createElement("img");
    newImg.src = `${newsPicture[i]}`;

    let newCaption = document.createElement("p");
    newCaption.innerHTML = `${newsCaption[i]}`;

    newDiv.appendChild(newImg);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newCaption);

    var readMoreText = document.createTextNode("Read more...");
    var readMore = document.createElement("span");

    readMore.appendChild(readMoreText);
    newDiv.appendChild(readMore);
    
    news.appendChild(newDiv);
}

// end of news

//carousel

$(document).ready(function(){
    $('.center').slick({
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
              slidesToShow: 2
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