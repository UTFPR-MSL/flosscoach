/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";var Site=window.Site;$(document).ready(function($){Site.run(),tableDragger.default(document.querySelector("#default-table")),tableDragger.default(document.querySelector("#row-table"),{mode:"row"}),tableDragger.default(document.querySelector("#only-body-table"),{mode:"row",onlyBody:!0}),tableDragger.default(document.querySelector("#handle-table"),{dragHandler:".table-dragger-handle"}),tableDragger.default(document.querySelector("#free-table"),{mode:"row",onlyBody:!0,dragHandler:".table-dragger-handle"}),tableDragger.default(document.querySelector("#event-table"),{mode:"free",dragHandler:".table-dragger-handle",onlyBody:!0}).on("drag",function(){}).on("drop",function(from,to,el,mode){}).on("shadowMove",function(from,to,el,mode){}).on("out",function(el,mode){})})}(document,window,jQuery);
