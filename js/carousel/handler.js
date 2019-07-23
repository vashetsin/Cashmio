'user strict';

function CarouselHandler() {
    var carousel = null,
        carouselInterval = null,
        carouselRunning = false,
        items = null,
        currentItemIndex = 0;

    this.handle = function (container) {
        carousel = container;
        initItems();
        initEvents();
        startOrStopBasedOnWidth();
    };

    var initItems = function () {
        items = carousel.getElementsByTagName('div');
        visibleItem = items[0];
    };

    var initEvents = function () {
        carousel.onmouseenter = function () {
            stop();
        };

        carousel.onmouseleave = function () {
            start();
        };

        window.onresize = function () {
            startOrStopBasedOnWidth();
        };

        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                stop();
            } else {
                start();
            }
        });
    };

    var startOrStopBasedOnWidth = function () {
        if (window.innerWidth < 1200) {
            stop();
        }
        else {
            start();
        }
    };

    var start = function () {
        if (!carouselRunning) {
            carouselInterval = setInterval(run, 5000);
            carouselRunning = true;
        }
    };

    var stop = function () {
        if (carouselRunning) {
            clearInterval(carouselInterval);
            carouselRunning = false;
        }
    };

    var run = function () {
        var counter = 0,
            moveInterval = null,
            currentItem = items[currentItemIndex],
            nextItemIndex = items.length - 1 === currentItemIndex ? 0 : currentItemIndex + 1,
            nextItem = items[nextItemIndex],
            carouselWidth = carousel.offsetWidth;

        moveInterval = setInterval(function () {
            counter += 20;
            var step = parseInt(carouselWidth / 2000 * counter);
            currentItem.style.left = -step + 'px';
            nextItem.style.left = (carouselWidth - step) + 'px';
            if (counter === 2000) {
                counter = 0;
                currentItemIndex = nextItemIndex;
                currentItem.style.left = carouselWidth + 'px';
                nextItem.style.left = 0;
                clearInterval(moveInterval);
            }
        }, 20);
    };
}