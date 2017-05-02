        var dataList = null;
		$(function(){
           //左侧导航
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
            //头部输入框
			$("#I").keypress(function(){
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

            //导航	 鼠标滑过下面显示菜单
			$(document).ready(function() {//加载事件
				$('#nav li').hover(function() {
					$('ul', this).slideDown(200);//缓慢显示效果
					$(this).children('a:first').addClass("hov");//给盒子里面的a加样式
				}, function() {
					$('ul', this).slideUp(100);//否则情况下再缓慢上去
					$(this).children('a:first').removeClass("hov");//缓慢上去并且移除样式
				});
			});

        //放大镜
        $("#smallImg").mouseover(function(){
        	$("#bigImg").show();
        })
        $("#smallImg").mouseout(function(){
        	$("#bigImg").hide();
        })
        //查看清晰图片
        
        
        //第一个颜色  三张图片大小
        $(".BO").click(function(){
         	$(".ONE").hide();
        	$(".OONE").show();
        	$(".OOONE").hide();
        	$(".OOOONE").hide();
        	
        	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTTWO").hide();
        	
        	$(".THREE").hide();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").hide();
        })
        $(".BT").click(function(){
        	$(".ONE").hide();
        	$(".OONE").hide();
        	$(".OOONE").hide();
        	$(".OOOONE").hide();
        	
        	$(".TWO").hide();
        	$(".TTWO").show();
        	$(".TTTTWO").hide();
        	
        	$(".THREE").hide();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").hide();
        })
        $(".BH").click(function(){
        	$(".ONE").hide();
        	$(".OONE").hide();
        	$(".TTWO").hide();
        	$(".TTHREE").show();
        })
        //第二个颜色  三张图片大小
        $(".BOO").click(function(){
         	$(".ONE").hide();
         	$(".OONE").hide();
        	$(".OOONE").show();
        	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTHREE").hide();
        })
        $(".BTT").click(function(){
        	$(".ONE").hide();
        	$(".OONE").hide();
        	$(".OOONE").hide();
        	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTHREE").show();
        })
        //第三个颜色   三张图片大小
        $(".BOOO").click(function(){
         	$(".ONE").hide();
         	$(".OONE").hide();
        	$(".OOONE").hide();
        	$(".OOOONE").hide();
        	
        	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTTWO").hide();
        	
        	$(".THREE").show();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").hide();
        })
        $(".BTTT").click(function(){
        	$(".ONE").hide();
         	$(".OONE").hide();
        	$(".OOONE").hide();
        	$(".OOOONE").hide();
        	
        	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTTWO").show();
        	
        	$(".THREE").hide();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").hide();
        })
        $(".BHHH").click(function(){
        	$(".ONE").hide();
         	$(".OONE").hide();
        	$(".OOONE").hide();
        	$(".OOOONE").hide();
        	
        	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTTWO").hide();
        	
        	$(".THREE").hide();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").show();
        })
        //点击更换衬衫颜色
        $("#RDone").click(function(){
        	$(".ONE").show();
        	$(".OONE").hide();
        	$(".OOONE").hide();
        	$(".OOOONE").hide();
        	
        	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTWO").hide();
        	$(".TTTTWO").hide();
        	
        	$(".THREE").hide();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").hide();
        	
        	$("#RDone").siblings("dt").children("a").html("蓝色");
        	$("#BDLone").show();
        	$("#BDLtwo").hide();
        	$("#BDLthree").hide();
        })
        $("#RDtwo").click(function(){
            $(".ONE").hide();
         	$(".OONE").hide();
         	$(".OOONE").hide();
         	$(".OOOONE").hide();
         	
         	$(".TWO").show();
        	$(".TTWO").hide();
        	$(".TTTWO").hide();
        	$(".TTTTWO").hide();
        	
        	$(".THREE").hide();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").hide();
         	
         	$("#RDone").siblings("dt").children("a").html("绿色");
        	$("#BDLone").hide();
        	$("#BDLtwo").show();
        	$("#BDLthree").hide();
        })
        $("#RDthree").click(function(){
         	$(".ONE").hide();
         	$(".OONE").hide();
         	$(".OOONE").hide();
         	$(".OOOONE").hide();
         	
         	$(".TWO").hide();
        	$(".TTWO").hide();
        	$(".TTTWO").hide();
        	$(".TTTTWO").hide();
        	
        	$(".THREE").show();
        	$(".TTHREE").hide();
        	$(".TTTHREE").hide();
        	$(".TTTTHREE").hide();
         	
         	$("#RDone").siblings("dt").children("a").html("黄色");
        	$("#BDLone").hide();
        	$("#BDLtwo").hide();
        	$("#BDLthree").show();
        })
         
         
         //点击换尺寸
         $(".codeOne").click(function(){
         	$(".codeOne").siblings("dt").children("a").html("S");
         })
         $(".codeTwo").click(function(){
         	$(".codeTwo").siblings("dt").children("a").html("M");
         })
         $(".codeThree").click(function(){
         	$(".codeThree").siblings("dt").children("a").html("L");
         })
         $(".codeFour").click(function(){
         	$(".codeFour").siblings("dt").children("a").html("XL");
         })
//下拉菜单渲染  三级联动
        var List = null;
        $.ajax({
        	type:"get",
        	url:"json/city.json",
        	async:true,
        	data:{},
        	dataType:"json",
        	success:function(data){
        		List = data;
        		$.each(data,function(a,l){
                    $("#Sele #SelOne").append("<option>"+l.name+"</option>");
                })
        	}
        });
        //市
        $("#Sele #SelOne").change(function(){//alert(123);
        	var _val = $("#Sele #SelOne").val();
        	$("#SelTwo").html("");
        	$.each(List, function(j,k) {
        		if (_val == k.name) {
        			$.each(k.sub, function(v,w) {
	        			$("#SelTwo").show();
	                	$("#SelTwo").append("<option>"+w.name+"</option>");
	                });
        		}
        		
			});
		})
        //县
        $("#Sele #SelTwo").change(function(){
        	var _value = $("#Sele #SelTwo").val();
        	$("#SelThree").html("");
        	$.each(List, function(a,m) {
        		$.each(m.sub, function(k,c) {
        			if (_value == c.name) {
	                	$.each(c.sub, function(k,l) {
                			$("#SelThree").show();
	                		$("#Sele #SelThree").append("<option>"+l.name+"</option>");
	                	});
                    }
                });
			});
		})
        //数量   计算总价
        $("#Number select").click(function(){
        	var _number = $(this).val();
        	var _unit_price = $("#MMM").text();
			$(".sum_price").html(_unit_price*_number);//总价等于单价乘以数量
        }); 
       //tab切换    替换内容
       var $arr = ["1111舒适111的,健康设计理念,很好的,面料抗皱性非常好 舒适的,健康设计理念,很好的","哈哈一行","三行"];
       $("#Tab button").click(function(){
       	    var $this = $(this).index();
       	    $(".Div").html($arr[$this]);
       })
	       //闭包 
			//		for (var i=0;i<$("#Tab").children("button").length;i++) {
			//			(function(i){
			//				$("#Tab").children("button")[i].onclick = function(){
			//					for (var j=0;j<$("#Tab").children(".Div").length;j++) {
			//						$("#Tab").children(".Div").eq(j).hide(100);
			//					}
			//					$("#Tab").children(".Div").eq(i).show(500);
			//				}
			//			})(i);
			//		} 
        //鼠标移上时星星的颜色
        $(".Spa_btn span").bind("mouseover",function(){ //.bind()绑定多个事件
        	$_index=$(this).index()+1;
            $(".Spa_btn").css("background-position-y",-$_index*16-80+"px"); 
        }), $(".Spa_btn span").bind("mouseout",function(){ //移出时
        	if($(this).index()==0){
        		$(".Spa_btn").css("background-position-y",0); 
        	}
        }), $(".Spa_btn span").bind("click",function(){//点击时星星的颜色
          	var title = $(this).attr("title");
            alert("您给此商品的评分是："+title);//弹出对话框
		    $(".Spa b").children("a").html(title);
        	$_index=$(this).index()+1;
        	$(".Spa_btn").css("background-position-y",-$_index*16+"px");
        });
        
        //购物车遮罩层
        $("#RR2 h3").click(function(){
        	$("#shopping_car").show();
        	$("#popup").show();
        })
        $("#popup a").click(function(){
        	$("#shopping_car").hide();
        	$("#popup").hide();
        })
        //确定时
        $("#ok").click(function(){
          	$("#shopping_car").hide();
        	$("#popup").hide();
        })
})