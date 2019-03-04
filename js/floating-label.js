function floatLabel() {
    console.log(window)
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
}