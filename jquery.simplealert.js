/* Simple Alert Handler
Author: Simeon Lyubenov (lyubenov@gmail.com)
Website: www.webdevlabs.com
Usage:
		<button data-alert="Click-click! Who's there?">click me!</button>
Attach handler:
		$('[data-alert]').AlertHandler();
**/
(function( $ ) {
	$.fn.AlertHandler = function() {
		this.click(function(){
			var alertmsg = $(this).attr("data-alert");
			alert(alertmsg);
		});
		return this;
	};
}( jQuery ));
