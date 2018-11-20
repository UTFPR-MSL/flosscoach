/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/sticky-header",["exports","jquery"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"));else{var mod={exports:{}};factory(mod.exports,global.jQuery),global.PluginStickyHeader=mod.exports}}(this,function(exports,_jquery){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),pluginName="stickyHeader",defaults={headerSelector:".header",changeHeaderOn:100,activeClassName:"active-sticky-header",min:50,method:"toggle"},stickyHeader=function(){function stickyHeader(el,options){babelHelpers.classCallCheck(this,stickyHeader),this.isActive=!1,this.init(options),this.bind()}return babelHelpers.createClass(stickyHeader,[{key:"init",value:function(options){var $el=this.$el.css("transition","none"),$header=this.$header=$el.find(options.headerSelector).css({position:"absolute",top:0,left:0});this.options=_jquery2.default.extend(!0,{},defaults,options,$header.data()),this.headerHeight=$header.outerHeight(),this.$el.css("paddingTop",this.headerHeight)}},{key:"_toggleActive",value:function(){this.isActive?this.$header.css("height",this.options.min):this.$header.css("height",this.headerHeight)}},{key:"bind",value:function(){var self=this;this.$el.on("scroll",function(){if("toggle"===self.options.method)(0,_jquery2.default)(this).scrollTop()>self.options.changeHeaderOn&&!self.isActive?(self.$el.addClass(self.options.activeClassName),self.isActive=!0,self.$header.css("height",self.options.min),self.$el.trigger("toggle:sticky",[self,self.isActive])):(0,_jquery2.default)(this).scrollTop()<=self.options.changeHeaderOn&&self.isActive&&(self.$el.removeClass(self.options.activeClassName),self.isActive=!1,self.$header.css("height",self.headerHeight),self.$el.trigger("toggle:sticky",[self,self.isActive]));else if("scroll"===self.options.method){var offset=Math.max(self.headerHeight-(0,_jquery2.default)(this).scrollTop(),self.options.min);offset===self.headerHeight?self.$el.removeClass(self.options.activeClassName):self.$el.addClass(self.options.activeClassName),self.$header.css("height",offset),self.$el.trigger("toggle:sticky",[self])}})}}],[{key:"_jQueryInterface",value:function(options){for(var _this=this,_len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];if("string"!=typeof options)return this.each(function(){_jquery2.default.data(this,pluginName)?_jquery2.default.data(this,pluginName).init(options):_jquery2.default.data(this,pluginName,new stickyHeader(this,options))});var _ret=function(){var method=options;return/^\_/.test(method)?{v:!1}:{v:_this.each(function(){var api=_jquery2.default.data(this,pluginName);api&&"function"==typeof api[method]&&api[method].apply(api,args)})}}();return"object"===("undefined"==typeof _ret?"undefined":babelHelpers.typeof(_ret))?_ret.v:void 0}}]),stickyHeader}();_jquery2.default.fn[pluginName]=stickyHeader._jQueryInterface,_jquery2.default.fn[pluginName].constructor=stickyHeader,_jquery2.default.fn[pluginName].noConflict=function(){return _jquery2.default.fn[pluginName]=window.JQUERY_NO_CONFLICT,stickyHeader._jQueryInterface},exports.default=stickyHeader});