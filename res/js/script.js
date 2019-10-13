$(document).ready(function(){
    $('#profile-button').click(function () {
        $('#profile-container').addClass('active')
        $('#courses-container').removeClass('active')
        $('#profile-button').addClass('active')
        $('#courses-button').removeClass('active')
    })

    $('#courses-button').click(function () {
        $('#profile-container').removeClass('active')
        $('#courses-container').addClass('active')
        $('#profile-button').removeClass('active')
        $('#courses-button').addClass('active')
    })
	$("#add-course-button").click(function(){
		$('#add-course').addClass('active');
	});
});