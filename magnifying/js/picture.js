$(function(){

	//渲染图片
	$.ajax({
		type:"get",
		url:"json/picture.json",
		async:true,
		data:{},
		dataType:"json",
		success:function(data){//console.log(data);
            gdata = data;
			$.each(gdata.colors, function(i,v) {//console.log(v)	
				$(".right").append("<li title='"+v.color+"'><img src = '"+v.img+"'/></li>");
				//下面小图
				$.each(v.list, function(j,k) {
					$(".down").append("<img src='"+k.img+"'/>");
				});
				//左侧中图
				$.each(v.SmImg, function(m,n) {
					$(".g-show div").append("<img src='"+n.img+"'/>");
				});
				//放大镜里图
				$.each(v.bigImg, function(p,o) {
					$(".bigImg").append("<img src='"+o.img+"'/>");
				});
			    $(".bigImg img:gt(0)").hide();
			});
			
			//颜色联动
			$(".right>li").click(function(){
				var cloor=$(this).attr("title");
				$(".down").children().remove();
				$(".g-show div").children().remove();
				$(".bigImg").children().remove();
				$.each(gdata.colors, function(j,k) {
					if (cloor == k.color) {
						//下面的小图
						$.each(k.list, function(i,v) {
							$(".down").append("<img src='"+v.img+"'/>");
						});
						//左侧中图
						$.each(k.SmImg, function(l,o) {
							$(".g-show div").append("<img src='"+o.img+"'/>");
						});
						//放大镜里图
						$.each(k.bigImg, function(t,i) {
							$(".bigImg").append("<img src='"+i.img+"'/>");
						});
							$(".bigImg img:gt(0)").hide();
					}
				});
			})
			//点击下面颜色块  中图
			$(document).on("click",".down img",function(){
			    //左侧中图
				$(".g-show div img").eq($(this).index()).show().siblings().hide();
				//放大镜里
				$(".bigImg img").eq($(this).index()).show().siblings().hide();
			})
		}
	});
	
	//放大镜
    //放大镜鼠标移上显示移除隐藏
    var _Width = $(".g-show .Sm").width();
    var _Height = $(".g-show .Sm").height();
   
	$(".g-show").mouseover(function(e){
		$(".bigImg").show();
		$(".g-show .Sm").show();
		var $left = $(this).offset().left;
		var $top = $(this).offset().top;
		$(document).mousemove(function(e){
			var $moveX = e.pageX-$left-_Width/2;//确定鼠标在小黄块的中间
			var $moveY = e.pageY-$top-_Height/2;//确定鼠标在小黄块的中间
			
			var $maxX = $(".g-show").width()-_Width;//确定小黄块在大方块的位值
			var $maxY = $(".g-show").height()-_Height;//确定小黄块在大方块的位值
			
		         if($moveX>=$maxX){
	    		 	 $moveX=$maxX
	    		 }
	    		 if($moveX<=0){
	    		 	$moveX=0
	    		 }
	    		 if($moveY>=$maxY){
	    		 	$moveY=$maxY
	    		 }
	    		 if($moveY<=0){
	    		 	$moveY=0
	    		 }
	    		 //倍数
	    		 var power = $(".bigImg img").width()/$(".g-show div img").width();
//	    		 console.log(power);
	    		 $(".bigImg img").css({
	    		 	"left":-$moveX*power+"px",
	    		 	"top":-$moveY*power+"px"
	    		 })
	    		 $(".g-show .Sm").css({
	    		 	"left":$moveX+"px",
	    		 	"top":$moveY+"px"
	    		 })
		})
		
	})
	.mouseout(function(){
		$(".bigImg").hide();
		$(".g-show .Sm").hide();
	})
})

