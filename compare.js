document.addEventListener('DOMContentLoaded', function () {

// Get all choices for 1st PL drop-down menu
var js_lg1 = document.getElementById("js-btn-pl1");
var py_lg1 = document.getElementById("py-btn-pl1");
var j_lg1 = document.getElementById("j-btn-pl1");

// Get all choices for 2nd PL dropdown menu
var js_lg2 = document.getElementById("js-btn-pl2");
var py_lg2 = document.getElementById("py-btn-pl2");
var j_lg2 = document.getElementById("j-btn-pl2");

// console.log(js_lg1);
// console.log(py_lg1);
// console.log(j_lg1);


// Create the PL1 Dropdown menu Button w default text content
var pl1_btn =  document.createElement("button")
pl1_btn.id = "pl-1";
pl1_btn.classList.add("pl-btn-1"); 
pl1_btn.classList.add("pl-btn"); 
pl1_btn.innerHTML = "Choose a Language"
// Select the PL 1 menu container
var pl1_btn_div = document.getElementById("pl-1-div");
// Add the PL1 menu button to the HTML F
pl1_btn_div.appendChild(pl1_btn);

// Create the PL2 Dropdown menu Button w default text content
var pl2_btn =  document.createElement("button")
pl2_btn.id = "pl-2";
pl2_btn.classList.add("pl-btn-2"); 
pl2_btn.classList.add("pl-btn"); 
pl2_btn.innerHTML = "Choose a Language";
// Select the PL 2 menu container
var pl2_btn_div = document.getElementById("pl-2-div");
// Add the PL2 menu button to the HTML F
pl2_btn_div.appendChild(pl2_btn);


// Create a store of what PLs are currently selected by user from drop-down menus
const pLangs = {
    pl1: "",
    pl2: "",
    pl3: ""
}


/* Create FN to PIN SCROLLING in the PL-SYN-WNs to the BOTTOM of each, whenever a codeBox element is added 
- This will be needed for the update_btn FNs below, as well as the toggleCodeBoxes() FN
*/

function updateScrollWN1(){
    let pl_syn_wn1 = document.querySelector(".pl-syn-wn-1");
    let lastChildHeight = pl_syn_wn1.lastElementChild.offsetHeight;
    pl_syn_wn1.scrollTop = pl_syn_wn1.scrollHeight - lastChildHeight;
}

function updateScrollWN2(){
    let pl_syn_wn2 = document.querySelector(".pl-syn-wn-2");
    let lastChildHeight = pl_syn_wn2.lastElementChild.offsetHeight;
    pl_syn_wn2.scrollTop = pl_syn_wn2.scrollHeight - lastChildHeight;
}



// Create Event Handler for PL1 menu buttons, on click, that 
    // Change PL1 button text
    // Updates the pLangs object
    // Renders corres codeBoxes if codeDisplayed (exists, i.e. obj as KVPs), i.e. syn ftr menu buttons are selected
    // If there are codeBoxes already in the PL-wn (bc a PL was chosen before), remove them
function update_btn1(e) { 
    e.preventDefault();

    // The button pressed selects for the PL 1
    var pl1 = e.target.innerHTML;
    // Update the button heading
    pl1_btn.innerHTML = pl1; 
    pl1_btn_div.appendChild(pl1_btn);

    // Update the pLangs obj
    pLangs.pl1 = pl1;
    console.log(pLangs.pl1);

    // Get the corres PL-SYN-WN, will need it for next to operations
    let pl_syn_wn1 = document.querySelector(".pl-syn-wn-1");

    // Check it the corres PL-syn-wn has any codeBoxes (child Els) in it, and if so, remove them
    if (pl_syn_wn1.children.length !== 0) {
        pl_syn_wn1.innerHTML = "";
    }
    
    // If codeDisplayed has KVPs, i.e. Syn FTR menu buttons selected, for each synFTR/codeDisplayed, create a CodeBox and add it to the corrs PL-syn-wn
    if (Object.keys(codeDisplayed).length !== 0) {
        for (let synFTR in codeDisplayed) {
            let pl1_syn = pLangsSyn[pl1]; 
            // Extract the specifc syn-code based on the Button clicked, i.e. the synFTR - use it as index
            let pl1_code = pl1_syn[synFTR];
                
            // Create codeBoxes and put the pl Code in each
            let codeBox1 = document.createElement("div")
            codeBox1.classList.add("codeBox");
            // Give the codebox an Id so that it can be removed easily
            codeBox1.id = synFTR + "1";
            codeBox1.innerHTML = pl1_code;
            
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn1.appendChild(codeBox1);

            // Pin scrolling to the bottom
            updateScrollWN1();

            // Add ref to CODEBOX to global codeboxesHeight; update_btn FNs need this info below 
            codeBoxesHeights[pl1][synFTR] = codeBox1;

            // Check if there is a PL2 selected; If yes, Implement codeBox height-matching, across Languages;
            if (pLangs.pl2) {
                // Get the codeBoxHeight for the codeBox of this same synFTR, for the other (pl2) lang; this was added to the codeBoxesHeights obj whether through update_btn2 or toggleCodeBoxes()
                let codeBox2 = codeBoxesHeights[pLangs.pl2][synFTR];
                
                if (codeBox1.offsetHeight>codeBox2.offsetHeight) {
                    codeBox2.style.height = `${codeBox1.offsetHeight}px`;
                }
                if (codeBox2.offsetHeight>codeBox1.offsetHeight) {
                    codeBox1.style.height = `${codeBox2.offsetHeight}px`;
                }
            }
        }
    }
    
}; 

// Create Event Handler for PL2 menu choices, on click to change PL2 button text
// Ensure it updates the pLangs object
function update_btn2(e) { 
    e.preventDefault();

    // The button pressed selects for the PL 2
    var pl2 = e.target.innerHTML;
    // Update the button heading
    pl2_btn.innerHTML = pl2; 
    pl2_btn_div.appendChild(pl2_btn);
    // Update the pLangs obj
    pLangs.pl2 = pl2;
    console.log(pLangs.pl2);
    
    // Get the corres PL-SYN-WN, will need it for next to operations
    let pl_syn_wn2 = document.querySelector(".pl-syn-wn-2");

    // Check it the corres PL-syn-wn has any codeBoxes (child Els) in it, and if so, remove them
    if (pl_syn_wn2.children.length !==0 ) {
        pl_syn_wn2.innerHTML = "";
    }

    // If codeDisplayed has KVPs, i.e. Syn FTR menu buttons priorly selected, for each synFTR/codeDisplayed, create a CodeBox and add it to the corrs PL-syn-wn
    if (Object.keys(codeDisplayed).length !== 0) {
        for (let synFTR in codeDisplayed) {
            let pl2_syn = pLangsSyn[pl2]; 
            // Extract the specifc syn-code based on the Button clicked, i.e. the synFTR - use it as index
            let pl2_code = pl2_syn[synFTR];
                
            // Create codeBoxes and put the pl Code in each
            let codeBox2 = document.createElement("div")
            codeBox2.classList.add("codeBox");
            // Give the codebox an Id so that it can be removed easily
            codeBox2.id = synFTR + "2";
            codeBox2.innerHTML = pl2_code;
            
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn2.appendChild(codeBox2);

            // Pin scrolling to the bottom
            updateScrollWN2();

            // Add ref to CODEBOX to global codeboxesHeight; update_btn FNs need this info below 
            codeBoxesHeights[pl2][synFTR] = codeBox2;

            // Check if there is a PL1 selected; If yes, Implement codeBox height-matching, across Languages;
            if (pLangs.pl1) {
                // Get the codeBoxHeight for the codeBox of this same synFTR, for the other (pl1) lang; this was added to the codeBoxesHeights obj whether through update_btn1 or toggleCodeBoxes()
                let codeBox1 = codeBoxesHeights[pLangs.pl1][synFTR];
                
                if (codeBox1.offsetHeight>codeBox2.offsetHeight) {
                    codeBox2.style.height = `${codeBox1.offsetHeight}px`;
                }
                if (codeBox2.offsetHeight>codeBox1.offsetHeight) {
                    codeBox1.style.height = `${codeBox2.offsetHeight}px`;
                }
            }
        }
    }

}; 


// Add the PL1 event handler to all PL1 buttons
js_lg1.addEventListener("click", update_btn1);
py_lg1.addEventListener("click", update_btn1);
j_lg1.addEventListener("click", update_btn1);
// Add the PL2 event handler to all PL2 buttons
js_lg2.addEventListener("click", update_btn2);
py_lg2.addEventListener("click", update_btn2);
j_lg2.addEventListener("click", update_btn2);



/* SYNTAX-FEATUREs-TO-COMPARE MENU, BUTTON Functionality */

// Get all the Cat-Menu buttons
var basic_syn_btn = document.querySelector(".basic-syn-btn");
var gen_syn_btn = document.querySelector(".gen-syn-btn"); 
var control_flow_syn_btn = document.querySelector(".control-flow-syn-btn");
var oop_syn_btn = document.querySelector(".oop-syn-btn");
var modularity_syn_btn = document.querySelector(".modularity-syn-btn"); 


var arrOfSynMenuBtns = [basic_syn_btn, gen_syn_btn, control_flow_syn_btn, oop_syn_btn, modularity_syn_btn];

// console.log(basic_syn_btn, gen_syn_btn, control_flow_syn_btn, oop_syn_btn, modularity_syn_btn);

/* 
// Below not needed, as explain in ehFN below
// Create a store of state of each menu, whether it is "on" or not, so can toggle this
const synMenuState = {
    basicMenuOn: false, 
    genMenuOn: false,
    cfMenuOn: false,
    oopMenuOn: false,
    modMenuOn: false
}; 
*/

// Create event handler to toggle appearance of drop-down menu
function toggleDropDown(e) {
    e.preventDefault();
    // Select the menu button, and the next-sibling drop-down menu for the menu button
    let menu_btn = e.target;
    let menuToToggle = menu_btn.nextElementSibling; // K* this is K JS DOM attr

    /* 

    //Below Code was not needed, don't need to know state of the Menu, whether on or off, bc TOGGLING regardless

    // Get state of the drop-down menu, based on what button was pressed
    let menuOn, distToTranslate;
    switch(menu_btn.innerHTML){
        case "Basics":
            menuOn = synMenuState.basicMenuOn;
            distToTranslate = "";
        case "Encapsulation & Generalization":
            menuOn = synMenuState.genMenuOn;
            distToTranslate = "";
        case "Control Flow":
            menuOn = synMenuState.cfMenuOn;
            distToTranslate = "";
        case "OOP":
            menuOn = synMenuState.oopMenuOn;
            distToTranslate = "";
        case "Modularity & I/O":
            menuOn = synMenuState.modMenuOn;
            distToTranslate = "";
    }

    if (!menuOn) {
        for (let btn of menuToToggle.children) {  // K* .children
            btn.classList.toggle(".showButton")
        }
    }
    else {

    } 
    */

    // For every Btn in the sibling drop down menu, toggle the "showButton" class, which will transition-transform the buttons into place
    for (let btn of menuToToggle.children) {  // K* .children
        // console.log(btn);
        btn.classList.toggle("showButton");
    }
    
    // console.log(menu_btn.classList);
    // Make the Menu-Btn's bottom border-radi sharp to be continuous with drop down below it; but this will need to need to know a sense of the STATE
    // Q* Try and see if can instead TOGGLE a CLASS to the menu button, than will TRANSITION the border-radius, particarally when closing the drop down
    if (menuToToggle.firstElementChild.classList.contains("showButton")) {
        menu_btn.classList.add("cat-btn-open");
    }
    else {
        menu_btn.classList.remove("cat-btn-open");
    }

}

// Register elFN for click on each of the syn menu buttons

for (let btn of arrOfSynMenuBtns) {
    btn.addEventListener("click", toggleDropDown);
}



/* SYN FTR COMPARISON FUNCTIONALITY; BUTTON SELECTION, & RENDERING OF SYN COMPARISON IN PL WINDOWS */

// Create an obj that will store all the syntax for all the possible languages we can compare

/* 
Syn Ftrs to potentially Add
Assignment Operator & Keywords, or just "Assignment", under Encapsulization Generalization

*/

const pLangsSyn = {
    JavaScript : {
        /* Basics */
        Comments: "// JavaScript single line comment <br />/* Javascript<br />multi-line comment */",

        "Arithmetic Operators": "+ &nbsp;// Addition <br/> - &nbsp;// Subtraction <br/> * &nbsp;// Multiplication <br/> ** // Exponentation<br/> / &nbsp;// Division <br/> % &nbsp;// Modulus <br/> ++ // Increment <br/> -- // Decrement",

        "Comparison Operators": "=== // Equal value and equal type <br/> == &nbsp;// Equal to (after type conversion if operands are different data types) <br/> !== // Not equal value nor equal type <br/> != &nbsp// Not equal (after type conversion if operands are different data types) <br/> > &nbsp&nbsp// Greater than <br/> < &nbsp&nbsp// Less than <br/> >= &nbsp// Greater than or equal to <br/> <= &nbsp// Less than or equal to", 

        "Logical Operators": "&& // And <br/> || // Or <br/> ! &nbsp// Not",  
        
        "Data Types": "/* Primitive Data Types */ <br/> 1. Number: includes integers, floating-point, or scientific notation (append with \"e\") <br/>&emsp; 15 <br/>&emsp; 4.9 <br/>&emsp; 456e3 // === 456000 <br/> 2. String <br/>&emsp; \"hello world\" <br/> 3. Boolean <br/>&emsp; true <br/>&emsp; false <br/> 4. null: an assigned date type that represents no value. <br/>&emsp; let x = null; <br/> 5. undefined: represents a variable having not yet been assigned a value <br/>&emsp; let y; // y returns undefined <br/> 6. Symbol:  instances of this data type are unique & immutable; often used to add unique property keys to an object <br/>&emsp; let unique_key = Symbol(\"hello world\") <br/> 7. BigInt: used to represent big integer values that are too big to be represented by the Number data type (i.e. 16 digits & over). To create a BigInt, append n to the end of an integer or call BigInt() <br/>&emsp; let x = 1234567890123456789012345n; <br/>&emsp; let y = BigInt(1234567890123456789012345) <br/><br/> /* Compound Data Types */ <br/> 8. Object: key-value pairs of collection of data <br/>&emsp; let obj = {a: \"hello world\", \"key with spaces\": 450}",

        /* Encap & Gen */

        "Assignment, Variables, Scope": "// Assignment operator <br/>&emsp; = <br/> 1. let : block scope, function scope, mutable, not hoisted <br/> &emsp; let x = \"hello world \" <br/> &emsp; let y; <br/> &emsp; y = 400 <br/> 2. const: block scope, function scope, immutable (must be defined on declaration), not hoisted <br/> &emsp; const x = 10; <br/> &emsp; const y = \"can't change this val\" <br/> 3. var : no block scope, function scope, mutable, hoisted <br/> &emsp; var x; <br/> &emsp; var y = 100; <br/> &emsp; y = \"one hundred\"",

        Functions: "1. Regular Function <br/><br/> function functionName (pm1, pm2) { <br/> &emsp; /* function body */ <br/> } <br/><br/> 2. Anonymous Function: A function without a name; typically assigned to a variable or passed as an argument. <br/><br/> function(pm1) { <br/>&emsp; /* function body */ <br/> } <br/> const nameOfFunction = function(pm2) { <br/>&emsp; /* function body */ <br/> } <br/> array.forEach(function(item) {console.log(item)})",

        "Functions Shorthand": "1. Arrow Function shorthand for declaring anonymous functions. <br/><br/> const functionOne = (pm1, pm2) => { <br/> &emsp; /* function body */} <br/><br/> 2. If there is one one parameter, parentheses can be dropped. <br/><br/> const secondFunction = pm1 => { <br/> &emsp; /* function body */<br/>} <br/><br/> 3. If there is only one statement in the function body, curly braces can be dropped. <br/><br/> const logParameter = pm => console.log(pm);",

        /* Control Flow */
    
        "Conditional Statements": "if (condition) { <br/> &emsp; <span>/* code block executed if the condition is true */</span> <br/> } else { <br/> &emsp; <span>/* code block executed if the condition is false */</span> <br/> } <br/><br/> <span>// else if: specifies alternate condition if the first condition is false.</span> <br/> if (condition) { <br/> &emsp; <span>/* block of code to be executed if the condition is true */</span> <br/> } else if { <br/> &emsp; <span>/* code block executed if alternate condition is true */</span> <br/> } else { <br/> &emsp; <span>/* code block executed if all conditions are false */</span> <br/> }",

        "Matching Conditional": "<span> /* Switch statement: evaluates an expression, compares this value against case values, executes statements after first case with matching value until a \"break\" statement is encountered. <br/> - If there is no matching case value, the (optional) default code block is executed. <br/> - omitting the \"break\" statement, will cause next case to be executed even if the evaluation does not match the case; no \"break\" needed in the last switch block because the switch construct breaks (ends) there. */</span> <br/><br/>switch(expression) { <br/>&emsp; case x: <br/>&emsp;&emsp; <span>// code block</span> <br/>&emsp;&emsp; break; <br/>&emsp; case y: <br/>&emsp;&emsp; <span>// code block</span> <br/>&emsp;&emsp; break; <br/> &emsp; default: <br/>&emsp;&emsp; <span>// code block</span> <br/>}",

        "For Loop": "<span>/* For Loop: loop header parentheses contains, in following order, 3 expressions: <br/> - i) initialization expression, where set or declare loop variable.  <br/> - ii) loop condition expression, boolean expression including loop variable that determines whether loop body executed.  <br/> - iii) loop variable update expression executed after loop executed. */</span> <br/><br/> for (let loopVar = 0; loopVar <= 10; loopVar++ ) { <br/> &emsp; <span>// loop body</span> <br/> } <br/><br/> <span>/* 2. \"for...of\" loop : iterates through the values/items of an iterable (array, string, set, map); cannot be used to iterate through an object. */</span> <br/><br/> for (item of myArray) { <br/> &emsp; <span>// loop body</span> <br/>} <br/><br/> <span>/* 3. \"for...in\" loop: iterate through the keys of an object; can be used for iterables but should be avoided. */</span> <br/><br/> for (key in obj) { <br/> &emsp; console.log(`${key}: ${object[key]}`); <br/> }",

        "While Loop": "While Loop: condition expression is located in header parentheses. Loop variable initialization must occur prior to while loop, and loop variable update expression must occur in loop body. <br/><br/> let loopVar = 0; <br/> while (loopVar < x) { </br/> &emsp; // loop body <br/> &emsp; loopVar++; <br/> } <br/><br/> 2. do while loop : loop body is executed at least once, prior to checking loop condition for further iterations <br/></br/> let loopVar = y; </br> do { <br/> &emsp; // loop body <br/> &emsp; loopVar++; <br/> } while (loopVar < z);",

        "Error Handling": "<span> /* try...catch statement: anticipate and handle thrown errors (both built-in errors as well as those constructed with Error() ) while allowing a program to continue running. Code that may throw an error(s) when executed is written within the try block, and actions for handling these errors are written within the catch block. The optional finally statement defines a code block to run regardless of the result. */</span> <br/><br/>try { <br/> &emsp; throw Error('This constructed error will be caught'); <br/> } catch (e) { <br/> &emsp; console.log(e); <span>// Prints the thrown Error object</span><br/>} finally { <br/> &emsp;<span>/* Block of code to be executed regardless of the try...catch result */</span><br/>}<br/><br/><span>/* Error() function: creates an error object with a custom message. This function takes a string argument which becomes the value of the error's message property. An error created with this function will not stop a program from running unless throw keyword is placed before an Error() function call or object in order to raise an error */</span><br/><br/><span>// The following statement will not stop program execution</span><br/>console.log(new Error('Your password is too weak.')); <br/><span>// The following statement will stop program execution</span><br/>throw Error('nothing after this line runs');",

        /* OOP */

        "Objects": "<span>/* Objects: object literal is enclosed with curly braces {}. <br/> - Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. <br/> - All the keys are unique, but values are not. <br/>- Key-value pairs of an object are also referred to as properties */</span> <br/><br/> const objID = { <br/> &emsp; name: \"John Doe\", <br/> &emsp; age: 40 <br/> } <br/><br/> ",

        "Classes": "<span>/* Classes: method and field declarations in classes are statements, no commas between them (unlike object KVP syntax). New instances are created using the \"new\" keyword. Methods prepended with \"static\" aka static methods are only callable on classes, not on instances. */</span> <br/><br/> class Animal { <br/>&emsp; constructor(name) { <br/>&emsp;&emsp; this._name = name; <br/>&emsp;&emsp; this._behaviour = 0; <br/>&emsp; } <br/></br/>&emsp; setName(newName) { </br/>&emsp;&emsp; if (typeof newName === \"string\") { </br/>&emsp;&emsp;&emsp; this._name = newName; </br/>&emsp;&emsp;}</br/>&emsp; } <br/><br/>&emsp; static generateName() { <br/>&emsp;&emsp; const names = ['Winnie', 'Bambi', 'Zoboomafoo', 'Harambe', 'Tony', 'Minnie'] <br/>&emsp;&emsp; const randomNumber = Math.floor(Math.random()*5); <br/>&emsp;&emsp; return names[randomNumber];<br/>&emsp; } <br/>} </br></br> const newPet = new Animal(Animal.generateName());",

        "Inheritance": "<span>/* Inheritance: child class is created using \"extends\" keyword. A child class constructor calls the parent class constructor using the super() method. */</span> </br></br> <span>// Parent class</span> </br> class ConstructionProject { </br> &emsp; constructor(info) { </br>&emsp;&emsp; this.buildDate = info.buildDate; </br>&emsp;&emsp; this.name = info.name; } </br> } </br> <span>// Child class</span> <br/> class House extends ConstructionProject { </br>&emsp; constructor(houseData) { </br>&emsp;&emsp; super(houseData); </br>&emsp;&emsp; this.designer = houseData.designer; } </br> } </br></br> const myHouse = new House({ designer: 'Da Vinci', name: 'Hello World Museum', buildDate: 2023});",

        /* 
        // FE Individ Rsrcs
// Export 
export const toggleHiddenElement = (domElement) => {...} // or 
export {resourceToExportA, resourceToExportB, ...} 
// Import 
import {exportedResourceA, exportedResourceB} from './path/to/module.js' //or, avoiding name collisiong
import {method as uniqueMdName} from 'mdu.js'

// FE Entire Mdu 
// Import 
import importedResources from 'module.js'; // Vr name is Arb; Dropped Curly Braces Shorthand of: import { default as importedResources } from 'module.js';
// Export
// Obj containing Mdu rsrcs must 1st decl'd 
const resources = {
    valueA,
    ...
}
export default resources; // Shorthand verxn of export { resources as default };

// External Rsrc: Using Named and Default Exports at the same time: both will be imported in the same file.
//module.js
var x=2;
const y=4;
function fun() {
   return "This a default export."
}
function square(x) {
  return x * x;
}
export { fun as default, x, y, square };
// Importing, can use any name for fun because it is a default export and curly braces for other named exports. 
import anyname, {x, y, square} from './module.js';
console.log(anyname()); //This is a default export.

// DEFAULT Export INLINE: "useful to export only a single obj, FN, variable, or to have a fallback val for your MDU"
export default function cube(x) {
  return x * x * x;
}
        */
        
        /* Modulaity */ 

        Importing: "",

        Exporting: "", 


        
        "User Input": "",

        Output: "",

        Asynchronous: ""
    },
    Python : {
        /* Basics */
        Comments: "py1",
        "Arithmetic Operators": "py2",
        "Comparison Operators": "py3", 
        "Logical Operators": "py4",  
        "Data Types": "",
        /* Encap & Gen */
        "Assignment, Variables, Scope": "",
        Functions: "",
        "Functions Shorthand": "",
        /* Control Flow */
        "Conditional Statements": "",
        "Matching Conditional": "",
        "For Loop": "",
        "While Loop": "",
        "Error Handling": "",
        /* OOP */
        "Objects": "",
        "Classes": "",
        "Inheritance": "",
        /* Modulaity */ 
        Importing: "",
        Exporting: "", 
        "User Input": "",
        Output: "",
        Asynchronous: ""
    },
    "Java" : {
        /* Basics */
        Comments: "java1",
        "Arithmetic Operators": "java2",
        "Comparison Operators": "java3", 
        "Logical Operators": "java4",  
        "Data Types": "",
        /* Encap & Gen */
        "Assignment, Variables, Scope": "",
        Functions: "",
        "Functions Shorthand": "",
        /* Control Flow */
        "Conditional Statements": "",
        "Matching Conditional": "",
        "For Loop": "",
        "While Loop": "",
        "Error Handling": "",
        /* OOP */
        "Objects": "",
        "Classes": "",
        "Inheritance": "",
        /* Modulaity */ 
        Importing: "",
        Exporting: "", 
        "User Input": "",
        Output: "",
        Asynchronous: ""
    }
}

/* 
// Recall 
const pLangs = {
    pl1: "",
    pl2: "",
    pl3: ""
}
*/

// Create an Obj that keeps state of which syn/codeBoxes are being displayed in the wn right; this is necessary bc pressing a menu button will Toggle the display, & this will be needed for the Toggle event-handler

const codeDisplayed = {};

/* codeBoxesForHeights: Keep STORE of all CODEBOXES added, (not just their heights), so that can make codeboxes of different PLs but for same SynFTR, the same height 
- This obj is needed for the update_btn1() & update_btn2() FNs; toggleCodeBoxes(), if two PLs are selected, has access to both codeboxes (for each PL) and thus does not need to ref to a global store. 
- need to store the CODEBOXes themselves, and not just their .offsetHeights, bc need to be able to REFERENCE
*/
const codeBoxesHeights = {
    JavaScript: {},
    Python: {},
    Java: {}
}


// FN that Produces Code-Boxes and add them to the Pl-Syn-Wn 
    // Will use plSyn global Obj, and pLangs global obj

/* Didn't end up creating a createCodeBox FN... too much complexity; just copy code from below toggleCodeBoxes and put in updateBtn Fn
// Create a FN simply for creating a CodeBox, based on an input of the syntax FTR (i.e. the innerHTML of the Syn Ftr Buttons); this nested FN will be called in toggleCodeBoxes, but also in the above updateBtn() FN (conditional on synFTRs already being selected)

function createCodeBox(synFTR, pl, plWN) {
    // Select for the PL's Syn Obj in PLs Syn obj
    let pl_syn = pLangsSyn[pl]; 
    // Extract the specifc syn-code based on the Button clicked, i.e. the synFTR - use it as index
    let pl_code = pl_syn[synFTR];

    // Create codeBoxes and put the pl Code in each
    let codeBox = document.createElement("div")
    codeBox.classList.add("codeBox");
    // Give the codebox an Id so that it can be removed easily
    codeBox.id = synFTR + plWN;
    codeBox.innerHTML = pl_code;
    
    // Append codeBox to the corres pl-syn-wn
    pl_syn_wn1.appendChild(codeBox1);
    
}
 */

function toggleCodeBoxes(ev) {
    
    // Extract the SYN FTR you are toggling
    const synFTR = ev.target.innerHTML; 

    // Get the PL Syn Wn
    let pl_syn_wn1 = document.querySelector(".pl-syn-wn-1");
    let pl_syn_wn2 = document.querySelector(".pl-syn-wn-2");

    // Figure out which PLs were selected
    let pl1 = pLangs.pl1; // VRs in JS are all all function scoped, so I can re-use this VR name
    let pl2 = pLangs.pl2;

    // Check if codeBoxes already added for this Syn-Ftr
    if (codeDisplayed[synFTR]) {

        // This LOGIC also needs to be split up into conditions for if each of PL1 and PL2 exist, if they have been selected, that is, only remove in each PL-SYN-WN if a PL for that syn-wn has been selected
        if (pl1) {
            // Get the codeBox Els that are already in the wns
            let codeBox1 = pl_syn_wn1.children.namedItem(synFTR + "1");
            // Remove the codeBoxes 
            pl_syn_wn1.removeChild(codeBox1);
        }

        if (pl2) {   
            // Get the codeBox Els that are already in the WNs   
            let codeBox2 = pl_syn_wn2.children.namedItem(synFTR + "2");
            // Remove the codeBoxes 
            pl_syn_wn2.removeChild(codeBox2);
        }  
        
        // If either of the PLs was selected, then delete the Syn-Ftr from the list of Syn FTRs; this line code go instead in if condxn blocks above
        if (pl1 || pl2) {
            delete codeDisplayed[synFTR];
        }
        
    }

    // codeBoxes are NOT already added for this synFTR (of btn pressed), tf...
    else {

        // Check if both of these are "" empty Str/False
        if (!(pl1 || pl2)) {
            alert("Choose at least one Programming Language");
            return;
        }

        // If either of the PL is selected, add the Syn Ftr (i.e. synFTR) to the codeDisplayed object
        if (pl1 || pl2) {
            codeDisplayed[synFTR] = true;
        }

        // Need to split the logic for each PL, PL-wn, in two conditional statements, in case only one PL is selected
        if (pl1) {
            // Select for the PL's Syn Obj in PLs Syn obj
            let pl1_syn = pLangsSyn[pl1]; 
            // Extract the specifc syn-code based on the Button clicked, i.e. the synFTR - use it as index
            let pl1_code = pl1_syn[synFTR];
        
            // Create codeBoxes and put the pl Code in each; use var so that can access outside this block for height matching
            var codeBox1 = document.createElement("div");
            codeBox1.classList.add("codeBox");
            // Give the codebox an Id so that it can be removed easily
            codeBox1.id = synFTR + "1";
            codeBox1.innerHTML = pl1_code;
            
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn1.appendChild(codeBox1);

            // Pin scrolling to the bottom; top of bottom-most codebox
            updateScrollWN1();

            // Add ref to CODEBOX to global codeboxesHeight; won't need this obj in this FN, but update_btn will need this; if this synFTR for this pl1 was already selected in this same session, then will simply overwrite
            codeBoxesHeights[pl1][synFTR] = codeBox1;
        }

        if (pl2) {
            // Select for the PL's Syn Obj in PLs Syn obj
            let pl2_syn = pLangsSyn[pl2];
            // Extract the specifc syn-code based on the Button clicked, i.e. the synFTR - use it as index
            let pl2_code = pl2_syn[synFTR];

            // Create codeBoxes and put the pl Code in each; use var so that can access outside this block for height matching
            var codeBox2 = document.createElement("div");
            codeBox2.classList.add("codeBox");

            // Give the codebox an Id so that it can be removed easily
            codeBox2.id = synFTR + "2";
            codeBox2.innerHTML = pl2_code;

            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn2.appendChild(codeBox2);

            // Pin scrolling to the bottom
            updateScrollWN2();

            // Add ref to CODEBOX to global codeboxesHeight; won't need this obj in this FN, but update_btn will need this; if this synFTR for this pl1 was already selected in this same session, then will simply overwrite
            codeBoxesHeights[pl2][synFTR] = codeBox2;

            // Implement codeBox Height-matching, across Languages
            if (pl1) {
                if (codeBox1.offsetHeight>codeBox2.offsetHeight) {
                    codeBox2.style.height = `${codeBox1.offsetHeight}px`;
                }
                if (codeBox2.offsetHeight>codeBox1.offsetHeight) {
                    codeBox1.style.height = `${codeBox2.offsetHeight}px`;
                }
            }
            // height-matching needed only HERE, inside pl2 block, bc only want to match heights if both langs are selected; if just one lang in one WN, then height can stay its natural height. BUT will add this functionality into updateButton() FNs, in case that a lang is already added.
        }

    }

    
    // Toggle the Styling of the Button that was pressed.
    const btnPressed = ev.target;
    btnPressed.classList.toggle("syn-btn-on");

}

// Register the Event Handler to all the Buttons in the menus
const btns = document.querySelectorAll(".syn-btn");
console.log(btns);

btns.forEach((btn) => {
    btn.addEventListener("click", toggleCodeBoxes);
})



});
