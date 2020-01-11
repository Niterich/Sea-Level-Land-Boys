console.log("connected");
let quotePic;
let quoteCategory;
let value;
let emailCounter = 1;

$(".quoteGenButton").on("click", function() {
    console.log("clicked")
    clearDiv();
    value = $(this).val();
    console.log(value);
    $.ajax({
        url: "https://quotes.rest/qod.json?category=" + value,
        method: "GET"
    }).then(function(res) {
        console.log(res);
		quotePic = $("<img>").attr("src", "https://theysaidso.com/quote/image/" + res.contents.quotes[0].id);
        $("#quoteBenderDisplayDiv").append(quotePic);
        quotePic.addClass("quotePic");
    });
    $.ajax({
        url: "https://newsapi.org/v2/everything?q="+ value +"&apiKey=83aa0452f72948bf8d4ed15cf295b532",
        method: "GET"
    }).then(function(resTwo){
        console.log(resTwo);
        for (let i = 0; i < 12; i++) {
            const articleCard = $("<div>")
            const articleTitle = $("<h3>").text(resTwo.articles[i].title).appendTo(articleCard);
            const articlePic = $("<img>").attr("src", resTwo.articles[i].urlToImage).appendTo(articleCard);
            const articleDescription = $("<p>").text(resTwo.articles[i].description).appendTo(articleCard);
            const articleAuthor = $("<p>").text(resTwo.articles[i].author).appendTo(articleCard);
            const articleUrl = $("<a>").text("Link to article").attr("href", resTwo.articles[i].url).appendTo(articleCard);
            articleCard.addClass("card col-3");
            $("#articles").append(articleCard);
        };
    });
});
function clearDiv(){
    $("#quoteBenderDisplayDiv").empty();
    $("#articles").empty();
};
// Script for email list
$("#emailSubmit").on("click", function(e){
    e.preventDefault();
    localStorage.setItem(emailCounter, $("#inputEmail").val());
    emailCounter++;
})