const body = document.querySelector('body'),
   gridShowcase = document.querySelector('.social-grid-area'),
   gridOveriwe = document.querySelector('.overviwe-grid-area')

   toggle = body.querySelector('input[type="checkbox"]');


   toggle.addEventListener('click', ()=>{
      body.classList.toggle('active');
      gridShowcase.classList.toggle('active');
      gridOveriwe.classList.toggle('active');
   })

