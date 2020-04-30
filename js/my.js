window.onload = function() {
	$("#yes").hide(2000);
	$("#no").hide(2000);
}

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 2; 
            break; 
    } 
} 

// 点击发送按钮触发函数
function send_info()
{
	var info = $("#info").val();
	if(0 == info.length)
	{
		$("#info").val("疑问都不输入，你想咋滴？");
		return;
	}
	//alert(randomNum(0,1));
	$("#info").val("");
	var num = randomNum(0,1);
	if(0 == num)
	{
		$("#no").show(2000);
		$("#no").delay(3000).hide(2000);
	}
	else if(1 == num)
	{
		$("#yes").show(2000);
		$("#yes").delay(3000).hide(2000);
	}
	else
	{
		//alert("再等等吧~程序异常了");
		$("#info").val("再等等吧~程序异常了");
	}
}