$(document).ready(function (){
    $('#clicker').click(function(){
        $.ajax({
            datatype: "jsonp",
            jsonpCallback: "text",
            url: "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
            success : function(results){
                $('.facts').text(results["text"]);
            },
            error: function(xhr,status,error){
                console.log(error);
            }
        });
    });
    $('.spray-bottle').click(function(){
        $.ajax({
            datatype: "jsonp",
            jsonpCallback: "file",
            url: "https://cataas.com/cat?json=true",
            success: function(results){
                console.log(results["url"]);
                    $('.cats').attr("src", "https://cataas.com/" + results["url"]);
            },
            error: function(xhr,status,error){
                console.log(error);
            }
        })
    })
});