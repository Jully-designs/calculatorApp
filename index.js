var keys = document.querySelectorAll(".number,.operator1").length;
var display = document.querySelector("#input-value");
var displayOut = document.querySelector("#output-value");
var getClear = document.getElementById("clear");
var getBackspace = document.getElementById("backspace");

function clear(){
  display.innerHTML = "";
}

function backSpace(){
  display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
}
// function to show input values
function show(event){
  display.innerHTML += event.target.id;
}
// clear all numbers in the display input
getClear.addEventListener("click", clear);

// clear the last number
getBackspace.addEventListener("click", backSpace);
// loop through buttons
for(var i = 0; i < keys; i++ ){
  var select = document.querySelectorAll(".number,.operator1")[i];
  select.addEventListener("click", show);
};

// if display is not empty,calculate the result
function calculate(){
  if (display.innerHTML !== ""){
    var result = eval(display.innerHTML);
    displayOut.innerHTML = result;
    clear();
  };
};

if(displayOut.innerHTML !== 0){  
  // clear the output result
  getClear.addEventListener("click", function(){
    displayOut.innerHTML = "";
  });
  // clear the last number in the output result
  getBackspace.addEventListener("click", function(){
    displayOut.innerHTML = displayOut.innerHTML.substring(0, displayOut.innerHTML.length - 1);
  });
};

// on clicking equals sign do this;

document.getElementById("equals").addEventListener("click",function(){
  calculate();
});

//if another operator is clicked after result has been collated;
for(var x = 0; x < keys; x++){
  var keys = document.querySelectorAll(".number").length;
  var number = document.querySelectorAll(".number")[x];
  number.addEventListener("click",function(){
    if(displayOut.innerHTML !== ""){
      displayOut.innerHTML = "";
    }
  })
}

for(var i = 0; i < keys; i++ ){
  var keys = document.querySelectorAll(".operator1").length;
  var select = document.querySelectorAll(".operator1")[i];
  select.addEventListener("click", function(){
    if(displayOut.innerHTML !== ""){
      display.innerHTML = displayOut.innerHTML + display.innerHTML;
      displayOut.innerHTML = "";
    }
  });
};
