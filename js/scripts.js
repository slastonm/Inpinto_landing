$(document).ready(function() {


/*     $('.one-time').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        touchMove: false,
        slidesToScroll: 4
    }); */
	$('.uneven').slick({
  slidesToShow:4,
  slidesToScroll: 1
});
	
	



});

$(document).ready(function() {
    enableSelectBoxes();
});

function enableSelectBoxes(){
    $('div.selectBox').each(function(){
        $(this).children('strong.selected').html($(this).children('div.selectOptions').children('strong.selectOption:first').html());
        $(this).attr('value',$(this).children('div.selectOptions').children('strong.selectOption:first').attr('value'));

        $(this).children('strong.selected,strong.selectArrow').click(function(){
            if($(this).parent().children('div.selectOptions').css('display') == 'none'){
                $(this).parent().children('div.selectOptions').css('display','block');
            }
            else
            {
                $(this).parent().children('div.selectOptions').css('display','none');
            }
        });

        $(this).find('strong.selectOption').click(function(){
            $(this).parent().css('display','none');
            $(this).closest('div.selectBox').attr('value',$(this).attr('value'));
            $(this).parent().siblings('strong.selected').html($(this).html());
        });
    });
}