/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("dataTable",{defaults:{responsive:!0,language:{sSearchPlaceholder:"Search..",lengthMenu:"_MENU_",search:"_INPUT_",paginate:{previous:'<i class="icon wb-chevron-left-mini"></i>',next:'<i class="icon wb-chevron-right-mini"></i>'}}},api:function(){$.fn.dataTable&&$.fn.dataTable.TableTools&&$.extend(!0,$.fn.dataTable.TableTools.classes,{container:"DTTT btn-group btn-group pull-left",buttons:{normal:"btn btn-outline btn-default",disabled:"disabled"},print:{body:"site-print DTTT_Print"}})},init:function(context){if($.fn.dataTable){var defaults=$.components.getDefaults("dataTable");$('[data-plugin="dataTable"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).dataTable(options)})}}});