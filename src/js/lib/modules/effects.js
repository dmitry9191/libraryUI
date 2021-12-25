import $ from '../core';

$.prototype.animateOverTime = function(dur, callback, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart,
            complection = Math.min(timeElapsed / dur, 1);

        callback(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function(dur, display = 'block', fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;
        this._getFadeIn(this[i], dur, fin);
    }

    return this;
};


$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        this._getFadeOut(this[i], dur, fin);
    }

    return this;
};

$.prototype.fadeToggle = function(dur, display = 'block', fin) {
    for (let i = 0; i < this.length; i++) {
        
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display;

            this._getFadeIn(this[i], dur, fin);
        } else {
            this._getFadeOut(this[i], dur, fin);
        }
        
    }

    return this;
};

$.prototype._getFadeIn = function(elem, dur, fin) {
    const _fadeIn = (complection) => {
        elem.style.opacity = complection;
    };
    
    const ani = this.animateOverTime(dur, _fadeIn, fin);

    requestAnimationFrame(ani);
};  

$.prototype._getFadeOut = function(elem, dur, fin) {
    const _fadeOut = (complection) => {
        elem.style.opacity = 1 - complection;

        if (complection === 1) {
            elem.style.display = 'none';
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);

    requestAnimationFrame(ani);
};  