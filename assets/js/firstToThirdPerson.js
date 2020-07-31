$("#add-combo").click(function(event) {
	$("#new-combo").toggleClass('d-none');
});

$("#combos").change(function(event) {
	var isSelected = $(this).find("option:selected").length;
	if (isSelected) {
		$("#del-combo").attr('disabled', false);
	}
});

$("#del-combo").click(function(event) {
	$("#combos").find("option:selected").remove();
});

$(document).on('click', '#new-combo>.btn', function(event) {
	var fp = $("#new-combo-fp");
	var tp = $("#new-combo-tp");

	if(fp.val().length > 0 && tp.val().length > 0) {
		$("#combos").append("<option>\"" + fp.val() + "\" - \"" + tp.val() + "\"</option>");
		fp.val("");
		tp.val("");
	}
});