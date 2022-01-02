// task :
// Creating a new div element 
// Creating a text node
// Adding the text node to the newly created div
// Adding the newly created element and its content into the DOM 

 function insertElement() {
    var newDiv = document.createElement("div");
 var newText = document.createTextNode("What is going on ?");
 newDiv.appendChild(newText);
 var currentDiv = document.getElementById("main");
 document.body.appendChild(newDiv,currentDiv);
} 

// Using insertbefore() method to add new elements at the beginning

function insertElement() {
    var newDiv = document.createElement("div");
 var newText = document.createTextNode("What is going on ?");
 newDiv.appendChild(newText);
 var currentDiv = document.getElementById("main");
 document.body.insertBefore(newDiv,currentDiv);
}

