			//显示元素标签

function showobj(idName) {
	var obj = document.getElementById(idName);
	obj.style.display="block";

}
			//隐藏元素标签
function hiddenobj(idName){
	var obj =document.getElementById(idName);
	obj.style.display="none";
}
//banner播放动画效果-----------------------------------------------------start

//setInterval(funname,1000)  定时器函数


//实例化一个数组，用于存放图片的路径
var arr=new Array;
arr[0]="images/01.jpg";
arr[1]="images/02.jpg";
arr[2]="images/03.jpg";
arr[3]="images/04.jpg";
var count=0;
function autoPlayer(){
	if(arr.length==count)
		count=0;
	document.getElementById("banner1").src=arr[count];
	count++;
}
var Timer=setInterval(autoPlayer,2000);

//清除定时器对象
function clearTimer(){
	clearInterval(Timer);
}


//鼠标悬停时候制定播放的图片
function showbannerbyid(num){
	clearTimer();
	var index=parseInt(num); //将数据转换成数字
	document.getElementById("banner1").src=arr[index-1];  //取出当前索引制定的图片路径赋值给要显示的图片  
	//因为banner1的索引为0，所以将索引index-1得到的才是显示banner1
	count=index;  //将index赋值给count，当恢复自动播放的时候直接播放当前图片的下一个
}

//鼠标离开恢复自动播放效果
function btnMouseOut()
{
	Timer=setInterval(autoPlayer,1000);
}





    //banner播放动画效果----------------------------------------end



//广告无缝滚动-------------------------------------------------start
var speed=10  //控制速度
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");

tab2.innerHTML=tab1.innerHTML;  //将demo1的值赋值给demo2
function Marquee(){
	if(tab2.offsetWidth-tab.scrollLeft<=0)  //如果对象与滚动条的距离小于或等于0
	{
		tab.scrollLeft-=tab2.offsetWidth;  //滚动完成重新设置宽度
	}else
	{
		tab.scrollLeft++; //如果没有超过，则tab的宽度一个一个像素的增加
	}
}

var mymar=window.setInterval(Marquee,speed);


tab.onmouseover=function(){window.clearInterval(mymar)}
tab.onmouseout=function(){mymar=window.setInterval(Marquee,speed);}

//广告无缝滚动-------------------------------------------------end


//实现浮动广告的特效-------------------------------------------------start
function changeposition(){
	var QQ= document.getElementById("zixunbox");  //获取元素赋值给QQ
	//alert(document.documentElement.scrollTop);
	QQ.style.top=document.documentElement.scrollTop+document.body.scrollTop+200+"px";
	//QQ在浏览器中的位置等于文档移动滚动条的位置或者body移动的滚动条的位置加之前设置的position移动的200px。
}
window.onscroll=changeposition;
//将改变的位置赋值给对象滚动后在窗口显示的位置

//实现浮动广告的特效-------------------------------------------------end