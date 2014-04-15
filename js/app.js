$(document).ready(function(){
    $.bigfoot();

    var targetEl = $("#article-navbar-collapse-1 > ul");
    var headings = $(".section-head");
    var scrollIds = [];
    var headingText = [];
    headings.each(function() {
        scrollIds.push($(this).id);
        headingText.push($(this).text());
    });

    $.scrollDepth({
        elements: scrollIds,
        userTiming: false
    });

});