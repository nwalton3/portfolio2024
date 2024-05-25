var _____WB$wombat$assign$function_____ = function(name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } } {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");


    // svgAnimation
    var svgAnimation = (function() {

        var pos = 0
        var projects = document.getElementsByClassName('project-svg');

        Array.prototype.forEach.call(projects, function(project) {
            var projectId = project.getAttribute('data-id');
            console.log(projectId);
            project.hoverPos = 0;
            project.addEventListener('mouseover', function() {
                if (project.hoverPos == 0) {
                    document.getElementById('animation-top-' + projectId).beginElement();
                    project.hoverPos = 1;
                }
            });
            project.addEventListener('mouseout', function() {
                if (project.hoverPos == 1) {
                    document.getElementById('animation-bottom-' + projectId).beginElement();
                    project.hoverPos = 0;
                }
            });
        });

    })(); // End svgAnimation

}