import $ from './lib/lib';

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-counter="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
    $('.w-500').fadeToggle(800);
});

/* $('.wrap').html(
    `<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action 1</a>
            <a href="#" class="dropdown-item">Action 2</a>
            <a href="#" class="dropdown-item">Action 3</a>
        </div>
    </div>`
);

$('.dropdown-toggle').dropdown(); */