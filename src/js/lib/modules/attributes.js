import $ from '../core';

$.prototype.setAttr = function(attr, value = '') {
    if (!attr) {
        return this;
    }

    if (typeof attr === 'string' & typeof value === 'string') {
        for (let i = 0; i < this.length; i++) {
            this[i].setAttribute(attr, value);
        }
    }

    return this;
};

$.prototype.removeAttr = function(attr) {
    if (!attr) {
        return this;
    }

    if (typeof attr === 'string') {
        for (let i = 0; i < this.length; i++) {
            this[i].removeAttribute(attr);
        }
    }

    return this;
};

$.prototype.getAttr = function(attr) {
    return this[0].getAttribute(attr)
}

$.prototype.hasAttr = function(attr) {
    return this[0].hasAttribute(attr);
}
