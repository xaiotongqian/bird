!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={"i":n,"l":!1,"exports":{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{"configurable":!1,"enumerable":!0,"get":n})},e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=14)}([function(t,e){t.exports=jQuery},function(t,e,i){/*!
 * @autofe/tab v0.1.2
 * (c) 2018 Autohome Inc.
 * Released under the MIT License.
 */
!function(e,n){t.exports=n(i(0))}(0,function(t){"use strict";function e(i,n){this.options=t.extend({},e.Default,n),this.$elem=t(i),this._init()}function i(i){return this.each(function(){var o=t(this),s=o.data(n),r=t.extend({},e.Default,o.data(),"object"==typeof i&&i);if(s||(s=new e(this,r),o.data(n,s)),"string"==typeof i){if(void 0===s[i])throw new TypeError('No method named "'+i+'"');s[i]()}})}t=t&&t.hasOwnProperty("default")?t["default"]:t;var n="fe.tab",o="."+n,s=t.fn["tab"],r={"SHOW":"show"+o,"SHOWN":"shown"+o,"HIDE":"hide"+o,"HIDDEN":"hidden"+o,"MOUSEENTER":"mouseenter"+o,"MOUSELEAVE":"mouseleave"+o,"CLICK":"click"+o,"CLICK_DATA_API":"click"+o+".data-api"},a={"DATA_TOGGLE":'[data-toggle="tab"]'},l={"DATA_TARGET":"data-target"},c=void 0;return e.Default={"delay":150,"trigger":"click","activeClass":"active","tabList":"[data-tab-list], ul"},e.prototype._init=function(){var t=this,e=t.options;"hover"===e.trigger?t.$elem.on(r.MOUSEENTER,function(){clearTimeout(c),c=setTimeout(function(){t.show()},e.delay)}).on(r.MOUSELEAVE,function(){clearTimeout(c)}):t.$elem.on(r.CLICK,function(e){e.preventDefault(),t.show()})},e.prototype.show=function(){var e=this.options.activeClass,i=this.$elem;if(!i.hasClass(e)){var n=t(i.attr(l.DATA_TARGET)),o=i.closest(this.options.tabList),s=o.find("."+String(e))[0],a=t.Event(r.HIDE,{"relatedTarget":i[0]}),c=t.Event(r.SHOW,{"relatedTarget":s});s&&t(s).trigger(a),i.trigger(c),a.isDefaultPrevented()||c.isDefaultPrevented()||(this._activate(i,t(s)),this._activate(n,n.parent().children("."+String(e)),function(){var e=t.Event(r.HIDDEN,{"relatedTarget":i[0]}),n=t.Event(r.SHOWN,{"relatedTarget":s});t(s).trigger(e),i.trigger(n)}))}},e.prototype._activate=function(t,e,i){var n=this.options.activeClass;e.removeClass(n),t.addClass(n),i&&i()},t(function(){i.call(t(a.DATA_TOGGLE))}),t.fn["tab"]=i,t.fn["tab"].Constructor=e,t.fn["tab"].noConflict=function(){return t.fn["tab"]=s,i},e})},function(t,e,i){/*!
 * @autofe/slide v0.4.1
 * (c) 2018 Autohome Inc.
 * Released under the MIT License.
 */
!function(e,n){t.exports=n(i(0))}(0,function(t){"use strict";function e(e,i){this.options=i,this.$elem=t(e),this.$track=t(this.options.slideTrack,this.$elem),this.$item=t(this.options.slideItem,this.$elem),this.$title=t(this.options.slideTitle,this.$elem),this.$indicators=t(this.options.slideIndicators,this.$elem),this.$prev=t(this.options.slidePrev,this.$elem),this.$next=t(this.options.slideNext,this.$elem),this.number=1,this.buzy=!1,this.isMouseEnter=!1,this.adjustObj=null,this.init()}function i(i){return this.each(function(){var n=t(this),s=n.data(o),r=t.extend({},e.Default,n.data(),"object"==typeof i&&i);if(s||(s=new e(this,r),n.data(o,s)),"string"==typeof i){if(void 0===s[i])throw new TypeError('No method named "'+i+'"');s[i]()}else"number"==typeof i&&s.go(i)})}t=t&&t.hasOwnProperty("default")?t["default"]:t;var n="slide",o="fe.slide",s="."+o,r=t.fn[n],a={"NEXT":"next","PREV":"prev"},l={"INIT":"init"+s,"SLIDE":"slide"+s,"SLID":"slid"+s,"FIRST_SLIDE":"firstSlide"+s,"FIRST_SLID":"firstSlid"+s,"LAST_SLIDE":"lastSlide"+s,"LAST_SLID":"lastSlid"+s,"KEYDOWN":"keydown"+s,"MOUSEENTER":"mouseenter"+s,"MOUSELEAVE":"mouseleave"+s,"TOUCHSTART":"touchstart"+s,"TOUCHMOVE":"touchmove"+s,"TOUCHEND":"touchend"+s,"CLICK":"click"+s},c={"DATA_TOGGLE":'[data-toggle="slide"]'};return e.Default={"fade":!1,"duration":400,"interval":5e3,"circle":!0,"autoplay":!0,"keyboard":!1,"pause":"hover","toggleButton":!1,"autoIndicators":!1,"slideTrack":".athm-slide__track,[data-slide-track]","slideItem":".athm-slide__item,[data-slide-item]","slideTitle":".athm-slide__title,[data-slide-title]","slideIndicators":".athm-slide__indicators,[data-slide-indicators]","slidePrev":".athm-slide__prev,[data-slide-prev]","slideNext":".athm-slide__next,[data-slide-next]","disabledClass":"disabled"},e.prototype.init=function(){var e=this;if(e.$item.length<=1)return e.$indicators.hide(),e.$prev.hide(),void e.$next.hide();if(e.$elem.trigger(l.INIT,e),"hover"===e.options.pause&&e.$elem.on(l.MOUSEENTER,function(){e.isMouseEnter=!0}).on(l.MOUSELEAVE,function(){e.isMouseEnter=!1}),!0===e.options.toggleButton&&e.$elem.hover(function(){e.$prev.show(),e.$next.show()},function(){e.$prev.hide(),e.$next.hide()}),e.$prev.on(l.CLICK,t.proxy(e.prev,e)),e.$next.on(l.CLICK,t.proxy(e.next,e)),e.options.autoIndicators){for(var i=[],n=0,o=e.$item.length;n<o;n++)i.push('<a href="javascript:void(0)" target="_self"></a>');e.$indicators.html(i.join(" "))}e.$indicators.on(l.CLICK,"a",function(){if(!e.buzy){var t=e.$indicators.find("a").index(this)+1;e.go(t)}}),e.options.keyboard&&t(document).on(l.KEYDOWN,function(t){switch(t.which){case 37:e.prev();break;case 39:e.next()}}),"ontouchstart"in window&&e.$elem.on(l.TOUCHSTART,function(t){t=t.originalEvent,e.__touch_isDrag=!0,t.targetTouches?(e.__touch_startX=t.targetTouches[0].clientX,e.__touch_startY=t.targetTouches[0].clientY):(e.__touch_startX=t.clientX,e.__touch_startY=t.clientY)}).on(l.TOUCHMOVE,function(t){t=t.originalEvent,e.__touch_isDrag&&(t.targetTouches?(e.__touch_endX=t.targetTouches[0].clientX,e.__touch_endY=t.targetTouches[0].clientY):(e.__touch_endX=t.clientX,e.__touch_endY=t.clientY),Math.abs(e.__touch_endX-e.__touch_startX)>Math.abs(e.__touch_endY-e.__touch_startY)?(e.__touch_horizontal=!0,t.preventDefault()):e.__touch_horizontal=!1)}).on(l.TOUCHEND,function(){e.__touch_horizontal&&e.__touch_endX&&(e.__touch_endX-e.__touch_startX>100?t.proxy(e.prev,e)():e.__touch_endX-e.__touch_startX<-100&&t.proxy(e.next,e)()),e.__touch_isDrag=!1,e.__touch_startX=null,e.__touch_startY=null,e.__touch_endX=null,e.__touch_endY=null}),e.options.fade?e.$item.css({"opacity":0,"position":"absolute","zIndex":1}).eq(0).css({"opacity":1,"zIndex":2}):e.$track.css("left",0),e._setPoint(),e.options.circle||1!==e.number||e.$prev.addClass(this.options.disabledClass),!0===e.options.autoplay&&e.play()},e.prototype.next=function(){this.buzy||this._slide(a.NEXT,this.number+1)},e.prototype.prev=function(){this.buzy||this._slide(a.PREV,this.number-1)},e.prototype.go=function(t){if(!(t>this.$item.length||t<1||t===this.number||this.buzy)){var e=t>this.number?a.NEXT:a.PREV;this._slide(e,t)}},e.prototype.play=function(){var t=this;this.interval&&clearInterval(this.interval),this.buzy=!1,this.interval=setInterval(function(){!t.isMouseEnter&&t.next()},this.options.interval)},e.prototype.pause=function(){this.interval&&clearInterval(this.interval)},e.prototype._setPoint=function(){this.$indicators.find("a").removeClass("active").eq(this.number-1).addClass("active");var t=this.$item.eq(this.number-1),e=t.find("img[title]"),i=e.attr("title");if(i&&this.$title.length>0){var n=e.closest("a",t[0])[0];n?n=n.cloneNode():(n=document.createElement("a"),n.href="javascript:void(0)"),n.innerHTML=i,this.$title.html(n.outerHTML)}},e.prototype._slide=function(e,i){function n(){o.buzy=!1,o.$elem.trigger(l.SLID,o),!h&&u?o.$elem.trigger(l.LAST_SLID,o):!h&&d&&o.$elem.trigger(l.FIRST_SLID,o)}var o=this,s=this.options.duration,r=this.options.disabledClass,c=this.$item.first().width(),h=this.options.circle,u=e===a.NEXT&&i===this.$item.length,f=e===a.NEXT&&i>this.$item.length,d=e===a.PREV&&1===i,p=e===a.PREV&&i<1,_=this.number,m=i;if(h||!p&&!f){if(this.buzy=!0,this.$elem.trigger(l.SLIDE,this),!h&&u?(this.$next.addClass(r),this.$elem.trigger(l.LAST_SLIDE,this),this.pause()):this.$next.removeClass(r),!h&&d?(this.$prev.addClass(r),this.$elem.trigger(l.FIRST_SLIDE,this)):this.$prev.removeClass(r),f){if(!this.options.fade){this.$track.css("left",c);var v=this.$item.last();this._adjustPosition(v,-this.$item.length*c)}m=1}else if(p){if(!this.options.fade){this.$track.css("left",-this.$item.length*c);var g=this.$item.first();this._adjustPosition(g,this.$item.length*c)}m=this.$item.length}this.number=m,this._setPoint(),o.options.fade?(o.$item.eq(_-1).animate({"opacity":0},s,function(){t(this).css("zIndex",1)}),o.$item.eq(o.number-1).animate({"opacity":1},s,function(){t(this).css("zIndex",2),n()})):o.$track.animate({"left":-(o.number-1)*c},s,function(){o._resetPosition(),n()})}},e.prototype._adjustPosition=function(t,e){this.adjustObj={"$elem":t,"position":t.css("position"),"left":t.css("left")},t.css({"position":"relative","left":e})},e.prototype._resetPosition=function(){this.adjustObj&&(this.adjustObj.$elem.css({"position":this.adjustObj.position,"left":this.adjustObj.left}),this.adjustObj=null)},t(function(){i.call(t(c.DATA_TOGGLE))}),t.fn[n]=i,t.fn[n].Constructor=e,t.fn[n].noConflict=function(){return t.fn[n]=r,i},e})},function(t,e,i){/*!
 * @autofe/layer v0.3.1
 * (c) 2018 Autohome Inc.
 * Released under the MIT License.
 */
!function(e,n){t.exports=n(i(0))}(0,function(t){"use strict";function e(i,n){this.options=t.extend({},e.Default,n),this.$elem=t(i),this.$back=null,this.isShown=!1,this.isFixed=!0,this.$elem.css({"zIndex":1001})}function i(i,n){return this.each(function(){var s=t(this),r=s.data(o),a=t.extend({},e.Default,s.data(),"object"==typeof i&&i);if(r||(r=new e(this,a),s.data(o,r)),"string"==typeof i){if(void 0===r[i])throw new TypeError('No method named "'+i+'"');r[i](n)}else a.show&&r.show(n)})}t=t&&t.hasOwnProperty("default")?t["default"]:t;var n="layer",o="fe.layer",s="."+o,r=t.fn[n],a={"SHOW":"show"+s,"SHOWN":"shown"+s,"HIDE":"hide"+s,"HIDDEN":"hidden"+s,"RESIZE":"resize"+s,"CLICK_DISMISS":"click.dismiss"+s,"KEYDOWN_DISMISS":"keydown.dismiss"+s,"CLICK_DATA_API":"click"+s+".data-api"},l={"DATA_TOGGLE":'[data-toggle="layer"]',"DATA_DISMISS":'[data-dismiss="layer"]'};return e.Default={"keyboard":!0,"backdrop":!0,"opacity":.5,"show":!0,"time":0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(e){var i=this;if(!i.isShown){var n=t.Event(a.SHOW,{"relatedTarget":e});i.$elem.trigger(n),i.isShown||n.isDefaultPrevented()||(i.isShown=!0,this._adjust(),i._setEscapeEvent(),i._setResizeEvent(),i.$elem.on(a.CLICK_DISMISS,l.DATA_DISMISS,t.proxy(i.hide,i)),i._setBackdrop(function(){i.$elem.css({"display":"block"}),i._effect("fadeIn",function(){var n=t.Event(a.SHOWN,{"relatedTarget":e});i.$elem.trigger(n);var o=i.options.time;o>0&&setTimeout(function(){i.hide()},o)})}))}},e.prototype.hide=function(e){var i=this;if(e&&e.preventDefault(),i.isShown){var n=t.Event(a.HIDE);i.$elem.trigger(n),i.isShown&&!n.isDefaultPrevented()&&(i.isShown=!1,i._setEscapeEvent(),i._setResizeEvent(),i.$elem.off(a.CLICK_DISMISS),i._effect("fadeOut",function(){i.$elem.css({"display":"none"}),i._setBackdrop(),i.$elem.trigger(a.HIDDEN)}))}},e.prototype.handleUpdate=function(){this._adjust()},e.prototype._adjust=function(){var e=t(window).width(),i=t(window).height(),n=this.$elem.outerWidth(),o=this.$elem.outerHeight(),s={"left":(e-n)/2};this.isFixed=!(o>i),this.isFixed?(s.position="fixed",s.top=(i-o)/2):(s.position="absolute",s.top=t(window).scrollTop()),this.$elem.css(s)},e.prototype._setEscapeEvent=function(){var e=this;e.options.keyboard&&(e.isShown?t(document).on(a.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):t(document).off(a.KEYDOWN_DISMISS))},e.prototype._setResizeEvent=function(){this.isShown?t(window).on(a.RESIZE,t.proxy(this.handleUpdate,this)):t(window).off(a.RESIZE)},e.prototype._setBackdrop=function(e){var i=this,n=i.options;n.backdrop?i.isShown?(i.$back=t('<div style="position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;background:#000;opacity:0;"></div>').appendTo(document.body),"lock"!==n.backdrop&&i.$back.on(a.CLICK_DISMISS,t.proxy(i.hide,i)),i.$back.animate({"opacity":n.opacity},150,e)):i.$back&&i.$back.animate({"opacity":0},150,function(){i.$back.off(a.CLICK_DISMISS),i.$back.remove(),i.$back=null,e&&e()}):e&&e()},e.prototype._effect=function(t,e){switch(t){case"fadeIn":this.$elem.stop(!0).css({"marginTop":-30,"opacity":0}).animate({"marginTop":0,"opacity":1},300,e);break;case"fadeOut":this.$elem.stop(!0).animate({"marginTop":-30,"opacity":0},300,e)}},t(document).on(a.CLICK_DATA_API,l.DATA_TOGGLE,function(e){var n=t(this),s=t(n.attr("data-target")),r=s.data(o)?"toggle":t.extend({},s.data(),n.data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault(),i.call(s,r,this)}),t.fn[n]=i,t.fn[n].Constructor=e,t.fn[n].noConflict=function(){return t.fn[n]=r,i},e})},function(t,e,i){/*!
 * @autofe/lazyload v0.2.0
 * (c) 2018 Autohome Inc.
 * Released under the MIT License.
 */
!function(e,n){t.exports=n(i(0))}(0,function(t){"use strict";function e(e,i){return(void 0===i.container||i.container===window?0:t(i.container)[0].getBoundingClientRect().top)>=t(e)[0].getBoundingClientRect().bottom+i.threshold}function i(e,i){return(void 0===i.container||i.container===window?0:t(i.container)[0].getBoundingClientRect().left)>=t(e)[0].getBoundingClientRect().right+i.threshold}function n(e,i){var n=void 0;if(void 0===i.container||i.container===window){n=window.innerHeight?window.innerHeight:t(window).height()}else n=t(i.container)[0].getBoundingClientRect().bottom;return n<=t(e)[0].getBoundingClientRect().top-i.threshold}function o(e,i){return(void 0===i.container||i.container===window?t(window).width():t(i.container)[0].getBoundingClientRect().right)<=t(e)[0].getBoundingClientRect().left-i.threshold}function s(e,i){var n=this;if(this.options=t.extend({},s.Default,i),this.$elements=e,this.$container=t(this.options.container),this._timer=null,this._unique=u(),this._event=String(c.SCROLL)+"."+String(this._unique)+","+String(c.RESIZE)+"."+String(this._unique),this._prepareImg(),this.options.delay>=0)return void setTimeout(function(){n._loadDirectly()},this.options.delay);this.bind(),t(function(){n.update()})}function r(e){return new s(this,t.extend({},s.Default,"object"==typeof e&&e)),this}t=t&&t.hasOwnProperty("default")?t["default"]:t;var a="lazyload",l=t.fn[a],c={"SCROLL":"scroll.fe.lazyload","RESIZE":"resize.fe.lazyload"},h={"BOTH":"both","VERTICAL":"vertical","HORIZONTAL":"horizontal","ABOVE":"above"},u=function(){var t=0;return function(){return++t}}();return s.Default={"container":window,"threshold":0,"direction":h.VERTICAL,"skipInvisible":!1,"failureLimit":0,"delay":-1,"attr":"data-src","srcsetAttr":"data-srcset","removeAttr":!0,"onAppear":null,"onLoad":null,"onError":null,"placeholder":"data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEHAAIALAAAAAABAAEAAAICVAEAOw=="},s.prototype.update=function(){function s(e){l=0,e._lazyload_appear||(e._lazyload_appear=!0,a.onAppear&&a.onAppear.call(e,r.$elements.length,a),t(e).is("img")&&r._processImg(e),setTimeout(function(){var e=t.grep(r.$elements,function(t){return!t._lazyload_appear});r.$elements=t(e),r.$elements.length<=0&&r.$container.off(r._event)},100))}var r=this,a=this.options,l=0;this.$elements.each(function(r,c){var u=t(c);if(!a.skipInvisible||u.is(":visible"))if(a.direction===h.BOTH)if(e(c,a)||i(c,a));else if(n(c,a)||o(c,a)){if(++l>a.failureLimit)return!1}else s(c);else if(a.direction===h.HORIZONTAL)if(i(c,a));else if(o(c,a)){if(++l>a.failureLimit)return!1}else s(c);else if(a.direction===h.ABOVE)if(n(c,a)){if(++l>a.failureLimit)return!1}else s(c);else if(e(c,a));else if(n(c,a)){if(++l>a.failureLimit)return!1}else s(c)})},s.prototype.bind=function(){var t=this,e=this._event;this.$container.off(e).on(e,function(){t._timer||(t._timer=setTimeout(function(){t.update(),clearTimeout(t._timer),t._timer=null},100))})},s.prototype._processImg=function(e){var i=this,n=t(e),o=this.options;if(!e._lazyloaded){var s="function"==typeof o.attr?o.attr.call(e):n.attr(o.attr),r="function"==typeof o.srcsetAttr?o.srcsetAttr.call(e):n.attr(o.srcsetAttr);t("<img />").one("load",function(){s!==n.attr("src")&&(n.hide(),n.attr("src",s),null!==r&&n.attr("srcset",r),o.removeAttr&&("string"==typeof o.attr&&n.removeAttr(o.attr),"string"==typeof o.srcsetAttr&&n.removeAttr(o.srcsetAttr)),n.show()),e._lazyloaded=!0;var a=t.grep(i.$elements,function(t){return!t._lazyloaded});i.$elements=t(a),o.onLoad&&o.onLoad.call(e,i.$elements.length,o)}).on("error",function(){o.onError&&o.onError.call(e,i.$elements.length,o)}).attr({"src":s,"srcset":r||""})}},s.prototype._prepareImg=function(){var e=this.options.placeholder;this.$elements.each(function(){var i=this,n=t(i);n.is("img")&&(i._lazyloaded=!1,void 0!==n.attr("src")&&!1!==n.attr("src")||n.attr("src",e))})},s.prototype._loadDirectly=function(){var e=this;this.$elements.each(function(i,n){e.options.onAppear&&e.options.onAppear.call(n,e.$elements.length,e.options),t(n).is("img")&&e._processImg(n)})},t.fn[a]=r,t.fn[a].Constructor=s,t.fn[a].noConflict=function(){return t.fn[a]=l,r},s})},function(t,e,i){/*!
 * @autofe/template v0.2.1
 * (c) 2018 Autohome Inc.
 * Released under the MIT License.
 */
!function(e,i){t.exports=i()}(0,function(){"use strict";var t={};t.escape=function(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=function(t){return e[t]},n="(?:"+["&","<",">",'"',"'","`"].join("|")+")",o=RegExp(n),s=RegExp(n,"g");return t=null==t?"":""+t,o.test(t)?t.replace(s,i):t};var e={"evaluate":/\{%([\s\S]+?)%\}/g,"interpolate":/\{%-([\s\S]+?)%\}/g,"escape":/\{%=([\s\S]+?)%\}/g},i=/(.)^/,n={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},o=/\\|'|\r|\n|\u2028|\u2029/g,s=function(t){return"\\"+n[t]},r=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(n,a){a=r({},e,a);var l=RegExp([(a.escape||i).source,(a.interpolate||i).source,(a.evaluate||i).source].join("|")+"|$","g"),c=0,h="__p+='";n.replace(l,function(t,e,i,r,a){return h+=n.slice(c,a).replace(o,s),c=a+t.length,e?h+="'+\n((__t=("+e+"))==null?'':__$.escape(__t))+\n'":i?h+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(h+="';\n"+r+"\n__p+='"),t}),h+="';\n",a.variable||(h="with(obj||{}){\n"+h+"}\n"),h="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+h+"return __p;\n";var u=void 0;try{u=new Function(a.variable||"obj","__$",h)}catch(d){throw d.source=h,d}var f=function(e){return u.call(this,e,t)};return f.source="function("+(a.variable||"obj")+"){\n"+h+"}",f};if(window.jQuery){var l=window.jQuery;l.fn.template=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this[0],n=i?i.innerHTML:"",o=a(n,e);if(t){var s=o(t);return l(s)}return o}}return a})},,,,function(t,e,i){/*!
 * @autofe/sticky v0.1.0
 * (c) 2018 Autohome Inc.
 * Released under the MIT License.
 */
!function(e,n){t.exports=n(i(0))}(0,function(t){"use strict";function e(i,n){this.options=t.extend({},e.Default,n),this.$elem=t(i),this.$target=t(window),this.$placeholder=null,this.initPosition=null,this.isActive=!1,this.isInit=!1;var o=this.options.offset;"object"!=typeof o&&(o=this.options.offset={"top":o}),null!=this.options.offsetTop&&(o.top=this.options.offsetTop),null!=this.options.offsetBottom&&(o.bottom=this.options.offsetBottom),"function"==typeof o.top&&(o.top=o.top.call(this.$elem)),"function"==typeof o.bottom&&(o.bottom=o.bottom.call(this.$elem)),null==o.top&&null==o.bottom&&(o.top=0),this.$target.on(a.SCROLL,t.proxy(this.checkPosition,this)),this.checkPosition()}function i(i){return this.each(function(){var n=t(this),s=n.data(o);if(!s){s=new e(this,t.extend({},e.Default,n.data(),"object"==typeof i&&i)),n.data(o,s)}if("string"==typeof i){if(void 0===s[i])throw new TypeError('No method named "'+i+'"');s[i]()}})}t=t&&t.hasOwnProperty("default")?t["default"]:t;var n="sticky",o="fe.sticky",s="."+o,r=t.fn[n],a={"TOP":"top"+s,"BOTTOM":"bottom"+s,"OFF":"off"+s,"SCROLL":"scroll"+s};return e.Default={},e.prototype.checkPosition=function(){if(this.$elem.is(":visible")){var e=this.$elem.outerHeight(),i=this.initPosition,n=this.$target.scrollTop(),o=this.$target.height(),s=this.options.offset;!1===this.isInit&&(this.$placeholder=t("<div>").css({"height":e,"display":"none"}),this.$elem.after(this.$placeholder),i=this.initPosition=this.$elem.offset(),this.isInit=!0),null!=s.top&&function(){return n+s.top>i.top}()?this.isActive||(this.$elem.css({"position":"fixed","top":s.top,"bottom":""}),this.$placeholder.show(),this.isActive=!0,this.$elem.trigger(a.TOP)):null!=s.bottom&&function(){return i.top+e>n+o-s.bottom}()?this.isActive||(this.$elem.css({"position":"fixed","top":"","bottom":s.bottom}),this.$placeholder.show(),this.isActive=!0,this.$elem.trigger(a.BOTTOM)):this.isActive&&(this.$elem.css({"position":"","top":"","bottom":""}),this.$placeholder.hide(),this.isActive=!1,this.$elem.trigger(a.OFF))}},t.fn[n]=i,t.fn[n].Constructor=e,t.fn[n].noConflict=function(){return t.fn[n]=r,i},e})},,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var n=i(0),o=(i.n(n),i(1)),s=(i.n(o),i(2)),r=(i.n(s),i(3)),a=(i.n(r),i(4)),l=(i.n(a),i(5)),c=(i.n(l),i(9));i.n(c)}]);