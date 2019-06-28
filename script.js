var h3=document.querySelector("h3");
var input1=document.querySelector(".color1");
var input2=document.querySelector(".color2");
var body=document.getElementById("body");
function setgradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")";
	h3.textContent = body.style.background + ";";
}


input1.addEventListener("input",setgradient);
input2.addEventListener("input",setgradient);
