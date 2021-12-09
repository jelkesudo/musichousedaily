// changing title on the start of the index page

var title = ["music", "artists", "news"];

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

let newsTitles = ["Title1", 
                    "Title2", 
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
let newsCaption = ["Lorem ipsum dolor sit amet", 
                    "Lorem ipsum dolor sit amet", 
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

let newsPicture = ["assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg", 
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg",
                    "assets/img/news/picture1.jpg"];
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
    newImg.src = `${newsPicture[i]}`;

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

    readMore.appendChild(readMoreText);
    newNewsArticle.appendChild(readMore);

    newNewsArticle.appendChild(newContent);

    newNewsArticle.addEventListener("click", function(){
      var button = document.getElementById(`readMore${i}`);
      var additionalText = document.getElementById(`moreText${i}`);
      if(button.style.display === "block"){
        button.style.display = "none";
        additionalText.style.display = "block";
      }
      else{
        button.style.display = "block";
        additionalText.style.display = "none";
      }
    });
    
    news.appendChild(newNewsArticle);
}

// end of news