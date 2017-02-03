<div class="countdown">
  <div class="days"></div>
  <div class="hours"></div>
  <div class="minutes"></div>
  <div class="seconds"></div>
</div>



(function() {
  var countdown = new Countdown(Date.parse('2017-01-24')),
    view = new View(document.querySelector('.countdown'), countdown);

  window.setInterval(view.render, 1000);

  /**
   * @param {Element} container Контейнер для отображения счетчика.
   * @param {Countdown} countdown Объект счетчика.
   */
  function View(container, countdown) {
    this.days = container.querySelector('.days'),
      this.hours = container.querySelector('.hours'),
      this.minutes = container.querySelector('.minutes'),
      this.seconds = container.querySelector('.seconds');

    this.render = function() {
      this.days.innerHTML = countdown.days;
      this.hours.innerHTML = countdown.hours;
      this.minutes.innerHTML = countdown.minutes;
      this.seconds.innerHTML = countdown.seconds;
    };

    this.render = this.render.bind(this);
  };

  /**
   * @constructor
   * @param {Date} expiration Дата окончания отсчета.
   */
  function Countdown(expiration) {
    Object.defineProperty(this, 'remains', {
      get: function() {
        return expiration - Date.now();
      }
    });

    Object.defineProperty(this, 'days', {
      get: function() {
        return Math.floor(this.remains / (1000 * 60 * 60 * 24));
      }
    });

    Object.defineProperty(this, 'hours', {
      get: function() {
        return Math.floor((this.remains / (1000 * 60 * 60)) % 24);
      }
    });

    Object.defineProperty(this, 'minutes', {
      get: function() {
        return Math.floor((this.remains / (1000 * 60)) % 60);
      }
    });

    Object.defineProperty(this, 'seconds', {
      get: function() {
        return Math.floor((this.remains / 1000) % 60);
      }
    });
  };
})();

