/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* define the variable 'element' for the div 'image'*/
  var element = document.getElementById("image");
  /*use the variable 'element' and update the inner HTML to show the alt text of the picture*/ 
  element.innerHTML = previewPic.alt;
  /* update the background image of the div with the image that the mouse is currently pointing at*/
  element.style.cssText+=`background-image:url(${previewPic.src})`;
}
   
function unDo(){
  /*change the text of the div back to the original text*/
  document.getElementById("image").innerHTML='Hover over an image below to display here.';
  /*remove the background image to show the original background*/
  document.getElementById("image").style.backgroundImage = '';
}          
