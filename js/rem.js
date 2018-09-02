window.addEventListener('resize', function(){
	var deviceWidth=document.documentElement.offsetWidth;
	deviceWidth= deviceWidth<320?320:deviceWidth;
	deviceWidth= deviceWidth>750?750:deviceWidth;
	var htmlFontSize=deviceWidth/375*100+'px';
	document.documentElement.style.fontSize=htmlFontSize;
})