//列表下拉
	$(function(){
		
		$(".cpfl").hover(function(){
			$(".fengongsi").show();
		},function(){
			$('.fengongsi').hide();
		});
		$(".fengongsi").hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		});
	});
	
	$(function(){	
	//输入关键字
	$(".left_shuru").focus(function(){
		  if($(this).val() ==this.defaultValue){  
			  $(this).val("").css("color","#333");           
		  } 
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).val(this.defaultValue).css("color","#717371");
		 }
	});	
});



	
$(function(){
	//选项卡	
	var a=0;
	$(".right .dsuy span").click(function(){
		a=$(this).index();
		$(this).css("background","#005BAA").siblings().css("background","#93BCE0");
		$(".right .xuaxiank div").eq(a).css("display","block").siblings().css("display","none")
	})
	$(".cyip ul li").click(function(){
		$(this).addClass("ti").siblings().removeClass("ti");
	})
	//test框加减
	var b=1;
	$(".jia").click(function(){
		b++;
		$(".gmsl").val(b)
	})
	$(".jian").click(function(){
		b--;
		if (b<=1) {
			b=1;
		}
		$(".gmsl").val(b)
	})
});

//选择类型  属性
$(".ml10 ul li").click(function(){
	var index = $(this).index();
	$(this).addClass("xzx").siblings().removeClass("xzx");
	
});
//显微镜边框
$(".Fdj3 ul li").hover(function(){
	var index = $(this).index();
	$(this).addClass("xwj").siblings().removeClass("xwj");
//	$("Fdj2 img").eq(index).show().siblings("li").hide();
});