$(document).ready(function(){
    $.bigfoot({
        positionContent: true
    });

    var targetEl = $("#article-navbar-collapse-1 > ul");
    var headings = $(".section-head");
    var scrollIds = [];
    var headingText = [];
    headings.each(function() {
        scrollIds.push($(this).attr('id'));
        headingText.push($(this).text());
    });

    $.scrollDepth({
        elements: scrollIds,
        userTiming: false
    });

    var headingDict = new Object();
    for (var i = 0; i < headings.length; i++) {
        headingDict[scrollIds[i]] = headingText[i]
    }

    var newNodes = []
    $.each(
        headingDict,
        function (index, el) {
            newNodes.push('<li><a class="section-link" href="#' + index + '">' + el + '</a></li>');
        }
        );

    targetEl.append(newNodes);
});