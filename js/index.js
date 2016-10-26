$(document).ready(function() {
	
	$("#photo").on("click", function (e) {
		openModal("imageViewerModal");
		renderImageInModal($(this).attr("src"));
	});
	
	$("#openInNewTabButton").on('click', function (e) {
		var imageLink = $("#photo").attr("src");
		var win = window.open(imageLink, '_blank');
		if (win) {
			win.focus();
		} else {
			alert('Please allow popups for this website');
		}
	});
	
});


function renderImageInModal(imagePath) {
	$("#imageViewerModal")
		.find("img")
		.attr("src", imagePath)
		.css("max-height", $(window).height() - 120)
		.parent().css("min-height", $(window).height() - 120);
}


function openModal(id) {
    $("#"+id).modal();
}




