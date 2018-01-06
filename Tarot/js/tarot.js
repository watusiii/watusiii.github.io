//populate with thumb divs
/*for(i = 0; i < 12; i++)
{
    $('.thumbArea').append("<div class='thumb'></div>").animate({
    opacity: .25,
  }, 1000);
};
*/
(function myLoop (i) {
   setTimeout(function () {
      $('.thumbArea').append("<div class='thumb'></div>").fadeTo("slow", 100);          //  your code here
      if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
   }, 50)
})(12);

//the first child of the thumb area has a background image of the
//first card in the tarot

//2nd child, 2nd, card

//etc



//when you click on one of the the thumbnails,
// in the display windowk
//you get to see the full artwork
