window.addEventListener('load', function(){
	var cz=new CZ();
	cz.productSlider();
	cz.slider();
})

var CZ=function(){};
CZ.prototype={
	productSlider: function(){
		var swiper = new Swiper('.hot-content .swiper-container', {
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
    	});
	},

	slider: function(){
		var mySwiper = new Swiper('#slider .swiper-container', {
			speed: 1500,
			autoplay: {
			    delay: 2000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
		   },
		   pagination: {
		    	el: '.swiper-pagination',
		    	clickable :true
		  },
		  loop: true
		});

		document.getElementById('slider').onmouseenter=function(){
		  mySwiper.autoplay.stop();
		};

		document.getElementById('slider').onmouseleave=function(){
		  mySwiper.autoplay.start();
		};
	}
};