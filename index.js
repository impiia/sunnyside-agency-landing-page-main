(function() {
    const burgerItem = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.header__nav');
  
    burgerItem.addEventListener('click', (event) => {
      console.log(1);
      event.stopPropagation();
      menu.classList.toggle('hide-nav');
    });
  
    document.addEventListener('click', (event) => {
      const targetElement = event.target;
      if (!menu.contains(targetElement) && targetElement !== burgerItem) {
        menu.classList.remove('hide-nav');
      }
    });
  })();


  (function(){
    const header =document.querySelector('.header');
    window.onscroll = ()=>{
        if (window.pageYOffset>50){
            header.classList.add('header_active');
        }else{
            header.classList.remove('header_active');
        }
    };
    
    }());