//Selecting Elements by ID
var heading = document.getElementById("id");
heading.innerHTML = "heading-1";
 var text = document.getElementById("para");
 text.innerHTML = "first paragraph";

//Selecting Elements by tagname
  var tagname = document.getElementsByTagName("h2")[0];
  tagname.innerHTML = "heading-2";
 var tagname = document.getElementsByTagName("h2")[1];
 tagname.innerHTML = "heading-2";
var clas = document.getElementsByClassName("clas")[0];
clas.innerHTML = "heading-3";