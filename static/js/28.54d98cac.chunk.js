(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[28],{755:function(e,t,r){"use strict";var o,n=r(2),a=r(5),i=r(6),l=r(7),c=r(0),s=r(58),u=r(27),b=r(25),p=r(1),d=(r(18),r(17),r(15),r(10)),j=o=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return Object(a.a)(r,[{key:"clone",value:function(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),r}(u.a);Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],j.prototype,"field",void 0),Object(c.a)([Object(p.b)({type:Number,nonNullable:!0,json:{write:!0}})],j.prototype,"minValue",void 0),Object(c.a)([Object(p.b)({type:Number,nonNullable:!0,json:{write:!0}})],j.prototype,"maxValue",void 0);var f=j=o=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.ColorModulation")],j),O=new s.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),y=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return r}(u.a);Object(c.a)([Object(p.b)({type:O.apiValues,readOnly:!0,nonNullable:!0,json:{type:O.jsonValues,read:!1,write:O.write}})],y.prototype,"type",void 0);var v,h=y=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y),m=r(52),w=v=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return Object(a.a)(r,[{key:"clone",value:function(){return new v({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),r}(h);Object(c.a)([Object(m.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),Object(c.a)([Object(p.b)({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),Object(c.a)([Object(p.b)({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0);var g,T=w=v=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w),V=g=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return Object(a.a)(r,[{key:"clone",value:function(){return new g({scaleFactor:this.scaleFactor})}}]),r}(h);Object(c.a)([Object(m.a)({pointCloudSplatAlgorithm:"splat"})],V.prototype,"type",void 0),Object(c.a)([Object(p.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],V.prototype,"scaleFactor",void 0);var C={key:"type",base:h,typeMap:{"fixed-size":T,splat:V=g=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],V)}},S=Object(s.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),k=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var o;return Object(n.a)(this,r),(o=t.call(this,e)).type=void 0,o.pointSizeAlgorithm=null,o.colorModulation=null,o.pointsPerInch=10,o}return Object(a.a)(r,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:Object(b.a)(this.pointSizeAlgorithm),colorModulation:Object(b.a)(this.colorModulation),pointsPerInch:Object(b.a)(this.pointsPerInch)}}}]),r}(u.a);Object(c.a)([Object(p.b)({type:S.apiValues,readOnly:!0,nonNullable:!0,json:{type:S.jsonValues,read:!1,write:S.write}})],k.prototype,"type",void 0),Object(c.a)([Object(p.b)({types:C,json:{write:!0}})],k.prototype,"pointSizeAlgorithm",void 0),Object(c.a)([Object(p.b)({type:f,json:{write:!0}})],k.prototype,"colorModulation",void 0),Object(c.a)([Object(p.b)({json:{write:!0},nonNullable:!0,type:Number})],k.prototype,"pointsPerInch",void 0),k=Object(c.a)([Object(d.a)("esri.renderers.PointCloudRenderer")],k),(k||(k={})).fieldTransformTypeKebabDict=new s.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var x=k;t.a=x},864:function(e,t,r){"use strict";var o,n=r(14),a=r(2),i=r(5),l=r(6),c=r(7),s=r(0),u=r(25),b=r(1),p=(r(18),r(17),r(15),r(52)),d=r(10),j=r(755),f=r(371),O=r(605),y=o=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).type="point-cloud-stretch",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.stops=null,o}return Object(i.a)(r,[{key:"clone",value:function(){return new o(Object(n.a)(Object(n.a)({},this.cloneProperties()),{},{field:Object(u.a)(this.field),fieldTransformType:Object(u.a)(this.fieldTransformType),stops:Object(u.a)(this.stops),legendOptions:Object(u.a)(this.legendOptions)}))}}]),r}(j.a);Object(s.a)([Object(p.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],y.prototype,"type",void 0),Object(s.a)([Object(b.b)({json:{write:!0},type:String})],y.prototype,"field",void 0),Object(s.a)([Object(b.b)({type:f.a,json:{write:!0}})],y.prototype,"legendOptions",void 0),Object(s.a)([Object(b.b)({type:j.a.fieldTransformTypeKebabDict.apiValues,json:{type:j.a.fieldTransformTypeKebabDict.jsonValues,read:j.a.fieldTransformTypeKebabDict.read,write:j.a.fieldTransformTypeKebabDict.write}})],y.prototype,"fieldTransformType",void 0),Object(s.a)([Object(b.b)({type:[O.a],json:{write:!0}})],y.prototype,"stops",void 0);var v=y=o=Object(s.a)([Object(d.a)("esri.renderers.PointCloudStretchRenderer")],y);t.a=v},912:function(e,t,r){"use strict";var o,n=r(14),a=r(2),i=r(5),l=r(6),c=r(7),s=r(0),u=r(25),b=r(1),p=r(18),d=(r(17),r(15),r(52)),j=r(10),f=r(755),O=r(371),y=r(49),v=r(27),h=o=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(u.a)(this.color)})}}]),r}(v.a);Object(s.a)([Object(b.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(s.a)([Object(b.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(s.a)([Object(b.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),Object(s.a)([Object(b.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),Object(s.a)([Object(b.b)({type:y.a,json:{type:[p.a],write:!0}})],h.prototype,"color",void 0);var m,w=h=o=Object(s.a)([Object(j.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h),g=m=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).type="point-cloud-class-breaks",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}return Object(i.a)(r,[{key:"clone",value:function(){return new m(Object(n.a)(Object(n.a)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(u.a)(this.colorClassBreakInfos),legendOptions:Object(u.a)(this.legendOptions)}))}}]),r}(f.a);Object(s.a)([Object(d.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],g.prototype,"type",void 0),Object(s.a)([Object(b.b)({json:{write:!0},type:String})],g.prototype,"field",void 0),Object(s.a)([Object(b.b)({type:O.a,json:{write:!0}})],g.prototype,"legendOptions",void 0),Object(s.a)([Object(b.b)({type:f.a.fieldTransformTypeKebabDict.apiValues,json:{type:f.a.fieldTransformTypeKebabDict.jsonValues,read:f.a.fieldTransformTypeKebabDict.read,write:f.a.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),Object(s.a)([Object(b.b)({type:[w],json:{write:!0}})],g.prototype,"colorClassBreakInfos",void 0);var T=g=m=Object(s.a)([Object(j.a)("esri.renderers.PointCloudClassBreaksRenderer")],g);t.a=T},913:function(e,t,r){"use strict";var o,n=r(14),a=r(2),i=r(5),l=r(6),c=r(7),s=r(0),u=r(25),b=r(1),p=r(18),d=(r(17),r(15),r(52)),j=r(10),f=r(755),O=r(371),y=r(49),v=r(27),h=o=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new o({description:this.description,label:this.label,values:Object(u.a)(this.values),color:Object(u.a)(this.color)})}}]),r}(v.a);Object(s.a)([Object(b.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(s.a)([Object(b.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(s.a)([Object(b.b)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),Object(s.a)([Object(b.b)({type:y.a,json:{type:[p.a],write:!0}})],h.prototype,"color",void 0);var m,w=h=o=Object(s.a)([Object(j.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h),g=m=function(e){Object(l.a)(r,e);var t=Object(c.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).type="point-cloud-unique-value",o.field=null,o.fieldTransformType=null,o.colorUniqueValueInfos=null,o.legendOptions=null,o}return Object(i.a)(r,[{key:"clone",value:function(){return new m(Object(n.a)(Object(n.a)({},this.cloneProperties()),{},{field:Object(u.a)(this.field),fieldTransformType:Object(u.a)(this.fieldTransformType),colorUniqueValueInfos:Object(u.a)(this.colorUniqueValueInfos),legendOptions:Object(u.a)(this.legendOptions)}))}}]),r}(f.a);Object(s.a)([Object(d.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],g.prototype,"type",void 0),Object(s.a)([Object(b.b)({json:{write:!0},type:String})],g.prototype,"field",void 0),Object(s.a)([Object(b.b)({type:f.a.fieldTransformTypeKebabDict.apiValues,json:{type:f.a.fieldTransformTypeKebabDict.jsonValues,read:f.a.fieldTransformTypeKebabDict.read,write:f.a.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),Object(s.a)([Object(b.b)({type:[w],json:{write:!0}})],g.prototype,"colorUniqueValueInfos",void 0),Object(s.a)([Object(b.b)({type:O.a,json:{write:!0}})],g.prototype,"legendOptions",void 0);var T=g=m=Object(s.a)([Object(j.a)("esri.renderers.PointCloudUniqueValueRenderer")],g);t.a=T},925:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return j})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return b}));var o=r(13),n=r(3),a=r(912),i=r(864),l=r(913),c=r(749),s=r(780);function u(e,t,r,o){var n=e.rendererJSON,c=e.isRGBRenderer,s=null,u=null;if(t&&c)s=t;else if(t&&"pointCloudUniqueValueRenderer"===n.type){var b=(u=l.a.fromJSON(n)).colorUniqueValueInfos;s=new Uint8Array(3*o);for(var p=f(u.fieldTransformType),d=0;d<o;d++)for(var j=(p?p(t[d]):t[d])+"",O=0;O<b.length;O++)if(b[O].values.indexOf(j)>=0){s[3*d]=b[O].color.r,s[3*d+1]=b[O].color.g,s[3*d+2]=b[O].color.b;break}}else if(t&&"pointCloudStretchRenderer"===n.type){var y=(u=i.a.fromJSON(n)).stops;s=new Uint8Array(3*o);for(var v=f(u.fieldTransformType),h=0;h<o;h++){var m=v?v(t[h]):t[h],w=y.length-1;if(m<y[0].value)s[3*h]=y[0].color.r,s[3*h+1]=y[0].color.g,s[3*h+2]=y[0].color.b;else if(m>=y[w].value)s[3*h]=y[w].color.r,s[3*h+1]=y[w].color.g,s[3*h+2]=y[w].color.b;else for(var g=1;g<y.length;g++)if(m<y[g].value){var T=(m-y[g-1].value)/(y[g].value-y[g-1].value);s[3*h]=y[g].color.r*T+y[g-1].color.r*(1-T),s[3*h+1]=y[g].color.g*T+y[g-1].color.g*(1-T),s[3*h+2]=y[g].color.b*T+y[g-1].color.b*(1-T);break}}}else if(t&&"pointCloudClassBreaksRenderer"===n.type){var V=(u=a.a.fromJSON(n)).colorClassBreakInfos;s=new Uint8Array(3*o);for(var C=f(u.fieldTransformType),S=0;S<o;S++)for(var k=C?C(t[S]):t[S],x=0;x<V.length;x++)if(k>=V[x].minValue&&k<=V[x].maxValue){s[3*S]=V[x].color.r,s[3*S+1]=V[x].color.g,s[3*S+2]=V[x].color.b;break}}else{s=new Uint8Array(3*o);for(var z=0;z<s.length;z++)s[z]=255}if(r&&u&&u.colorModulation)for(var R=u.colorModulation.minValue,A=u.colorModulation.maxValue,I=0;I<o;I++){var N=r[I],B=N>=A?1:N<=R?.3:.3+.7*(N-R)/(A-R);s[3*I]=B*s[3*I],s[3*I+1]=B*s[3*I+1],s[3*I+2]=B*s[3*I+2]}return s}function b(e,t){if(null==e.encoding||""===e.encoding){var r=Object(c.b)(t,e);if(Object(n.i)(r.vertexAttributes.position))return;for(var o=Object(c.c)(t,r.vertexAttributes.position),a=r.header.fields,i=[a.offsetX,a.offsetY,a.offsetZ],l=[a.scaleX,a.scaleY,a.scaleZ],u=o.length/3,b=new Float64Array(3*u),p=0;p<u;p++)b[3*p]=o[3*p]*l[0]+i[0],b[3*p+1]=o[3*p+1]*l[1]+i[1],b[3*p+2]=o[3*p+2]*l[2]+i[2];return b}if("lepcc-xyz"===e.encoding)return Object(s.c)(t).result}function p(e,t,r){return Object(n.j)(e)&&e.attributeInfo.useElevation?d(t,r):Object(n.j)(e)?Object(c.d)(e.attributeInfo.storageInfo,e.buffer,r):null}function d(e,t){for(var r=new Float64Array(t),o=0;o<t;o++)r[o]=e[3*o+2];return r}function j(e,t,r,n,a){for(var i=e.length/3,l=0,c=0;c<i;c++){for(var s=!0,u=0;u<n.length&&s;u++){var b=n[u].filterJSON,p=a[u].values[c];switch(b.type){case"pointCloudValueFilter":var d="exclude"===b.mode;-1!==b.values.indexOf(p)===d&&(s=!1);break;case"pointCloudBitfieldFilter":var j=O(b.requiredSetBits),f=O(b.requiredClearBits);(p&j)===j&&0==(p&f)||(s=!1);break;case"pointCloudReturnFilter":var y,v=15&p,h=p>>>4&15,m=h>1,w=1===v,g=v===h,T=!1,V=Object(o.a)(b.includedReturns);try{for(V.s();!(y=V.n()).done;){var C=y.value;if("last"===C&&g||"firstOfMany"===C&&w&&m||"lastOfMany"===C&&g&&m||"single"===C&&!m){T=!0;break}}}catch(S){V.e(S)}finally{V.f()}T||(s=!1)}}s&&(r[l]=c,e[3*l]=e[3*c],e[3*l+1]=e[3*c+1],e[3*l+2]=e[3*c+2],t[3*l]=t[3*c],t[3*l+1]=t[3*c+1],t[3*l+2]=t[3*c+2],l++)}return l}function f(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function O(e){var t,r=0,n=Object(o.a)(e||[]);try{for(n.s();!(t=n.n()).done;){r|=1<<t.value}}catch(a){n.e(a)}finally{n.f()}return r}}}]);
//# sourceMappingURL=28.54d98cac.chunk.js.map