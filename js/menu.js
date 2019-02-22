function menu() {
  $('.navbar-toggler').on('click', function(){
    if (!$('.menu-first-lvl').hasClass('show')){
      $('.menu-first-lvl').addClass('show')
    } else {
      $('.menu-first-lvl').removeClass('show')
    }
  })

  $('.menu-first-lvl').find('li').on('click', function(e) {
    if (!$(this).hasClass('already-clicked') && !$(this).hasClass('second-lvl-menu_element')) {
      e.preventDefault();
      $(this).addClass('already-clicked')
    }
  })
}