window.onload = () => {

  // Circles и noUiSlider, работа их вместе
  function circleAndRangeSlider() {
    var rangeSlider = document.getElementById('rangeSlider');

    if (rangeSlider) {
      const circle = Circles.create({
        id: 'circle',
        radius: 200,
        value: 0,
        maxValue: 100,
        width: 100,
        text: function (value) { return value + '%'; },
        colors: ['#95288F', '#EE2D24'],
        duration: 400,
        wrpClass: 'circle-wrp',
        textClass: 'circle-text',
        styleWrapper: true,
        styleText: true
      });


      noUiSlider.create(rangeSlider, {
        start: [0],
        step: 10,
        connect: 'lower',
        range: {
          'min': 0,
          'max': 100
        },
        pips: {
          mode: 'steps',
          density: 10,
          format: wNumb({
            suffix: '%'
          })
        }
      });

      rangeSlider.noUiSlider.on('update', (value) => {
        circle.update(value, 100);
      });

      var pips = rangeSlider.querySelectorAll('.noUi-value');

      function clickOnPip() {
        var value = Number(this.getAttribute('data-value'));
        rangeSlider.noUiSlider.set(value);
      }

      for (var i = 0; i < pips.length; i++) {
        pips[i].style.cursor = 'pointer';
        pips[i].addEventListener('click', clickOnPip);
      } 
    }
  }
  circleAndRangeSlider();

}