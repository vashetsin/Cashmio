'user strict';

function DateUtil() {
    this.makeUserFriendlyDate = function (date) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var formatted =
            days[date.getDay()] + ', ' +
            date.getDate() + nth(date.getDate()) + ' ' +
            months[date.getMonth()] + ' ' +
            date.getFullYear();
        return formatted;
    };

    var nth = function (d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
}