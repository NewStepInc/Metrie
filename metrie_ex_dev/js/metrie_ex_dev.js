jQuery(function(){
	//add jQuery code here. Please use jQuery instead of the abbreviated $

	jQuery( ".btn-show-filters" ).on('click', function() {
		// jQuery("#search-filters").toggle().animate({}, 2000);
		jQuery("#search-filters").animate({
			height: "toggle"
		}, 300, function(){
			jQuery(".btn-show-filters").toggleClass("bi_interface-box-bottom");
			jQuery(".btn-show-filters").toggleClass("bi_interface-box-top");
		});
	});
});
