function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    'img/imageName.jpg',
    'img/anotherOne.jpg',
    'img/blahblahblah.jpg'
]);

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$(['img1.jpg','img2.jpg','img3.jpg']).preload();
