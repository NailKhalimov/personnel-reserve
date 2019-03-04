function startSlider() {
  if ($(window).width() < 576) {
    $('.owl-carousel').owlCarousel({
      margin: 69,
      loop: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 1
    })


  } else {
    $('.owl-carousel').owlCarousel({
      margin: 69,
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