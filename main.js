$(document).ready(function(){
	$('#play').hover(function(){
		$('#play').css('background-image','url("back.png")')
	},function(){
		$('#play').css('background-image','url("")')
	});
	$('#pause').hover(function(){
		$('#pause').css('background-image','url("back.png")')
	},function(){
		$('#pause').css('background-image','url("")')
	});	
	$('#backward').hover(function(){
		$('#backward').css('background-image','url("back.png")')
	},function(){
		$('#backward').css('background-image','url("")')
	});	
	$('#forward').hover(function(){
		$('#forward').css('background-image','url("back.png")')
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
});