///custom javascript file
/// Misrudin ---- :::::""""====""===

$(window).on("load",function() {
    $('#header-img').addClass("showing")
    $('#header-text').addClass("showing")
});

let i = 1
//scrool 
$(window).scroll(function(){
    const wScroll = $(this).scrollTop()
    const imageTop = $('#main-image').offset().top
   if(wScroll > imageTop){
    i = i-0.001
    $('#main-image').css({
        'transform': 'scale('+ i +')'
    })
   }else {
       i = 1
       $('#main-image').css({
        'transform': 'scale('+ i +')'
    })
   }

   const productListSection = $("#product-list").offset().top
   if(wScroll > productListSection - 1000){
       $('#product-list ul li').each(function(i){
           setTimeout(function(){
               $('#product-list ul li').eq(i).addClass('showing')
           }, 100*i)
       })
   }

   if(wScroll > productListSection){
    $('#product-list ul li').each(function(i){
        setTimeout(function(){
            $('#product-list ul li').eq(i).addClass('showing')
        }, 200*i)
    })
    $('#header-img').removeClass("showing")
     $('#header-text').removeClass("showing")
    }else{
    $('#header-img').addClass("showing")
    $('#header-text').addClass("showing") 
    }


    const storeTop = $("#store").offset().top
    if(wScroll > storeTop-1000){
        $('#image-contact').addClass("showing")
    }else{
        $('#image-contact').removeClass("showing")
    }
})