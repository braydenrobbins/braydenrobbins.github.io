$(function() {
    $.get("https://api.magicthegathering.io/v1/cards?set=LEA|LEB|2ED|3ED&rarity=Rare", function(data){
        var cardList = $("#cardList");
        cardList.html(data.cards.map(function(card) {
            return "<li><img src='" + card.imageUrl + "'/></li>" 
        }).join(""));
    })
})