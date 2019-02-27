function StartUpPageSlider() {
  if ($(window).width() < 576) {
    $('.owl-carousel').owlCarousel({
      margin: 76,
      loop: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 1,
      dots: false
    })

  } else {
    $('.owl-carousel').owlCarousel({
      margin: 76,
      autoWidth: true,
      loop: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: false
    })
  }
  $('#sliderBtnNext').on('click', function () {
    $('.owl-carousel').trigger('next.owl.carousel')
  })
  $('#sliderBtnPrev').on('click', function () {
    $('.owl-carousel').trigger('prev.owl.carousel')
  })
}