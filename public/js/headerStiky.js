window.addEventListener('scroll', function() {
    var header = document.querySelector('.header_frame');
    var scrollPosition = window.scrollY;

    // Change header class based on scroll position
    if (scrollPosition > 0) {
      header.classList.remove('transparent-header');
      header.classList.add('opaque-header');
    } else {
      header.classList.remove('opaque-header');
      header.classList.add('transparent-header');
    }
  });