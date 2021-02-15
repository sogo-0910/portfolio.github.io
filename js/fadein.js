$(function() {
    $('.list-mv01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
    $(this).stop().addClass('mv01');
    }
    });
});

$(function() {
    $('.list-mv02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
        $(this).stop().addClass('mv02');
    }
    });
});

$(function() {
    $('.list-mv03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
       $(this).stop().addClass('mv03');
    }
    });
});