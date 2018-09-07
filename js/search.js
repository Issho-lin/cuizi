window.addEventListener('load',function(){
	var cz=new CZ();
	cz.maskShow();
});
var CZ=function(){};
CZ.prototype={
	maskShow: function(){
		var search=document.querySelector('.search');
		var mask=document.querySelector('.mask');
		search.addEventListener('focus',function(){
			mask.classList.add('active');
		});
		search.addEventListener('blur',function(){
			mask.classList.remove('active');
		})
	}
};