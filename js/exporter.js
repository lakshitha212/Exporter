/**
 * Created by ENCYTE-PC on 6/5/2016.
 */

(function ($) {
    'use strict';
    $.fn.exporter = function (options) {
        var _display_xl,
            _display_pdf,
            settings = $.extend({
                _id: "",
                _align: "text-right",
                _type: [1, 2],
                _file: "Report"
            }, options);
        /**
         * Manage Options
         * 1 : EXL
         * 2 : PDF
         */
        if (settings._type.length > 0) {
            if (settings._type.length != 2) {
                if (!$.inArray(1, settings._type)) {
                    _display_xl = "none";
                }
                if (!$.inArray(2, settings._type)) {
                    _display_pdf = "none";
                }
            }
        } else {
            _display_xl = "none";
            _display_pdf = "none";
        }
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
                                    var uri = '';
                                    if (navigator.appVersion.indexOf("Win") != -1) {
                                        uri = 'data:application/vnd.ms-excel;base64,';
                                    }
                                    if (navigator.appVersion.indexOf("Linux") != -1) {
                                        uri = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,';
                                    }
                                    var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Worksheet</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>' + $("#" + settings._id).find('table').html() + '</table></body></html>',
                                        a = document.createElement('a');
                                    a.href = uri + window.btoa(unescape(encodeURIComponent(template)));
                                    a.setAttribute('download', settings._file + '.xls');
                                    a.click();
                                }
                            }).css({
                                "padding-right": "5px",
                                "cursor": "pointer",
                                "display": _display_xl
                            }),
                            $("<i/>", {
                                class: "fa fa-file-pdf-o",
                                title: "PDF",
                                click: function () {
                                    var page = '<html><table border="1" style="border-spacing:0;width:100%">' + $("#" + settings._id).find('table').html() + '</table></html>';
                                    var w = window.open();
                                    w.document.write(page);
                                    w.print();
                                    w.close();
                                }
                            }).css({
                                "cursor": "pointer",
                                "display": _display_pdf
                            })
                        )
                    )
                )
            )
        );
    };
}(jQuery));