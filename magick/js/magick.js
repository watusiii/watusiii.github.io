//page
$('.manifesto').hide();
//$('.content').load('./pages/treeoflife.html');
$('.content').load('./pages/drawing.html');

/*skin link*/
//books links,
//get the name of it's id
//and load that name +.html in Content
$('.book a[href]').click(function(){
  name = $(this).attr('id');
  loadedPage = name +".html";
  console.log(loadedPage);
  $('.content').load('./pages/'+ loadedPage);
});

  /*Show Manifesto*/
  $('#manifestoButton').click(function(){
    $('.manifesto').slideDown();
  });


  /*close button*/
  $('#closeButton').click(function(){
    $(this).parent().slideUp();
  });
