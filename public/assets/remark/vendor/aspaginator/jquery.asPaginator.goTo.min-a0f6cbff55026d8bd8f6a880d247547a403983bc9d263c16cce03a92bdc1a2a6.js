/*! jQuery asPaginator - v0.2.1 - 2015-03-17
* https://github.com/amazingSurge/jquery-asPaginator
* Copyright (c) 2015 amazingSurge; Licensed GPL */

!function(a){"use strict";a.asPaginator.registerComponent("goTo",{defaults:{tpl:function(){return'<div class="'+this.namespace+'-goTo"><input type="text" class="'+this.namespace+'-input" /><button type="submit" class="'+this.namespace+'-submit">Go</button></div>'}},init:function(b){var c=a.extend({},this.defaults,b.options.components.goTo);this.opts=c},bindEvents:function(a){var b=this;b.$goTo=a.$element.find("."+a.namespace+"-goTo"),b.$input=b.$goTo.find("."+a.namespace+"-input"),b.$button=b.$goTo.find("."+a.namespace+"-submit"),b.$button.on("click",function(){var c=parseInt(b.$input.val(),10);c=c>0?c:a.currentPage,a.goTo(c)})},unbindEvents:function(){this.$button.off("click")}})}(jQuery);
