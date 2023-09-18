
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
        }
    }
    
}; 

// Create Event Handler for PL2 menu buttons, on click, that 
    // Change PL2 button text
    // Updates the pLangs object
    // Renders corres codeBoxes if codeDisplayed (exists, i.e. obj as KVPs), i.e. syn ftr menu buttons are selected
    // If there are codeBoxes already in the PL-wn (bc a PL was chosen before), remove them

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

    // If codeDisplayed has KVPs, i.e. Syn FTR menu buttons selected, for each synFTR/codeDisplayed, create a CodeBox and add it to the corrs PL-syn-wn
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
Syn Ftrs to Potentially Add

- Function Default Parameters 
- DS & Algorithm Implementation in each language
- 

*/

const pLangsSyn = {
    JavaScript : {
        /* Basics */
        Comments: "./gist/javascript/comments.js",
           
        "Arithmetic Operators": "",

        "Comparison Operators": "=== // Equal value and equal type <br/> == &nbsp;// Equal to (after type conversion if operands are different data types) <br/> !== // Not equal value nor equal type <br/> != &nbsp// Not equal (after type conversion if operands are different data types) <br/> > &nbsp&nbsp// Greater than <br/> < &nbsp&nbsp// Less than <br/> >= &nbsp// Greater than or equal to <br/> <= &nbsp// Less than or equal to", 

        "Logical Operators": "&& // And <br/> || // Or <br/> ! &nbsp// Not",  
        
        "Data Types": "/* Primitive Data Types */ <br/> 1. Number: includes integers, floating-point, or scientific notation (append with \"e\") <br/>&emsp; 15 <br/>&emsp; 4.9 <br/>&emsp; 456e3 // === 456000 <br/> 2. String <br/>&emsp; \"hello world\" <br/> 3. Boolean <br/>&emsp; true <br/>&emsp; false <br/> 4. null: an assigned date type that represents no value. <br/>&emsp; let x = null; <br/> 5. undefined: represents a variable having not yet been assigned a value <br/>&emsp; let y; // y returns undefined <br/> 6. Symbol:  instances of this data type are unique & immutable; often used to add unique property keys to an object <br/>&emsp; let unique_key = Symbol(\"hello world\") <br/> 7. BigInt: used to represent big integer values that are too big to be represented by the Number data type (i.e. 16 digits & over). To create a BigInt, append n to the end of an integer or call BigInt() <br/>&emsp; let x = 1234567890123456789012345n; <br/>&emsp; let y = BigInt(1234567890123456789012345) <br/><br/> /* Compound Data Types */ <br/> 8. Object: key-value pairs of collection of data <br/>&emsp; let obj = {a: \"hello world\", \"key with spaces\": 450}",

        /* Encap & Gen */

        "Assignment, Variables, Scope": "// Assignment operator <br/>&emsp; = <br/> 1. let : block scope, function scope, mutable, not hoisted <br/> &emsp; let x = \"hello world \" <br/> &emsp; let y; <br/> &emsp; y = 400 <br/> 2. const: block scope, function scope, immutable (must be defined on declaration), not hoisted <br/> &emsp; const x = 10; <br/> &emsp; const y = \"can't change this val\" <br/> 3. var : no block scope, function scope, mutable, hoisted <br/> &emsp; var x; <br/> &emsp; var y = 100; <br/> &emsp; y = \"one hundred\"",

        Functions: "1. Regular Function <br/><br/> function functionName (pm1, pm2) { <br/> &emsp; /* function body */ <br/> } <br/><br/> 2. Anonymous Function: A function without a name; typically assigned to a variable or passed as an argument. <br/><br/> function(pm1) { <br/>&emsp; /* function body */ <br/> } <br/> const nameOfFunction = function(pm2) { <br/>&emsp; /* function body */ <br/> } <br/> array.forEach(function(item) {console.log(item)})",

        "Functions Shorthand": "1. Arrow Function shorthand for declaring anonymous functions. <br/><br/> const functionOne = (pm1, pm2) => { <br/> &emsp; /* function body */} <br/><br/> 2. If there is one one parameter, parentheses can be dropped. <br/><br/> const secondFunction = pm1 => { <br/> &emsp; /* function body */<br/>} <br/><br/> 3. If there is only one statement in the function body, curly braces can be dropped. <br/><br/> const logParameter = pm => console.log(pm);",

        /* Control Flow */
    
        "Conditional Statements": "if (condition) { <br/> &emsp; /* code block executed if the condition is true */ <br/> } else { <br/> &emsp; /* code block executed if the condition is false */ <br/> } <br/><br/> // else if : specifies alternate condition if the first condition is false <br/> if (condition) { <br/> &emsp; /* block of code to be executed if the condition is true */ <br/> } else if { <br/> &emsp; /* code block executed if alternate condition is true */ <br/> } else { <br/> &emsp; /* code block executed if all conditions are false */ <br/> }",

        "Matching Conditional": "Switch statement: evaluates an expression, compares this value against case values, executes statements after first case with matching value until a \"break\" statement is encountered. <br/> &emsp; - If there is no matching case value, the (optional) default code block is executed <br/>&emsp; - omitting the \"break\" statement, will cause next case to be executed even if the evaluation does not match the case; no \"break\" needed in the last switch block because the switch construct breaks (ends) there <br/><br/>switch(expression) { <br/>&emsp; case x: <br/>&emsp;&emsp; // code block <br/>&emsp;&emsp; break; <br/>&emsp; case y: <br/>&emsp;&emsp; // code block <br/>&emsp;&emsp; break; <br/> &emsp; default: <br/>&emsp;&emsp; // code block <br/>}",

        "For Loop": "For Loop: loop header parentheses contains, in following order, 3 expressions: i) initialization expression, where set or declare loop variable ii) loop condition expression, boolean expression including loop variable that determines whether loop body executed iii) loop variable update expression executed after loop executed. <br/><br/> for (let loopVar = 0; loopVar<= 10; loopVar++ ) { <br/> &emsp; // loop body <br/> } <br/><br/> 2. \"for...of\" loop : iterates through the values/items of an iterable (array, string, set, map); cannot be used to iterate through an object <br/><br/> for (item of myArray) { <br/> &emsp; // loop body <br/>} <br/><br/> 3. \"for...in\" loop: iterate through the keys of an object; can be used for iterables but should be avoided <br/><br/> for (key in obj) { <br/> &emsp; console.log(`${key}: ${object[key]}`) <br/> }",

        "While Loop": "While Loop: condition expression is located in header parentheses. Loop variable initialization must occur prior to while loop, and loop variable update expression must occur in loop body. <br/><br/> let loopVar = 0; <br/> while (loopVar < x) { </br/> &emsp; // loop body <br/> &emsp; loopVar++; <br/> } <br/><br/> 2. do while loop : loop body is executed at least once, prior to checking loop condition for further iterations <br/></br/> let loopVar = y; </br> do { <br/> &emsp; // loop body <br/> &emsp; loopVar++; <br/> } while (loopVar < z);",

        "Error Handling": "\"try ... catch\" statement : code that may throw an error (or multiple errors) when executed is written within the try block, and actions for handling these errors are written within the catch block, which executes only if an error occurs in try block; allows the program to continue running. Error thrown in catch block can be built-in or user-defined using \"throw\" keyword. Optional \"finally\" statement executes code, after try...catch, regardless of result. <br/><br/> try { <br/>&emsp; // code block <br/>&emsp; if (condition) {<br/>&emsp;&emsp; throw Error(\"error message\") <br/>&emsp;} <br/>} <br/> catch(errorObj) { <br/>&emsp; // code block to handle Error <br/> } <br/> finally { <br/> &emsp; // code block to execute regardless of catch...try result <br/> }",

        /* OOP */

        "Objects": "Object literal is enclosed with curly braces {}. Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. All the keys are unique, but values are not. Key-value pairs of an object are also referred to as properties <br/><br/> const objID = { <br/> &emsp; name: \"John Doe\", <br/> &emsp; age: 40 <br/> } <br/><br/> ",

        "Classes": "Constructor Method is where all instance properties are declared, prepended with \"this\" keyword. Methods in classes do not have any separators between them. New instances are created using the \"new\" keyword. Methods prepended w \"static\" aka static methods are only callable on classes, not on instances. <br/><br/> class Animal { <br/>&emsp; constructor(name) { <br/>&emsp;&emsp; this._name = name; <br/>&emsp;&emsp; this._behaviour = 0; <br/>&emsp; } <br/></br/>&emsp; setName(newName) { </br/>&emsp;&emsp; if (typeof newName === \"string\") { </br/>&emsp;&emsp;&emsp; this._name = newName; </br/>&emsp;&emsp;}</br/>&emsp; } <br/><br/>&emsp; static generateName() { <br/>&emsp;&emsp; const names = ['Winnie', 'Bambi', 'Zoboomafoo', 'Harambe', 'Tony', 'Minnie'] <br/>&emsp;&emsp; const randomNumber = Math.floor(Math.random()*5); <br/>&emsp;&emsp; return names[randomNumber];<br/>&emsp; } <br/>} </br></br> const newPet = new Animal(Animal.generateName());",

        "Inheritance": "Child class is created using \"extends\" keyword. A child class constructor calls the parent class constructor using the super() method. </br></br> // Parent class </br> class ConstructionProject { </br> &emsp; constructor(info) { </br>&emsp;&emsp; this.buildDate = info.buildDate; </br>&emsp;&emsp; this.name = info.name; } </br> } </br> // Child class <br/> class House extends ConstructionProject { </br>&emsp; constructor(houseData) { </br>&emsp;&emsp; super(houseData); </br>&emsp;&emsp; this.designer = houseData.designer; } </br> } </br></br> const myHouse = new House({ designer: 'Da Vinci', name: 'Hello World Museum', buildDate: 2023});",

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

    // Figure out which PLs were selected, if any or either
    let pl1 = pLangs.pl1; // VRs in JS are all function scoped, so I can re-use this VR name
    let pl2 = pLangs.pl2;

    // Check if codeBoxes already added for this Syn-Ftr; if so, REMOVE them 
    if (codeDisplayed[synFTR]) {
        
        // Check if each of PL1 and PL2 exist, i.e. they were SELECTED, if they have been selected, that is, only remove in each PL-SYN-WN if a PL for that syn-wn has been selected
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

    else {

        // Check if either of these is "", empty Str/False
        if (!(pl1 || pl2)) {
            alert("Choose at least one Programming Language");
            return;
        }

        // If either of the PL is selected, add the Syn Ftr (i.e. synFTR) to the codeDisplayed object
        if (pl1 || pl2) {
            codeDisplayed[synFTR] = true;
        }

        // Need to split the logic for each PL  PL-wn, in two conditional statements, in case only one PL is selected

        // If a PL was selected for in PL1 menu...
        if (pl1) {

            // Select for the PL's Syn Obj in PLs Syn obj
            let pl1_syn = pLangsSyn[pl1]; 

            // Extract the Gist code string based on the Button clicked, i.e. the synFTR - use it as index
            let pl1_gist_url = pl1_syn[synFTR];
            
            // Dynamically create a script element and set its source to your Gist URL
            const scriptGistCodeBox1 = document.createElement('script'); 
            scriptGistCodeBox1.src = pl1_gist_url;

            // Create a unique id for the script element
            scriptGistCodeBox1.id = synFTR + "1"; 

            // Temporarily overwrite fn of document.write() Md (saving it's curr meaning to a temp Vr), to appending to PL-Syn-Wn the Gist Els 
            if(!document._write) document._write = document.write;
            document.write = function (str) {
                document.getElementById('pl-syn-wn-1').innerHTML += str;
            };
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn1.appendChild(scriptGistCodeBox1);

            // Revert change in function of document.write to it's original function
            if(scriptGistCodeBox1.complete) document.write = document._write;

            console.log(pl_syn_wn1);
        }

        if (pl2) {
            // Select for the PL's Syn Obj in PLs Syn obj
            let pl2_syn = pLangsSyn[pl2];
            // Extract the specifc syn-code based on the Button clicked, i.e. the synFTR - use it as index
            let pl2_code = pl2_syn[synFTR];

            // Create codeBoxes and put the pl Code in each
            let codeBox2 = document.createElement("div");
            codeBox2.classList.add("codeBox");

            // Give the codebox an Id so that it can be removed easily
            codeBox2.id = synFTR + "2";
            codeBox2.innerHTML = pl2_code;

            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn2.appendChild(codeBox2);
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
