(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[161],{967:function(e,t,r){"use strict";r.r(t);var a=r(13),n=r(8),l=r.n(n),i=r(16),o=r(50),s=r(14),u=r(2),c=r(5),b=r(45),y=r(42),f=r(6),p=r(7),v=r(0),O=(r(126),r(53)),d=r(280),j=r(3),h=r(567),m=r(23),g=r(39),k=r(1),S=(r(17),r(18)),w=(r(15),r(48)),E=r(10),x=r(44),_=r(55),P=r(368),I=r(573),L=r(569),F=r(568),G=r(575),M=r(570),C=r(188),R=r(82),T=r(27),J=r(180),N=r(147),K=r(35),z=r(64),A=r(123),H=r(129),W=(r(272),r(99)),V=r(25),q=r(34),D=r(455),U=(r(451),r(216),{esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"});function B(e){var t=e.folders||[],r=t.slice(),a=new Map,n=new Map,l=new Map,i=new Map,o=new Map,s={esriGeometryPoint:n,esriGeometryPolyline:l,esriGeometryPolygon:i};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=Object(V.a)(e);t.featureSet.features=[];var r=e.featureSet.geometryType;a.set(r,t);var o=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?Y(n,o,e.featureSet.features):"esriGeometryPolyline"===r?Y(l,o,e.featureSet.features):"esriGeometryPolygon"===r&&Y(i,o,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){o.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(a){var n=function(e,t,r){var a=function(e,t){var r;return t.some((function(t){return t.id===e&&(r=t,!0)})),r}(e,r);return a&&(a.parentFolderId=t,a.networkLink=a),a}(a,t.id,e.networkLinks);n&&r.push(n)}))})),r.forEach((function(e){e.featureInfos&&(e.points=Object(V.a)(a.get("esriGeometryPoint")),e.polylines=Object(V.a)(a.get("esriGeometryPolyline")),e.polygons=Object(V.a)(a.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((function(t){switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var r=s[t.type].get(t.id);r&&e[U[t.type]].featureSet.features.push(r);break;case"GroundOverlay":var a=o.get(t.id);a&&e.mapImages.push(a)}})),e.fullExtent=Z([e]))}));var u=Z(r);return{folders:t,sublayers:r,extent:u}}function Q(e,t,r,a){var n=H.b&&H.b.findCredential(e);e=Object(g.e)(e,{token:n&&n.token});var l=A.a.kmlServiceUrl;return Object(W.default)(l,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:a})}function X(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=[],l={},i=t.sublayers,o=t.folders.map((function(e){return e.id}));return i.forEach((function(t){var i=new e;if(r?i.read(t,r):i.read(t),a.length&&o.indexOf(i.id)>-1&&(i.visible=-1!==a.indexOf(i.id)),l[t.id]=i,null!=t.parentFolderId&&-1!==t.parentFolderId){var s=l[t.parentFolderId];s.sublayers||(s.sublayers=[]),s.sublayers.unshift(i)}else n.unshift(i)})),n}function Y(e,t,r){r.forEach((function(r){e.set(r.attributes[t],r)}))}function Z(e){var t,r=Object(q.h)(),n=Object(q.h)(q.a),l=Object(a.a)(e);try{for(l.s();!(t=l.n()).done;){var i=t.value;if(i.polygons&&i.polygons.featureSet&&i.polygons.featureSet.features){var o,s=Object(a.a)(i.polygons.featureSet.features);try{for(s.s();!(o=s.n()).done;){var u=o.value;Object(D.b)(r,u.geometry),Object(q.m)(n,r)}}catch(h){s.e(h)}finally{s.f()}}if(i.polylines&&i.polylines.featureSet&&i.polylines.featureSet.features){var c,b=Object(a.a)(i.polylines.featureSet.features);try{for(b.s();!(c=b.n()).done;){var y=c.value;Object(D.b)(r,y.geometry),Object(q.m)(n,r)}}catch(h){b.e(h)}finally{b.f()}}if(i.points&&i.points.featureSet&&i.points.featureSet.features){var f,p=Object(a.a)(i.points.featureSet.features);try{for(p.s();!(f=p.n()).done;){var v=f.value;Object(D.b)(r,v.geometry),Object(q.m)(n,r)}}catch(h){p.e(h)}finally{p.f()}}if(i.mapImages){var O,d=Object(a.a)(i.mapImages);try{for(d.s();!(O=d.n()).done;){var j=O.value;Object(D.b)(r,j.extent),Object(q.m)(n,r)}}catch(h){d.e(h)}finally{d.f()}}}}catch(h){l.e(h)}finally{l.f()}return Object(q.l)(n,q.a)?null:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:_.a.WGS84}}var $,ee=r(66),te=$=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments))._sublayersHandles=null,e.description=null,e.id=null,e.networkLink=null,e.title=null,e.sourceJSON=null,e.fullExtent=null,e}return Object(c.a)(r,[{key:"initialize",value:function(){var e=this;Object(K.j)(this,"networkLink").then((function(){return Object(K.l)(e,"visible")})).then((function(){return e.load()}))}},{key:"load",value:function(e){var t=this;if(this.networkLink&&!this.networkLink.viewFormat){var r=Object(j.j)(e)?e.signal:null,a=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=Z(e.sublayers);t.fullExtent=ee.a.fromJSON(r),t.sourceJSON=e;var a=Object(S.m)(O.a.ofType($),X($,e));t.sublayers?t.sublayers.addMany(a):t.sublayers=a,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(a),Promise.resolve(this)}}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return Object(S.m)(O.a.ofType($),e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,t){return!!t.visibility}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"_fetchService",value:function(e,t){return Q(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return B(e.data)}))}}]),r}(R.a.EventedMixin(Object(T.b)(J.a)));Object(v.a)([Object(k.b)()],te.prototype,"description",void 0),Object(v.a)([Object(k.b)()],te.prototype,"id",void 0),Object(v.a)([Object(k.b)({readOnly:!0,value:null})],te.prototype,"networkLink",void 0),Object(v.a)([Object(k.b)({json:{write:{allowNull:!0}}})],te.prototype,"parent",void 0),Object(v.a)([Object(k.b)({value:null,json:{write:{allowNull:!0}}})],te.prototype,"sublayers",null),Object(v.a)([Object(z.a)("sublayers")],te.prototype,"castSublayers",null),Object(v.a)([Object(k.b)({value:null,json:{read:{source:"name",reader:function(e){return Object(N.d)(e)}}}})],te.prototype,"title",void 0),Object(v.a)([Object(k.b)({value:!0})],te.prototype,"visible",null),Object(v.a)([Object(w.a)("visible",["visibility"])],te.prototype,"readVisible",null),Object(v.a)([Object(k.b)()],te.prototype,"sourceJSON",void 0),Object(v.a)([Object(k.b)({value:null})],te.prototype,"layer",null),Object(v.a)([Object(k.b)({type:ee.a})],te.prototype,"fullExtent",void 0);var re=te=$=Object(v.a)([Object(E.a)("esri.layers.support.KMLSublayer")],te),ae=["kml","xml"],ne=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n)))._visibleFolders=[],e.allSublayers=new d.a({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=_.a.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return Object(c.a)(r,[{key:"initialize",value:function(){var e=this;this.watch("sublayers",(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),!0),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,t){this._visibleFolders=t.visibleFolders}},{key:"readSublayers",value:function(e,t,r){return X(re,t,r,this._visibleFolders)}},{key:"writeSublayers",value:function(e,t){for(var r=[],a=e.toArray();a.length;){var n=a[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&a.push.apply(a,Object(o.a)(n.sublayers.toArray()))),a.shift()}t.visibleFolders=r}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(g.k)(this.url,ae)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var t=this,r=Object(j.j)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(m.w).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"destroy",value:function(){Object(b.a)(Object(y.a)(r.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:function(){var e=Object(i.a)(l.a.mark((function e(t){var r,a,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){return n.resourceInfo?{ssl:!1,data:n.resourceInfo}:Q(n.url,n.outSpatialReference,n.refreshInterval,t)}));case 2:r=e.sent,(a=B(r.data))&&this.read(a,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_recomputeFullExtent",value:function(){var e=null;this.extent&&(e=this.extent.clone());return function t(r){if(r.sublayers){var n,l=Object(a.a)(r.sublayers.items);try{for(l.s();!(n=l.n()).done;){var i=n.value;t(i),i.visible&&i.fullExtent&&(e?e.union(i.fullExtent):e=i.fullExtent.clone())}}catch(o){l.e(o)}finally{l.f()}}}(this),e}}]),r}(Object(I.a)(Object(G.a)(Object(M.a)(Object(L.a)(Object(F.a)(Object(h.a)(P.a)))))));Object(v.a)([Object(k.b)({readOnly:!0})],ne.prototype,"allSublayers",void 0),Object(v.a)([Object(k.b)({type:_.a})],ne.prototype,"outSpatialReference",void 0),Object(v.a)([Object(k.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ne.prototype,"path",void 0),Object(v.a)([Object(k.b)({readOnly:!0,json:{read:!1,write:!1}})],ne.prototype,"legendEnabled",void 0),Object(v.a)([Object(k.b)({type:["show","hide","hide-children"]})],ne.prototype,"listMode",void 0),Object(v.a)([Object(k.b)({type:["KML"]})],ne.prototype,"operationalLayerType",void 0),Object(v.a)([Object(k.b)({})],ne.prototype,"resourceInfo",void 0),Object(v.a)([Object(k.b)({type:O.a.ofType(re),json:{write:{ignoreOrigin:!0}}})],ne.prototype,"sublayers",void 0),Object(v.a)([Object(w.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],ne.prototype,"readSublayersFromItemOrWebMap",null),Object(v.a)([Object(w.a)("service","sublayers",["sublayers"])],ne.prototype,"readSublayers",null),Object(v.a)([Object(x.a)("sublayers")],ne.prototype,"writeSublayers",null),Object(v.a)([Object(k.b)({readOnly:!0,json:{read:!1}})],ne.prototype,"type",void 0),Object(v.a)([Object(k.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],ne.prototype,"title",null),Object(v.a)([Object(k.b)(C.n)],ne.prototype,"url",void 0),Object(v.a)([Object(k.b)({readOnly:!0})],ne.prototype,"visibleSublayers",null),Object(v.a)([Object(k.b)({type:ee.a})],ne.prototype,"extent",void 0),Object(v.a)([Object(k.b)()],ne.prototype,"fullExtent",null);var le=ne=Object(v.a)([Object(E.a)("esri.layers.KMLLayer")],ne);t.default=le}}]);
//# sourceMappingURL=161.94f71312.chunk.js.map