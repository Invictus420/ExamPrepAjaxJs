/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    var es = document.getElementsByTagName("path");
    var formerId = "";

    for (var i = 0; i < es.length; i++)
        (function (i) {
            var id = es[i].id;
            es[i].onclick = function () {
//                var ex = new XMLHttpRequest();
                $.ajax({url: "api/generic/cunts/" + id, success: function (result) {
                        //"http://restcountries.eu/rest/v1/alpha?codes=" + id
                        if (formerId !== "") {
                            $("#" + formerId).css("fill", "c0c0c0");
                        }
                        formerId = id;
                        $("#div1").html("Country: " + result[0].name);
                        $("#div2").html("Population: " + result[0].population);
                        $("#div3").html("Area: " + result[0].area);
                        var border = "";
                        for (var k = 0; k < result[0].borders.length; k++) {

                            if (k === result[0].borders.length - 1) {
                                border = border + result[0].borders[k]
                            } else {
                                border = border + result[0].borders[k] + ","
                            }



                        }
                        $("#div4").html("Borders: " + border);
                        $("#" + id).css("fill", "ff0000");
                    }});
            };
        })(i);
});
