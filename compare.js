
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
// Add the PL1 menu button to the HTML F
var pl1_btn_div = document.getElementById("pl-1-div");
pl1_btn_div.appendChild(pl1_btn);

// Create the PL2 Dropdown menu Button w default text content
var pl2_btn =  document.createElement("button")
pl2_btn.id = "pl-2";
pl2_btn.classList.add("pl-btn-2"); 
pl2_btn.classList.add("pl-btn"); 
pl2_btn.innerHTML = "Choose a Language";
// Add the PL2 menu button to the HTML F
var pl2_btn_div = document.getElementById("pl-2-div");
pl2_btn_div.appendChild(pl2_btn);



// Create Event Handler for PL1 menu choices, on click to change PL1 button text
function update_btn1(e) { 
    var pl1 = e.target.innerHTML;
    pl1_btn.innerHTML = pl1; 
    pl1_btn_div.appendChild(pl1_btn);
    e.preventDefault();
}; 

// Create Event Handler for PL2 menu choices, on click to change PL2 button text
function update_btn2(e) { 
    var pl2 = e.target.innerHTML;
    pl2_btn.innerHTML = pl2; 
    pl2_btn_div.appendChild(pl2_btn);
    e.preventDefault();
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

// Create a store of state of each menu, whether it is "on" or not, so can toggle this
const synMenuState = {
    basicMenuOn: false, 
    genMenuOn: false,
    cfMenuOn: false,
    oopMenuOn: false,
    modMenuOn: false
};
// Create event handler to toggle appearance of drop-down menu

function toggleDropDown(e) {
    e.preventDefault();
    // Select the menu button, and the next-sibling drop-down menu for the menu button
    let menu_btn = e.target;
    let menuToToggle = menu_btn.nextElementSibling; // K* this is K JS DOM attr
    // console.log(menu_btn);
    // console.log(menuToToggle);
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

});
