function menu() {
  $('.navbar-toggler').on('click', function(){
    if (!$('.menu-first-lvl').hasClass('show')){
      $('.menu-first-lvl').addClass('show')
    } else {
      $('.menu-first-lvl').removeClass('show')
    }
  })

  $('.menu-first-lvl').find('li').on('click', function(e) {
    if (!$(this).hasClass('already-clicked') && !$(this).hasClass('second-lvl-menu_element') && $(window).width() < 576) {
      e.preventDefault();
      $(this).addClass('already-clicked')
    }
  })

  let varible = $('.purple-menu').find('.menu-first-lvl');

  $(varible).find('li').on('mouseover', function (e) {
    if ($(this).find('ul').width()) {
      let width = $(this).find('ul').width();
      let padding = $(this).find('ul').css('padding');
      let paddingLeft = $(this).find('ul').css('padding-left');
      let margin = $(this).find('ul').css('margin');
      const SOMECONST = 6;

      let countWidth = +(width) + parseStroke(padding, 'padding') + parseStroke(margin, 'margin') + SOMECONST;
      $(this).find('ul').css('margin-left', (-paddingLeft.split('px')[0] + 'px'));
      $(this).find('a').addClass('hide');
    }
  })

  $(varible).find('li').on('mouseout', function () {
    $(this).find('ul').css('margin-left', '0px');
    $(this).find('a').removeClass('hide');
  })

  const parseStroke = (str, type) => {
    let returnedValue = null;
    let newVal = str.split('px');

    switch (type) {
      case 'padding':
        returnedValue = +(newVal[0]) + +(newVal[1]) + +(newVal[2]);
        break;
      case 'margin':
        returnedValue = +(newVal[0]);
        break;
      default:
        console.log('Something goes wrong, check float-label.js file');
        break;
    }

    return returnedValue;
  }
}