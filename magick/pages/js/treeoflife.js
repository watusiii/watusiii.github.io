var canvas = document.querySelector('canvas');

canvas.width = 500;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

///Center Point
//The paths
//array of objects called sephiroth

var $canvas =  $('#canvas');

var tcentX = canvas.width/2;
var tcentY = canvas.height/2;

var sephRadius = 30;
var step = sephRadius*2;

var mouse = {
  x: undefined,
  y: undefined
};



function drawSephirah(stepCountX,stepCountY){
  c.beginPath();
  c.arc(tcentX + step * stepCountX,tcentY + step * stepCountY,sephRadius, 0, Math.PI * 2, false);
  c.fillStyle = 'rgba(0,0,0,1)';
  c.fill();
  c.stroke();
}

function drawPath(startX,startY,endX,endY){
  c.beginPath();
  c.moveTo(tcentX + step * startX,tcentY + step * startY);
  c.lineTo(tcentX + step * endX,tcentY + step * endY);
  c.strokeStyle = "#000000";
  c.stroke();
}

function treeOfLife(){
  /*creating objects*/
  function sephirah(stepCountX, stepCountY, name, planet){
    this.stepCountX = stepCountX;
    this.stepCountY = stepCountY;
    this.name = name;
    this.planet = planet;
    //draw
    drawSephirah(stepCountX,stepCountY);

    function display(){
      console.log(name);
    };

  }

  //SEPHIROTH
  var keter = new sephirah(0, -4, "Keter", "Neptune");
  var chokmah = new sephirah(2,-3,"Chokmah","Uranus");
  var binah = new sephirah(-2,-3,"Binah","Saturn");
  var chesed = new sephirah(2,-1,"Chesed","Jupiter");
  var geburah = new sephirah(-2,-1,"Geburah","Mars");
  var tiferet = new sephirah(0,0,"Tiferet","Sun");
  var netzach = new sephirah(2,1,"Netzach","Venus");
  var hod = new sephirah(-2,1,"Hod","Mercury");
  var yesod = new sephirah(0,2,"Yesod","Moon");
  var malkut = new sephirah(0,4,"Malkut","Earth");
  var daath = new sephirah(0,-2,"Daath","Astroids");

  //interaction
  window.addEventListener('mousemove', function(event){
    var x =

    mouse.x = event.x;
    mouse.y = event.y;
    console.log(event.x);
  });

  console.log(hod.stepCountX);
  //PATHWAYS
  drawPath(0,-4,2,-3);
  //2
  drawPath(2,-3,-2,-3);
  //3
  drawPath(-2,-3,2,-1);
  //4
  drawPath(2,-1,-2,-1);
  //5
  drawPath(-2,-1,2,1);
  //6
  drawPath(2,1,-2,1);
  //7
  drawPath(-2,1,0,2);
  //8
  drawPath(0,2,0,4);
};




  //CENTER
  c.fillStyle = 'rgba(255,0,0,1)';
  c.fillRect(tcentX,tcentY,4,4);

  //interact
  treeOfLife();
  //Paths
  //1



//Reference

/*fillRect
c.fillStyle = 'rgba(255,150,150,1)';
c.fillRect(0,0,100,100);
*/
/*line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "#47f7f9";
c.stroke();
*/
/*arc / circle
c.beginPath();
c.arc(200,150,30, 0, Math.PI * 2, false);
c.stroke();
*/
