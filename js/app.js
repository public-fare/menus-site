$(document).ready(function(){
    $.bigfoot();
    var headings = $(".section-head")
    $.scrollDepth({
        elements: headings,
        userTiming: false
    });
});