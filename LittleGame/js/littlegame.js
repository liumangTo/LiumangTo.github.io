window.onload=function(){
	//获取元素
	var box = $('#box');
	var btn = $('#btn');
	var icoBox = $('#ico_box');
	var ico = $('img',icoBox)[0];
	var num =$('span')
	var wNum = 0;
	var lNum = 0;
	//开始按钮事件
	btn.onclick=function(){
//		开始之后不能再次点击
		this.disabled = true;
		dropOut();
	}
	var isMousedown = false;
	ico.onmousedown=function(){
		if(!onmousedown){
			isMousedown = true;
		}
		//清除定时器
		clearInterval(this.top);
		//分数变化
		wNum++;
		//显示分数
		num[0].innerHTML = wNum;
		//游戏结束判断
		shake(ico,'left',10,function(){
			if(wNum >= 5){
				alert('恭喜过关！')
				btn.disabled = false;
				ico.style.top = "-24px";
				wNum = 0;
				num[0].innerHTML = wNum;
			}else{
				dropOut();
			}
		});
		//将开关变回原来的值，已循环
		isMousedown = false;
	}
	//用递归使ico循环动起来
	function dropOut(){
		//设置随机宽度的值
		var leftN = Math.round( Math.random() * 776 );
		//设置随机图片的src
		var icoN = Math.round( Math.random() * 10 )+1;
		ico.style.left = leftN + "px";
		ico.style.top = "-24px";
		ico.src = "img/"+icoN+".png";
		//callback回调ico的运动顺序
		mTween(ico,'top',426,2000,'linear',function(){
			//控制大盒子box抖动
			shake(box,'left',10,function(){
				//分数变化
				lNum++;
				//分数显示
				num[1].innerHTML = lNum;
				//给游戏一个结束的值得判断
				if(lNum>=2){
					
//					num[1].innerHTML = lNum;
					alert('很遗憾，您没有过关！')	;
					lNum = 0;
					num[1].innerHTML = lNum;
					btn.disabled = false;
					ico.style.top = "-24px";
				}else{
					dropOut()
				}
			});
		});
	}
}
