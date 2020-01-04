let generatedQuote;

$(".quoteGenButton").on("click", function(){
    const value = $(this).val();
    console.log(value)
    $.ajax({
        url: "http://quotes.rest/qod.json?category=" + value,
        method: "GET"
      }).then(function(res) {
        console.log(res);
        generatedQuote = $("<p>").text(res.contents.quotes[0].quote);
        $("#quoteBenderDisplayDiv").append(generatedQuote);
        $("generatorButtonwrapper").addClass("hide");
        $("#benderButtonWrapper").removeClass("hide");
      })
      $(".quoteBendButton").on("click", function(){
        const value = $(this).val();
        console.log(value);
        $.ajax({
            url: "https://api.funtranslations.com/translate/" + value + ".json?text=" + generatedQuote,
            method: "GET",
        }).then(function(resTwo){
        console.log(resTwo.contents.translated);
        })
    })
})
