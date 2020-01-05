let generatedQuote;
let quotePic;
let author;

$(".quoteGenButton").on("click", function() {
    const value = $(this).val();
    console.log(value);
    $.ajax({
        url: "http://quotes.rest/qod.json?category=" + value,
        method: "GET"
    }).then(function(res) {
        console.log(res);
		// generatedQuote = $("<p>").text(res.contents.quotes[0].quote);
		quotePic = $("<img>").attr("src", "https://theysaidso.com/quote/image/" + res.contents.quotes[0].id);
		// author = $("<p>").text("- " + res.contents.quotes[0].author)
		// $("#quoteBenderDisplayDiv").append(generatedQuote);
		// $("#quoteBenderDisplayDiv").append(author)
		$("#quoteBenderDisplayDiv").append(quotePic);
        // $("#generatorButtonWrapper").addClass("hide");
        // $("#benderButtonWrapper").removeClass("hide");
    });
    // $(".quoteBendButton").on("click", function() {
    //     const value = $(this).val();
    //     console.log(value);
    //     $.ajax({
    //         url: "https://api.funtranslations.com/translate/" + value + ".json?text=" + generatedQuote,
    //         method: "GET"
    //     }).then(function(resTwo) {
    //         console.log(resTwo);
    //     });
    // });
});

function clearDiv(){
	$("#quoteBenderDisplayDiv").empty();
}

// $(".qod").on("click", function() {
//     $.ajax({
//         url: "http://quotes.rest/qod.json",
//         method: "GET"
//     }).then(function(res) {
//         console.log(res);
// 		generatedQuote = $("<p>").text(res.contents.quotes[0].quote);
// 		quotePic = $("<img>").attr("src", res.contents.quotes[0].background);
// 		$("#quoteBenderDisplayDiv").append(quotePic);
//         $("#quoteBenderDisplayDiv").append(generatedQuote);
//         $("#generatorButtonWrapper").addClass("hide");
//         $("#benderButtonWrapper").removeClass("hide");
//     });
//     $(".quoteBendButton").on("click", function() {
//         const value = $(this).val();
//         console.log(value);
//         $.ajax({
//             url: "https://api.funtranslations.com/translate/" + value + ".json?text=" + generatedQuote,
//             method: "GET"
//         }).then(function(resTwo) {
//             console.log(resTwo);
//         });
//     });
// });

// $("#submitCustomQuoteButton").on("click", function(){
// 	event.preventDefault();
// 	generatedQuote = $("<p>").text($(this).prev().val());
//     $("#quoteBenderDisplayDiv").append(generatedQuote);
//     $("#generatorButtonWrapper").addClass("hide");
//     $("#benderButtonWrapper").removeClass("hide");

// })