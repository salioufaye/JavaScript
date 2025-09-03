// document.querySelector("h4").style.background="yellow"
// const balisHtml =document.querySelector("h4")
// console.log(balisHtml)
// balisHtml.style.background="blue"

//----------------------------------------------------------
// --------------------LES CLIC EVENT-----------------------

const bd =document.querySelector(".clic-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response =document.querySelector("p");

//console.log(bd);
// bd.style.borderRadius="100px"

// addEventListner prends deux parametres
// bd.addEventListener("click", ()=>{
//     console.log("click !")
// });
//  bd.style.background ="red";
//  bd.style.border ="3px solid teal";

// Il faut crere une classe sur CSS
bd.addEventListener("click", ()=>{
bd.classList.toggle("question-clicked")
  });
btn1.addEventListener("click", ()=>{
//  response.style.visibility="visible";
//  response.style.background="green";
response.classList.add("show-response");
});
btn2.addEventListener("click", ()=>{
 response.style.visibility="visible";
 response.style.background="red";
});

//----------------------------------------------------------
//-----------------------MOUSE EVENTS-----------------------

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e)=>{
mousemove.style.left =e.pageX + "px";
mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", (e)=>{
mousemove.style.transform="scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", (e)=>{
mousemove.style.transform="scale(1) translate(-50%, -50%)";
mousemove.style.border ="2px solide teal";
});

bd.addEventListener("mouseenter", ()=>{
bd.style.background ="green";
});

bd.addEventListener("mouseout", ()=>{
bd.style.background=" rgba(0,0,0,0.6)";
});

response.addEventListener("mouseover", ()=>{
response.style.transform ="rotate(2deg)";
});
//--------------------------------------------------------------
//-------------------KEYPRESS------------------------------------

const kp = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) =>{
key.textContent = e.key;
if(e.key==="h"){
  bd.style.background="yellow";
}else if(e.key === "j") {
    bd.style.background="blue";  
  }else{
    bd.style.background ="red";
  }
});



















