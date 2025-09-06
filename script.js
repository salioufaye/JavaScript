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

//-------------------------SCROLL EVENT-----------------------------
//------------------------------------------------------------------

const nav =document.querySelector("nav");

window.addEventListener('scroll',() =>{
if (window.scrollY >120){
  nav.style.top ="0";
}else {
  nav.style.top ="-50px";
}
});

//---------------------------FORMS EVENTS------------------------------
//---------------------------------------------------------------------

const inputName =document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");


let pseudo ="";
let language ="";

inputName.addEventListener("input",(e)=>{
  pseudo = e.target.value;
});

select.addEventListener("input", (e) =>{
  language = e.target.value;
});

form.addEventListener("submit", (e)=>{
  e.preventDefault();
 
  if(cgv.checked){
    document.querySelector("form > div").innerHTML=`
    <h3>pseudo: ${pseudo}</h3>
    <h4>language: ${language}</h4>
    `;
  }else{
    alert("veuiller accepter les CGV");
  }
});

//-------------------------LOAD EVENT------------------------------
//-----------------------------------------------------------------

// window.addEventListener("load", ()=>{
  
// });

//---------------------SELECTION MULTIPLE-----------------------------
//----------------------FOREACH (POUR CHACUN)-------------------------

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e)=>{
    e.target.style.transform ="scale(0.7)";
  });
});

//-------------------addEventListener VS Onclick-----------------------
//---------------------------------------------------------------------
//Le probleme est que je peux plus y rattacher un autre evenement

// document.body.onclick=()=>{

// };
//-----------------USECAPTURE ET BUBBLING------------------------------
//----------------------------------------------------------------------
// ----------------------BUBBLING--------------------------------------
// bubblinh => fin (de base l'ecouyeur est parametré en mode bubbling)

Document.body.addEventListener("click", ()=>{

}, false);

//----------------- USECAPTURE----------------------------------------
// evenement se declenche au debut
Document.body.addEventListener("click", ()=>{

}, true);

//----------------------STOP PROPAGATION-----------------------------------
//-------------------------------------------------------------------------
bd.addEventListener("click", (e) =>{

alert("test");
e.stopPropagation();
});

// -----------REMOVEEVENTLISTNER---------------------------------------
// utiliser si on veut enlever l'ecouteur.

//------------------------------BOM------------------------------------
//----------------------browser object model----------------------------

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.scroll);