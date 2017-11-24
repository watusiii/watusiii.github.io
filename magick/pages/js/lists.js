var name;
var loadedPage;
$('.listsList a[href]').click(function(){
  name = $(this).attr('id');
  loadedPage = name +".html";
  console.log(loadedPage);
  $('.listDisplay').load('./pages/lists/'+ loadedPage);
});
