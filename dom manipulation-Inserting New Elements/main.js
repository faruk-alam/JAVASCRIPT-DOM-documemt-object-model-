// Getting inner HTML conents
// Setting inner HTML contents

// function getContent() {
//    var content = document.getElementById('main').innerHTML;
// alert(content);
// }
// function setContent() {
//    var newContent = document.getElementById("main");
//    newContent.innerHTML = "<h2>This is new content</h2>";

// }

function getContent() {
   var content = document.getElementById('main').innerHTML;
alert(content);
}
function setContent() {
   var newContent = document.getElementById("main");
   newContent.insertAdjacentHTML("beforebegin","<h3>This is content-1</h3>");
   newContent.insertAdjacentHTML("afterbegin","<h3>This is content-2</h3>");
   newContent.insertAdjacentHTML("beforeend","<h3>This is content-3</h3>");
   newContent.insertAdjacentHTML("afterend","<h3>This is content-4</h3>");

}


