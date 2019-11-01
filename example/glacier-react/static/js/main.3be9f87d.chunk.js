(window["webpackJsonpreact-js"]=window["webpackJsonpreact-js"]||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var i=t(0),r=t.n(i),n=t(3),o=t.n(n),c=(t(15),t(4)),l=t(5),s=t(8),h=t(6),p=t(9),g=(t(16),t(1)),d=t.n(g),u=t(7),m=t.n(u),f={fill:["fill-opacity"],line:["line-opacity"],circle:["circle-opacity","circle-stroke-opacity"],symbol:["icon-opacity","text-opacity"],raster:["raster-opacity"],"fill-extrusion":["fill-extrusion-opacity"]},y={left:"lefty",center:"centered",right:"righty"},b=function(e){var a=-1!==e.indexOf("?");return{url:e+(a?"&pluginName=journalismScrollytelling":"?pluginName=journalismScrollytelling")}};function k(e){var a=e.id,t=e.theme,i=e.title,n=e.image,o=e.description,c=a===e.currentChapterID?"step active":"step";return r.a.createElement("div",{id:a,className:c},r.a.createElement("div",{className:t},i&&r.a.createElement("h3",{className:"title"},i),n&&r.a.createElement("img",{src:n}),o&&r.a.createElement("p",null,o)))}var w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(h.a)(a).call(this,e))).state={currentChapter:e.chapters[0]},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.chapters[0].location;d.a.accessToken=e.accessToken;var t=new d.a.Map({container:this.mapContainer,style:e.style,center:a.center,zoom:a.zoom,pitch:a.pitch,bearing:a.bearing,transformRequest:b}),i=new d.a.Marker;function r(e){(function(e){var a=t.getLayer(e).type;return f[a]})(e.layer).forEach(function(a){t.setPaintProperty(e.layer,a,e.opacity)})}e.showMarkers&&i.setLngLat(a.center).addTo(t);var n=this.setState.bind(this);t.on("load",function(){m()().setup({step:".step",offset:.5,progress:!0}).onStepEnter(function(a){var o=e.chapters.find(function(e){return e.id===a.element.id});n({currentChapter:o}),t.flyTo(o.location),e.showMarkers&&i.setLngLat(o.location.center),o.onChapterEnter.length>0&&o.onChapterEnter.forEach(r)}).onStepExit(function(a){var t=e.chapters.find(function(e){return e.id===a.element.id});t.onChapterExit.length>0&&t.onChapterExit.forEach(r)})})}},{key:"render",value:function(){var e=this,a=this.props,t=a.theme,i=this.state.currentChapter.id;return r.a.createElement("div",null,r.a.createElement("div",{ref:function(a){return e.mapContainer=a},className:"absolute top right left bottom"}),r.a.createElement("div",{id:"story"},a.title&&r.a.createElement("div",{id:"header",className:t},r.a.createElement("h1",null,a.title),a.subtitle&&r.a.createElement("h2",null,a.subtitle),a.byline&&r.a.createElement("p",null,a.byline)),r.a.createElement("div",{id:"features",className:y[a.alignment]},a.chapters.map(function(e){return r.a.createElement(k,Object.assign({key:e.id,theme:t},e,{currentChapterID:i}))})),a.footer&&r.a.createElement("div",{id:"footer",className:t},r.a.createElement("p",null,a.footer))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v={style:"mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d",accessToken:"pk.eyJ1IjoiYnJhbmlnYW4iLCJhIjoiY2p4NHVmenFrMDBnMDRibGJveXU2NjM3NiJ9.dXHy99Lrq0GNhNBvgjdWBw",showMarkers:!1,alignment:"left",theme:"dark",title:"Glaciers of Glacier National Park",subtitle:"Change in coverage from 1998 to 2015",byline:"",footer:'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',chapters:[{id:"glacier-np",title:"Glacier National Park Glaciers",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg",description:"Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age. These glaciers have largely disappeared over the last 12,000 years. Evidence of widespread glacial action is found throughout the park in the form of U-shaped valleys, cirques, ar\xeates, and large outflow lakes radiating like fingers from the base of the highest peaks. Since the end of the ice ages, various warming and cooling trends have occurred. The last recent cooling trend was during the Little Ice Age, which took place approximately between 1550 and 1850. During the Little Ice Age, the glaciers in the park expanded and advanced, although to nowhere near as great an extent as they had during the Ice Age.",location:{center:[-113.91666,48.66451],zoom:8,pitch:0,bearing:0},onChapterEnter:[{layer:"gnpglaciers-1998",opacity:.25},{layer:"glaciernp-boundary",opacity:.25}],onChapterExit:[{layer:"glaciernp-boundary",opacity:0}]},{id:"harrison1998",title:"Harrison Glacier, 1998",image:"",description:"Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park. Compared to many of the vanishing glaciers in Glacier National Park, Harrison Glacier has a much higher altitude accumulation zone (approximately 9,000 feet (2,700 m)) which has allowed it to maintain some equilibrium in its glacier mass balance.",location:{center:[-113.72917,48.58938],zoom:12.92,pitch:39.5,bearing:36},onChapterEnter:[],onChapterExit:[]},{id:"harrison2015",title:"Harrison Glacier, 2015",image:"",description:"Between 1998 and 2015, Harrison Glacier lost 169 acres of surface area (about 37%).",location:{center:[-113.72917,48.58938],zoom:12.92,pitch:39.5,bearing:36},onChapterEnter:[{layer:"gnpglaciers-2015",opacity:.25}],onChapterExit:[{layer:"gnpglaciers-2015",opacity:0}]},{id:"blackfoot1998",title:"Blackfoot Glacier, 1998",image:"",description:"Blackfoot Glacier is the second largest of the remaining 25 glaciers in Glacier National Park, Montana. Blackfoot Glacier is just to the north of Blackfoot Mountain and near Jackson Glacier. When first documented in 1850, the glacier also included the now separate Jackson Glacier and together, they covered 1,875 acres (7.59 km2). In 1850, there were an estimated 150 glaciers in the park. Glaciologists have stated that by the year 2030, all the glaciers in the park may disappear.",location:{center:[-113.66573,48.59181],zoom:12.92,pitch:51.5,bearing:-26.4},onChapterEnter:[],onChapterExit:[]},{id:"blackfoot2015",title:"Blackfoot Glacier, 2015",image:"",description:"Between 1998 and 2015, Blackfoot Glacier lost 31 acres of surface area (about 8%).",location:{center:[-113.66573,48.59181],zoom:12.92,pitch:51.5,bearing:-26.4},onChapterEnter:[{layer:"gnpglaciers-2015",opacity:.25}],onChapterExit:[{layer:"gnpglaciers-2015",opacity:0}]},{id:"agassiz1998",title:"Agassiz Glacier, 1998",image:"",description:"Agassiz Glacier is in Glacier National Park in the U.S. state of Montana. It is named after Louis Agassiz, a Swiss-American glaciologist. The glacier is situated in a cirque to the southeast of Kintla Peak west of the Continental Divide. Agassiz Glacier is one of several glaciers that have been selected for monitoring by the U.S. Geological Survey's Glacier Monitoring Research program, which is researching changes to the mass balance of glaciers in and surrounding Glacier National Park.",location:{center:[-114.15881,48.93439],zoom:13.51,pitch:41,bearing:78.33},onChapterEnter:[],onChapterExit:[]},{id:"agassiz2015",title:"Agassiz Glacier, 2015",image:"",description:"Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).",location:{center:[-114.15881,48.93439],zoom:13.51,pitch:41,bearing:78.33},onChapterEnter:[{layer:"gnpglaciers-2015",opacity:.25}],onChapterExit:[{layer:"gnpglaciers-2015",opacity:0}]},{id:"rainbow1998",title:"Rainbow Glacier, 1998",image:"",description:"Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.",location:{center:[-114.08659,48.88039],zoom:13.09,pitch:50,bearing:-53.6},onChapterEnter:[],onChapterExit:[]},{id:"rainbow2015",title:"Rainbow Glacier, 2015",image:"",description:"Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).",location:{center:[-114.08659,48.88039],zoom:13.09,pitch:50,bearing:-53.6},onChapterEnter:[{layer:"gnpglaciers-2015",opacity:.25}],onChapterExit:[{layer:"gnpglaciers-2015",opacity:0}]},{id:"kintla1998",title:"Kintla Glacier, 1998",image:"",description:"Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.",location:{center:[-114.18755,48.9288],zoom:13.09,pitch:48.5,bearing:164},onChapterEnter:[],onChapterExit:[]},{id:"kintla2015",title:"Kintla Glacier, 2015",image:"",description:"Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).",location:{center:[-114.18755,48.9288],zoom:13.09,pitch:48.5,bearing:164},onChapterEnter:[{layer:"gnpglaciers-2015",opacity:.25}],onChapterExit:[{layer:"gnpglaciers-2015",opacity:0}]},{id:"sperry1998",title:"Sperry Glacier, 1998",image:"",description:"Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier \u2014 like all the glaciers in the park today \u2014 is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.",location:{center:[-113.75672,48.62433],zoom:13.68,pitch:34.5,bearing:106.4},onChapterEnter:[],onChapterExit:[]},{id:"sperry2015",title:"Sperry Glacier, 2015",image:"",description:"Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).",location:{center:[-113.75672,48.62433],zoom:13.68,pitch:34.5,bearing:106.4},onChapterEnter:[{layer:"gnpglaciers-2015",opacity:.25}],onChapterExit:[{layer:"gnpglaciers-2015",opacity:0}]}]};o.a.render(r.a.createElement(w,v),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.3be9f87d.chunk.js.map