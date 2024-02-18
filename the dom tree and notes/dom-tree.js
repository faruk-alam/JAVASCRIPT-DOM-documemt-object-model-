// parent node
const parentNode = document.querySelector("p");
const getParentnode = parentNode.parentNode.parentNode.parentNode;
console.log(getParentnode);

//parent element
const html = document.querySelector("html")
const getHtmlParent = html.parentNode;
const parentElement = html.parentElement;
console.log(getHtmlParent);
console.log(parentElement);// The parent of almost any node is an element node, as text and comments cannot 
//be parents to other nodes.In this code,the parent of html is a document node, so parentElement returns null. 
//Generally, parentNode is more commonly used when traversing the DOM.


// ChildNodes - return all childnodes includes whitespace.
const childnodes = document.querySelector("ul");
const getChildNodes = childnodes.childNodes;
console.log(getChildNodes);

// chidren - return all childdnode without whiteSpace
const childrens = childnodes.children
console.log(childrens)

// firstChild - return first child
const firstchild = childnodes.firstChild;
console.log(firstchild)
//childnodes.firstchild.style.background = "red";
// output: Uncaught TypeError: Cannot read properties of undefined 

// lastChild - return last child
const lastchild = childnodes.lastChild;
console.log(lastchild)
//childnodes.lastchild.style.background = "red";
// output: Uncaught TypeError: Cannot read properties of undefined 

// lastChildClement - return last child element
const lastchildelement = childnodes.lastElementChild;
console.log(lastchildelement)
lastchildelement.style.color = "Blue"



