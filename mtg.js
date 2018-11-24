$(function() {
    $.get("https://api.magicthegathering.io/v1/cards?set=LEA|LEB|2ED|3ED&rarity=Rare", function(data){
        var cardList = $("#cardList");
        var cardName = ""
        
        function inputChange(event){
            console.log(event.target.value)
            cardName = event.target.value
        }

        function displayCard() {
            var myHtml = ""
            var currentCard = data.cards.reduce(x => x.name === cardName)
            myHtml += "<img src='" + currentCard.imageUrl + "'/></div>"
            
        }



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
})