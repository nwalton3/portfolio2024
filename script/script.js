
// svgAnimation
var svgAnimation = (function(){

	var pos = 0
	var projects = document.getElementsByClassName('project-svg');

	Array.prototype.forEach.call(projects, function(project) {

		var projectId = project.getAttribute('data-id');
		project.hoverPos = 0;

        console.log(projectId);

		// Mouseover event
		project.addEventListener('mouseover', function(){
			if(project.hoverPos == 0) {
				document.getElementById('animation-top-' + projectId).beginElement();
				project.hoverPos = 1;
			} 
		});

		// Mouseout event
		project.addEventListener('mouseout', function(){
			if(project.hoverPos == 1) {
				document.getElementById('animation-bottom-' + projectId).beginElement();
				project.hoverPos = 0;
			} 
		});
	});

})(); // End svgAnimation