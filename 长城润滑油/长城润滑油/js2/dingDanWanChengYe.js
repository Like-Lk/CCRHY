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
