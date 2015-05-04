(function(){
	var h1 = document.getElementsByTagName('h1')[0];
	function randColor() {
		var color = "#";
		for (var i = 0; i < 3; i++) {
			var num = Math.floor(Math.random() * 256);
			if (num < 16) color += "0";
			color += num.toString(16);
		}
		h1.style.color = color;
	}
	setInterval(randColor, 500);
})();
