/* Simple Alert Handler
Author: Simeon Lyubenov (lyubenov@gmail.com)
Website: www.webdevlabs.com
*/
(function( $ ) {
	$.fn.AlertHandler = function() {
		this.click(function(){
			var alertmsg = $(this).attr("data-alert");
			alert(alertmsg);
		});
		return this;
	};
}( jQuery ));
