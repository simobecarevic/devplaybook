
/* 

// SELECTING

document.getElementById()
document.querySelector()  //can invoke on ref to any el & will search descendents; need to incl selector symbol "." if Cl, "#" if ID

//also...
myElements = document.getElementsByTagName("p"); // Multiple Els
myElements = document.getElementsByClassName("intro"); // can do this TOO, no need for ".", selects ALL, returns list

// CREATING

document.createElement("button") // Md only on "document" obj; only Tg name, creates el does not render; needs to be saved to Vr/idfr/ref or pass literal to below Mds; ALSO does not add "innerHTML" that is sep Md

let newsBanner = document.createElement('h2');

// MOD-g/ADD-g to ELs

element.innerHTML //  be used to access the HTML markup that makes up an element’s contents, or to reassign it. 
newsBanner.innerHTML = 'Get news updates every hour.';

// CAN incl CHILD Els w TGs; must include the H Tags plus content inside of it
box.innerHTML = '<p>Goodbye</p>'

element.appendChild() // appends an element as the last child of the parent.
document.body.appendChild(newsBanner); 

element.removeChild() //  passing in the child node (’ e.g. ref to child node, e.g. received from .getElementById') as the argument (’not selector/cl/id of child node, but child Nd itself’)

element.style // access or set the CSS style rules of an element. To do so, values are assigned to the attributes of element.style
// setting the backgroundColor attribute of the style property to blue, the CSS property background-color becomes blue. if the CSS property contains a hyphen, such as font-family or background-color, Camel Case notation is used in Javascript for the attribute name. No semi-colon inside str

let blueElement = document.getElementById('colorful-element');
blueElement.style.backgroundColor = 'blue';
 
// EVENTs 

element.onclick // property can be used **to set a function to run when an element is clicked**. ‘can be FN exprxn, or presume pre-decl’d FN → can contain DOM API md calls, or prop mods, that chg UI’
    
let element = document.getElementById('addItem');
element.onclick = function() { 
    let newElement = document.createElement('li');
    document.getElementById('list').appendChild(newElement);
};

// Add an <li> element each time the element with ID addItem is clicked by the user. 


// elMDs starts w “on” followed by event name onload, onclick, onfocus, onscroll ; NO camel-case!
.addEventListener("event", ehFN) 
    // Method attaches an event handler ‘for’ a specific event(s), on/’to’ an event target. Advs: can add many events to the event target without overwriting existing events 
    // 2 args: an event name as a string no "on", and the event handler function. 
    // K* ehFN auto will accept E Obj as 1st PM

eventTarget.addEventListener("event", eventHandlerFunction);

.removeEventListener("event", ehFN )
    // To tell the code to stop listening for that event to fire; takes the same two arguments that were passed to .addEventListener(), the event name as a string and the event handler fun 

// list of events: "keyup" "keydown" "keypress" "click" "mouseout" "mouseover" "mousedown" "mouseover"


*/



