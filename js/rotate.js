(function($) {
    $.fn.extend({ 
        rotate: function(options) {
            let defaults = {
                fadeSpeed: 500,
                pauseSpeed: 1800,
				child:null
            };            
            var options = $.extend(defaults, options);         
            return this.each(function() {
                let o = options;
                let obj = $(this);                
                let items = $(obj.children(), obj);
				items.each(function() {$(this).hide();})
				if (!o.child) {
					var next = $(obj).children(':first');
				} else {
					var next = o.child;
				}
				$(next).fadeIn(o.fadeSpeed, function() {
					$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
						let next = $(this).next();
						if (next.length == 0){
							next = $(obj).children(':first');
						}
						$(obj).rotate({
							child : next, 
							fadeSpeed : o.fadeSpeed, 
							pauseSpeed : o.pauseSpeed
						});
					});
				});
            });
        }
    });
})(jQuery);

$(document).ready(() => {
	$('.rotate').rotate({
		fadeSpeed: 500, 
		pauseSpeed: 1800
	});
});
