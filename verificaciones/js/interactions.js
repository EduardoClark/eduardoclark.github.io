$(function(){
	$.fn.supersized.options = {  
		min_width		    :   1600,	//Min width allowed (in pixels)
		min_height		    :   1500,	//Min height allowed (in pixels)
		vertical_center		: 	1,
		slides : [
			{image : 'img/Black.png' }
		]
	};
    $('#supersized').supersized(); 

	$('.column .scroll').jScrollPane();
});

