$(function(){
    $('.navbar ul.dropdown-menu li').click(function(){
        let section = $(this).attr('section')
        let scrollTop = $('section[section='+section+']').offset().top
        $('html, body').animate({scrollTop:scrollTop}, 100)
    })
})

