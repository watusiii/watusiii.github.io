
$(document).ready(function(){
$(".navigation").toggleClass("hidden");
$(".about").toggleClass("hidden");
    $(".btn").click(function() {
        $(".tp").toggleClass("down");
        $(".navigation").toggleClass("hidden");
         $(".bt").toggleClass("up");
    });
    $("#about").click(function() {
      $(".about").toggleClass("hidden");
    });
    $("#close").click(function() {
      $(".about").toggleClass("hidden");
    });



});
