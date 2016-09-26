window.onload=function(){
	var box = document.getElementById('box');
	var txt = document.getElementById('text');
	var str = txt.innerHTML;
	var setBox= document.getElementById('setbox')
	var setbtn = setbox.getElementsByTagName('dt')[0];
	var setWay = setBox.getElementsByTagName('dd');
	var navBox = document.getElementById('navbox');
	var lis = document.getElementsByTagName('li');
	var inPut = document.getElementsByTagName('input');
	var onOff = false;
	lis[0].style.backgroundColor = 'red';
	setWay[0].style.backgroundColor = 'red';
	inPut[1].style.display = 'none';
	setbtn.onclick=function(){
		if(onOff){
			for(var i = 0;i < setWay.length;i++){
				setWay[i].className = '';
			}
			navBox.style.display = 'none';
			 onOff = false;
		}else{
			for(var i = 0;i < setWay.length;i++){
				setWay[i].className = 'show';
				navBox.style.display = 'block';
			}
			onOff = true;
		}
	}
	setWay[0].onclick=function(){
		search();	
	}
	setWay[1].onclick=function(){
		tihuan();
	}
	lis[0].onclick=function(){
		search();
	}
	lis[1].onclick=function(){
		tihuan();
	}
	function search(){
		for(var i = 0;i < setWay.length;i++){
			setWay[i].style.backgroundColor = '';
			lis[i].style.backgroundColor = '';
			inPut[i].value = '';
		}	
		setWay[0].style.backgroundColor = 'red';
		lis[0].style.backgroundColor = 'red';
		inPut[1].style.display = 'none';
		inPut[2].value = '查找';
	}
	function tihuan(){
		for(var i = 0;i < setWay.length;i++){
			setWay[i].style.backgroundColor = '';
			lis[i].style.backgroundColor = '';
			inPut[i].value = '';
		}	
		setWay[1].style.backgroundColor = 'red';
		lis[1].style.backgroundColor = 'red';
		inPut[1].style.display = 'inline-block';
		inPut[2].value = '替换';
	}
	inPut[2].onclick=function(){
		txt.innerHTML = str;
		
		var searchStr2 = inPut[0].value;
		var searchStr = inPut[1].value;
		console.log(searchStr2,searchStr);
		
		if(inPut[2].value == '替换'){
			if(searchStr2 !='' && searchStr2 !=' '){
				txt.innerHTML = txt.innerHTML.split(searchStr2).join('<span style="background-color:red">'+ searchStr + '</span>') ;
			}
		}else{
			if(searchStr2 !='' && searchStr2 !=' '){
				txt.innerHTML = txt.innerHTML.split(searchStr2).join('<span style="background-color:red">'+ searchStr2 +'</span>');	
			}
		}
	}
	
}
