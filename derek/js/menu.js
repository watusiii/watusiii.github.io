$('.menuItem').hover(function(){

  $(this).addClass("hovering", {duration:5000});
}, function(){
  $(this).removeClass("hovering",{duration:5000});

});
