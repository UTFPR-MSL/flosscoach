/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/gridstack",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginGridstack=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="gridstack",Gridstack=function(_Plugin){function Gridstack(){return babelHelpers.classCallCheck(this,Gridstack),babelHelpers.possibleConstructorReturn(this,(Gridstack.__proto__||Object.getPrototypeOf(Gridstack)).apply(this,arguments))}return babelHelpers.inherits(Gridstack,_Plugin),babelHelpers.createClass(Gridstack,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){if(_jquery2.default.fn.gridstack){var $el=this.$el;$el.gridstack(this.options)}}}],[{key:"getDefaults",value:function(){return{cell_height:80,vertical_margin:20}}}]),Gridstack}(_Plugin3.default);_Plugin3.default.register(NAME,Gridstack),exports.default=Gridstack});
