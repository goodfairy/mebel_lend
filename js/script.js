(function($){
    $(document).ready(function(){
        $(".button-1").bind("click",function(e){
            e.preventDefault();
            $(".overlay, .form").show();
        });
        
        $(".button-2").bind("click",function(e){
            e.preventDefault();
            $(".overlay, .form-2").show();
        });
        
        $(".menu-switch, .small-menu a, .small-menu span").bind("click",function(e){
            $(this).parent().find("a,span").toggle();
        });
        
        $(".overlay, .close, .btnclose").on("click",function(e){
            e.preventDefault();
            $(".overlay, .form-2, .form").hide();
        });
		
		
		
		
		/* Freem | Fri Jun 19 2015 12:42:35 GMT+0400 */
		$(".slide, .panel").width($(window).width());
		/* !Freem */
	$("form").submit(function(event){
	    event.preventDefault();
	    
	    var fid = this.id;
	    var form = this;
	    
	    $(form).find(".phone, .name, .comment").removeClass("required");
	    
	    $(form).find(".phone, .name, .comment").each(function(){
		if ($(this).val().trim() == "") {
		    $(this).addClass("required");
		}
	    });
	    
	    if ($(form).find(".required").length != 0) {
		return false;
	    }

	    $.ajax({
		method: "POST",
		url: this.action,
		dataType: "json",
		data: {
		    form: fid,
		    phone: $(form).find(".phone").val(),
		    name: $(form).find(".name").val(),
		    comment: $(form).find(".comment").val(),
		}
	    }).done(function(data){
		if (data.status == "ok") {
		    $("form .send").prop("disabled",true).val("Ваша заявка отправлена").addClass("sended");
		}
	    });
	})
    });
	
})(jQuery)