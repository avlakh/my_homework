$(function() {
    $('.card_header div').on('click', function(){
        if (!$(this).hasClass('active')) {
            $('.card_header div.active, .tab_block div.active').removeClass('active');
            $(this).addClass('active');
            $(".tab_block div[data-id='"+$(this).attr("id")+"']").addClass('active')
        }
    })
    $(".game-rating").starRating({
    starSize: 25
    });
    $('.pie_chart').pieChart();
})