
document.addEventListener('DOMContentLoaded', function () {

var js_lg1 = document.getElementById("js-btn-pl1");
var py_lg1 = document.getElementById("py-btn-pl1");
var j_lg1 = document.getElementById("j-btn-pl1");

console.log(js_lg1);
console.log(py_lg1);
console.log(j_lg1);

var pl1_btn_div = document.getElementById("pl-1-div");
var pl1_btn =  document.createElement("button")
pl1_btn.id = "pl-1";
pl1_btn.classList.add("pl-btn-1"); 
pl1_btn.classList.add("pl-btn"); 

if (sessionStorage.getItem("pl1") !== "Choose a Language") {

}
else {

}
pl1_btn.innerHTML = sessionStorage.getItem("pl1"); 

pl1_btn_div.appendChild(pl1_btn);

function update_btn1(e) { 
    pl1 = e.target.innerHTML;
    pl1_btn.innerHTML = pl1; 
    pl1_btn_div.appendChild(pl1_btn);
    e.preventDefault();
}

js_lg1.addEventListener("click", update_btn1);


});
