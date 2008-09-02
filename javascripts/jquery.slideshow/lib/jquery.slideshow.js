(function($) {

$.fn.slideshow = function(options) {

  const KEY_LEFT  = 37;
  const KEY_RIGHT = 39;

  var opts = $.extend({}, $.fn.slideshow.defaults, options);

  var slideshow         = $(this);

  return this.each(function() {

    if (opts.format == 'presentation') {

      $.extend(slideshow, {
        index:  0,
        slides: [],
        init: function() {
          this.addClass('presentation');
          var slideshow = this;
          slideshow.children('.'+opts.slideClass).each(function() {
            // Hide all but the first slide.
            if (slideshow.slides.length > 0) {
              $(this).hide();
            }
            // Push each slide onto the queue.
            slideshow.slides.push($(this));
          });
        },
        next: function() {
          if (this.index < this.slides.length-1) {
            this.slides[this.index].hide();
            this.index++;
            this.slides[this.index].show();
          }
        },
        previous: function() {
          if (this.index > 0) {
            this.slides[this.index].hide();
            this.index--;
            this.slides[this.index].show();
          }
        }
      });

      slideshow.init();
      $(window).keydown(function(e) {
        if      (e.keyCode == KEY_LEFT) {
          slideshow.previous();
        }
        else if (e.keyCode == KEY_RIGHT) {
          slideshow.next();
        }
      });

    }

    else if (opts.format == 'outline') {

      slideshow.addClass('outline');

    }

  });

};

$.fn.slideshow.defaults = {
  slideClass: 'slide',
  notesClass: 'notes',
  format:     'presentation'
};

})(jQuery);
