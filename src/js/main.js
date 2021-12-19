import './lib/lib';

$('button').on('click', function() {
    $('div:nth-of-type(2)').toggleClass('active');
});