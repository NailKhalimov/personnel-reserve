(function(){
  function setConfig() {
    if ($(window).width() < 576) {
      $('.slider-fade-left').addClass('hide');
      $('.slider-fade-right').addClass('hide');

      $('.owl-carousel:not(:first)').trigger('change.owl.carousel', {
        autoWidth: false
      })

      $('.owl-carousel:not(:first)').each(function () {
        var $this = $(this);

        $this.owlCarousel({
          margin: 69,
          loop: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          items: 1
        });
      });
    } else {
      console.log('work')
      $('.slider-fade-left').removeClass('hide');
      $('.slider-fade-right').removeClass('hide');
      $('.owl-carousel:not(:first)').each(function () {
        var $this = $(this);

        $this.owlCarousel({
          margin: 69,
          autoWidth: true,
          loop: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          items: 3
        });
        $this.parent().find('.sliderBtnNext').unbind('click');
        $this.parent().find('.sliderBtnNext').on('click', function () {
          $this.trigger('next.owl.carousel')
        })
        $this.parent().find('.sliderBtnPrev').unbind('click');
        $this.parent().find('.sliderBtnPrev').on('click', function () {
          $this.trigger('prev.owl.carousel')
        })
      });
    }
  }

  setConfig();

  function updateConfig() {
    if(isWindowMobileSize()) {
      $('.owl-carousel:not(:first)').trigger('change', {
        autoWidth: false,
        items: 1
      })
      $('.slider-fade-left').addClass('hide');
      $('.slider-fade-right').addClass('hide');
    } else {
      $('.owl-carousel:not(:first)').trigger('change', {
        autoWidth: true,
        items: 3
      })
      $('.slider-fade-left').removeClass('hide');
      $('.slider-fade-right').removeClass('hide');
    }
  }

  function isWindowMobileSize() {
    return $(window).width() < 576;
  }

  $(window).resize(function() {
    setTimeout(() => {
      updateConfig();
    }, 0);
  })

  $('.owl-4').owlCarousel({
    stagePadding: 0,
    items: 1,
    margin: 60,
    loop: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  })

  $('.owl-4').parent().find('.sliderBtnNext').on('click', function () {
    $('.owl-4').trigger('next.owl.carousel')
  })

  $('.owl-4').parent().find('.sliderBtnPrev').on('click', function () {
    $('.owl-4').trigger('prev.owl.carousel')
  })

  $('.kr-slider-container').on('mouseover', function (event) {
    $('.owl-carousel').trigger('stop.owl.autoplay')
  })

  $('.kr-slider-container').on('mouseout', function () {
    $('.owl-carousel').trigger('play.owl.autoplay', [3000])
  })

  $('.owl-carousel').not(':first').on('changed.owl.carousel', function () {

    let $this = $(this);
    let $element = $(this).find('.owl-item');

    // if($element.filter(':first-child').hasClass('active') || !$element.filter(':last-child').hasClass('active')) {
    //   $this
    //     .find('.owl-stage')
    //     .css({left: '183px'})
    // } else if ($element.filter(':last-child').hasClass('active') || !$element.filter(':first-child').hasClass('active')) {
    //   $this
    //     .find('.owl-stage')
    //     .css({ transition: 'left 0.3s ease 0.3s', left: '-183px' }) 

    // }
  });
  }());