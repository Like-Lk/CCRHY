$(function(){
//	圆圈
	var _index = 0;
	$(".lunBoTu span").click(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var _index = $(this).index();
		$(".lunBoTu ul li").eq(_index).fadeIn().siblings().hide();
	});
	setInterval(function () {
		_index++;
		if (_index>2) {
			_index = 0;
		} 
		$(".lunBoTu span").eq(_index).addClass('hover').siblings().removeClass('hover');
		$(".lunBoTu ul li").eq(_index).show().siblings().hide();
	},2000)

});
	var index = 0;
  $(".tankuang li").hover(function(){
  	index =$(this).index();
  	$(".tankuang li .one,.jiaolishoutao").eq(index).hide();
  	$(".JlST").eq(index).show();
  	$(".tankuang li span").eq(index).show();
  },function () {
	$(".tankuang li .one,.jiaolishoutao").eq(index).show();
  	$(".JlST").eq(index).hide();
  	$(".tankuang li span").eq(index).show();
  })
  

//返回顶部js
		var $backToTopTxt = "", $backToTopEle = $("#gun").appendTo($("body"))
		.text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });	
	//通告
	$("#tongzhi").click(function(){
		$(".tongzhi2").css("display","block");
	})
	$(".huimg").click(function(){
		$(".tongzhi2").css("display","none");
	})
	

$(function(){
	//图片移动效果
//	var rank_move_time  = 300;//偏移时速
//	var rank_move_range = 13;
	$(".center3 img").hover(function(){
			$(this).stop().animate({"marginLeft":-15},300);
		},function(){
			$(this).stop().animate({"marginLeft":0},300);
		})
	});
