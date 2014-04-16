$(document).ready(function(){
    $.bigfoot({
        positionContent: true
    });

    var targetEl = $("#article-navbar-collapse-1 > ul");
    var headings = $(".section-head");
    var scrollIds = [];
    var headingText = [];
    headings.each(function() {

        function cut(n) {
            return function textCutter(i, text) {
                var short = text.substr(0, n);
                if (/^\S/.test(text.substr(n)))
                    return short.replace(/\s+\S*$/, "");
                return short;
            };
        }

        scrollIds.push($(this).attr('id'));
        headingText.push($(this).text(cut(10)));
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
            newNodes.push('<li><a href="#' + index + '">' + el + '</a></li>');
        }
        );

    targetEl.append(newNodes);
});