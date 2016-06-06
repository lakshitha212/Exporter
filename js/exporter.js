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
                $("<div/>", {class: "col-md-11"}),
                $("<div/>", {class: "col-md-1 "}).append(
                    $("<div/>", {class: "row"}).append(
                        $("<div/>", {class: "col-md-12 form-group"}).append(
                            $("<i/>", {
                                class: "fa fa-file-excel-o",
                                title: "Excel",
                                click: function () {
                                    console.log("Excel");
                                }
                            }).css({
                                "padding-right": "5px",
                                "cursor": "pointer"
                            }),
                            $("<i/>", {
                                class: "fa fa-file-pdf-o",
                                title: "PDF",
                                click: function () {
                                    console.log("PDF");
                                }
                            }).css({
                                "cursor": "pointer"
                            })
                        )
                    )
                )
            )
        );
    };
}(jQuery));