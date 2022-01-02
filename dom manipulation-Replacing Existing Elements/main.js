function replaceParagraph(){
   var parentElem = document.getElementById('main');
   var oldPara = document.getElementById('hint');
   var newPara = document.createElement("p");
   var newContent = document.createTextNode("This is a new paragraph")
   newPara.appendChild(newContent);
   parentElem.replaceChild(newPara,oldPara);
}
