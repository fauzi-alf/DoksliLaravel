
      
      // Efek paralaks pada gambar anime di bagian hero
      var heroImage = document.querySelector('.hero img');
      window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      });
