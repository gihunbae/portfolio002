$('#first').click(function(){
    $('.flus').css('display','block')
});

$('#btn').click(function(){
    $('.flus').css('display','none')
});

$('.mainMenu li').mouseover(function(){
    $('.subMenu').stop().fadeIn(500)
});

$('.mainMenu li').mouseout(function(){
    $('.subMenu').stop().fadeOut(500)
});


$('#imgs li:gt(0)').hide();
setInterval(function(){
    $('#imgs li:first').fadeOut(1000)
.next('li')
.fadeIn(1000)
.end()
.appendTo('#imgs')
},3000)
