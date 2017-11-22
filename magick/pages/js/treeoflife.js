var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//fillRect
c.fillStyle = 'rgba(255,150,150,1)';
c.fillRect(0,0,100,100);

//link
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "#47f7f9";
c.stroke();

//arc / circle
c.beginPath();
c.arc(200,150,30, 0, Math.PI * 2, false);
c.stroke();

console.log(canvas);
