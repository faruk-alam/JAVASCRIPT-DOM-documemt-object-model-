// selecting element by query selector instead of getelementbyid
var query1 = document.querySelector("#pid");
query1.innerHTML = "This paragraph has been changed."

// selecting element by query selector instead of getelementbyclass
var query2 = document.querySelector(".hclass");
query2.innerHTML = "This heading is valid";

// selecting element by query selector instead of getelementbytagname
var qrlink = document.querySelector("a");
qrlink.innerHTML = "Index";
var qlia = document.querySelector("li a");
qlia.innerHTML = "Page 1";
var ullinth = document.querySelector("ul li:nth-child(2)");
ullinth.innerHTML = "Page 2";
var ullinth3 = document.querySelector("ul li:nth-child(3)");
ullinth3.innerHTML = "Page 3";

var diva = document.querySelector(".my-div a");
diva.innerHTML = "Contact me"