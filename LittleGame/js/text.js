window.onload=function(){
	var text = document.getElementById('text');
	var replica =document.getElementById('replica');
	var txtHtml = document.getElementById('texthtml');
	var lBtn = document.getElementById('lbtn');
	var rBtn = document.getElementById('rbtn');
	var clear = document.getElementById('clear');
	var timer = null;
	rBtn.onclick=function(){
		clearInterval(timer);
		timer = setInterval(function(){
			txtHtml.innerHTML += text.innerHTML.slice(0,1);
			text.innerHTML = text.innerHTML.slice(1);
		},30)
	}
	lBtn.onclick=function(){
		clearInterval(timer);
		timer = setInterval(function(){
			text.innerHTML += txtHtml.innerHTML.slice(0,1);
			txtHtml.innerHTML = txtHtml.innerHTML.slice(1);
		},30)
	}
	clear.onclick=function(){
		clearInterval(timer);	
	}
}
	