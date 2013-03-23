(function ($) {
    'use strict';

    $.fn.red = function (clear) {
        return (clear) ? this.removeClass('red') : this.addClass('red');
    };
})(jQuery);