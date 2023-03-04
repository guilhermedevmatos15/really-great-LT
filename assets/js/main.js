import initAOS from "./aos.js";
initAOS(1700); // 1.5 segundos

const links = [...document.querySelectorAll('main .links > .link')];
links.forEach((element, chave, array)=>{
   element.addEventListener('click', (e)=>{
      const nameLink = e.target.querySelector('p').innerHTML;
      const modal = document.querySelector('div.modal');
      
      modal.classList.add('active');
      modal.querySelector('p.name-link').innerHTML=nameLink;
      modal.addEventListener('click', ()=>{
         modal.classList.remove('active');
      });
   });
})