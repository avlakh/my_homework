"use strict";function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Employee=function e(t){_classCallCheck(this,e),this.name=t.name,this.position=t.position,this.age=t.age,this.salary=t.salary},EmpTable=function(){function t(e){_classCallCheck(this,t),this.empList=e}return _createClass(t,[{key:"getHtml",value:function(){var t="";return this.empList.forEach(function(e){t+="\n                <tr>\n                    <td>".concat(e.name,"</td>\n                    <td>").concat(e.position,"</td>\n                    <td>").concat(e.age,"</td>\n                    <td>").concat(e.salary,"</td>\n                </tr>\n            ")}),t}},{key:"viewHtml",value:function(e){document.getElementById(e).innerHTML=this.getHtml()}}]),t}();