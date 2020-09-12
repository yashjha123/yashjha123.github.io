$(document).ready(function(){
	$('#play').hover(function(){
		$('#play').css('background-image','url("play.gif")')
	},function(){
		$('#play').css('background-image','url("")')
	});
	$('#pause').hover(function(){
		$('#pause').css('background-image','url("pause.gif")')
	},function(){
		$('#pause').css('background-image','url("")')
	});	
	$('#backward').hover(function(){
		$('#backward').css('background-image','url("backward.gif")')
	},function(){
		$('#backward').css('background-image','url("")')
	});	
	$('#forward').hover(function(){
		$('#forward').css('background-image','url("forward.gif")')
	},function(){
		$('#forward').css('background-image','url("")')
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