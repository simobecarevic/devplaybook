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

// GET the two PL-SYN-WNs; used in all FNs -> update_btn(ev) toggleCodeBoxes(ev) updateScroll()
let pl_syn_wn1 = document.querySelector(".pl-syn-wn-1");
let pl_syn_wn2 = document.querySelector(".pl-syn-wn-2");


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
    let lastChildHeight = pl_syn_wn1.lastElementChild.offsetHeight;
    pl_syn_wn1.scrollTop = pl_syn_wn1.scrollHeight - lastChildHeight;
}

function updateScrollWN2(){
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
            // Give the codebox an Id so that it can be removed easily; first get rid of spaces in the synFTR
            let synFTRNoSpaces = synFTR.split(" ").join(""); 
            codeBox1.id = synFTRNoSpaces + "1";
            codeBox1.innerHTML = pl1_code;
            
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn1.appendChild(codeBox1);
            
            // Pin scrolling to the bottom
            updateScrollWN1();
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
            // Give the codebox an Id so that it can be removed easily; first get rid of spaces in the synFTR
            let synFTRNoSpaces = synFTR.split(" ").join(""); 
            codeBox2.id = synFTRNoSpaces + "2";
            codeBox2.innerHTML = pl2_code;
            
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn2.appendChild(codeBox2);

            // Pin scrolling to the bottom
            updateScrollWN2();

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

// Create event handler to toggle appearance of drop-down menu
function toggleDropDown(e) {
    e.preventDefault();
    // Select the menu button, and the next-sibling drop-down menu for the menu button
    let menu_btn = e.target;
    let menuToToggle = menu_btn.nextElementSibling; // K* this is K JS DOM attr

    //Below Code was not needed, don't need to know state of the Menu, whether on or off, bc TOGGLING regardless; don't need to create global store obj for this state, nor use it in this ehFN

    // For every Btn in the sibling drop down menu, toggle the "showButton" class, which will transition-transform the buttons into place
    for (let btn of menuToToggle.children) {  // K* .children
        // console.log(btn);
        btn.classList.toggle("showButton");
    }
    
    // TOGGLE a CLASS to the menu button, that will THEN TRANSITION the border-radius, particularly when closing the drop down
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
// Syn Ftrs to potentially add: i) DS & Algs 


const pLangsSyn = {
    JavaScript : {
        /* Basics */
        Comments: "<span>// JavaScript single line comment</span> <br/> <span>/* Javascript<br />multi-line comment */</span>",

        "Arithmetic Operators": "+ &nbsp;<span>// Addition</span> <br/> - &nbsp;<span>// Subtraction</span> <br/> * &nbsp;<span>// Multiplication</span> <br/> ** <span>// Exponentation</span><br/> / &nbsp;<span>// Division</span> <br/> % &nbsp;<span>// Modulus</span><br/> ++ <span>// Increment</span> <br/> -- <span>// Decrement</span>",

        "Comparison Operators": "=== <span>// Equal value and equal type</span> <br/> == &nbsp;<span>// Equal to (after type conversion if operands are different data types)</span> <br/> !== <span>// Not equal value nor equal type</span> <br/> != &nbsp<span>// Not equal (after type conversion if operands are different data types)</span> <br/> > &nbsp&nbsp<span>// Greater than</span> <br/> < &nbsp&nbsp<span>// Less than </span><br/> >= &nbsp<span>// Greater than or equal to</span> <br/> <= &nbsp<span>// Less than or equal to</span>", 

        "Logical Operators": "&& <span>// And</span><br/> || <span>// Or </span> <br/> ! &nbsp<span>// Not</span>",  
        
        "Data Types": "<span>/* Primitive Data Types */</span> <br/> <span>// 1. Number: includes integers, floating-point, or scientific notation (append with \"e\")</span><br/>&emsp; 15 <br/>&emsp; 4.9 <br/>&emsp; 456e3 <span>// === 456000</span><br/> <span>// 2. String</span> <br/>&emsp; \"hello world\" <br/> <span>// 3. Boolean</span> <br/>&emsp; true <br/>&emsp; false <br/> <span>// 4. null: an assigned date type that represents no value </span> <br/>&emsp; let x = null; <br/> <span>// 5. undefined: represents a variable having not yet been assigned a value</span> <br/>&emsp; let y; <span>// y returns undefined</span> <br/> <span>// 6. Symbol: instances of this data type are unique & immutable; often used to add unique property keys to an object</span> <br/>&emsp; let unique_key = Symbol(\"hello world\") <br/> <span>// 7. BigInt: used to represent big integer values that are too big to be represented by the Number data type (i.e. 16 digits & over); to create a BigInt, append n to the end of an integer or call BigInt()</span> <br/>&emsp; let x = 1234567890123456789012345n; <br/>&emsp; let y = BigInt(1234567890123456789012345) <br/><br/> <span>/* Compound Data Types */</span> <br/> <span>// 8. Object: key-value pairs of collection of data</span><br/>&emsp; let obj = {a: \"hello world\", \"key with spaces\": 450}",

        /* Encap & Gen */

        "Assignment, Variables, Scope": "<span>// Assignment operator</span> <br/>&emsp; = <br/> <span>// 1. let: mutable, block scope, function scope, not hoisted </span><br/> &emsp; let x = \"hello world \" <br/> &emsp; let y; <br/> &emsp; y = 400 <br/> <span>// 2. const: immutable (must be defined on declaration), block scope, function scope, not hoisted </span> <br/> &emsp; const x = 10; <br/> &emsp; const y = \"can't change this val\" <br/> <span>// 3. var: mutable, no block scope, function scope, declarations are hoisted (with default initialization value of \"undefined\")</span> <br/> &emsp; var x; <br/> &emsp; var y = 100; <br/> &emsp; y = \"one hundred\" <br/><br/>", 

        Functions: "<span>/* 1. Standard Function */</span> <br/><br/> function functionName (pm1, pm2) { <br/> &emsp; <span>/* function body */</span> <br/> } <br/><br/> <span> /* 2. Anonymous Function: A function without a name; typically assigned to a variable or passed as an argument */ </span> <br/><br/> function(pm1) { <br/>&emsp; <span>/* function body */</span> <br/> } <br/> const nameOfFunction = function(pm2) { <br/>&emsp; <span>/* function body */</span> <br/> } <br/> array.forEach(function(item) {console.log(item)})",

        "Functions Shorthand": "<span>/* 1. Arrow Function shorthand for declaring anonymous functions */</span> <br/><br/> const functionOne = (pm1, pm2) => { <br/> &emsp; <span>/* function body */</span> <br/>} <br/><br/> <span>// If there is only one parameter, parentheses can be dropped</span> <br/><br/> const secondFunction = pm1 => { <br/> &emsp; <span>/* function body */</span><br/>} <br/><br/> <span>// If there is only one statement in the function body, curly braces can be dropped </span> <br/><br/> const logParameter = pm => console.log(pm);",

        /* Control Flow */
    
        "Conditional Statements": "if (condition) { <br/> &emsp; <span>/* code block executed if the condition is true */</span> <br/> } else { <br/> &emsp; <span>/* code block executed if the condition is false */</span> <br/> } <br/><br/> <span>// else if: specifies alternate condition if the first condition is false.</span> <br/> if (condition1) { <br/> &emsp; <span>/* block of code to be executed if the condition is true */</span> <br/> } else if (condition2) { <br/> &emsp; <span>/* code block executed if alternate condition is true */</span> <br/> } else { <br/> &emsp; <span>/* code block executed if all conditions are false */</span> <br/> }",

        "Matching Conditional": "<span> /* Switch statement: evaluates an expression, compares this value against case values, executes statements after first case with matching value until a \"break\" statement is encountered. <br/> - If there is no matching case value, the (optional) default code block is executed. <br/> - omitting the \"break\" statement, will cause next case to be executed even if the evaluation does not match the case; no \"break\" needed in the last switch block because the switch construct breaks (ends) there. */</span> <br/><br/>switch(expression) { <br/>&emsp; case x: <br/>&emsp;&emsp; <span>// code block</span> <br/>&emsp;&emsp; break; <br/>&emsp; case y: <br/>&emsp;&emsp; <span>// code block</span> <br/>&emsp;&emsp; break; <br/> &emsp; default: <br/>&emsp;&emsp; <span>// code block</span> <br/>}",

        "For Loop": "<span>/* for loop: loop header parentheses contain, in following order, 3 expressions: <br/> - i) initialization expression, where set or declare loop variable.  <br/> - ii) loop condition expression, boolean expression including loop variable that determines whether loop body executed.  <br/> - iii) loop variable update expression executed after loop executed. */</span> <br/><br/> for (let loopVar = 0; loopVar <= 10; loopVar++ ) { <br/> &emsp; <span>// loop body</span> <br/> } <br/><br/> <span>/* 2. \"for...of\" loop : iterates through the values/items of an iterable (array, string, set, map); cannot be used to iterate through an object. */</span> <br/><br/> for (item of myArray) { <br/> &emsp; <span>// loop body</span> <br/>} <br/><br/> <span>/* 3. \"for...in\" loop: iterate through the keys of an object; can be used for iterables but should be avoided. */</span> <br/><br/> for (key in obj) { <br/> &emsp; console.log(`${key}: ${object[key]}`); <br/> }",

        "While Loop": "<span>/* While Loop: condition expression is located in header parentheses. Loop variable initialization must occur prior to while loop, and loop variable update expression must occur in loop body. */</span> <br/><br/> let loopVar = 0; <br/> while (loopVar < x) { </br/> &emsp; <span>// loop body</span> <br/> &emsp; loopVar++; <br/> } <br/><br/> <span>/* 2. do while loop : loop body is executed at least once, prior to checking loop condition for further iterations */</span><br/></br/> let loopVar = y; </br> do { <br/> &emsp; <span>// loop body</span> <br/> &emsp; loopVar++; <br/> } while (loopVar < z);",

        "Error Handling": "<span> /* try...catch statement: anticipate and handle thrown errors (both built-in errors as well as those constructed with Error() ) while allowing a program to continue running. Code that may throw an error(s) when executed is written within the try block, and actions for handling these errors are written within the catch block. The optional finally statement defines a code block to run regardless of the result. */</span> <br/><br/>try { <br/> &emsp; throw Error('This constructed error will be caught'); <br/> } catch (e) { <br/> &emsp; console.log(e); <span>// Prints the thrown Error object</span><br/>} finally { <br/> &emsp;<span>/* Block of code to be executed regardless of the try...catch result */</span><br/>}",

        /* OOP */

        "Objects": "<span>/* Objects: object literal is enclosed with curly braces {}. <br/> - Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. <br/> - All keys must be unique, but values do not need to be <br/>- Key-value pairs of an object are also referred to as properties */</span> <br/><br/> const objID = { <br/> &emsp; name: \"John Doe\", <br/> &emsp; age: 40 <br/> }",

        "Classes": "<span>/* Classes: method and field declarations in classes are statements, no commas between them (unlike object KVP syntax). New instances are created using the \"new\" keyword. Methods prepended with \"static\" aka static methods are only callable on classes, not on instances. */</span> <br/><br/> class Animal { <br/>&emsp; constructor(name) { <br/>&emsp;&emsp; this._name = name; <br/>&emsp;&emsp; this._behaviour = 0; <br/>&emsp; } <br/></br/>&emsp; setName(newName) { </br/>&emsp;&emsp; if (typeof newName === \"string\") { </br/>&emsp;&emsp;&emsp; this._name = newName; </br/>&emsp;&emsp;}</br/>&emsp; } <br/><br/>&emsp; static generateName() { <br/>&emsp;&emsp; const names = ['Winnie', 'Bambi', 'Zoboomafoo', 'Harambe', 'Tony', 'Minnie'] <br/>&emsp;&emsp; const randomNumber = Math.floor(Math.random()*5); <br/>&emsp;&emsp; return names[randomNumber];<br/>&emsp; } <br/>} </br></br> const newPet = new Animal(Animal.generateName());",

        "Inheritance": "<span>/* Inheritance: child class is created using \"extends\" keyword. A child class constructor calls the parent class constructor using the super() method. */</span> </br></br> <span>// Parent class</span> </br> class ConstructionProject { </br> &emsp; constructor(info) { </br>&emsp;&emsp; this.buildDate = info.buildDate; </br>&emsp;&emsp; this.name = info.name; } </br> } </br> <span>// Child class</span> <br/> class House extends ConstructionProject { </br>&emsp; constructor(houseData) { </br>&emsp;&emsp; super(houseData); </br>&emsp;&emsp; this.designer = houseData.designer; } </br> } </br></br> const myHouse = new House({ designer: 'Da Vinci', name: 'Hello World Museum', buildDate: 2023});",
        
        /* Modulaity */ 

        Importing: "<span>/* Front End JavaScript Importing */</span> <br/>  <br/> <span>// Import individual resources</span> <br/> import {exportedResourceA, exportedResourceB} from './path/to/module.js'; <br/> <span>// or, avoiding name collisions</span> <br/> import {method as uniqueMdName} from 'module.js';  <br/>  <br/> <span>// Import entire module (default object)</span> <br/> import { default as importedResources } from 'module.js'; <span>// variable name is arbitrary</span> <br/> <span>// Shorthand version, curly braces dropped </span> <br/> import importedResources from 'module.js';  <br/>  <br/> <span>// Import both default object and individual resources</span> <br/> import anyName, {x, y, square} from './module.js'; <span>// default object can be given any variable name</span> <br/>  <br/> <span>/* Back End Node.js JavaScript Importing */</span> <br/> <span>// use built-in require function, passing in argument a string of the file path to module</span> <br/>  <br/> <span>// Import entire module.exports object of a file/module</span> <br/> const converters = require('./converters.js'); <br/> <span>// Qualify with dot notation to access module resources</span> <br/> const freezingPointF = converters.celsiusToFarhenheit(0);  <br/>  <br/> <span>// Object destructuring shorthand to extract/unpack individual resources</span> <br/> const {celsiusToFarhenheit} = require('./converters.js'); <br/> const freezingPointF = celsiusToFarhenheit(celsiusInput);",

        Exporting: "<span>/* Front End JavaScript Exporting */</span> <br/><br/> <span>// Export individual resources</span> <br/> export {resourceToExportA, resourceToExportB<span>/*, ... */</span>};  <br/> <span>// Named export inline</span> <br/> export const toggleHiddenElement = (domElement) => {<span>/* ... */</span>}; <br/>  <br/> <span>// Export entire module</span> <br/> <span>// Object containing all the module's resources is first declared</span> <br/> const resources = { <br/> &emsp; valueA <span>/*, <br/> &emsp; ... */</span> <br/> } <br/> export { resources as default }; <br/> <span>// Shorthand version</span> <br/> export default resources;  <br/>  <br/> <span>// Inline default export: useful for exporting only a single resource, or for having a fallback value for your module</span> <br/> export default function cube(x) { <br/> &emsp; return x * x * x; <br/> } <br/>  <br/> <span>// Export entire module and individual resources</span> <br/> export { fun as default, x, y, square }; <br/>  <br/> <span>/* Back End Node.js JavaScript Exporting */</span> <br/> <span>// Create properties to built-in module.exports object</span> <br/>  <br/> <span>// Pre-defined resources are assigned as properties to module.exports</span> <br/> function celsiusToFahrenheit(celsius) { <br/> &emsp; return celsius * (9/5) + 32;  <br/> } <br/> module.exports.celsisuToFahrenheit = celsiusToFahrenheit; <br/>  <br/> <span>// Function expression declaration and assignment statement</span> <br/> module.exports.fahrenheitToCelsius = function(fahrenheit) { <br/> &emsp; return <span>/*...*/</span> <br/> }", 

        "User Input": '<span>/* Front End User Input <br/> - The prompt() method displays a dialog box that prompts the user for input. <br/> - The prompt() method returns the input value if the user clicks "OK", otherwise it returns null. <br/> - Parameters: i) text: optional, the text to display in the dialog box ii) defaultText: optional, the default input text value */</span> <br/><br/> let user = prompt("What is your Full Name?", "Mary Poppins");', 

        Output: 'window.alert("This message appears in a pop-up alert box on the Web Browser");<br/>console.log("Whatever value is passed her will be outputted to the Browser console");',
        
        Asynchronous: "const promise = new Promise((resolve, reject) => {<br/> &emsp; setTimeout(() => { reject(Error('Promise Rejected Unconditionally.'));}, 1000);<br/> }); <br/> promise.then((res) => { console.log(value); }); <br/> promise.catch((err) => { alert(err);}); <br/>"
    },
    Python : {
        /* Basics */
        Comments: '<span> # Python single line comment <br/> <br/> """ <br/> Python does not have a multi-line comment syntax <br/> Python will ignore string literals that are not assigned to a variable <br/> So you can add a multiline string (triple quotes) in your code, as a multi-line comment <br/>"""</span>',
        "Arithmetic Operators": "+ &nbsp;<span>// Addition</span> <br/> - &nbsp;<span>// Subtraction</span> <br/> * &nbsp;<span>// Multiplication</span> <br/> ** <span>// Exponentation</span><br/> / &nbsp;<span>// Division</span> <br/> % &nbsp;<span>// Modulus</span><br/> // <span>// Floor division</span>",
        "Comparison Operators": '== &nbsp;<span># Equal</span> <br/>!= &nbsp;<span># Not equal</span>  <br/> > &nbsp;&nbsp;<span># Greater than</span>  <br/> < &nbsp;&nbsp;<span># Less than</span>  <br/> >= &nbsp;<span># Greater than or equal to</span>  <br/> <= &nbsp;<span># Less than or</span>  <br/>', 
        "Logical Operators": 'and <span># And </span> <br/> or &nbsp;<span># Or </span> <br/> not <span># Not </span>',  
        "Data Types": '<span># Python Data Types are organized into categories <br/># Numeric data types hold numeric values</span>  <br/> 15 <span># int - signed integers of non-limited length </span> <br/> 4.9 <span># float - floating decimal points and it\'s accurate up to 15 decimal places </span> <br/> 1+2j <span># complex </span> <br/><br/> <span># Text data type str holds sequence of characters </span>  <br/>"hello world" <span># str - either double or single quotes</span>  <br/> <br/> <span># Sequence data types hold collection of non-unique items </span> <br/> [500, "Java", "Python", 4.2, varObj] <span># list - ordered mutable collection of same or different types of items </span> <br/> ("Hello", "World", 4.9 ) <span># tuple - ordered immutable sequence of items of same or different types </span><br/> range(10, 40, 3); <span># range – an immutable sequence of numbers, commonly used for looping in for loops; created by range(start, stop[, step]) function</span> <br/> <br/> <span># Mapping data type dict holds data in key-value pairs </span><br/> {"Sally": 12, "Billy": 13, "Jane": 14 } <span># dict</span> <br/><br/> <span> # Set data types hold collections of unique items (no repeating)</span> <br/> {"id782", "id832", "id134"} <span># set - unordered mutable collection of unique items, defined by values separated by commas inside braces </span>  <br/> frozenset({"id782", "id832", "id134"}) <span># frozenset - unordered immutable frozenset object, returned by frozenset(iterable) function</span>  <br/> <br/> <span># Boolean data type bool is one of two values </span>  <br/> True <span># bool</span>  <br/> False <span># bool</span>  <br/> <br/> <span># NoneType </span><br/> None <span># None defines a null value or no value at all</span>',
        /* Encap & Gen */
        "Assignment, Variables, Scope": '= <span># Python assignment operator; there are no variable declaration keywords in Python</span>',
        Functions: 'def functionName(arg1, arg2): <br/>&emsp;<span># function body </span> <br/>&emsp;return <br/> <span># python relies on indentation to define scope; four spaces is the default indentation, however it can be anything (must be consistent for each statement in the scope)</span>',
        "Functions Shorthand": '<span># Function Shorthand</span> <br/> def function_name(arg1, arg2): return arg1 + arg2 <br/><span># Python Lambda Function an anonymous function expression in the form: <lambda arguments : expression> </span> <br/> lambda a, b : (a + b) * 100<br/>list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] <br/> filter(lambda x: x % 2 == 0, list1) <span># Can pass lambda function as argument </span> ',
        /* Control Flow */
        "Conditional Statements": 'if b > a: <br/> &emsp; print("b is greater than a")<br/>elif a == b:<br/>&emsp; print("a and b are equal") <br/> else:<br/> &emsp; print("a is greater than b")<br/> <span># python relies on indentation to define scope </span> <br/>',
        "Matching Conditional": 'match status: <span># expression after match keyword is the subject </span> <br/>&emsp;case 400:<br/>&emsp;&emsp;return "Bad request"<br/>&emsp;case 404:<br/>&emsp;&emsp;return "Not found"<br/>&emsp;case 418:<br/>&emsp;&emsp;return "I\'m a teapot"<br/>&emsp;case _:<br/>&emsp;&emsp;return "Something\'s wrong with the internet"<br/>&emsp;&emsp;<span># _ represents a wildcard, this case matches to all other values of the subject </span>',
        "For Loop": 'for element in iterable:<br/>&emsp;<span># loop body </span>',
        "While Loop": 'loop_variable = 0 <br/> while loop_variable < 10:<br/>&emsp;<span>#loop body </span> <br/>&emsp;loop_varibable += 1',
        "Error Handling": 'try:<br/>&emsp;<span># block of code </span> <br/> except SyntaxError:<br/>&emsp;<span># handle Error </span> <br/> except IndexError:<br/>&emsp;<span># handle Error </span> <br/> else:<br/>&emsp;<span># executes when no error </span> <br/> finally:<br/>&emsp;<span># executres regardless of result of try block </span> <br/><br/><span># try block tests a block of code for errors.</span> <br/><span># except block handles the error.</span> <br/><span># optional else block executes when there is no error. </span> <br/><span># optional finally block executes regardless of the result of the try and except blocks. </span> <br/><span># Can use multiple except blocks to handle different types of errors differently; must pass argument of type to each except block to indicate the type of exception that will be handled by it. </span>'
        ,
        /* OOP */
        "Objects": 'objectName = ClassName(arg1, arg2);<br/><span># there is no built-in object literal syntax in Python (unlike JavaScript)</span>'
        ,
        "Classes": 'class Human:<br/>&emsp;def __init__(self, name, age):<br/> &emsp;&emsp;self.name = name <span># object properties are assigned inside __init__</span> <br/>&emsp;&emsp;self.age = age<br/>&emsp;&emsp;self._privateProp = True <span># denote private attributes using single or double underscore </span> <br/><br/>&emsp;def greeting(self, friend):<br/>&emsp;&emsp;print(f""Hello {friend} my name is {self.name}")<br/><br/>&emsp;def __str__(self):<br/>&emsp;&emsp;return f"{self.name}({self.age})"<br/><br/><span># __init__() is the constructor function that is called whenever a new object of that class is instantiated</span> <br/><span># self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.</span> <br/><br/>John = Human("John", 95)<br/>John.age = 45 <span># modify object properties using dot notation</span> <br/> <br/>del John.age <span># delete properties or objects with del keyword</span> <br/> del John'
        ,
        "Inheritance": "<span># Define a Superclass</span><br/><span># In Employees.py</span> <br/><br/>class Employee:<br/> &emsp;def __init__(self, id, name):<br/>&emsp;&emsp;self.id = id <br/> &emsp;&emsp;self.name = name <br/><br/>&emsp;def displayCredentials(self):<br/>&emsp;&emsp;print self.id + self.name<br/><br/><span># Define a subclass by passing the superclass as an argument in the subclass definition, inside parentheses</span> <br/><br/>class Executive(Employee):<br/>&emsp;def __init__(self, id, name, hours_worked, hourly_rate):<br/>&emsp;&emsp;super().__init__(id, name)<br/>&emsp;&emsp;self.hours_worked = hours_worked<br/>&emsp;&emsp;self.hourly_rate = hourly_rate <br/> <br/>&emsp;def calculate_pay(self):<br/>&emsp;&emsp;return self.hours_worked * self.hourly_rate<br/><br/><span># Create instance of child class </span> <br/>Warren = Executive(\"id123\", \"Warren Buffett\", 40, 100)<br/><br/><span># Can call inherited methods and properties on child instance, or child's properties/methods </span><br/>Warren.calculate_pay() <span># child method </span> <br/>Warren.displayCredentials() <span># inherited method </span><br/> Warren.hours_worked <span># 40</span>",
        /* Modulaity */ 
        Importing: "<span># Standard import syntax</span> <br/>import module_name <br/> <span># access resources through module name with dot operator </span><br/>module_name.rsrc()<br/><br/> <span># Import individual resources </span> <br/>from moduleA import functionA<br/><br/><span># Import all resources from a module using * wildcard </span> <br/> from moduleA import *<br/>functionA() <span># resources now don't need to be qualified with module name </span> <br/><br/><span># Can create a module alias </span> <br/>import module_name as module_alias<br/><span># Python has built-in modules </span> <br/> import os<br/>import math<br/>import random <br/><span># Can alias built-in modules </span> <br/>import math as m",
        Exporting: "<span># No syntax is required inside a Python file to export it as a module</span> <br/><span># Any file with the extension .py can be imported as a module</span> ", 
        "User Input": "<span># input() function is used to get input from user; message is passed as arg</span> <br/>user_input = input('Enter a number: ')",
        Output: "<span># print function prints specfied value(s)/object(s), which is first converted to a string, to the standard output </span> <br/><br/>print('Hello World')<br/>print(variableA, 100, \"String Example\")<br/><br/><span># Full syntax includes 4 optional keyword argument paramenters</span> <br/>print(object(s), sep, end, file, flush)<br/><span># sep - how to seperate printed objects, default value is ''</span> <br/><span># end - what to print at the end (of last object printed), default is \n </span> <br/><span># file - where the values are printed, default is sys.stdout</span> <br/><span># flush - boolean specifying if output is flushed, default is False</span> <br/>print(\"Hello\", \"World\", sep=\" \", end=\"!\n\")",
        Asynchronous: '<span>"""<br/>AsyncIO is a Python module that provides a framework for writing asynchronous code with coroutines. <br/>Coroutines are functions that can be paused and resumed while other tasks are being executed, allowing for concurrent execution of multiple tasks. <br/>AsyncIO is built on top of the event loop, which is a mechanism for managing and scheduling coroutines.<br/>"""</span><br/><br/>import asyncio<br/><br/><span># Coroutines are created using async def </span> <br/>async def main():<br/>&emsp;print(\'Coroutine starts\')<br/>&emsp;await asyncio.sleep(1)<br/>&emsp;print(\'...coroutine ends\')<br/><br/>asyncio.run(main())'
    },
    "Java" : {
        /* Basics */
        Comments: "<span>// Java single line comment</span> <br/> <span>/* Java<br/>multi-line comment */</span>",

        "Arithmetic Operators": "+ &nbsp;<span>// Addition</span> <br/> - &nbsp;<span>// Subtraction</span> <br/> * &nbsp;<span>// Multiplication</span><br/> / &nbsp;<span>// Division</span> <br/> % &nbsp;<span>// Modulus</span><br/> ++ <span>// Increment</span> <br/> -- <span>// Decrement</span>",

        "Comparison Operators": '== &nbsp;<span># Equal</span> <br/>!= &nbsp;<span># Not equal</span>  <br/> > &nbsp;&nbsp;<span># Greater than</span>  <br/> < &nbsp;&nbsp;<span># Less than</span>  <br/> >= &nbsp;<span># Greater than or equal to</span>  <br/> <= &nbsp;<span># Less than or</span>  <br/>', 

        "Logical Operators": "&& <span>// And</span><br/> || <span>// Or</span> <br/> ! &nbsp<span>// Not</span>",  

        "Data Types": "<span>/* i) Primitive Data Types */</span> <br/><br/>boolean <br/>true <br/>false<br/><br/>byte <span>// whole numbers from -128 to 127</span><br/>short <span>// whole numbers from -32,768 to 32,767</span> <br/> int <span>// whole numbers from -2,147,483,648 to 2,147,483,647</span> <br/> long <span>// whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</span><br/><br/>float <span>// fractional numbers, 6 to 7 decimal digits</span><br/>double <span>// fractional numbers, 15 decimal digits</span><br/><br/>char <span>// single character/letter or ASCII values</span><br/><br/><span>/* ii) Non-primitive Data Types */</span><br/><br/>String <span>// collection of characters surrounded by double quotes</span><br/>Array <span>// store multiple values (of same type) in a single variable</span><br/>Class <span>// a user-defined blueprint or prototype from which objects are created</span>",
        
        /* Encap & Gen */
        "Assignment, Variables, Scope": "<span>/* Java is strongly typed i.e. it requires the declaration of every variable with a data type (including method parameters and even the return type of the method) */</span><br/> boolean varA = true;<br/> byte varX = 124; <br/> String greeting = \"Hello World\";<br/> <span>/* To declare an array append square brackets to the type of values, use curly braces for each value */</span><br/>int[] = {10, 20, 30, 40};",
        Functions: "<span>/* All functions/methods must be declared within a class, and are defined with the name of the method, followed by parentheses (); there are 3 keywords/modifiers that precede the method name in it's definition...<br/> - Access Specifier : A \"public\" method or variable can be accessed from any other class. A \"protected\" method/variable is accessible within the same package and by subclasses, even if they are in a different package. A \"private\" method or variable is accessible only within the same class. A \"package-private\" method/variable is accessible only within the same package. If no access specifier is specified (the access specifier is omitted), \"package-private\" is the default value.<br/> - static : keyword indicates the method/variable belongs to the class rather than any specific instance of the class, therefore can call/access it without creating an instance of the class. <br/> - Return Type : keyword specifies the type of value that the method will return. \"void\" used as the return type when a method does not return any value. It indicates that the method performs an action but does not produce a result.<br/> <br/> - Java is strictly OOP; all functions (methods) and variables must be declared within a class, and all code to be executed must be declared within the class methods <br/> - The main() Method is the starting point for the JVM to start execution of a Java program. Without the main() method, JVM will not execute the program. The main method contains code to execute (calls to other methods etc) for the program, and it can be placed in any class that\’s part of a program (typically a dedicated class named \"Main\")<br/> - The main method must have the following syntax (including parameter definition) in order to be executed by the JVM: public static void main(String[] args){ */</span><br/> <br/>public class MathOperations {<br/> <br/> &emsp;public static void main(String[] args){<br/> &emsp;&emsp;System.out.println(\"Hello, World!\");<br/> &emsp;&emsp;<span>/* code to execute for the program, <br/> &emsp;&emsp;including calls to other methods */</span><br/> &emsp;}<br/> <br/> &emsp;<span>/* - Method with a return type of int <br/> &emsp;- Method parameters must be typed as well */</span> <br/> &emsp;private int add(int a, int b) {<br/> &emsp;&emsp;return a + b;<br/> &emsp;}<br/> <br/> &emsp;<span>/* Method with a return type of double */</span>{<br/> &emsp;&emsp;if (denominator != 0) {<br/> &emsp;&emsp;&emsp;return numerator / denominator;<br/> &emsp;&emsp;} else {<br/> &emsp;&emsp;&emsp;System.out.println(\"Cannot divide by zero!\");<br/> &emsp;&emsp;&emsp;<span>/* Return a special value (e.g., NaN) in case of an error */</span><br/> &emsp;&emsp;&emsp;return Double.NaN;<br/> &emsp;&emsp;}<br/> &emsp;}<br/> <br/> &emsp;<span>/* Method with void return type (does not return a value) */</span><br/> &emsp;public void displayMessage(String message) {<br/> &emsp;&emsp;System.out.println(\"Message: \" + message);<br/> &emsp;}<br/>}",
        "Functions Shorthand": "<span>/* Java lambda expression is a short block of code which takes in parameters and returns a value; are similar to methods, but they do not need a name and they can be implemented right in the body of a method. */</span><br/><br/>public class Main {<br/>&emsp;public static void main(String[] args) {<br/>&emsp;&emsp;ArrayList<Integer> numbers = new ArrayList<Integer>(); <br/>&emsp;&emsp;numbers.add(5);<br/>&emsp;&emsp;numbers.add(9);<br/>&emsp;&emsp;numbers.add(8);<br/>&emsp;&emsp;numbers.add(1);<br/>&emsp;&emsp;numbers.forEach( (n) -> { System.out.println(n); } );<br/>&emsp;}<br/>}",
        /* Control Flow */
        "Conditional Statements": "if (condition) { <br/> &emsp; <span>/* code block executed if the condition is true */</span> <br/> } else { <br/> &emsp; <span>/* code block executed if the condition is false */</span> <br/> } <br/><br/> <span>// else if: specifies alternate condition if the first condition is false.</span> <br/> if (condition1) { <br/> &emsp; <span>/* block of code to be executed if the condition is true */</span> <br/> } else if (condition2) { <br/> &emsp; <span>/* code block executed if alternate condition is true */</span> <br/> } else { <br/> &emsp; <span>/* code block executed if all conditions are false */</span> <br/> }",
        "Matching Conditional": "<span> /* Switch statement: evaluates an expression, compares this value against case values, if there is a match associated block of code is executed <br/> - If there is no matching case value, the (optional) default code block is executed. <br/> - \"break\" statement prevents case testing from continuing; no \"break\" needed in the last switch block because the switch construct breaks (ends) there. <br/> - default keyword specifies some code to run if there is no case match: */</span> <br/><br/>switch(expression) { <br/>&emsp; case x: <br/>&emsp;&emsp; <span>// code block</span> <br/>&emsp;&emsp; break; <br/>&emsp; case y: <br/>&emsp;&emsp; <span>// code block</span> <br/>&emsp;&emsp; break; <br/> &emsp; default: <br/>&emsp;&emsp; <span>// code block</span> <br/>}",
        
        "For Loop": "<span>/* for loop: loop header parentheses contain, in following order, 3 statements: <br/> - i) Statement 1 sets the loop variable and is executed (one time) before the execution of the code block <br/> - ii) Statement 2 defines the condition for executing the code block <br/> - iii) Statement 3 is executed (every time) after the code block has been executed, and typically modifies the loop variable */ </span> <br/><br/> for (int loopVar = 0; loopVar <= 10; loopVar++ ) { <br/> &emsp; <span>// loop body</span> <br/> } <br/><br/> <span>/* 2. \"for...of\" loop : iterates through the values/items of an iterable (array, string, set, map); cannot be used to iterate through an object. */</span> <br/><br/> for (item of myArray) { <br/> &emsp; <span>// loop body</span> <br/>} <br/><br/> <span>/* 3. \"for...in\" loop: iterate through the keys of an object; can be used for iterables but should be avoided. */</span> <br/><br/> for (key in obj) { <br/> &emsp; console.log(`${key}: ${object[key]}`); <br/> }",

        "While Loop": "<span>/* While Loop: condition expression is located in header parentheses. Loop variable initialization must occur prior to while loop, and loop variable update expression must occur in loop body. */</span> <br/><br/> int loopVar = 0; <br/> while (loopVar < x) { </br/> &emsp; <span>// loop body</span> <br/> &emsp; loopVar++; <br/> } <br/><br/> <span>/* 2. do while loop : loop body is executed at least once, prior to checking loop condition for further iterations */</span><br/></br/> int loopVar = y; </br> do { <br/> &emsp; <span>// loop body</span> <br/> &emsp; loopVar++; <br/> } while (loopVar < z);",

        "Error Handling": "<span> /* try...catch statement: anticipate and handle thrown errors (both built-in errors as well as constructed errors) while allowing a program to continue running. */</span> <br/><br/>try { <br/> &emsp; <span> /* code that may throw an error(s) when executed is written within the try block */ </span> <br/> } catch (e) { <br/> &emsp; <span>// actions for handling try block error(s) are written within the catch block. </span><br/>} finally { <br/> &emsp;<span>/* The optional finally statement defines a code block to run regardless of the result (whether error in try block or not) */</span><br/>}",

        /* OOP */
        "Objects": "<span>/* Main.java file */</span><br/>public class Main {<br/>&emsp;int x = 5;<br/>}<br/><span>/* Second.java file */</span><br/>class Second {<br/>&emsp;public static void main(String[] args) {<br/>&emsp;&emsp;Main myObj = new Main();<br/>&emsp;&emsp;System.out.println(myObj.x);<br/>&emsp;}<br/>}<br/>",

        "Classes": "<span>/* Java is strictly OOP; all functions (methods) and variables must be declared within a class, and all code to be executed must be declared within the class methods<br/>- The main() Method is the starting point for the JVM to start execution of a Java program. Without the main() method, JVM will not execute the program. The main method contains code to execute (calls to other methods etc) for the program, and it can be placed in any class that’s part of a program (typically a dedicated class named \"Main\")<br/> - The main method must have the following syntax (including parameter definition) in order to be executed by the JVM: public static void main(String[] args){ */</span><br/><br/>public class Main {<br/><br/>&emsp;int x = 10; <span>// class attribute aka field</span><br/>&emsp;final pi = 3.14; <span>// final keyword prevents overriding values</span><br/><br/>&emsp;public static void main(String[] args) {<br/>&emsp;&emsp;Main myObj = new Main();<br/>&emsp;&emsp;myObj.x = 40; <span>// access fields use dot operator</span><br/>&emsp;&emsp;System.out.println(myObj.x);<br/>&emsp;}<br/><br/>&emsp;static void myMethod() {<br/>&emsp;&emsp;<span>// code to be executed</span><br/>&emsp;&emsp;return valueToReturn; <br/>&emsp;}<br/><br/>&emsp;<span>// Method parameters must be typed as well</span><br/>&emsp;<span>// Method has a return type of int</span><br/>&emsp;private int add(int a, int b) {<br/>&emsp;&emsp;return a + b;<br/>&emsp;}<br/><br/>&emsp;<span>// Method with a return type of double</span><br/>&emsp;public static double divide(double numerator, double denominator) {<br/>&emsp;&emsp;if (denominator != 0) {<br/>&emsp;&emsp;&emsp;return numerator / denominator;<br/>&emsp;&emsp;} else {<br/>&emsp;&emsp;&emsp;System.out.println(\"Cannot divide by zero!\");<br/>&emsp;&emsp;&emsp;<span>// Return a special value (e.g., NaN) in case of an error</span><br/>&emsp;&emsp;&emsp;return Double.NaN;<br/>&emsp;&emsp;}<br/>&emsp;}<br/><br/>&emsp;<span>// Method with void return type (does not return a value)</span><br/>&emsp;public void displayMessage(String message) {<br/>&emsp;&emsp;System.out.println(\"Message: \" + message);<br/>&emsp;}<br/>}",
        "Inheritance": '<span>// Superclass (base class)</span><br/>class Animal {<br/>&emsp;String name;<br/><br/>&emsp;<span>// Constructor</span><br/>&emsp;public Animal(String name) {<br/>&emsp;&emsp;this.name = name;<br/>&emsp;}<br/><br/>&emsp;<span>// Method</span><br/>&emsp;public void eat() {<br/>&emsp;&emsp;System.out.println(name + " is eating.");<br/>&emsp;}<br/>}<br/><br/><span>// Subclass (derived class)</span><br/>class Dog extends Animal {<br/>&emsp;<span>// Additional field in the subclass</span><br/>&emsp;String breed;<br/><br/>&emsp;<span>// Constructor for the subclass</span><br/>&emsp;public Dog(String name, String breed) {<br/>&emsp;&emsp;<span>// Call the superclass constructor using "super"</span><br/>&emsp;&emsp;super(name);<br/>&emsp;&emsp;this.breed = breed;<br/>&emsp;}<br/><br/>&emsp;<span>// Overriding a method from the superclass</span><br/>&emsp;@Override<br/>&emsp;public void eat() {<br/>&emsp;&emsp;System.out.println(name + " (a " + breed + " dog) is eating.");<br/>&emsp;}<br/><br/>&emsp;<span>// New method in the subclass</span><br/>&emsp;public void bark() {<br/>&emsp;&emsp;System.out.println(name + " is barking.");<br/>&emsp;}<br/>}<br/><br/>public class InheritanceExample {<br/>&emsp;public static void main(String[] args) {<br/>&emsp;&emsp;<span>// Creating an instance of the subclass</span><br/>&emsp;&emsp;Dog myDog = new Dog("Buddy", "Golden Retriever");<br/><br/>&emsp;&emsp;<span>// Accessing members from the superclass</span><br/>&emsp;&emsp;System.out.println("Name: " + myDog.name);<br/>&emsp;&emsp;myDog.eat();  <span>// Calls overridden method in the subclass</span><br/><br/>&emsp;&emsp;<span>// Accessing members specific to the subclass</span><br/>&emsp;&emsp;System.out.println("Breed: " + myDog.breed);<br/>&emsp;&emsp;myDog.bark(); <span>// Calls method in the subclass</span><br/>&emsp;}<br/>}',
        /* Modulaity */ 
        Importing: 'import package.name.ClassName; <span>// To import a certain class only</span><br/>import package.name.*  <span>// To import the whole package</span><br/>',
        Exporting: '<span>/* In Java, you don\'t explicitly "export" individual Java files; instead, you organize your code into packages, and the classes within those packages can be accessed by other classes in the same package without any special export process. <br/> To allow other classes or packages to access your classes or members, you can use the public modifier for classes, methods, or fields that need to be visible outside the package.<br/>*/</span><br/><br/>package com.example; <span>// this declares the package the code in this java file belongs to</span><br/>public class MyClass { <br/>&emsp;<span>/*... */</span>', 
        "User Input": '<span>/* The Scanner class in the java.util package is used to get user input. <br/>To use the Scanner class, create an object of the class and use any of the available methods found in the Scanner class documentation, e.g. nextLine(), which is used to read Strings:<br/>*/</span><br/><br/>import java.util.Scanner;  <span>// Import the Scanner class</span><br/><br/>class Main {<br/>&emsp;public static void main(String[] args) {<br/>&emsp;&emsp;Scanner myObj = new Scanner(System.in);  <span>// Create a Scanner object</span><br/>&emsp;&emsp;System.out.println("Enter username");<br/><br/>&emsp;&emsp;String userName = myObj.nextLine();  <span>// Read user input</span><br/>&emsp;&emsp;System.out.println("Username is: " + userName);  <span>// Output user input</span><br/>&emsp;}<br/>}',
        Output: 'System.out.println("Hello World!"); <span>// new line is added after the argument is outputted </span><br/><br/><span>// print() method is also used for output but does not add a new line at the end </span><br/>System.out.print("This output... ");<br/>System.out.print("and this output, will be on the same line.");',
        Asynchronous: 'import java.util.concurrent.CompletableFuture;<br/><br/>public class AsyncExample {<br/><br/>&emsp;public static void main(String[] args) {<br/>&emsp;&emsp;<span>// Run a task asynchronously and obtain a CompletableFuture</span><br/>&emsp;&emsp;CompletableFuture<String> futureResult = CompletableFuture.supplyAsync(() -> {<br/>&emsp;&emsp;&emsp;<span>// Simulate a time-consuming operation </span><br/>&emsp;&emsp;&emsp;try {<br/>&emsp;&emsp;&emsp;&emsp;Thread.sleep(2000);<br/>&emsp;&emsp;&emsp;} catch (InterruptedException e) {<br/>&emsp;&emsp;&emsp;&emsp;e.printStackTrace();<br/>&emsp;&emsp;&emsp;}<br/><br/>&emsp;&emsp;&emsp;return "Async Operation Result";<br/>&emsp;&emsp;});<br/><br/>&emsp;&emsp;<span>// Define a callback to be executed when the asynchronous task is complete </span><br/>&emsp;&emsp;CompletableFuture<Void> finalResult = futureResult.thenAcceptAsync(result -> {<br/>&emsp;&emsp;&emsp;System.out.println("Async Operation Completed: " + result);<br/>&emsp;&emsp;});<br/><br/>&emsp;&emsp;<span>// Perform other tasks concurrently with the asynchronous operation </span><br/>&emsp;&emsp;System.out.println("Doing other work while the async operation is in progress.");<br/><br/>&emsp;&emsp;<span>// Wait for the asynchronous operation to complete</span><br/>&emsp;&emsp;finalResult.join();<br/><br/>&emsp;&emsp;System.out.println("All tasks completed.");<br/>&emsp;}<br/>}'
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

    // Figure out which PLs were selected
    let pl1 = pLangs.pl1; // VRs in JS are all all function scoped, so I can re-use this VR name
    let pl2 = pLangs.pl2;

    // Check if codeBoxes already added for this Syn-Ftr
    if (codeDisplayed[synFTR]) {

        // This LOGIC also needs to be split up into conditions for if each of PL1 and PL2 exist, if they have been selected, that is, only remove in each PL-SYN-WN if a PL for that syn-wn has been selected
        if (pl1) {
            // Get the codeBox Els that are already in the wns; first get rid of spaces in the synFTR
            let synFTRNoSpaces = synFTR.split(" ").join(""); 
            let codeBox1 = pl_syn_wn1.children.namedItem(synFTRNoSpaces + "1");
            // Remove the codeBoxes 
            pl_syn_wn1.removeChild(codeBox1);
        }

        if (pl2) {   
            // Get the codeBox Els that are already in the WNs; first get rid of spaces in the synFTR
            let synFTRNoSpaces = synFTR.split(" ").join(""); 
            let codeBox2 = pl_syn_wn2.children.namedItem(synFTRNoSpaces + "2");
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
            alert("Please choose at least one Programming Language");
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
            // Give the codebox an Id so that it can be removed easily; first get rid of spaces in the synFTR so the id does not bug
            let synFTRNoSpaces = synFTR.split(" ").join(""); 
            codeBox1.id = synFTRNoSpaces + "1";
            codeBox1.innerHTML = pl1_code;
            
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn1.appendChild(codeBox1);

            // Pin scrolling to the bottom; top of bottom-most codebox
            updateScrollWN1();
        }

        if (pl2) {
            // Select for the PL's Syn Obj in PLs Syn obj
            let pl2_syn = pLangsSyn[pl2];
            // Extract the specifc syn-code based on the Button clicked, i.e. the synFTR - use it as index
            let pl2_code = pl2_syn[synFTR];

            // Create codeBoxes and put the pl Code in each; use var so that can access outside this block for height matching
            var codeBox2 = document.createElement("div");
            codeBox2.classList.add("codeBox");

            // Give the codebox an Id so that it can be removed easily; first get rid of spaces in the synFTR so the id does not bug
            let synFTRNoSpaces = synFTR.split(" ").join(""); 
            codeBox2.id = synFTRNoSpaces + "2"; 
            codeBox2.innerHTML = pl2_code;

            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn2.appendChild(codeBox2);

            // Pin scrolling to the bottom
            updateScrollWN2();

        }

    }

    
    // Toggle the Styling of the Button that was pressed.
    const btnPressed = ev.target;
    btnPressed.classList.toggle("syn-btn-on");

}

// Register the Event Handler to all the Buttons in the menus
const btns = document.querySelectorAll(".syn-btn");

btns.forEach((btn) => {
    btn.addEventListener("click", toggleCodeBoxes);
})



});
