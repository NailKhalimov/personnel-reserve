(function(){
  if ($(window).width() < 576) {
    $('.slider-fade-left').addClass('hide');
    $('.slider-fade-right').addClass('hide');

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

      $this.parent().find('.sliderBtnNext').on('click', function () {
        $this.trigger('next.owl.carousel')
      })

      $this.parent().find('.sliderBtnPrev').on('click', function () {
        $this.trigger('prev.owl.carousel')
      })
    });
  } else {
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
        items: 1
      });

      $this.parent().find('.sliderBtnNext').on('click', function () {
        $this.trigger('next.owl.carousel')
      })

      $this.parent().find('.sliderBtnPrev').on('click', function () {
        $this.trigger('prev.owl.carousel')
      })
    });
  }

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
    $('.owl-carousel').trigger('play.owl.autoplay')
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