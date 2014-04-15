$(document).ready(function(){
    $.bigfoot();
    var headings = $(".section-head")
    var scrollIds = []
    headings.each(function() {
        scrollIds.push(this.id)
    })
    $.scrollDepth({
        elements: scrollIds,
        userTiming: false
    });
});