
    $(function(){
  //   	$('.menu').slicknav('close'); 
  //   	$('.menu').slicknav('toggle'); 
		// $('.menu').slicknav('open'); 
        $('#menu').slicknav({
        	prependTo:'nav',
        	 parentTag:'div',
        	label: 'МЕНЮ',
        	duration: 600,

        });

        $(".tab_item").not(":first").hide();
        $(".wrapper .tab").click(function() {
            $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    });

