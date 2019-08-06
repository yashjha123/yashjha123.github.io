function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo(){
	obj = JSON.parse(jsona)
	while(true){
			for(i=0;i<obj.main.frame.length;i++){
				for(y=0;y<obj.main.frame[i].bone.length;y++){
					if(!obj.main.frame[i].bone[y].name.startsWith('p')){
						if(!obj.main.frame[i].bone[y].name.startsWith('cub-12')){
							if(!obj.main.frame[i].bone[y].name.startsWith('cub-17')){
							$('.'+obj.main.frame[i].bone[y].name).css('transform','translate3D('+obj.main.frame[i].bone[y].prefix+') rotateX('+obj.main.frame[i].bone[y].x+'deg) rotateY('+obj.main.frame[i].bone[y].y+'deg) rotateZ('+obj.main.frame[i].bone[y].z+'deg)')
							//$('.'+obj.main.frame[i].bone[y].name).css({translate: obj.main.frame[i].bone[y].prefix, rotateX: obj.main.frame[i].bone[y].x, rotateY: obj.main.frame[i].bone[y].y, rotateZ: obj.main.frame[i].bone[y].z}	);
							//await sleep(200);
							//$('.'+obj.main.frame[i].bone[y].name).css('transform','translate3D('+obj.main.frame[i].bone[y].prefix.slice(0,-1)+')') 
						}
							else{
							$('.'+obj.main.frame[i].bone[y].name).css('transform','translate3D('+obj.main.frame[i].bone[y].prefix+') rotateZ('+obj.main.frame[i].bone[y].y+'deg) rotateX('+obj.main.frame[i].bone[y].x+'deg) rotateY(0deg)')
						}	
					}
						else{
							$('.'+obj.main.frame[i].bone[y].name).css('transform','translate3D('+obj.main.frame[i].bone[y].prefix+') rotateZ('+obj.main.frame[i].bone[y].y+'deg) rotateX('+obj.main.frame[i].bone[y].x+'deg) rotateY(0deg)')
						}
					}
					
								
			}
			await sleep(10);
			//console.log(i)
			}
		}
}
$(document).ready(async function(){
			$('.vbar').hover(function(){
				if($('.volume').hasClass('yes')){
				$(this).children().css({'background-image':'linear-gradient(rgba(255,255,255,0.7) 0%, rgb(110,100,255) 0%'});
				}
				if($('.volume').hasClass('no')){
				$(this).children().css({'background-image':'linear-gradient(rgba(255,255,255,0.7) 100%, rgb(110,100,255) 100%'});	
				}
			
		},function() {
				if($('.volume').hasClass('yes')){
					$(this).children().addClass('no')
					$(this).children().removeClass('yes')
				}
				else{
					$(this).children().addClass('yes')
					$(this).children().removeClass('no')
				}

			 
		});
			$('.brbar').hover(function(){
				if($('.br').hasClass('yes')){
					$('.nope').css({'box-shadow': 'rgba(0,0,0,0) 0px 0px 0px 2000000px '})
				$(this).children().css({'background-image':'linear-gradient(rgba(255,255,255,0.7) 0%, rgb(110,100,255) 0%'});
				}
				if($('.br').hasClass('no')){
					$('.nope').css({'box-shadow': 'rgba(0,0,0,0.5) 0px 0px 0px 2000000px '})
				$(this).children().css({'background-image':'linear-gradient(rgba(255,255,255,0.7) 100%, rgb(110,100,255) 100%'});	
				}
			
		},function() {
				if($('.br').hasClass('yes')){
					$(this).children().addClass('no')
					$(this).children().removeClass('yes')
				}
				else{
					$(this).children().addClass('yes')
					$(this).children().removeClass('no')
				}

			 
		});
			$('.bara').hover(function(){
				if($(this).hasClass('syes')){
				$('#1').css({'z-index':'6'});
				$('#2').css({'z-index':'5'});
				}
				else{
				$('#2').css({'z-index':'6'});
				$('#1').css({'z-index':'5'});
				}
			
		},function() {
				if($(this).hasClass('syes')){
				$(this).removeClass('syes');
				}
				else{
				$(this).addClass('syes');
				}

			 
		});
			demo();

});
$(document).mousemove(function(e){ 
				//alert('H 	')
				var x = e.clientX;
				var y = e.clientY;
				$('.base-1').css({transform: 'translate3D(6em, -14em, 0em) rotateX('+(90-((x -  $('#tridiv').offset().left)/378.5)*50)+'deg) rotateY(-1deg) rotateZ('+(((y -  $('#tridiv').offset().top)/378.5)*50)+'deg)'},10,'snao')
				
});