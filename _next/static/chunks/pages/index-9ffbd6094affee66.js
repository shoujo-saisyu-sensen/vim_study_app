(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3948)}])},3948:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var s=t(5893),r=t(6328),o=t.n(r),c=t(7294),i=t(9240),u=function(){return(0,c.useContext)(i.Q)},a=t(2382),l=t.n(a),p=[{question:"\u6587\u5b57\u5165\u529b\u306b\u3059\u308b\u305f\u3081\u306b\u306f\uff1f",explanation:"\u30a4\u30f3\u30b5\u30fc\u30c8\u30e2\u30fc\u30c9\u306ei\u304c\u6b63\u89e3\u3067\u3059",answer:"i",selection:["a","i","u","e"]},{question:"\u30ce\u30fc\u30de\u30eb\u30e2\u30fc\u30c9\u306b\u3059\u308b\u305f\u3081\u306b\u306f\uff1f",explanation:"esc\u304c\u6b63\u89e3\u3067\u3059",answer:"esc",selection:["esc","delete","shift","control"]}],d=function(){var e=u(),n=e.mode,t=e.setMode,r=(0,c.useState)(),o=r[0],i=r[1],a=(0,c.useState)(0),d=a[0],_=a[1],x=(0,c.useState)(0),h=x[0],f=x[1],j=(0,c.useMemo)((function(){return p[d]}),[d]);return(0,s.jsx)(s.Fragment,{children:function(){switch(n){case"answer":return(0,s.jsxs)("div",{className:l().answerWrapper,children:[(0,s.jsx)("p",{children:o===j.answer?"\u6b63\u89e3\uff01":"\u9593\u9055\u3048"}),(0,s.jsx)("p",{children:"\u7b54\u3048\uff1a".concat(j.answer)}),(0,s.jsx)("p",{children:j.explanation}),(0,s.jsx)("button",{className:l().button,onClick:function(){return i(void 0),void(d!==p.length-1?(_(d+1),t("question")):t("complete"))},children:"Next"})]});case"question":return(0,s.jsxs)("div",{className:l().questionWrapper,children:[(0,s.jsx)("p",{children:j.question}),(0,s.jsx)("div",{className:l().buttons,children:j.selection.map((function(e){return(0,s.jsx)("button",{className:l().button,onClick:function(){return i(n=e),n===j.answer&&f(h+1),void t("answer");var n},children:e},e)}))})]});case"complete":return(0,s.jsxs)("div",{className:l().completeWrapper,children:[(0,s.jsx)("p",{children:"\u7d42\u4e86\uff01"}),(0,s.jsx)("p",{children:"\u30b9\u30b3\u30a2\uff1a".concat(p.length,"\u554f\u4e2d").concat(h,"\u6b63\u89e3!")}),(0,s.jsx)("button",{className:l().button,onClick:function(){return _(0),f(0),void t("top")},children:"\u30c8\u30c3\u30d7\u306b\u623b\u308b"})]});default:return}}()})},_=function(){var e=u(),n=e.mode,t=e.setMode;return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:o().topWrapper,children:"top"===n?(0,s.jsxs)("div",{className:o().start,children:[(0,s.jsx)("p",{children:"vim\u3092\u5b66\u7fd2\u3057\u3088\u3046\uff01"}),(0,s.jsx)("button",{onClick:function(){t("question")},className:o().button,children:"\u59cb\u3081\u308b"})]}):(0,s.jsx)(d,{})})})},x=function(){return(0,s.jsx)(_,{})}},6328:function(e){e.exports={topWrapper:"styles_topWrapper__cCExV",start:"styles_start__WgfTv",button:"styles_button__l7nao",borderFocus:"styles_borderFocus__XA9iH",borderUnFocus:"styles_borderUnFocus__wngzd"}},2382:function(e){e.exports={questionWrapper:"styles_questionWrapper__pGbcl",buttons:"styles_buttons__Km8DM",button:"styles_button__QhGI9",answerWrapper:"styles_answerWrapper__mvFjV",completeWrapper:"styles_completeWrapper__jeo8Y"}}},function(e){e.O(0,[774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);