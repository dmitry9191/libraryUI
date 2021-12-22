import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(0).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

/* console.log($('div').find('.more'));
console.log($('div').find('.some')); */

console.log($('.more').eq(0).siblings());
console.log($('.findme').siblings());