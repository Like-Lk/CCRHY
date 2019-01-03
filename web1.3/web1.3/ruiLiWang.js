$(function() {
	//	显示搜索框
	$(".seaImg").click(function(e) {
		$('.seaImg').hide();
		$('.search').animate({
			width: '230px'
		}, 600);
		e.stopPropagation();
	});
	//	获取焦点内容消失
	$(".seaTxt").focus(function(e) {
		$(".txt").hide();
		e.stopPropagation();
	});
	////	失去焦点显示其内容
	$("form").blur(function(e) {
		if($(this).val() == "") {
			$("label.txt").show();
		}
		e.stopPropagation();
	});
	//	获取焦点时显示输入框
	$("input.seaTxt").click(function(e) {
		e.stopPropagation(); //阻止冒泡事件			
	});

	$(document).click(function() {
		$('.search').animate({
			width: '0px'
		}, 600, function() {
			$('.seaImg').show();
			$('.seaTxt').val("");
			$('.txt').show();
		});
	})
})

//	动画显示隐藏
setInterval(function() {
	function fun() {
		$(".menu3 img").animate({
			opacity: 0
		}, 1000, function() {
			$(".menu3 img").animate({
				opacity: 1
			}, 600);
		});
	}
	fun();
}, 1000)

//  动画的播入

var _index = 1;
$(".srcollBut ul li").click(function() {
	_index = $(this).index();
	$(this).addClass("hover").siblings('li').removeClass("hover");
	$(".imgList").animate({
		left: -_index * 750
	}, 500);
});
// 右按钮
$(".next").click(function() {
	_index++;
	if(_index > 9) {
		_index = 1;
		$(".imgList").css('left', "0");
		$(".imgList").animate({
			left: -_index * 750
		}, 500);
		$(".srcollBut ul li").eq(_index).addClass("hover").siblings('li').removeClass("hover");
	} else {
		$(".imgList").animate({
			left: -_index * 750
		}, 500);
		$(".srcollBut ul li").eq(_index).addClass("hover").siblings('li').removeClass("hover");
	}
});
//  左按键
$(".prev").click(function() {
	_index--;
	if(_index < 1) {
		_index = 9;
		$(".imgList").css({
			left: "-7500px"
		});
		$(".imgList").animate({
			left: -_index * 750
		});
		$(".srcollBut").eq(_index).addClass("hover").siblings("li").removeClass("hover");
	} else {
		$(".imgList").animate({
			left: -_index * 750
		});
		$(".srcollBut ul li").eq(_index).addClass("hover").siblings("li").removeClass("hover");
	}
});
setInterval(function() {
	_index++;
	if(_index > 9) {
		_index = 1;
		$(".imgList").css('left', "0");
		$(".imgList").animate({
			left: -_index * 750
		}, 500);
		$(".srcollBut ul li").eq(_index).addClass("hover").siblings('li').removeClass("hover");
	} else {
		$(".imgList").animate({
			left: -_index * 750
		}, 500);
		$(".srcollBut ul li").eq(_index).addClass("hover").siblings('li').removeClass("hover");
	}
}, 2000);
//红人专栏
$(".txtBut ul li").mouseover(function() {
	$(this).addClass("hover").siblings("li").removeClass("hover");
	var _index2 = $(this).index();
	$(".imgCon ul li").eq(_index2).fadeIn().siblings('li').hide();
});

//抢先试用
var _index3 = 0;
var flashInter2 = null;
$('.flash2_but ul li').mouseover(function() {
	//	clearInterval(flashInter2);
	var _index3 = $(this).index();
	$(this).addClass("hover").siblings('li').removeClass("hover");
	$('.flash2_scrollCon').stop(true, true).animate({
		left: -_index3 * 179
	}, 500);
});
//右边

$('.flash2_next').click(function() {
	//		clearInterval(flashInter2);
	_index3++;
	if(_index3 > 4) {
		_index3 = 0;
	}
	$('.flash2_but ul li').eq(_index3).addClass("hover").siblings('li').removeClass("hover");
	$('.flash2_scrollCon').stop(true, true).animate({
		left: -_index3 * 179
	}, 500);
})
//	左边
$('.flash2_pre').click(function() {
	//		clearInterval(flashInter2);
	_index3--;
	if(_index3 < 0) {
		_index3 = 4;
	}
	$('.flash2_but ul li').eq(_index3).addClass("hover").siblings('li').removeClass("hover");
	$('.flash2_scrollCon').stop(true, true).animate({
		left: -_index3 * 179
	}, 500);
});
//	定时器
flashInter2 = setInterval(move, 1500);

function move() {
	_index3++;
	if(_index3 > 4) {
		_index3 = 0;
	}
	$('.flash2_but ul li').eq(_index3).addClass("hover").siblings('li').removeClass("hover");
	$('.flash2_scrollCon').stop(true, true).animate({
		left: -_index3 * 179
	}, 500);
}
//		定时器开关
$('.flash2_scroll').mouseover(function(e) {

	clearInterval(flashInter2);
});
$('.flash2_scroll').mouseout(function() {

	flashInter2 = setInterval(move, 1500);
});

//	热门排行
$('.hotNewsCon span').mousemove(function(){
	$(this).addClass("hover").siblings('span').removeClass("hover");
	var _index5 = $(this).index();
	$('.News_select ul').eq(_index5).fadeIn().siblings('ul').hide();
})
   

//瑞丽之星
	$('.common .mz li').mousemove(function(){
		$(this).find('p').hide().parent().siblings('li').find('p').show();
		$(this).find('.mzCon').show().parent().siblings('li').find('.mzCon').hide();
	});
