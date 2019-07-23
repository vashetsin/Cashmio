'user strict';

function ForecastService() {
    this.getDailyForecast = function (lat, lon, numberOfDays) {
        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily' +
            '?lat=' + lat +
            '&lon=' + lon +
            '&cnt=' + numberOfDays +
            '&appid=6816dec999847262afb0732cfbbe708f';
        var http = new XMLHttpRequest();
        http.open("GET", url, false);
        http.send(null);
        return convertToObject(http.responseText);
    };

    var makeIconSrc = function (icon) {
        return 'http://openweathermap.org/img/w/' + icon + '.png';
    };

    var makeDate = function (dt) {
        return new Date(1000 * dt);
    };

    var convertToObject = function (json) {
        var retVal = [];

        var items = JSON.parse(json).list;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            retVal.push(new Forecast(
                makeDate(item.dt),
                makeIconSrc(item.weather[0].icon),
                item.weather[0].description
            ));
        }

        return retVal;
    };
}