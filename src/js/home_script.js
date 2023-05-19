 /* trat pom uplode windo */
let i=1;
let mylood = document.querySelector('.loade');
let mypomonload = document.querySelector('.ublode-windo');
let targetbody = document.querySelector('body');
let myonloade = setInterval(()=>{
mylood.style.width=`${i}%`;
i++;
},20)
window.onload = ()=>{
  mypomonload.classList.add('hide');
  clearInterval(myonloade);
}
 /*ends*/ 
 //card-play
 let myplay = document.querySelector('.myplay-vido');
targetbody.addEventListener("click",(x)=>{

  if(x.target.classList == "target-card")
  {
    
    let mysrx_vdio = x.target.nextElementSibling.childNodes[1];
    
    myplay.innerHTML = `<video src="${mysrx_vdio.src}" controls ></video>`;
  }
  
})
let cardd = document.querySelector('.card-play');
//cardd.firstElementChild
//cardd.nextElementSibling;
//cardd.childNodes
//cardd.parentNode;
//cardd.lastElementChild
//cardd.previousElementSibling
//ardd.previousElementSibling
//parentElement
