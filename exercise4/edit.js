var borderchange=document.getElementById("bordercolor");
var backgroundchange=document.getElementById("backgroundcolor");
var borderthickness=document.getElementById("borderwidth");
var paragraph=document.getElementById("paragraph");
function change()
{
  paragraph.style.backgroundColor=backgroundchange.value
  paragraph.style.borderWidth=borderthickness.value
  paragraph.style.borderColor=borderchange.value

}