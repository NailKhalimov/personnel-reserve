(function(){
    $('.input-container').each(function () {
        var label = $(this).find('label');
        var textarea = $(this).find('textarea');
        var input = $(this).find('input');
        $(textarea).on('focusin', function () {
            $(label).addClass('input-filled');
        });
        $(textarea).on('focusout', function () {
            if ($(this).val() === '') {
                $(label).removeClass('input-filled');
            }
        })
        $(input).on('focusin', function () {
            $(label).addClass('input-filled');
        });
        $(input).on('focusout', function () {
            if ($(this).val() === '') {
                $(label).removeClass('input-filled');
            }
        })

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

        switch(type) {
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

})();