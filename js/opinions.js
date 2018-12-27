(function(){
  $('button').on('click', function() {
    if($(this).hasClass('page-button')) {
      let id = $(this).data('page-id');
      $('.opinions-container_page').removeClass('active');
      $('button').removeClass('active')

      $(`.opinion-page-${id}`).addClass('active');
      currentButton = $(this).addClass('active');
      
    } else {
      let buttonsLength = $('.page-button').length;
      let currentID = null;

      if($(this).hasClass('prev-button')) {
        $('.page-button').each(function () {
          if(($(this).hasClass('active'))) {
            let id = $(this).data('page-id');
            if(id !== 1) {
              toggleClasses($('.opinions-container_page'), $(`.opinion-page-${id - 1}`), 'active', 'active');
              toggleClasses($('button'), $(`.page-button-${id - 1}`), 'active', 'active')
            }
          }
        });
      } else if ($(this).hasClass('next-button')){
        let currentButtonID = null;

        $('.page-button').each(function () {
          if (($(this).hasClass('active'))) {
            currentButtonID = $(this).data('page-id');
          }
        });
        if (currentButtonID !== buttonsLength) {
          toggleClasses($('.opinions-container_page'), $(`.opinion-page-${currentButtonID + 1}`), 'active', 'active')
          toggleClasses($('button'), $(`.page-button-${currentButtonID + 1}`), 'active', 'active')
        }
      }
    }
  })

  const toggleClasses = ($prevElement, $nextElement, prevClass, nextClass) => {
    $prevElement.removeClass(prevClass);
    $nextElement.addClass(nextClass);
  }
})();