function removeElement() {
   var parentElem =document.getElementById('main');
   var childElem = document.getElementById('hint')
   parentElem.removeChild(childElem);
}
 

// Using parentNode for unknown parent element
function removeElement() {
   var childElem = document.getElementById('hint')
   childElem.parentNode.removeChild(childElem);
}


