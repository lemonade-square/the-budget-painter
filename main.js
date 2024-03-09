var mouse_event = "empty";
var startX,startY;
var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var width=5;
var color="red";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").value;
width=document.getElementById("width_of_line").value;
startX=e.clientX- canvas.offsetLeft;
startY=e.clientY- canvas.offsetTop;

mouse_event="mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentX=e.clientX- canvas.offsetLeft;
    currentY=e.clientY- canvas.offsetTop;
    if(mouse_event== "mousedown")

    {ctx.beginPath();
     ctx.strokestyle= color;
     ctx.lineWidth=width;
     
     
ctx.moveTo(startX,startY);
ctx.lineTo(currentX,currentY);
ctx.stroke();
}

startX=currentX;
startY=currentY;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouse_event ="mouseUP";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)

{
color=document.getElementById("color").value;

startX=e.touches[0].clientX - canvas.offsetLeft;
startY=e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){



currentX=e.touches[0].clientX - canvas.offsetLeft;
currentY=e.touches[0].clientY - canvas.offsetTop;

width=document.getElementById("width_of_line").value;
ctx.beginPath();
    ctx.strokestyle= color;
    ctx.linewidth=width;
    
    
ctx.moveTo(startX,startY);
ctx.lineTo(currentX,currentY);
ctx.stroke();


startX=currentX;
startY=currentY;
}
if(screen.width <992)
{
  canvas.width= screen.width - 100;
  canvas.hieght= screen.height -250
  document.body.style.overflow = "hidden"




}







