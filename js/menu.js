$('.navbar-toggler').on('click', function(){
  if (!$('.menu-first-lvl').hasClass('show')){
    $('.menu-first-lvl').addClass('show')
  } else {
    $('.menu-first-lvl').removeClass('show')
  }
})