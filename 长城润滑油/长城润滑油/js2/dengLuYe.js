	$(function(){
		var validation = {
		//验证手机号的正则
		checkPhone : function(sPhone){
			var phone_tag = (/^[1][3,4,5,7,8][0-9]{9}$/.test(sPhone));
			return phone_tag;
		},
		//验证密码的正则
		checkPass : function(sPass){
			var phone_pass = (/^(\w){6,8}$/.test(sPass));
			return phone_pass;
		}
	};
		$('#zh').focus(function(){
		 if ($("#zh").val() == '') {
			$("#zh").css("background-color","#FDF6C8"); 
			$(".qsrzh").show();
		 }
		 $('#zh').blur(function(){
		 if ($("#zh").val() != '') {
			$("#zh").css("background-color","#FFF"); 
			$(".qsrzh").hide();
		 } 
	});	
	});	
	$('#mm').focus(function(){
		 if ($("#mm").val() == '') {
			$("#mm").css("background-color","#FDF6C8"); 
			$(".qsrma").show();
		 }
		 $('#mm').blur(function(){
		 if ($("#mm").val() != '') {
			$("#mm").css("background-color","#FFF"); 
			$(".qsrma").hide();
		 } 
	});	
	});
	
	//点击登录按钮,对账户和密码进行验证功能
	$('.denglu2').click(function(event) {
		if( $('#zh').val() === "" ){
			$(".qsrzh").show();
			return false;
		}
		if( $('#mm').val() === "" ){
			$(".qsrma").show();
			return false;
		}
		if(validation.checkPhone($('#zh').val()) == false){
			$(".qsrzh").html('您输入的账户不正确,请重新输入').show();
			return false;
		}
		if(validation.checkPass($('#mm').val()) == false){
			$(".qsrma").html('您输入的密码不正确,请重新输入').show();
			return false;
		}
		setTimeout(function(){
			location.href='index.html'
		},1000);
	});
});
	







