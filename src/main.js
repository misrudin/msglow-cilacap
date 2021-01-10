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
        }, 300*i)
    })
    $('#header-img').removeClass("showing")
     $('#header-text').removeClass("showing")
    }else{
    $('#header-img').addClass("showing")
    $('#header-text').addClass("showing") 
    }


    const storeTop = $("#store").offset().top
    if(wScroll > storeTop-650){
        $('#image-contact').addClass("showing")
    }else{
        $('#image-contact').removeClass("showing")
    }

    //testtimoni paralax
    const testitop = $("#testimoni").offset().top
   if(wScroll > testitop - 1000){
       $('#testimoni ul li').each(function(i){
           setTimeout(function(){
               $('#testimoni ul li').eq(i).addClass('showing')
           }, 300*i)
       })
   }
})


///testimoni
let html =(name = "John Doe", review)=> `
                <li>
                    <div class="card-testimoni">
                        <div class="header">
                            <div class="box-image">
                                <img src="/assets/concealer.svg" alt="Image People">
                            </div>
                            <div class="detail-user">
                                <p class="name">${name}</p>
                                <p class="job">Web Developer</p>
                            </div>
                        </div>
                        <div class="review">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>
                </li>
`
$('#testimoni ul').append(html("Jonh Smith"))
$('#testimoni ul').append(html("Berta Bendeta"))
$('#testimoni ul').append(html("Susi Susanti"))