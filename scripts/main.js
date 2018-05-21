$(function ($) {
    "use strict";
    $('[data-toggle="popover"]').popover(); 
    function e(s) {
        "success" === s.result ? swal("Good job!", s.msg, "success") : swal({
            title: "Error!"
            , text: s.msg
            , type: "error"
            , confirmButtonText: "Cool"
        })
    }
	function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
	}
	var overflowed = true;
	if( isBreakpoint('sm')||isBreakpoint('xs') ) {
    overflowed=false;
	}

    $(".mc-form", "#contactUs").ajaxChimp({
        url: "http://minila.us14.list-manage.com/subscribe/post?u=3acd535ea189bd597e8a5f87c&amp;id=ea975ada65"
        , callback: e
    });

    var a = {
        success: function () {
            $("#form").clearForm(), swal("Thank You!", "We will get back to you as soon as possible!", "success")
        }
    };
    $("#form").ajaxForm(a);
    $(".switcher").on("click", function () {
        var e = $(this).data("clicks");
        e ? $(".switcher").css("left", "-400px") : $(".switcher").css("left", "0px"), $(this).data("clicks", !e)
    }), $(".color", "#switcher").on("click", function () {
        var e = $(this).data("color-class");
        $("head").append("<link rel='stylesheet' href='styles/" + e + ".css' type='text/css'>")
    }), $(".switch-header.light", "#switcher").on("click", function () {
        $("body").removeClass("dark-header").addClass("light-header")
    }), $(".switch-header.dark", "#switcher").on("click", function () {
        $("body").removeClass("light-header").addClass("dark-header")
    }), $(".animsition").animsition()
    $(".close-modal").on("click", function () {
         $("#employability-program").modal('hide');
    })
    /*s("#form-ed").on("click", function () {swal({
  title: "HTML <small>Title</small>!",
  text: "A custom <span style='color:#F8BB86'>html<span> message.",
  html: true
    })})*/
    
	
    


var bioWidth = $('.container').width()-$('.container').width()*0.085;

$('.contribution-tabs .members-bio').css('width', bioWidth);
$('.contribution-tabs .members-bio2').css('width', bioWidth);
//$('.contribution-tabs .members-bio2').css('left', -225);
    if($('.container').width()<768){
$('.members-1 .contribution-tabs li:nth-child(2) .members-bio2').css('left', - $('.container').width()/2);
$('.members-1 .contribution-tabs li:nth-child(2) .members-bio').css('left', - $('.container').width()/2);
    }
/******************** contribution TABS ********************/
$('.members-bio').hide();
$('.contribution-tabs li [data-target]').on('click', function(event) {
   event.preventDefault();
    event.stopPropagation()
   /* Act on the event */

   var loadTarget = $(this).data('target');

   $('.contribution-tabs li').removeClass('active');
   //$('.contribution-tabs .icon-collapsed .svg-icon-minus-06').removeClass('active');
   //$('.contribution-tabs .icon-collapsed .svg-icon-plus').addClass('active');
   $('.members-bio').not(loadTarget).hide();
   //$('.members-bio2').hide();

   //$(this).closest('li').addClass('active');
   //$(this).find('.icon-collapsed .svg-icon-plus').removeClass('active');
   //$(this).find('.icon-collapsed .svg-icon-minus-06').addClass('active');
   var member = $(loadTarget)
   
   if(member[0].style.display === 'none'){
    $(loadTarget).fadeIn();
   }else{
     $(loadTarget).fadeOut();
   }
   
   
});
    
    $('#email-job').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('job') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  //modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body #subject').val( recipient + " Application")
  modal.find('.modal-header #title-email').text( recipient +" Application")
})
    
    
    
    // ==================================Carousel scripts ===========================
   
	var $slidor = $(".slidor"),
      $slidoBGs = $(".slido__bg"),
      diff = 0,
      curslido = 0,
      numOfslidos = $(".slido").length-1,
      animating = false,
      animTime = 500,
      autoslidoTimeout,
      autoslidoDelay = 6000,
      $pagination = $(".slidor-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfslidos+1; i++) {
      var $li = $("<li class='slidor-pagi__elem'></li>");
      $li.addClass("slidor-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slidor-control").removeClass("inactive");
    if (!curslido) $(".slidor-control.left").addClass("inactive");
    if (curslido === numOfslidos) $(".slidor-control.right").addClass("inactive");
  };
  
  function autoslido() {
    autoslidoTimeout = setTimeout(function() {
      curslido++;
      if (curslido > numOfslidos) curslido = 0;
      changeslidos();
    }, autoslidoDelay);
  };
  
  autoslido();
  
  function changeslidos(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slidor.addClass("animating");
      $slidor.css("top");
      $(".slido").removeClass("active");
      $(".slido-"+curslido).addClass("active");
      setTimeout(function() {
        $slidor.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoslidoTimeout);
    $(".slidor-pagi__elem").removeClass("active");
    $(".slidor-pagi__elem-"+curslido).addClass("active");
    $slidor.css("transform", "translate3d("+ -curslido*100 +"%,0,0)");
    $slidoBGs.css("transform", "translate3d("+ curslido*50 +"%,0,0)");
    diff = 0;
    autoslido();
  }

  function navigateLeft() {
    if (animating) return;
    if (curslido > 0) curslido--;
    changeslidos();
  }

  function navigateRight() {
    if (animating) return;
    if (curslido < numOfslidos) curslido++;
    changeslidos();
  }

  $(document).on("mousedown touchstart", ".slidor", function(e) {
    if (animating) return;
    window.clearTimeout(autoslidoTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curslido && diff < 0) || (curslido === numOfslidos && diff > 0)) diff /= 2;
      $slidor.css("transform", "translate3d("+ (-curslido*100 - diff) +"%,0,0)");
      $slidoBGs.css("transform", "translate3d("+ (curslido*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeslidos(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeslidos();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slidor-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slidor-pagi__elem", function() {
    curslido = $(this).data("page");
    changeslidos();
  });
 
	
//	
//    //Function to animate slider captions 
//    function doAnimations( elems ) {
//		//Cache the animationend event in a variable
//		var animEndEv = 'webkitAnimationEnd animationend';
//		
//		elems.each(function () {
//			var $this = $(this),
//				$animationType = $this.data('animation');
//			$this.addClass($animationType).one(animEndEv, function () {
//				$this.removeClass($animationType);
//			});
//		});
//	}
//	
//	//Variables on page load 
//	var $myCarousel = $('#carousel-example-generic'),
//		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
//		
//	//Initialize carousel 
//	$myCarousel.carousel();
//	
//	//Animate captions in first slide on page load 
//	doAnimations($firstAnimatingElems);
//	
//	//Pause carousel  
//	$myCarousel.carousel('pause');
//	
//	
//	//Other slides to be animated on carousel slide event 
//	$myCarousel.on('slide.bs.carousel', function (e) {
//		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
//		doAnimations($animatingElems);
//	});  
//    $('#carousel-example-generic').carousel({
//        interval:3000,
//        pause: "false"
//    });
//	
    
//    
//    //Function to animate sloder captions 
//    function doAnimations( elems ) {
//		//Cache the animationend event in a variable
//		var animEndEv = 'webkitAnimationEnd animationend';
//		
//		elems.each(function () {
//			var $this = $(this),
//				$animationType = $this.data('animation');
//			$this.addClass($animationType).one(animEndEv, function () {
//				$this.removeClass($animationType);
//			});
//		});
//	}
//	
//	//Variables on page load 
//	var $myCarousel = $('#carousel-example-generic'),
//		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
//		
//	//Initialize carousel 
//	$myCarousel.carousel();
//	
//	//Animate captions in first slode on page load 
//	doAnimations($firstAnimatingElems);
//	
//	//Pause carousel  
//	$myCarousel.carousel('pause');
//	
//	
//	//Other slodes to be animated on carousel slode event 
//	$myCarousel.on('slode.bs.carousel', function (e) {
//		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
//		doAnimations($animatingElems);
//	});  
//    $('#carousel-example-generic').carousel({
//        interval:3000,
//        pause: "false"
//    });
	
	
//	 $("html").niceScroll({scrollspeed: 1,mousescrollstep: 1});
});


  