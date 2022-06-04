"use strict";!function(g){function t(){}function s(t,s){var e,i;this.element=t,this.$el=g(t),this.settings=g.extend({},r,s),e=this.$el.data("rating")||this.settings.initialRating,i=((this.settings.forceRoundUp?Math.ceil:Math.round)(2*e)/2).toFixed(1),this._state={rating:i},this._uid=Math.floor(999*Math.random()),s.starGradient||this.settings.useGradient||(this.settings.starGradient.start=this.settings.starGradient.end=this.settings.activeColor),this._defaults=r,this._name=a,this.init()}var a="starRating",r={totalStars:5,useFullStars:!1,starShape:"straight",emptyColor:"lightgray",hoverColor:"orange",activeColor:"gold",ratedColor:"orange",useGradient:!0,readOnly:!1,disableAfterRate:!0,baseUrl:!1,starGradient:{start:"#FEF7CD",end:"#FF9511"},strokeWidth:4,strokeColor:"black",initialRating:0,starSize:40,callback:t,onHover:t,onLeave:t},e={init:function(){this.renderMarkup(),this.addListeners(),this.initRating()},addListeners:function(){this.settings.readOnly||(this.$stars.on("mouseover",this.hoverRating.bind(this)),this.$stars.on("mouseout",this.restoreState.bind(this)),this.$stars.on("click",this.handleRating.bind(this)))},hoverRating:function(t){var s=this.getIndex(t);this.paintStars(s,"hovered"),this.settings.onHover(s+1,this._state.rating,this.$el)},handleRating:function(t){var s=this.getIndex(t)+1;this.applyRating(s,this.$el),this.executeCallback(s,this.$el),this.settings.disableAfterRate&&this.$stars.off()},applyRating:function(t){var s=t-1;this.paintStars(s,"rated"),this._state.rating=1+s,this._state.rated=!0},restoreState:function(t){var s=this.getIndex(t),e=this._state.rating||-1,i=this._state.rated?"rated":"active";this.paintStars(e-1,i),this.settings.onLeave(s+1,this._state.rating,this.$el)},getIndex:function(t){var s=g(t.currentTarget),e=s.width(),i=g(t.target).attr("data-side"),a=this.settings.minRating,i=i||this.getOffsetByPixel(t,s,e);i=this.settings.useFullStars?"right":i;var r=(r=s.index()-("left"===i?.5:0))<.5&&t.offsetX<e/4?-1:r;return r=a&&a<=this.settings.totalStars&&r<a?a-1:r},getOffsetByPixel:function(t,s,e){return t.pageX-s.offset().left<=e/2&&!this.settings.useFullStars?"left":"right"},initRating:function(){this.paintStars(this._state.rating-1,"active")},paintStars:function(a,r){var n,o,l,h,d=this.settings;g.each(this.$stars,function(t,s){n=g(s).find('[data-side="left"]'),o=g(s).find('[data-side="right"]'),l=h=t<=a?r:"empty",l=t-a==.5?r:l,n.attr("class","svg-"+l+"-"+this._uid),o.attr("class","svg-"+h+"-"+this._uid);var e=0<=a?Math.ceil(a):0,i=d.ratedColors&&d.ratedColors.length&&d.ratedColors[e]?d.ratedColors[e]:this._defaults.ratedColor;"rated"===r&&-1<a&&((t<=Math.ceil(a)||t<1&&a<0)&&n.attr("style","fill:"+i),t<=a&&o.attr("style","fill:"+i))}.bind(this))},renderMarkup:function(){for(var t=this.settings,s=t.baseUrl?location.href.split("#")[0]:"",e='<div class="jq-star" style="width:'+t.starSize+"px;  height:"+t.starSize+'px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" '+this.getSvgDimensions(t.starShape)+" stroke-width:"+t.strokeWidth+'px;" xml:space="preserve"><style type="text/css">.svg-empty-'+this._uid+"{fill:url("+s+"#"+this._uid+"_SVGID_1_);}.svg-hovered-"+this._uid+"{fill:url("+s+"#"+this._uid+"_SVGID_2_);}.svg-active-"+this._uid+"{fill:url("+s+"#"+this._uid+"_SVGID_3_);}.svg-rated-"+this._uid+"{fill:"+t.ratedColor+";}</style>"+this.getLinearGradient(this._uid+"_SVGID_1_",t.emptyColor,t.emptyColor,t.starShape)+this.getLinearGradient(this._uid+"_SVGID_2_",t.hoverColor,t.hoverColor,t.starShape)+this.getLinearGradient(this._uid+"_SVGID_3_",t.starGradient.start,t.starGradient.end,t.starShape)+this.getVectorPath(this._uid,{starShape:t.starShape,strokeWidth:t.strokeWidth,strokeColor:t.strokeColor})+"</svg></div>",i="",a=0;a<t.totalStars;a++)i+=e;this.$el.append(i),this.$stars=this.$el.find(".jq-star")},getVectorPath:function(t,s){return"rounded"===s.starShape?this.getRoundedVectorPath(t,s):this.getSpikeVectorPath(t,s)},getSpikeVectorPath:function(t,s){return'<polygon data-side="center" class="svg-empty-'+t+'" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: '+s.strokeColor+';" /><polygon data-side="left" class="svg-empty-'+t+'" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;" /><polygon data-side="right" class="svg-empty-'+t+'" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;" />'},getRoundedVectorPath:function(t,s){var e="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z";return'<path data-side="center" class="svg-empty-'+t+'" d="'+e+'" style="stroke: '+s.strokeColor+'; fill: transparent; " /><path data-side="right" class="svg-empty-'+t+'" d="'+e+'" style="stroke-opacity: 0;" /><path data-side="left" class="svg-empty-'+t+'" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: '+s.strokeColor+'; stroke-opacity: 0;" />'},getSvgDimensions:function(t){return"rounded"===t?'width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2;':'x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305;'},getLinearGradient:function(t,s,e,i){return'<linearGradient id="'+t+'" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="'+("rounded"===i?500:250)+'"><stop  offset="0" style="stop-color:'+s+'"/><stop  offset="1" style="stop-color:'+e+'"/> </linearGradient>'},executeCallback:function(t,s){(0,this.settings.callback)(t,s)}},i={unload:function(){var t="plugin_"+a,s=g(this);s.data(t).$stars.off(),s.removeData(t).remove()},setRating:function(t,s){var e=g(this).data("plugin_starRating");t>e.settings.totalStars||t<0||(s&&(t=Math.round(t)),e.applyRating(t))},getRating:function(){return g(this).data("plugin_starRating")._state.rating},resize:function(s){var t=g(this).data("plugin_starRating").$stars;s<=1||200<s?console.error("star size out of bounds"):(t=Array.prototype.slice.call(t)).forEach(function(t){g(t).css({width:s+"px",height:s+"px"})})},setReadOnly:function(t){var s=g(this).data("plugin_starRating");!0===t?s.$stars.off("mouseover mouseout click"):(s.settings.readOnly=!1,s.addListeners())}};g.extend(s.prototype,e),g.fn[a]=function(t){if(!g.isPlainObject(t)){if(i.hasOwnProperty(t))return i[t].apply(this,Array.prototype.slice.call(arguments,1));g.error("Method "+t+" does not exist on "+a+".js")}return this.each(function(){g.data(this,"plugin_"+a)||g.data(this,"plugin_"+a,new s(this,t))})}}(jQuery,(window,document));