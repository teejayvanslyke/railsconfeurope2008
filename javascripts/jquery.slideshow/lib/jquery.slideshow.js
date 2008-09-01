(function($) {

$.fn.slideshow = function(options) {

  const KEY_LEFT  = 37;
  const KEY_RIGHT = 39;

  var opts = $.extend({}, $.fn.slideshow.defaults, options);

  return this.each(function() {

    var slideshow         = $(this);
    var slides            = [];
    var currentSlideIndex = 0;

    slideshow.children('.'+opts.slideClass).each(function() {

      // Hide all but the first slide.
      if (slides.length > 0) {
        $(this).hide();
      }

      // Push each slide onto the queue.
      slides.push($(this));

    });

    $(window).keydown(function(e) {
      if      (e.keyCode == KEY_LEFT) {
        if (currentSlideIndex > 0) {
          slides[currentSlideIndex].hide();
          currentSlideIndex--;
          slides[currentSlideIndex].show();
        }
      }
      else if (e.keyCode == KEY_RIGHT) {
        if (currentSlideIndex < slides.length-1) {
          slides[currentSlideIndex].hide();
          currentSlideIndex++;
          slides[currentSlideIndex].show();
        }
      }
    });

  });

};

$.fn.slideshow.defaults = {
  slideClass: 'slide'
};

})(jQuery);