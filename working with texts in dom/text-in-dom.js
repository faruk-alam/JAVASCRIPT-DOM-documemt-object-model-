// textContents return all text contained by an element and all its children that are for formatting 
//purposes only.
//innerText returns all text contained by an element and all its child elements.
//innerHtml returns all text, including html tags, that is contained by an element.

const getValue = document.getElementById("mylinks")
console.log(getValue.textContent)
console.log(getValue.innerHTML)
console.log(getValue.innerText)
