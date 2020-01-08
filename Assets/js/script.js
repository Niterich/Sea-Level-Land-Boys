
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
    });
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?q="+ value +"&apiKey=83aa0452f72948bf8d4ed15cf295b532",
        method: "GET"
    }).then(function(resTwo){
        console.log(resTwo);
    })
});

function clearDiv(){
	$("#quoteBenderDisplayDiv").empty();
};