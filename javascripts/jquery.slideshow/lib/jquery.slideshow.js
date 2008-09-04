(function($) {

$.fn.slideshow = function(options) {

  const KEY_LEFT  = 37;
  const KEY_RIGHT = 39;

  ////////////////////////////////////////
  var presentationMethods = {
    _slideIndex:  0,
    slideIndex: function() { return this._slideIndex; },
    slides: [],
    resize: function() {
      $(this).children('.'+opts.slideClass).each(function() {
        $(this).width($(window).width()); 
        $(this).height($(window).height()); 
      });
    },
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
      // Resize to the window's dimensions.
      slideshow.resize();
    },

    current: function() { return this.slides[this.slideIndex()]; },

    nextSlide: function() {
      if (this.slideIndex() < this.slides.length-1) {
        this.current().hide();
        this._slideIndex++;
        this.current().show();
      }
    },
    previousSlide: function() {
      if (this.slideIndex() > 0) {
        this.current().hide();
        this._slideIndex--;
        this.current().show();
      }
    }
  };

  //////////////////////////////////////// 

  var opts = $.extend({}, $.fn.slideshow.defaults, options);
  var slideshow         = $(this);

  if (opts.format == 'presentation') {
    $.extend(slideshow, presentationMethods);
    slideshow.init();
    $(window).keydown(function(e) {
      if      (e.keyCode == KEY_LEFT) {
        slideshow.previousSlide();
      }
      else if (e.keyCode == KEY_RIGHT) {
        slideshow.nextSlide();
      }
    });
    $(window).resize(function(e) {
      slideshow.resize();
    });
  }
  else if (opts.format == 'outline') {
    slideshow.addClass('outline');
  }

  return slideshow;

};

//////////////////////////////////////// 

$.fn.slideshow.defaults = {
  slideClass: 'slide',
  notesClass: 'notes',
  format:     'presentation'
};

})(jQuery);
