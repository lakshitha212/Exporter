/**
 * Created by ENCYTE-PC on 6/5/2016.
 */

(function ($) {
    'use strict';
    $.fn.exporter = function (options) {
        var settings = $.extend({
            _id: "",
            _align: "text-right"
        }, options);
        console.log(settings);
        $('#content_tbl').prepend(
            $("<div/>", {
                class: "row " + settings._align
            }).append(
                $("<div/>", {
                    text: "Hello World",
                    class: "col-md-12"
                })
            )
        );
    };
}(jQuery));