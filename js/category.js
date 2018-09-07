window.addEventListener('load',function(){
	var cz=new CZ();
	cz.headerSlider();
});

var CZ=function(){};
CZ.prototype={
	headerSlider: function(){
		document.querySelector('.icon-menu').addEventListener('click',function(){
			document.querySelector('#header').classList.toggle('active');
		});
	}
};