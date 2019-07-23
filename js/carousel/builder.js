'user strict';

function CarouselBuilder() {
    var dateUtil = new DateUtil();

    this.build = function (container, forecastItems) {
        for (var i = 0; i < forecastItems.length; i++) {
            var item = forecastItems[i];

            var itemElement = document.createElement('div');

            buildDateElement(itemElement, item.date);

            buildWeatherElement(itemElement, item.iconSrc, item.description);

            container.appendChild(itemElement);
        }
    };

    var buildDateElement = function (itemElement, date) {
        var dateElement = document.createElement('p');
        dateElement.innerText = dateUtil.makeUserFriendlyDate(date);
        itemElement.appendChild(dateElement);
    };

    var buildWeatherElement = function (itemElement, iconSrc, description) {
        var weatherElement = document.createElement('p');

        var iconElement = document.createElement('img');
        iconElement.src = iconSrc;
        weatherElement.appendChild(iconElement);

        var descriptionElement = document.createElement('span');
        descriptionElement.innerText = description;
        weatherElement.appendChild(descriptionElement);

        itemElement.appendChild(weatherElement);
    };
}