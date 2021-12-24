import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(0).toggleClass('active');
});
