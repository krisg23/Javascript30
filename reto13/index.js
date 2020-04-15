function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages = document.querySelectorAll('.slide-in');

    let imageBottom_aux;
    let isHalfShown_aux;

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        
        // bottom of the image
        let imageBottom = sliderImage.offsetTop + sliderImage.height;
        if (sliderImage.tagName === 'SPAN') imageBottom = imageBottom_aux
        else   imageBottom_aux = imageBottom
        
        let isHalfShown = slideInAt > sliderImage.offsetTop;
        if (sliderImage.tagName === 'SPAN') isHalfShown = isHalfShown_aux
        else isHalfShown_aux = isHalfShown

        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');          
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    function kronk(){
      document.getElementById('ricardo').pause();
      document.getElementById('marcianito').pause();
      document.getElementById('groot').pause();
      document.getElementById('alvarito').pause();
      if(document.getElementById('kronk').paused == false){document.getElementById('kronk').pause();}
      else{document.getElementById('kronk').play();}
    }
    function ricardo(){
      document.getElementById('kronk').pause();
      document.getElementById('marcianito').pause();
      document.getElementById('groot').pause();
      document.getElementById('alvarito').pause();
      if(document.getElementById('ricardo').paused == false){document.getElementById('ricardo').pause();}
      else{document.getElementById('ricardo').play();}
    }
    function marcianito(){
      document.getElementById('kronk').pause();
      document.getElementById('ricardo').pause();
      document.getElementById('groot').pause();
      document.getElementById('alvarito').pause();
      if(document.getElementById('marcianito').paused == false){document.getElementById('marcianito').pause();}
      else{document.getElementById('marcianito').play();}
    }
    function groot(){
      document.getElementById('kronk').pause();
      document.getElementById('ricardo').pause();
      document.getElementById('marcianito').pause();
      document.getElementById('alvarito').pause();
      if(document.getElementById('groot').paused == false){document.getElementById('groot').pause();}
      else{document.getElementById('groot').play();}
    }
    function alvarito(){
      document.getElementById('kronk').pause();
      document.getElementById('ricardo').pause();
      document.getElementById('marcianito').pause();
      document.getElementById('groot').pause();
      if(document.getElementById('alvarito').paused == false){document.getElementById('alvarito').pause();}
      else{document.getElementById('alvarito').play();}
    }

    window.addEventListener('scroll', debounce(checkSlide));