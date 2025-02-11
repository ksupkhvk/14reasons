var array1 = [
    ["img/card-front1.png", "img/card-back1.png"], 
    ["img/card-front2.png", "img/card-back2.png"], 
    ["img/card-front3.png", "img/card-back3.png"], 
    ["img/card-front4.png", "img/card-back4.png"],
    ["img/card-front5.png", "img/card-back5.png"], 
    ["img/card-front6.png", "img/card-back6.png"], 
    ["img/card-front7.png", "img/card-back7.png"],
    ["img/card-front8.png", "img/card-back8.png"], 
    ["img/card-front9.png", "img/card-back9.png"], 
    ["img/card-front10.png", "img/card-back10.png"], 
    ["img/card-front11.png", "img/card-back11.png"],
    ["img/card-front12.png", "img/card-back12.png"], 
    ["img/card-front13.png", "img/card-back13.png"], 
    ["img/card-front14.png", "img/card-back14.png"]
];

var html = "";

for (var i = 0; i < array1.length; i++) {
    var tmp = "";
    tmp =  "<div class='card' onclick='flipCard(this)'> ";
    tmp += "<div class='card-inner'>";
    tmp += "<div class='card-front'>";
    tmp += "<img src='"+array1[i][0]+"' alt='Card 1'>";
    tmp += "</div>";
    tmp += "<div class='card-back'>";
    tmp += "<img src='"+array1[i][1]+"' alt='Card 1 Back'>";
    tmp += "</div>";
    tmp += "</div>";
    tmp += "</div>";
    html += tmp;
}

console.log(html);

document.querySelector(".cards-container1").innerHTML = html;

function flipCard(card) {
    card.classList.toggle("flipped");
}