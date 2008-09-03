Screw.Unit(function() {
  describe('jquery.slideshow', function() {
    var slideshow;
    var slides;

    before(function() {
      slideshow = $('<div class="slideshow">test</div>').slideshow();
      slides = 
        [
          $('<div class="slide"></div>'),
          $('<div class="slide"></div>'),
          $('<div class="slide"></div>')
        ];
      slideshow.slides = slides;
    });

    describe('slideIndex()', function() {
      it('defaults to zero', function() {
        expect(slideshow.slideIndex()).to(equal, 0);
      });
    });

    describe('nextSlide()', function() {

      it('hides the current slide', function() {
        // expect(slides[0]).to(receive, 'hide'); // ideal...
        expect(slides[0].css('display')).to(equal, 'block');
        slideshow.nextSlide();
        expect(slides[0].css('display')).to(equal, 'none');
      });

      it('increments the slide index', function() {
        expect(slideshow.slideIndex()).to(equal, 0);
        slideshow.nextSlide();
        expect(slideshow.slideIndex()).to(equal, 1);
      });

      it('shows the current slide', function() {
        slideshow.nextSlide();
        expect(slides[1].css('display')).to(equal, 'block');
      });

    });

  });

});
