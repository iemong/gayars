(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{4912:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var i,r,s,o=t(2209),c=(t(7294),t(2064)),a=t(9293),l=t(1163),u=t(762),d=t(2083),p=t(4509),h=t(5893),y=function(){var e=(0,l.useRouter)().query.roomId,n=function(n){p.F.ref("rooms/".concat(e,"/sound").concat(n)).transaction((function(e){return e+1}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{children:"\u53c2\u52a0\u8005\u753b\u9762"}),(0,h.jsxs)(x,{children:[(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(1)},children:"\u30b3\u30d6\u30b7"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(2)},children:"\u30cf\u30cf\u30cf"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(3)},children:"\u62cd\u624b"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(4)},children:"\u30d2\u30e5\u30fc\uff01\uff01"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(5)},children:"\u5f31\u3081\u306e\u30d2\u30e5\u30fc"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(6)},children:"\u306a\u3093\u3067\u3084\u306d\u3093"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(7)},children:"\u30aa\u30c3\u30b9\uff01"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(8)},children:"\u3044\u3044\u3058\u3083\u3093"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(9)},children:"\ud83d\udc36"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(10)},children:"\ud83e\udd8d"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(11)},children:"\u3084\u308b\u3058\u3083\u306a\u3044\u304b"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(12)},children:"\u5927\u7b11\u3044"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(13)},children:"\u4e2d\u7b11\u3044"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(14)},children:"\u3059\u3054\u3044\u3059\u3054\u3044"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(15)},children:"\u304a\u3049\u30fc"}),(0,h.jsx)(u.Z,{styleType:"square",onClick:function(){n(16)},children:"\u3044\u3044\u3068\u3082\u301c"})]})]})},f=c.Z.p(i||(i=(0,o.Z)(["\n    font-style: normal;\n    font-size: 24px;\n    line-height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n    margin-bottom: 40px;\n"])),d.D.GREEN),x=c.Z.div(r||(r=(0,o.Z)(["\n    display: grid;\n    gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n"]))),m=t(2234),g=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{title:"\u53c2\u52a0\u8005\u753b\u9762 | gayars"}),(0,h.jsx)(m.Z,{}),(0,h.jsx)(j,{children:(0,h.jsx)(y,{})})]})},j=c.Z.div(s||(s=(0,o.Z)(["\n    padding-top: 40px;\n"])))},4509:function(e,n,t){"use strict";t.d(n,{F:function(){return r}});var i=t(1902),r=(t(6068),i.Z.apps.length?i.Z.app():i.Z.initializeApp({apiKey:"AIzaSyDS6WXNbiA6I6TLy5NOIxlSCAy7GMgQqlI",authDomain:"gayars-2e715.firebaseapp.com",databaseURL:"https://gayars-2e715.firebaseio.com",projectId:"gayars-2e715",storageBucket:"gayars-2e715.appspot.com",messagingSenderId:"712967542615",appId:"1:712967542615:web:08c3665ef3f455a9a95012",measurementId:"G-G4D3YX96JG"}),i.Z.database())},2083:function(e,n,t){"use strict";t.d(n,{D:function(){return i}});var i={ORANGE:"#FF9F1C",LIGHT_ORANGE:"#FFBF69",WHITE:"#FFF",LIGHT_GREEN:"#CBF3F0",GREEN:"#2EC4B6"}},762:function(e,n,t){"use strict";var i,r,s=t(2209),o=(t(7294),t(2064)),c=t(917),a=t(2083),l=t(5893);!function(e){e[e.default=0]="default",e[e.invert=1]="invert",e[e.circle=2]="circle",e[e.square=3]="square"}(r||(r={}));n.Z=function(e){var n=e.children,t=e.styleType,i=void 0===t?"default":t,r=e.className,s=e.width,o=e.height,c=e.onClick;return(0,l.jsx)(u,{width:s,height:o,role:"button",className:r,styleType:i,onClick:c,children:n})};var u=o.Z.div(i||(i=(0,s.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    font-size: 24px;\n    width: 300px;\n    height: 80px;\n    margin: 0 auto;\n    border-radius: 10px;\n    cursor: pointer;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    &:hover {\n        filter: saturate(130%);\n    }\n    &:focus,\n    &:active {\n        filter: saturate(160%);\n    }\n    ",";\n"])),(function(e){return"default"===e.styleType?(0,c.iv)({width:e.width,height:e.height,background:a.D.LIGHT_ORANGE}):"invert"===e.styleType?(0,c.iv)({width:e.width,height:e.height,background:a.D.GREEN}):"circle"===e.styleType?(0,c.iv)({width:"180px",height:"180px",background:a.D.LIGHT_ORANGE,borderRadius:"50%",border:"4px solid ".concat(a.D.ORANGE),fontSize:"48px",color:a.D.WHITE}):"square"===e.styleType?(0,c.iv)({width:"100px",height:"100px",background:a.D.LIGHT_GREEN,border:"2px solid ".concat(a.D.GREEN),color:a.D.GREEN}):void 0}))},9293:function(e,n,t){"use strict";t(7294);var i=t(9008),r=t(5893);n.Z=function(e){var n=e.title,t=e.description,s=e.keyword,o=e.image,c=e.url;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{name:"keywords",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"blog"}),(0,r.jsx)("meta",{property:"og:url",content:c}),(0,r.jsx)("meta",{property:"og:image",content:o}),(0,r.jsx)("meta",{property:"og:site_name",content:n}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@tcr_jp"}),(0,r.jsx)("meta",{name:"twitter:url",content:o}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:o}),(0,r.jsx)("meta",{name:"twitter:image",content:o}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/ress/dist/ress.min.css"})]})}},2234:function(e,n,t){"use strict";var i,r,s=t(2209),o=(t(7294),t(2064)),c=t(2083),a=t(5893);n.Z=function(e){var n=e.isAudiencePage;return(0,a.jsx)(l,{children:(0,a.jsx)(u,{"data-is-audience":n,children:"GAYA - CHAT"})})};var l=o.Z.header(i||(i=(0,s.Z)(["\n    width: 100%;\n"]))),u=o.Z.p(r||(r=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 60px;\n    color: ",";\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 28px;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    background-color: ",";\n    &[data-is-audience='true'] {\n        background-color: ",";\n    }\n"])),c.D.WHITE,c.D.LIGHT_ORANGE,c.D.GREEN)},8186:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rooms/[roomId]/audience",function(){return t(4912)}])}},function(e){e.O(0,[774,627,540,307,888,179],(function(){return n=8186,e(e.s=n);var n}));var n=e.O();_N_E=n}]);