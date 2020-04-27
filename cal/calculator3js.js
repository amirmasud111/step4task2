var element = document.getElementById("z");
var allElements = document.getElementById("allElements");
var memoryResult = document.getElementsByClassName("y");
var Ds = document.getElementsByClassName("ds");
var plusBeforeStore="0";
 var flag;
 var flagHist = "1";
 var flag2;
  var ul = document.getElementById("list");
  var m1 = document.getElementsByClassName("memory1");
    var Cash = document.getElementById("cash");
	var Cash2 = document.getElementById("cash2");
var more = document.getElementById("more");	
var historyClass = document.getElementsByClassName("b");
var memoryClass = document.getElementsByClassName("c");
var noHist = document.getElementById("noHistory");
var noMem = document.getElementById("noMemory");
allElements.innerHTML="";
function getNums(event) {
    if (element.value == "0" || flag == "1") {
        element.value = event.target.innerText;
		flag = "0";
    }
    else {
        element.value += event.target.innerText;
    }
}

function divide() {
	if(element.value != "" || allElements.innerHTML.charAt(allElements.innerHTML.length - 1)==")"){
		if(element.value.includes("-")){
			element.value = "(" + element.value + ")";
			element.value += " / ";
			allElements.innerHTML += element.value;
			element.value  = "";
		}
		 else if(flag2=="1"){
			element.value  = "";
			allElements.innerHTML += " / ";
			flag2 = "0";
		}
		else{
	element.value += " / ";
    allElements.innerHTML += element.value;
    element.value  = "";
		}
	}
}

function multiply() {
	if(element.value != "" || allElements.innerHTML.charAt(allElements.innerHTML.length - 1)==")"){if(element.value.includes("-")){
			element.value = "(" + element.value + ")";
			element.value += " * ";
			allElements.innerHTML += element.value;
			element.value  = "";
		}
	 else if(flag2=="1"){
			element.value  = "";
			allElements.innerHTML += " * ";
			flag2 = "0";
		}
		else{
	 element.value += " * ";
    allElements.innerHTML += element.value;
    element.value  = "";
    }
	}
}

function subtract() {
	if(element.value != "" || allElements.innerHTML.charAt(allElements.innerHTML.length - 1)==")"){
		if(element.value.includes("-")){
			element.value = "(" + element.value + ")";
			element.value += " - ";
			allElements.innerHTML += element.value;
			element.value  = "";
		}
		 else if(flag2=="1"){
			element.value  = "";
			allElements.innerHTML += " - ";
			flag2 = "0";
		}
		else{
	element.value += " - ";
    allElements.innerHTML += element.value;
    element.value  = "";
    }
	}
}
 
function add() {
	if(element.value != "" || allElements.innerHTML.charAt(allElements.innerHTML.length - 1)==")"){
		if(element.value.includes("-")){
			element.value = "(" + element.value + ")";
			element.value += " + ";
			allElements.innerHTML += element.value;
			element.value  = "";
		}
		 else if(flag2=="1"){
			element.value  = "";
			allElements.innerHTML += " + ";
			flag2 = "0";
		}
		else{
	element.value += " + ";
	 
    allElements.innerHTML += element.value;
	
    element.value  = "";
    }
	}
}

function getdot(){
	if(!element.value.includes("."))
	 
	if(element.value == ""){
			element.value += "0.";
	}
	else{	element.value += ".";}
}

function sqr(){
	allElements.innerHTML =  "&#8730;" + "(" + element.value + ")";
	 element.value = Math.pow(element.value , 1/2);
	 flag2 = "1";
	  flag = "1";
	var li = document.createElement("li");
	var myBr = document.createElement("br");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var elementValueHist = document.createTextNode(element.value); 
	var allElementsHist = document.createTextNode(allElements.innerHTML + "" + " = ");
	span1.appendChild(allElementsHist);
	li.appendChild(span1);
	li.appendChild(myBr);
	span2.appendChild(elementValueHist);
	li.appendChild(span2);
	span1.className = "test1";
	span2.className = "test2";
	li.className = "history1";
	ul.insertBefore(li,ul.childNodes[0]);	
	noHist.style.display = "none";
		if(flagHist=="0"){
		li.style.display = "none";
		
	}
 
	 
}
function sqrt(){
	allElements.innerHTML =  "sqrt" + "(" + element.value + ")";
	 
	 element.value = Math.pow(element.value , 2);
	   flag = "1";
	   flag2 = "1";
	var li = document.createElement("li");
	var myBr = document.createElement("br");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var elementValueHist = document.createTextNode(element.value); 
	var allElementsHist = document.createTextNode(allElements.innerHTML + "" + " = ");
	span1.appendChild(allElementsHist);
	li.appendChild(span1);
	li.appendChild(myBr);
	span2.appendChild(elementValueHist);
	li.appendChild(span2);
	span1.className = "test1";
	span2.className = "test2";
	li.className = "history1";
	ul.insertBefore(li,ul.childNodes[0]);	
	noHist.style.display = "none";
		if(flagHist=="0"){
		li.style.display = "none";
		
	}
	
}
function cube(){
	allElements.innerHTML =  "cube" + "(" + element.value + ")";
	  element.value = Math.pow(element.value , 3);
	  flag = "1";
	  flag2 = "1";
	var li = document.createElement("li");
	var myBr = document.createElement("br");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var elementValueHist = document.createTextNode(element.value); 
	var allElementsHist = document.createTextNode(allElements.innerHTML + "" + " = ");
	span1.appendChild(allElementsHist);
	li.appendChild(span1);
	li.appendChild(myBr);
	span2.appendChild(elementValueHist);
	li.appendChild(span2);
	span1.className = "test1";
	span2.className = "test2";
	li.className = "history1";
	noHist.style.display = "none";
	ul.insertBefore(li,ul.childNodes[0]);	
		if(flagHist=="0"){
		li.style.display = "none";
		
	}
}

function xx(){
	allElements.innerHTML =  "1" + "/" + "(" + element.value + ")";
	 element.value = 1 /(element.value);
	 flag = "1";
	 flag2 = "1";
	var li = document.createElement("li");
	var myBr = document.createElement("br");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var elementValueHist = document.createTextNode(element.value); 
	var allElementsHist = document.createTextNode(allElements.innerHTML + "" + " = ");
	span1.appendChild(allElementsHist);
	li.appendChild(span1);
	li.appendChild(myBr);
	span2.appendChild(elementValueHist);
	li.appendChild(span2);
	span1.className = "test1";
	span2.className = "test2";
	li.className = "history1";
	ul.insertBefore(li,ul.childNodes[0]);	
	noHist.style.display = "none";
		if(flagHist=="0"){
		li.style.display = "none";
		
	}
}
function addSign(){
	if(element.value !== "0" && element.value !== ""){
		element.value = element.value  * (-1) ;	
	}
}

function deleteAll(){
	element.value = "0";
	allElements.innerHTML = "";
}
function delete1(){
	element.value = "0"; 
}

function backSpace(){
	element.value = element.value.substring(0, element.value.length - 1);
	if(element.value == ""){
		element.value = "0";
	}
		
}

function precent(){
	element.value = element.value / 100;		
}
function equal(){
	if(allElements.innerHTML!=""){
	allElements.innerHTML += element.value;

	element.value = eval(allElements.innerHTML); 
	var li = document.createElement("li");
	var myBr = document.createElement("br");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var elementValueHist = document.createTextNode(element.value); 
	var allElementsHist = document.createTextNode(allElements.innerHTML + "" + " = ");
	span1.appendChild(allElementsHist);
	li.appendChild(span1);
	li.appendChild(myBr);
	span2.appendChild(elementValueHist);
	li.appendChild(span2);
	span1.className = "test1";
	span2.className = "test2";
	li.className = "history1";
	ul.insertBefore(li,ul.childNodes[0]);	
    allElements.innerHTML = "";	
	flag = "1";
	noHist.style.display = "none";
	if(flagHist=="0"){
		li.style.display = "none";
		
	}

}
}
var H1 = document.getElementsByClassName("history1");

function showHistory(){
	 	    for (var a = 0 ; a < H1.length ; a++) {
        H1[a].style.display = "block";
		
    }
    for (var v = 0 ; v < m1.length ; v++) {
       m1[v].style.display = "none";
    }
	flagHist = "1";
	memoryClass[0].style.border = "none";
	historyClass[0].style.borderBottom = "3px solid blue";
	Cash.style.display = "none";
	Cash2.style.display = "inline";
	noMem.style.display = "none";
	if(H1.length < 1 ){
		
		noHist.style.display = "flex";
		
		
	}
	
}
function showMemory(){
		 	    for (var a = 0 ; a < H1.length ; a++) {
        H1[a].style.display = "none";
		
    }
    for (var v = 0 ; v < m1.length ; v++) {
       m1[v].style.display = "block";
    }
	flagHist = "0";
	historyClass[0].style.border = "none";
	memoryClass[0].style.borderBottom = "3px solid blue";
	Cash2.style.display = "none";
	Cash.style.display = "inline";
	noHist.style.display = "none";
	if(m1.length < 1 ){
		
		
		noMem.style.display = "flex";
		
	}
	 

}

var flag3 = "0";
function memoryPlus(){
	Ds[0].disabled = false;
	Ds[1].disabled = false;
	plusBeforeStore=1;
   if( flag3 == "0"){
	var li1 = document.createElement("li");
	var myBr1 = document.createElement("br");
	var span3 = document.createElement("span");
    var btn1 = document.createElement("button");
	btn1.innerText = "MC";
    var btn2 = document.createElement("button");
	btn2.innerText = "M+";	
    var btn3 = document.createElement("button");
	btn3.innerText = "M-";
	btn1.className = "buttonsMemory";
    btn2.className = "buttonsMemory";
    btn3.className = "buttonsMemory";
	var elementValueMem = document.createTextNode(element.value); 
	span3.appendChild(elementValueMem);
	span3.className = "y";
	span3.style.marginRight = "2%";	
	span3.style.fontWeight = "bold";
	li1.className = "memory1";
	li1.appendChild(span3);	
	li1.appendChild(myBr1);
	li1.appendChild(btn1);
    li1.appendChild(btn2);
	li1.appendChild(btn3);
   ul.insertBefore(li1,ul.childNodes[0]);	
    flag3 = "1";
	btn1.onclick = tinyMemoryClear;
	btn2.onclick = tinyMemoryPlus;
	btn3.onclick = tinyMemoryMinus;
	noMem.style.display = "flex";
	noMem.style.display = "none";
	if(flagHist=="1"){ 
	li1.style.display = "none";
	
	}
 }
   else {  
	memoryResult[0].innerText=parseFloat(memoryResult[0].innerText) + parseFloat(element.value);
 }
}
function memorySubtract(){
	
	memoryResult[0].innerText=parseFloat(memoryResult[0].innerText) - parseFloat(element.value);
	
}

function memorySave(){ if(plusBeforeStore == "1"){
	var li1 = document.createElement("li");
	var myBr1 = document.createElement("br");
	var span3 = document.createElement("span");
    var btn1 = document.createElement("button");
	btn1.innerText = "MC";
    var btn2 = document.createElement("button");
	btn2.innerText = "M+";	
    var btn3 = document.createElement("button");
	btn3.innerText = "M-";
	btn1.className = "buttonsMemory";
    btn2.className = "buttonsMemory";
    btn3.className = "buttonsMemory";
	var elementValueMem = document.createTextNode(element.value); 
	span3.appendChild(elementValueMem);
	span3.className = "y";
	span3.style.marginRight = "2%";	
	span3.style.fontWeight = "bold";
	li1.className = "memory1";
	li1.appendChild(span3);	
	li1.appendChild(myBr1);
	li1.appendChild(btn1);
    li1.appendChild(btn2);
	li1.appendChild(btn3);
      ul.insertBefore(li1,ul.childNodes[0]);	
    btn1.onclick = tinyMemoryClear;
	btn2.onclick = tinyMemoryPlus;
	btn3.onclick = tinyMemoryMinus;
	noMem.style.display = "flex";
	noMem.style.display = "none";
	if(flagHist=="1"){ 
	li1.style.display = "none";
	
	}	
}
}
function memoryRecall(){
	element.value = memoryResult[0].innerText;
	
}

function mc1(){
	Ds[0].disabled = true;
	Ds[1].disabled = true;
	plusBeforeStore = "0";
	noMem.style.display = "flex";
while (ul.hasChildNodes()) {  
  ul.removeChild(m1[0]);
   flag3 = "0";
}
}

function Hc1(){
	noHist.style.display = "flex";
while (ul.hasChildNodes()) {  
  ul.removeChild(H1[0]);
   flag3 = "0";
}
}


function showMore(event){
	  event.stopPropagation();
	more.style.left = "0%";

}

document.onclick = function(event) {
        if (
         more != event.target &&
            isDescendant(more, event.target)
        ) {
           more.style.left = "-100%";
            more.style.left = "-100%";
        }

        return false;
    }
	  function isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return false;
            }
            node = node.parentNode;
        }
        return true;
    }
	
	function tinyMemoryClear(e){
		e.target.parentElement.parentElement.removeChild(e.target.parentElement);
			if(m1.length < 1){
			noMem.style.display = "flex";
			Ds[0].disabled = true;
			Ds[1].disabled = true;
			plusBeforeStore = "0";
			 flag3 = "0";
		
	}
	}
	function tinyMemoryPlus(e){
		e.target.parentElement.querySelector("span").innerHTML = parseFloat(element.value) + parseFloat(e.target.parentElement.querySelector("span").innerHTML); 
	}
	function tinyMemoryMinus(e){
		e.target.parentElement.querySelector("span").innerHTML =  parseFloat(e.target.parentElement.querySelector("span").innerHTML)- parseFloat(element.value); 
	
	}
	