$(document).ready(function (){
    var state = 0;
    $('#clicker').click(function(){
        console.log(state);
       if (state <1){
        $('#green_light').css("background-color", "green");
        $('#yellow_light').css("background-color", "grey");
        $('#red_light').css("background-color", "grey");
        state++;
        console.log(state);
       }else if (state ==1 ){
        $('#yellow_light').css("background-color", "yellow");
        $('#red_light').css("background-color", "grey");
        $('#green_light').css("background-color", "grey");
        
        state++;
        console.log(state);
       }else{
        $('#red_light').css("background-color", "red");
        $('#yellow_light').css("background-color", "grey");
        $('#green_light').css("background-color", "grey");
        state = 0;
        console.log(state);
       }
    });
});