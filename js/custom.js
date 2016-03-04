
$(function(){
	$('.icon-menu').click(function(){
		$('nav ul').slideToggle(1000);
	})


	//remet le ul en display block apres avoir ete mis en display none avec jquery quand on clic sur le burger au format mobile. Le cas de figure n'est pas sencé se produire et la portion de code suivante ne fait qu'alourdir inutilement le code
	$(window).resize(function(){
		var w = $(window).width();
		if (w > 640){
			$("nav ul").show();
		}
	})
});

//carrousel 

$(function(){
	$(window).resize(function(){
	wscreen = $(window).width();
	//alert wscreen
	$("#slider li").width(wscreen)
});

	wscreen = $(window).width();
	$("#slider li").width(wscreen);

	function defile() {
		$("button").addClass("occupe");
		$("#slider ul").animate({left:-wscreen},2000,function(){
			$("#slider ul li:last").after($("#slider ul li:first"));
			$("#slider ul").css({left:0});
			$("#legende").text($("#slider ul li:first").find("img").attr('alt')).fadeIn(400);
			
			
			$("button").removeClass("occupe");
		});
		
	}

	function defileRight() {
		$("button").addClass("occupe");
		$("#legende").fadeOut(2000);
		$("#slider ul").css({left:-wscreen});
		$("#slider ul li:first").before($("#slider ul li:last"));
		$("#slider ul").animate({left:0},2000,function(){
		
			
			$("button").removeClass("occupe");
		});
		
	}


	//appel de la fonction
	var mavar = setInterval(defile,3000);


	//stopper le defilement lorsque l'utilisateur survole un bouton
	$("button").mouseenter(function(){
		clearInterval(mavar);
	});

	//reprendre le defilement quand l'utilisateur quitte un bouton
	$("button").mouseleave(function(){
		mavar = setInterval(defile,3000);
	});

	//defilement vers la gauche pour #next
	$("#next").click(function(){
		if(!$(this).hasClass("occupe")) {
			defile();
		}
	});

	//defilement vers la gauche pour #prev
	$("#prev").click(function(){
		if(!$(this).hasClass("occupe")) {
			defileRight();
		}
	});

}); /*fermeture du $(function(){})*/

$(function(){
	$(".photom img").click(function(){
		var imageHd = $(this).attr("data-image");
		$(".lightbox img").attr("src",imageHd);
		$(".lightbox").fadeIn(500);
	})

	$(".lightbox span").click(function(){
		$(".lightbox").fadeOut(500);
	})
});

$(document).ready( function () {
   $('#redirection').click(function() {
     $('html,body').animate({scrollTop: $("#features").offset().top}, 'slow'      );
   }); 
   $('#redirection1').click(function() {
     $('html,body').animate({scrollTop: $("#testimonials").offset().top}, 'slow'      );
   }); 
   
   $("#colorphotom").hover(
  function () {
    $("#photomcol").addClass('photomcol');
  }, 
  function () {
    $("#photomcol").removeClass('photomcol');
  }
  );
})
