/**
 * Easy slider plug-in pro jQuery
 *
 * (c) 2012 Drahomír Hanák
 */

(function ($) {
  const inited = false;

  const methods = {

    active: function (index, direction) {
      const speed = $(this).data('speed') || 800;
      const directionHide = direction || 'left';
      const directionShow = directionHide === 'left' ? 'right' : 'left';
      $(this).find('li.active').hide('slide', { direction: directionHide }, speed);
      $(this).find('li').removeClass('active');
      const slide = $(this).find('li').get(index) || false;
      $(slide).addClass('active').show('slide', { direction: directionShow }, speed);

      return $(this).find('li').get(index) || false;
    },

    next: function () {
      const index = ($(this).find('li.active').index() + 1);
      return $(this).easySlider('active', ($(this).find('li').get(index) ? index : 0));
    },

    prev: function () {
      const index = $(this).find('li.active').index() - 1 < 0 ? $(this).find('li').length - 1 : $(this).find('li.active').index() - 1;
      return $(this).easySlider('active', index, 'right');
    },

    init: function (o) {
      o = $.extend({}, $.fn.easySlider.defaults, o);
      const $that = $(this);

      if (inited) return false;

      const left_click = function (e) {
        e = $.event.fix(e);
        e.preventDefault();
        $that.easySlider('prev');
      }; const right_click = function (e) {
        e = $.event.fix(e);
        e.preventDefault();
        $that.easySlider('next');
      };

      return this.each(function () {
        const $items = $(this).find('li');
        const count = $items.length;
        const $self = $(this);

        $items.css({ display: 'none', position: 'absolute' });

        $self.addClass('easySlider-content').data('speed', o.speed);

        $($items.get(o.active)).addClass('active');

        const $arrowLeft = $('<a />').attr('href', '#left').addClass('arrowLeft');
        const $arrowRight = $('<a />').attr('href', '#right').addClass('arrowRight');
        $arrowLeft.bind('click', left_click);
        $arrowRight.bind('click', right_click);
        $self.before($arrowRight);
        $self.before($arrowLeft);
      });
    }
  };

  $.fn.easySlider = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Metoda ' + method + ' neexistuje v plug-inu jQuery.easySlider');
    }
  };

  $.fn.easySlider.defaults = {
    active: 1,
    speed: 11100
  };
})(jQuery);
