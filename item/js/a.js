        var dataList = null;
		$(function(){
/////////////左侧导航////////////////////////////////////////////////////////
			$.ajax({
	    		type:"get",
	    		url:"json/data.json",
	    		async:true,
	    		data:{},
	    		dataType:"json",
	    		success:function(data){
	    			dataList=data.ar;
	    			$.each(dataList, function(i,v) {
						$("#ColeftH3").siblings("p").append("<h2><a>"+v.nam+"</a></h2>");
	    				$.each(v.data, function(j,k) {
                            $("h2").eq(i).append("<span>"+k.name+"</span>");
	                    });
	    			});
	    		}
	        });
//////////////头部输入框///////////////////////////////////////////////////////
			$("#I").keypress(function(){//当键盘或按钮被按下时，发生 keypress 事件。
				var $val = $(":text").val();
				alert("你所输入的值是:"+$val);
			})

//////////////头部颜色切换/////////////////////////////////////////////////////
            var Span = $("#S").children("span");
            var arr=["#4a4a4a","#ADFF2F","orange","cyan","fuchsia","purple"];
            Span.click(function(){
            	$(this).css("background-position-y","-14px").siblings().css("background-position-y","0");
                
                $("#nav").css("backgroundColor",arr[$(this).index()]);
                $("#ColeftH3").css("backgroundColor",arr[$(this).index()]);
            })

/////////////导航	 鼠标滑过下面显示菜单///////////////////////////////////////////////
			$(document).ready(function() {
				$('#nav li').hover(function() {
					$('ul', this).slideDown(200);
					$(this).children('a:first').addClass("hov");
				}, function() {
					$('ul', this).slideUp(100);
					$(this).children('a:first').removeClass("hov");
				});
			});
			
//轮播图
           //淡入淡出////////////////////
            var num = 0;//定义初始值
            var timer = null;
            function move(){
            	num++;
              	var oLi = $(".picBox2 li").length-1;//获取所有li的长度是5    -1是因为索引从0开始第五张索引为4
            	if(num>oLi){//如果num大于所有li的长度时
           		    num=0;  //num等于0
           	    }
                $(".picBox2>li").eq(num).show().siblings().hide();//li等于num时==淡入他的兄弟==淡出他的兄弟
           	    $("#CRTop_Left>span").eq(num).addClass("active").siblings().removeClass("active");//sapn等于num时添加class属性  他的兄弟移除class属性
             	//num加价
	        }
	        timer = setInterval(move,2000);//设置定时器  执行这个函数  每秒
            
            //点击span标签时图片到当前的位置
		    $("#CRTop_Left>span").mouseover(function(){
            	clearInterval(timer);
            	num = $(this).index()-1;//console.log($(this).index());
		    	$(".picBox2>li").eq(num).show().siblings().hide();
		    	$("#CRTop_Left>span").eq(num).addClass("active").siblings().removeClass("active");
		    })
            $("#CRTop_Left>span").mouseout(function(){
		    	timer=setInterval(move,2000);
		    })
 


	///////////最新动态 start/////////////////////////////////////////////////////////
	 //鼠标跟随和文字滚动start//
            function rollTwo(){
		        $(".CRB>ul").animate({marginTop:"0px"},300,"linear",function(){
		            $(".CRB>ul>li").css({marginTop:"5px"});                         
		            $(".CRB>ul li:first").remove().clone(true).appendTo(".CRB ul");
		        })                                                                 
		    }   
		    
		    $(".CRB").mouseover(function(){
		    	clearInterval(startRollTwo);
		    	$(".CRB>ul").not(":animated");
		    });
		    $(".CRB").mouseout(function(){
		        startRollTwo=setInterval(rollTwo,300);
		    });                                          
		    //文字跟随
		    $(".CRB>ul").on("mouseover","li",function(){
		    	var txt = $(this).find("span").html();
			    $(this).append("<div class='mo'></div>")
			    $(".mo").html("");
			    $(".mo").html(txt);			   
			    $(".CRB>ul>li").mousemove(function(e){
		   			var movex = e.pageX - $(this).offset().left;
		   			var movey = e.pageY - $(this).offset().top;
		   			$(".mo").css({
		   			 	"left":movex+15,
		   			 	"top": movey+5
		   			})
			    })
			    $(this).mouseout(function(){
			   		$(".CRB>ul>li div").detach();
			    })
			})
		   //鼠标跟随和文字滚动end//
////////////最新动态 end//////////////////////////////////////////////////////////

///////////内容的下边 内容/////tab切换/////////////////////////////////////
       $(".anniu li").click(function(){
       	 var _index=$(this).index(); //console.log(_index);
       	 $(".tab").eq(_index).fadeIn().siblings(".tab").fadeOut(200);
       })
})		
		



//---start头部调颜色块----//
//			$(".S1").click(function(){
//				$(".S2").css('background-position','-20px 0px');
//				$(".S3").css('background-position','-40px 0px');
//				$(".S4").css('background-position','-60px 0px');
//				$(".S5").css('background-position','-80px 0px');
//				$(".S6").css('background-position','-100px 0px');
//				
//				$(".S1").css('background-position','0px -14px');
//				
//				//改变nav的颜色
//				$("#nav").css("background","#4a4a4a");
//				$("#ColeftH3").css("background","#4a4a4a");
//			})
//---end头部调颜色块----//



							/////无缝滚动=======淡入淡出=======有缝滚动=======轮播图///////////////////////////////////
							           //淡入淡出////////////////////
							//          var num = 0;//定义初始值
							//          function move(){
							//            	var oLi = $(".picBox2 li").length-1;//获取所有li的长度是5    -1是因为索引从0开始第五张索引为4
							//          	if(num>oLi){//如果num大于所有li的长度时
							//         		    num=0;  //num等于0
							//         	    }
							//              $(".picBox2>li").eq(num).fadeIn().siblings().fadeOut();//li等于num时==淡入他的兄弟==淡出他的兄弟
							//         	    $("#CRTop_Left>span").eq(num).addClass("active").siblings().removeClass("active");//sapn等于num时添加class属性  他的兄弟移除class属性
							//           	num++;//num加价
							//          }
							//          setInterval(move,1000);//设置定时器  执行这个函数  每秒
							//          
            
					        //用于创建自定义动画的函数    animate
					        //animate(params,[speed],[easing],[fn])
					        //          属性         	速度    		     回调函数
					        ///无缝滚动////////////////////////////////////////////
					        //function rollTwo(){
					            //$(".picBox2").animate({marginLeft:"-551px"},2000,"linear",function(){
					                //$(".picBox2").css({marginLeft:"0px"});
					                //$(".picBox2 li:first").remove().clone(true).appendTo(".picBox2"); 
					            //}) 
					        //}
					       
					        //var startRollTwo=setInterval(rollTwo,1000);
					       /* 鼠标移入停止移出继续*/
					        //$(".picBox2").hover(function(){
					         //   clearInterval(startRollTwo);   
					        //},function(){
					        //    startRollTwo=setInterval(rollTwo,1000);
					        //});
							///////////有缝滚动////////////////////////////////////
							//	       $(function(){
							//				var index=0;
							//				var timer=setInterval(function(){
							//					if(index==4){
							//						index=0
							//					}else{
							//						index++;
							//					}
							//					$(".box2 li").hide().eq(index).show();
							//                  $("#CRTop_Left>span").eq(index).addClass("active").siblings().removeClass("active");
							//				},2000)
							//			})
