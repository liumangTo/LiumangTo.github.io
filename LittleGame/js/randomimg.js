window.onload=function(){
	//获取元素
	var btn = $('.btn');
	var ct = $('#content');
	var lis = $('li',ct);
	//声明一个空数组备用控制图片位置
	var arr = [];
	//设置一个开关，控制btn0的value
	var onOff = false;
	//遍历图片值赋到数组中
	for(var i = 0;i < lis.length;i++){
		arr.push(lis[i]);
	}
	//声明另一个空数组来做随机数使用，避免与顺序reverse冲突
	var arr2 = arr.concat();
//	console.log(arr2.length)
	//给第一个按钮添加事件
	btn[0].onclick=function(){
		//将数组的顺序颠倒
		arr.reverse();
		//用一个空字符串来存遍历的内容
		var str = '';
		//遍历赋值
		for(var i = 0;i < lis.length;i++){
			str += '<li>'+arr[i].innerHTML+'</li>';
		}
		//显示遍历的结果
		ct.innerHTML = str;
		//开关控制btn的value值
		if( onOff){
			this.value = '从小到大';
		}else{
			this.value = '从大到小';
		}
	}
	//给btn1添加事件
	btn[1].onclick=function(){
		//获得arr2数组的随机顺序
		arr2.sort(function (){
			return Math.random() - 0.5;	
		});
		//用一个空字符串来存遍历的内容
		var str = "";
		for( var i = 0; i < arr2.length; i++ ){
				str += "<li>"+arr2[i].innerHTML+"</li>";
		}
		//显示遍历的结果
		ct.innerHTML = str;
	}
}
