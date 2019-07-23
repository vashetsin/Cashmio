'use strict';

(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            run(position.coords.latitude, position.coords.longitude);
        }, function () {
            runDefault();
        });
    } else {
        runDefault();
    }

    var runDefault = function () {
        run(34.9, 14.5);
    };

    var run = function (lat, lon) {
        var service = new ForecastService();
        var forecastItems = service.getDailyForecast(lat, lon, 4);

        var carousel = document.getElementById('carousel');
        var builder = new CarouselBuilder();
        builder.build(carousel, forecastItems)

        var handler = new CarouselHandler();
        handler.handle(carousel);
    };
})();