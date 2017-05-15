$(function(){                            //获取每个时间p 距离顶部的距离//.offset()距离浏览器的位置.offset().top;距离顶部
	var arr=[];                          //放到数组里面
	$('#wrapper p').each(function(){     //遍历每一个p
                                         //console.log($(this).offset().top);//打印  出所有p距顶部的高度
        var topHeight=$(this).offset().top-60;//每个p距离顶部的高度     减去header的高度
        arr.push(topHeight);             //追加 到这个数组里
	})                                   //console.log(arr);
    //获取滚动条的距离
	$('section').scroll(function(){      //console.log($(this).scrollTop());//打印滚动条的距离

		var scrTop=$(this).scrollTop();  //滚动条的距离  .scrollTop()滚动条距上部的偏移
                                         //如果滚动条的距离大于上一个    小于下一个日期的高度   就添加固定定位
        for(var i=0;i<arr.length;i++){
        	if(scrTop>arr[i] && scrTop<arr[i+1]){
        		$('#wrapper p').eq(i).addClass('fixed'); //添加的fixed
        	}else{
        		$('#wrapper p').eq(i).removeClass('fixed');//移除fixed
        	}
        	if(scrTop>arr[arr.length-1]){
        		$('#wrapper p').last().addClass('fixed');//添加的fixed
        	}else{
        		$('#wrapper p').last().removeClass('fixed');//移除fixed
        	}
        }
	})
}) 
