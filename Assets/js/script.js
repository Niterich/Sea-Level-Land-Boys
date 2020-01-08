
let quotePic;
let quoteCategory;
let value;

$(".quoteGenButton").on("click", function() {
    clearDiv();
    value = $(this).val();
    console.log(value);
    $.ajax({
        url: "http://quotes.rest/qod.json?category=" + value,
        method: "GET"
    }).then(function(res) {
        console.log(res);
		quotePic = $("<img>").attr("src", "https://theysaidso.com/quote/image/" + res.contents.quotes[0].id);
        $("#quoteBenderDisplayDiv").append(quotePic);
        quotePic.addClass("quotePic");
    });
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?q="+ value +"&apiKey=83aa0452f72948bf8d4ed15cf295b532",
        method: "GET"
    }).then(function(resTwo){
        console.log(resTwo);
        for (let i = 0; i < resTwo.articles.length; i++) {
            const articleCard = $("<div>")
            const articleTitle = $("<h3>").text(resTwo.articles[i].title).appendTo(articleCard);
            const articlePic = $("<img>").attr("src", resTwo.articles[i].urlToImage).appendTo(articleCard);
            const articleDescription = $("<p>").text(resTwo.articles[i].description).appendTo(articleCard);
            const articleAuthor = $("<p>").text(resTwo.articles[i].author).appendTo(articleCard);
            const articleUrl = $("<a>").text("Link to article").attr("href", resTwo.articles[i].url).appendTo(articleCard);
            articleCard.addClass("card col-8")

            $("#articleDiv").append(articleCard);

        
        }

    })
});

function clearDiv(){
	$("#quoteBenderDisplayDiv").empty();
};
