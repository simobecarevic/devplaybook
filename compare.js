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
            // below is same code that can be found in the toggleCodeBox fn
            // Select for the PL's Syn Obj in PLs Syn obj
            let pl1_syn = pLangsSyn[pl1]; 

            // From the pLangsSyn object, Extract the URL for the Gist Script that generates the syn-code box, based on the Button clicked, i.e. the synFTR use it as index, AS WELL as WHICH PLWN we are using PL2 itc
            let pl1_gist_url = pl1_syn[synFTR].PL1;
            
            // Dynamically create a script element and set its source to your Gist URL
            const scriptGistCodeBox1 = document.createElement('script'); 
            scriptGistCodeBox1.src = pl1_gist_url;
            

            // Create a unique id for the script element, from the synFTR, but just get rid of spaces in the synFTR string
            let synFTRid = synFTR.split(" ").join("");
            
            scriptGistCodeBox1.id = synFTRid + "1";
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn1.appendChild(scriptGistCodeBox1);
        }
    }

    console.log(pLangs);
    
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
            // below is same code that can be found in the toggleCodeBox fn
            // Select for the PL's Syn Obj in PLs Syn obj
            let pl2_syn = pLangsSyn[pl2]; 

            // From the pLangsSyn object, Extract the URL for the Gist Script that generates the syn-code box, based on the Button clicked, i.e. the synFTR use it as index, AS WELL as WHICH PLWN we are using PL2 itc
            let pl2_gist_url = pl2_syn[synFTR].PL2;

            // Dynamically create a script element and set its source to your Gist URL
            const scriptGistCodeBox2 = document.createElement('script'); 
            scriptGistCodeBox2.src = pl2_gist_url;

            // Create a unique id for the script element, from the synFTR, but just get rid of spaces in the synFTR string
            let synFTRid = synFTR.split(" ").join("");

            scriptGistCodeBox2.id = synFTRid + "2"; 
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn2.appendChild(scriptGistCodeBox2);

        }
    }

    console.log(pLangs);
    
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

    // For every Btn in the sibling drop down menu, toggle the "showButton" class, which will transition-transform the buttons into place
    for (let btn of menuToToggle.children) {  // K* .children
        // console.log(btn);
        btn.classList.toggle("showButton");
    }

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

// Create an obj that will store all the syntax for all the possible languages we can compare, for EACH PL-WN

/* 
Syn Ftrs to Potentially Add
- Function Default Parameters 
- DS & Algorithm Implementation in each language
- 
*/ 

const pLangsSyn = {
    JavaScript : {
        /* Basics */
        Comments:  {
            PL1: "./gist/javascript/commentsPL1.js",
            PL2: "./gist/javascript/commentsPL2.js"
        },
        
        "Arithmetic Operators": {
            PL1: "./gist/javascript/arithmetic_operatorsPL1.js",
            PL2: "./gist/javascript/arithmetic_operatorsPL2.js"
        },
        
        "Comparison Operators": {
            PL1: "./gist/javascript/comparison_operatorsPL1.js",
            PL2: "./gist/javascript/comparison_operatorsPL2.js"
        },
        
        "Logical Operators": {
            PL1: "./gist/javascript/logical_operatorsPL1.js",
            PL2: "./gist/javascript/logical_operatorsPL2.js"
        },
        
        "Data Types": {
            PL1: "./gist/javascript/data_typesPL1.js",
            PL2: "./gist/javascript/data_typesPL2.js"
        },

        /* Encap & Gen */

        "Assignment, Variables, Scope": {
            PL1: "./gist/javascript/assignment_variables_scopePL1.js",
            PL2: "./gist/javascript/assignment_variables_scopePL2.js"
        },

        Functions: {
            PL1: "./gist/javascript/functionsPL1.js",
            PL2: "./gist/javascript/functionsPL2.js"
        },

        "Functions Shorthand": {
            PL1: "./gist/javascript/functions_shorthandPL1.js",
            PL2: "./gist/javascript/functions_shorthandPL2.js"
        },

        /* Control Flow */
    
        "Conditional Statements": {
            PL1: "./gist/javascript/conditional_statementsPL1.js",
            PL2: "./gist/javascript/conditional_statementsPL2.js"
        },

        "Matching Conditional": {
            PL1: "./gist/javascript/matching_conditionalPL1.js",
            PL2: "./gist/javascript/matching_conditionalPL2.js"
        },

        "For Loop": {
            PL1: "./gist/javascript/for_loopPL1.js",
            PL2: "./gist/javascript/for_loopPL2.js"
        },

        "While Loop": {
            PL1: "./gist/javascript/while_loopPL1.js",
            PL2: "./gist/javascript/while_loopPL2.js"
        },

        "Error Handling": {
            PL1: "./gist/javascript/error_handlingPL1.js",
            PL2: "./gist/javascript/error_handlingPL2.js"
        },

        /* OOP */

        "Objects": {
            PL1: "./gist/javascript/objectsPL1.js",
            PL2: "./gist/javascript/objectsPL2.js"
        },

        "Classes": {
            PL1: "./gist/javascript/classesPL1.js",
            PL2: "./gist/javascript/classesPL2.js"
        },

        "Inheritance": {
            PL1: "./gist/javascript/inheritancePL1.js",
            PL2: "./gist/javascript/inheritancePL2.js"
        },
        
        /* Modulaity */ 

        Importing: {
            PL1: "./gist/javascript/importingPL1.js",
            PL2: "./gist/javascript/importingPL2.js"
        },

        Exporting: {
            PL1: "./gist/javascript/exportingPL1.js",
            PL2: "./gist/javascript/exportingPL2.js"
        },

        "User Input": {
            PL1: "./gist/javascript/user_inputPL1.js",
            PL2: "./gist/javascript/user_inputPL2.js"
        },

        Output: {
            PL1: "./gist/javascript/outputPL1.js",
            PL2: "./gist/javascript/outputPL2.js"
        },

        Asynchronous: {
            PL1: "./gist/javascript/asynchronousPL1.js",
            PL2: "./gist/javascript/asynchronousPL2.js"
        }
    },
    Python : {
        /* Basics */
        Comments:  {
            PL1: "./gist/python/commentsPL1.js",
            PL2: "./gist/python/commentsPL2.js"
        },
        
        "Arithmetic Operators": {
            PL1: "./gist/python/arithmetic_operatorsPL1.js",
            PL2: "./gist/python/arithmetic_operatorsPL2.js"
        },
        
        "Comparison Operators": {
            PL1: "./gist/python/comparison_operatorsPL1.js",
            PL2: "./gist/python/comparison_operatorsPL2.js"
        },

        "Logical Operators": {
            PL1: "./gist/python/logical_operatorsPL1.js",
            PL2: "./gist/python/logical_operatorsPL2.js"
        },
        
        "Data Types": {
            PL1: "./gist/python/data_typesPL1.js",
            PL2: "./gist/python/data_typesPL2.js"
        },

        /* Encap & Gen */

        "Assignment, Variables, Scope": {
            PL1: "./gist/python/assignment_variables_scopePL1.js",
            PL2: "./gist/python/assignment_variables_scopePL2.js"
        },

        Functions: {
            PL1: "./gist/python/functionsPL1.js",
            PL2: "./gist/python/functionsPL2.js"
        },

        "Functions Shorthand": {
            PL1: "./gist/python/functions_shorthandPL1.js",
            PL2: "./gist/python/functions_shorthandPL2.js"
        },

        /* Control Flow */
    
        "Conditional Statements": {
            PL1: "./gist/python/conditional_statementsPL1.js",
            PL2: "./gist/python/conditional_statementsPL2.js"
        },

        "Matching Conditional": {
            PL1: "./gist/python/matching_conditionalPL1.js",
            PL2: "./gist/python/matching_conditionalPL2.js"
        },

        "For Loop": {
            PL1: "./gist/python/for_loopPL1.js",
            PL2: "./gist/python/for_loopPL2.js"
        },

        "While Loop": {
            PL1: "./gist/python/while_loopPL1.js",
            PL2: "./gist/python/while_loopPL2.js"
        },

        "Error Handling": {
            PL1: "./gist/python/error_handlingPL1.js",
            PL2: "./gist/python/error_handlingPL2.js"
        },

        /* OOP */

        "Objects": {
            PL1: "./gist/python/objectsPL1.js",
            PL2: "./gist/python/objectsPL2.js"
        },

        "Classes": {
            PL1: "./gist/python/classesPL1.js",
            PL2: "./gist/python/classesPL2.js"
        },

        "Inheritance": {
            PL1: "./gist/python/inheritancePL1.js",
            PL2: "./gist/python/inheritancePL2.js"
        },
        
        /* Modulaity */ 

        Importing: {
            PL1: "./gist/python/importingPL1.js",
            PL2: "./gist/python/importingPL2.js"
        },

        Exporting: {
            PL1: "./gist/python/exportingPL1.js",
            PL2: "./gist/python/exportingPL2.js"
        },

        
        "User Input": {
            PL1: "./gist/python/user_inputPL1.js",
            PL2: "./gist/python/user_inputPL2.js"
        },


        Output: {
            PL1: "./gist/python/outputPL1.js",
            PL2: "./gist/python/outputPL2.js"
        },

        Asynchronous: {
            PL1: "./gist/python/asynchronousPL1.js",
            PL2: "./gist/python/asynchronousPL2.js"
        }
    },

    "Java" : {
        /* Basics */
        Comments:{
            /* Basics */
            Comments:  {
                PL1: "./gist/java/commentsPL1.js",
                PL2: "./gist/java/commentsPL2.js"
            },
            
            "Arithmetic Operators": {
                PL1: "./gist/java/arithmetic_operatorsPL1.js",
                PL2: "./gist/java/arithmetic_operatorsPL2.js"
            },
            
            "Comparison Operators": {
                PL1: "./gist/java/comparison_operatorsPL1.js",
                PL2: "./gist/java/comparison_operatorsPL2.js"
            },
    
            "Logical Operators": {
                PL1: "./gist/java/logical_operatorsPL1.js",
                PL2: "./gist/java/logical_operatorsPL2.js"
            },
            
            "Data Types": {
                PL1: "./gist/java/data_typesPL1.js",
                PL2: "./gist/java/data_typesPL2.js"
            },
    
            /* Encap & Gen */
    
            "Assignment, Variables, Scope": {
                PL1: "./gist/java/assignment_variables_scopePL1.js",
                PL2: "./gist/java/assignment_variables_scopePL2.js"
            },
    
            Functions: {
                PL1: "./gist/java/functionsPL1.js",
                PL2: "./gist/java/functionsPL2.js"
            },
    
            "Functions Shorthand": {
                PL1: "./gist/java/functions_shorthandPL1.js",
                PL2: "./gist/java/functions_shorthandPL2.js"
            },
    
            /* Control Flow */
        
            "Conditional Statements": {
                PL1: "./gist/java/conditional_statementsPL1.js",
                PL2: "./gist/java/conditional_statementsPL2.js"
            },
    
            "Matching Conditional": {
                PL1: "./gist/java/matching_conditionalPL1.js",
                PL2: "./gist/java/matching_conditionalPL2.js"
            },
    
            "For Loop": {
                PL1: "./gist/java/for_loopPL1.js",
                PL2: "./gist/java/for_loopPL2.js"
            },
    
            "While Loop": {
                PL1: "./gist/java/while_loopPL1.js",
                PL2: "./gist/java/while_loopPL2.js"
            },
    
            "Error Handling": {
                PL1: "./gist/java/error_handlingPL1.js",
                PL2: "./gist/java/error_handlingPL2.js"
            },
    
            /* OOP */
    
            "Objects": {
                PL1: "./gist/java/objectsPL1.js",
                PL2: "./gist/java/objectsPL2.js"
            },
    
            "Classes": {
                PL1: "./gist/java/classesPL1.js",
                PL2: "./gist/java/classesPL2.js"
            },
    
            "Inheritance": {
                PL1: "./gist/java/inheritancePL1.js",
                PL2: "./gist/java/inheritancePL2.js"
            },
            
            /* Modulaity */ 
    
            Importing: {
                PL1: "./gist/java/importingPL1.js",
                PL2: "./gist/java/importingPL2.js"
            },
    
            Exporting: {
                PL1: "./gist/java/exportingPL1.js",
                PL2: "./gist/java/exportingPL2.js"
            },
    
            
            "User Input": {
                PL1: "./gist/java/user_inputPL1.js",
                PL2: "./gist/java/user_inputPL2.js"
            },
    
    
            Output: {
                PL1: "./gist/java/outputPL1.js",
                PL2: "./gist/java/outputPL2.js"
            },
    
            Asynchronous: {
                PL1: "./gist/java/asynchronousPL1.js",
                PL2: "./gist/java/asynchronousPL2.js"
            }
        }
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
console.log(codeDisplayed);


function toggleCodeBoxes(ev) {
    
    // Extract the SYN FTR you are toggling
    const synFTR = ev.target.innerHTML; 
    console.log(synFTR);

    // Get the PL Syn Wn
    let pl_syn_wn1 = document.querySelector(".pl-syn-wn-1");
    let pl_syn_wn2 = document.querySelector(".pl-syn-wn-2");

    console.log(pl_syn_wn1);
    console.log(pl_syn_wn2);

    // Figure out which PLs were selected, if any or either
    let pl1 = pLangs.pl1; // VRs in JS are all function scoped, so I can re-use this VR name
    let pl2 = pLangs.pl2; 

    // Check if codeBoxes already added for this Syn-Ftr; if so, REMOVE them  
    if (codeDisplayed[synFTR]) {

        // Get rid of spaces in the synFTR string bc you will be selecting for the els to remove based on the id of the script, which had the space taken out when it was added
        let synFTRid = synFTR.split(" ").join("");

        // Check if each of PL1 and PL2 exist, i.e. they were SELECTED, if they have been selected, that is, only remove in each PL-SYN-WN if a PL for that syn-wn has been selected
        if (pl1) {
            // Get the GIST Els that are already in the wns
            let script1 = pl_syn_wn1.children.namedItem(synFTRid + "1");
            console.log(script1);
            let scriptsStylesheet1 = script1.nextElementSibling;
            console.log(scriptsStylesheet1);
            let scriptsDivGist1 = scriptsStylesheet1.nextElementSibling;
            console.log(scriptsDivGist1);

            // Remove the GIST Els i.e. the script and it's subsequent link-stylesheet and div codebox
            pl_syn_wn1.removeChild(script1);
            pl_syn_wn1.removeChild(scriptsStylesheet1);
            pl_syn_wn1.removeChild(scriptsDivGist1);
            
        }

        if (pl2) {   
            // Get the GIST Els that are already in the wns
            let script2 = pl_syn_wn2.children.namedItem(synFTRid + "2");
            console.log(script2);
            let scriptsStylesheet2 = script2.nextElementSibling;
            console.log(scriptsStylesheet2);
            let scriptsDivGist2 = scriptsStylesheet2.nextElementSibling;
            console.log(scriptsDivGist2);

            // Remove the GIST Els i.e. the script and it's subsequent link-stylesheet and div codebox
            pl_syn_wn2.removeChild(script2);
            pl_syn_wn2.removeChild(scriptsStylesheet2);
            pl_syn_wn2.removeChild(scriptsDivGist2);
        }  
        
        // If either of the PLs was selected, then delete the Syn-Ftr from the list of Syn FTRs; this line could go instead in if condxn blocks above
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

        
        /* if (pl1 && pl2) {
            let deferScript = true;
        } */

        // Need to split the logic for each PL PL-wn, in two conditional statements, in case only one PL is selected

        // If a PL was selected for in PL1 menu...
        if (pl1) {

            // Select for the PL's Syn Obj in PLs Syn obj
            let pl1_syn = pLangsSyn[pl1]; 

            // From the pLangsSyn object, Extract the URL for the Gist Script that generates the syn-code box, based on the Button clicked, i.e. the synFTR use it as index, AS WELL as WHICH PLWN we are using PL2 itc
            let pl1_gist_url = pl1_syn[synFTR].PL1;
            console.log(pl1_gist_url);

            // Dynamically create a script element and set its source to your Gist URL
            const scriptGistCodeBox1 = document.createElement('script'); 
            scriptGistCodeBox1.src = pl1_gist_url;
            

            // Create a unique id for the script element, from the synFTR, but just get rid of spaces in the synFTR string
            let synFTRid = synFTR.split(" ").join("");
            
            scriptGistCodeBox1.id = synFTRid + "1";
            console.log(scriptGistCodeBox1);
            
            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn1.appendChild(scriptGistCodeBox1);

            /* // Revert change in function of document.write to it's original function
            if(scriptGistCodeBox1.complete) document.write = document._write; */

            console.log("End of p1block execution, pl_syn_wn1 is: ",  pl_syn_wn1);
        }

        if (pl2) {
            // Select for the PL's Syn Obj in PLs Syn obj
            let pl2_syn = pLangsSyn[pl2];

            // From the pLangsSyn object, Extract the URL for the Gist Script that generates the syn-code box, based on the Button clicked, i.e. the synFTR use it as index, AS WELL as WHICH PLWN we are using PL2 itc
            let pl2_gist_url = pl2_syn[synFTR].PL2;

            // Dynamically create a script element and set its source to your Gist URL
            const scriptGistCodeBox2 = document.createElement('script'); 
            scriptGistCodeBox2.src = pl2_gist_url;

            // Create a unique id for the script element, from the synFTR, but just get rid of spaces in the synFTR string
            let synFTRid = synFTR.split(" ").join("");

            scriptGistCodeBox2.id = synFTRid + "2"; 


            /* scriptGistCodeBox2.setAttribute("class", "scriptPLWN")
            scriptGistCodeBox2.setAttribute("plWNid", "pl-syn-wn-2"); */

            /* 
            // This was solution to lack of loading of the script
            
            // Get rid of asynchronousity, so that script executes before parsing rest of HTML
            scriptGistCodeBox2.async = false;

            // Temporarily overwrite fn of document.write() Md (saving it's curr meaning to a temp Vr), to appending to PL-Syn-Wn the Gist Els 
            if(!document._write) document._write = document.write;
            document.write = function (str) {
                document.getElementById('pl-syn-wn-2').innerHTML += str;
            };
            */

            // Append codeBox to the corres pl-syn-wn
            pl_syn_wn2.appendChild(scriptGistCodeBox2);

            /* // Revert change in function of document.write to it's original function
            if(scriptGistCodeBox2.complete) document.write = document._write; */

            console.log("End of p2block execution, pl_syn_wn2 is: ",  pl_syn_wn2);
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
