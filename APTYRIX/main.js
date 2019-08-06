$(document).ready(function(){
	$('#play').hover(function(){
		$('#play').css('background-image','url("play.gif")')
	},function(){
		$('#play').css('background-image','url("play.png")')
	});
		$('#play').css('background-image','url("play.png")')
		$('#forward').css('background-image','url("forward.png")')
	
	$('#pause').hover(function(){
		$('#pause').css('background-image','url("pause.gif")')
	},function(){
		$('#pause').css('background-image','url("pause.png")')
	});	
		$('#pause').css('background-image','url("pause.png")')
	$('#backward').hover(function(){
		$('#backward').css('background-image','url("backward.gif")')
	},function(){
		$('#backward').css('background-image','url("backward.png")')
	});	
		$('#backward').css('background-image','url("backward.png")')
	$('#forward').hover(function(){
		$('#forward').css('background-image','url("forward.gif")')
	},function(){
		$('#forward').css('background-image','url("forward.png")')
	});	
	$('#swiperight').hover(function(){
		$('#swiperight').css('background-image','url("back.png")')
	},function(){
		$('#swiperight').css('background-image','url("")')
	});	
	$('#swipeleft').hover(function(){
		$('#swipeleft').css('background-image','url("back.png")')
	},function(){
		$('#swipeleft').css('background-image','url("")')
	});	
	$('#btn').click(function(){
		window.location.href = "mailto:computer.guybuilder@gmail.com?Body="+$('#text').val()+'\n INFO: '+$('#texta').val();
	});
	$("#disable").submit(function(e){
    e.preventDefault();
     return false;
  });
	$('#text').submit(function(e){
		e.preventDefault();
		 return false;
	})
	$('#texta').submit(function(e){
		e.preventDefault();
		 return false;
	})
	
});