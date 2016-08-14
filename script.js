'use strict';

function Gallery(options) {
    this.el = options.el;
    this.mainImg = options.mainImg;
    this._initEvent();
}

Gallery.prototype.handler = function(event) {
    event.preventDefault();
    if (event.target.hasAttributes('alt')) {
        var attrName = event.target.getAttribute('alt');
        this.mainImg.src = event.currentTarget.children[attrName].children[0].href;
    }

};

Gallery.prototype._initEvent = function() {

    this.el.addEventListener('click', this.handler.bind(this));

};

var gallery = new Gallery({
    el: document.querySelector('.gallery_picture'),
    mainImg: document.querySelector('[alt="Large image"]')
});