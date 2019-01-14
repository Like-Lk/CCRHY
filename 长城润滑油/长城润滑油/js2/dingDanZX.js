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
	$(".left_shuru,.srk").focus(function(){
		  if($(this).val() ==this.defaultValue){  
			  $(this).val("").css("color","#333");           
		  } 
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).val(this.defaultValue).css("color","#717371");
		 }
	});	
});


//返回顶部
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
	

