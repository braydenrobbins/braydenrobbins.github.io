var cards = [];
var cardNames = [];
var cardName = "";

function inputChange(event) {
    console.log(event.target.value);
    cardName = event.target.value;
}

function inputKeyUp(event) {
    var $cardList = $("#typeAhead");
    var value = event.target.value.toLowerCase();
    console.log(value.length);
    if (value.length < 2) {
        $cardList.html("");
        return
    }
    var cardsFound = cardNames.filter(c => c.toLowerCase().includes(value)).map(c => `<li><button onclick="showCard('${c}')">${c}</button></li>`).join('');
    $cardList.html(cardsFound);
}

function displayCard(event) {
    event.preventDefault()
    showCard(cardName);
}


function clearBox() {
    var cardName = $("#cardName");
    var cardList = $("#typeAhead");
    cardName.val("");
    cardName.focus();
    cardList.html("");
  }

function showCard(cardName) {
    var cardList = $("#cardList");
    var myHtml = "";
    var currentCard = cards.find(x => x.name.toLowerCase() === cardName.toLowerCase());
    myHtml = `<img src='${currentCard.imageUrl}'/>`;
    cardList.html(myHtml);
    console.log(myHtml);
    clearBox();
}

$(function() {
    $.get("https://api.magicthegathering.io/v1/cards?set=LEA|LEB|2ED|3ED&rarity=Rare", function(data) {
        cards = data.cards;
        cardNames = cards.map(c => c.name)
        console.log("done");
    }) 
// var cards = data.cards.map(function(card, index) {
        //     var myHtml = ""
        //     if (index === 0) {
        //         myHtml += "<div class='row'>"
        //     } else if (index % 4 === 0) {
        //          myHtml += "</div><div class='row'>"
        //      }
        //     myHtml += "<div class='col-md-3'><img src='" + card.imageUrl + "'/></div>" 
        //     return myHtml
        // }).join("\n")
        // console.log(cards)
        // cardList.html(cards);
})