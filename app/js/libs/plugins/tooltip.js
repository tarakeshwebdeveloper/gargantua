(function ($) {
    $.toolTip = function () {


        var element = "div,span,label,a,button,td,i,b,option,input,h1,h2,h3,h4,h5,h6,p,li";

        var getLeftPosition = function (elementLeftPosition, ele, toolTipEle) {
            var ttW = toolTipEle.width() / 2, eleW = ele.width() / 2;
            
            if (ele.css('text-overflow') == "ellipsis" || ele.parent().css('text-overflow') == "ellipsis") {
                return ele.offset().left;
            }


            return (elementLeftPosition + eleW) - ttW;
        }

        $(document).on("mouseover", element, function (e) {
            if ($(this).attr("data-tool-tip") != undefined) {
                var txt = $(this).attr("data-tool-tip");
                var pos = $(this).offset();
                var oHeight = $(this).outerHeight();
                var ele = $(this);
                var div; //$("<div/>").addClass("tool-tip").text(txt);
                if ($("div.tool-tip").length == 0) {
                    div = $("<div/>").addClass("tool-tip");
                    $("body").prepend(div);
                }
                else {
                    div = $("div.tool-tip");
                }
                div.html(txt).fadeIn(300).offset({ left: getLeftPosition(pos.left, ele, div), top: pos.top + oHeight + 2 });
                e.stopPropagation();
            }
        }).bind("mouseout", function () {
            $("div.tool-tip").offset({ left: 0, top: 0 }).hide();
        });;
    }

    $.toolTip();
})(jQuery);