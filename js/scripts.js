
$(document).ready(function(){
    $('nav').addClass('navbar-dark');
})


$(document).scroll(function() {
	if($('.header-inner').offset().top> 25){
		$('.header-inner').addClass('header-fixed');
        $('h1').addClass('logo');
        $('nav').removeClass('navbar-dark');
		
		$('nav').addClass('navbar-light');
	}else{
		$('.header-inner').removeClass('header-fixed');
		$('h1').removeClass('logo');
		$('nav').addClass('navbar-dark');
        $('nav').removeClass('navbar-light');
       

	}
});

$(document).ready(function(){

		var pantalla =screen.width;
		console.log(pantalla);
			 if (pantalla> 700) {
			$('.mobile').addClass('d-none');
			$('.no-mobile').removeClass('d-none');
		} else {
			$('.no-mobile').addClass('d-none');
			$('.mobile').removeClass('d-none');
			 }
		
 		

	



		
	});

	const navSlide=() => {
		
		const boton=document.querySelector('.burger');
		const menu=document.querySelector('.menu');
		const body=document.querySelector('body');
		const li = document.querySelectorAll('.menu-2 li');

		boton.addEventListener("click",function(){
			menu.classList.toggle('menu-abierto');
			boton.classList.toggle('crus');
			 body.classList.toggle('body-hidden');
			 

		});
		for(let i = 0;i < li.length; i++){
			li[i].addEventListener("click",function(){
				
			
				if(body.getAttribute("class",'body-hidden')){
					body.classList.remove('body-hidden');
					menu.classList.remove('menu-abierto');
					boton.classList.remove('crus');
				}
				
			   
			})
		};
	}

	navSlide();
