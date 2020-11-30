(this.webpackJsonpsaged=this.webpackJsonpsaged||[]).push([[0],{101:function(e,t,n){e.exports=n(233)},232:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);n(56);var a=n(0),o=n.n(a),l=n(50),i=n.n(l),r=n(4),c=n(100),s=n(98),d=n(39),u=n(52),m=n(53),f=n(51),y=n.n(f),g=n(54),p=n.n(g),v=n(55),h=n.n(v),C=n(6),_={abap:{displayName:"ABAP (Advanced Business Application Programming)"},apex:{displayName:"Apex"},bat:{displayName:"Batch"},clojure:{displayName:"Clojure"},coffee:{displayName:"CoffeeScript"},cpp:{displayName:"C++"},csharp:{displayName:"C#"},csp:{displayName:"CSP (Communication Sequential Processing)"},css:{displayName:"CSS"},dart:{displayName:"Dart"},dockerfile:{displayName:"Dockerfile"},fsharp:{displayName:"F#"},go:{displayName:"Go (Golang)"},graphql:{displayName:"Graphql"},handlebars:{displayName:"Handlebars"},html:{displayName:"HTML"},java:{displayName:"Java"},javascript:{displayName:"JavaScript"},julia:{displayName:"Julia"},kotlin:{displayName:"Kotlin"},less:{displayName:"Less"},lexon:{displayName:"Lexon"},lua:{displayName:"Lua"},markdown:{displayName:"Markdown"},mips:{displayName:"MIPS"},mysql:{displayName:"MySQL"},"objective-c":{displayName:"Objective-C"},pascal:{displayName:"Pascal"},perl:{displayName:"Perl"},pgsql:{displayName:"PGSQL"},php:{displayName:"PHP"},"":{displayName:"Plain Text"},powershell:{displayName:"PowerShell"},pug:{displayName:"pug"},python:{displayName:"Python3"},r:{displayName:"R"},ruby:{displayName:"Ruby"},rust:{displayName:"Rust"},scss:{displayName:"SCSS"},shell:{displayName:"Shell"},sophia:{displayName:"Sopia"},sql:{displayName:"SQL"},swift:{displayName:"Swift"},twig:{displayName:"Twig"},typescript:{displayName:"TypeScript"},vb:{displayName:"Visual Basic"},xml:{displayName:"XML"},yaml:{displayName:"YAML"}},b=function(){function e(t){Object(u.a)(this,e),this.callback=t,this._element=null,this._cachedProperty=null,this._interval=null}return Object(m.a)(e,[{key:"observe",value:function(e){var t=this;this._element=e,this._interval=setInterval((function(){t._element&&t._isDifferent(t._element.getBoundingClientRect())&&t.callback(t._element)}),1e3)}},{key:"unobserve",value:function(){this._element=null,this._interval&&clearInterval(this._interval)}},{key:"_isDifferent",value:function(e){var t=this._cachedProperty&&Object(d.a)({},this._cachedProperty);return this._cachedProperty={height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.bottom,right:e.right,x:e.x,y:e.y},!!t&&(t.height!==e.height||t.width!==e.width)}}]),e}(),E=function(){function e(t){if(Object(u.a)(this,e),this.element=null,this._observer=null,ResizeObserver){this._observer=new ResizeObserver((function(e){var n,a=Object(s.a)(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;t(o.target)}}catch(l){a.e(l)}finally{a.f()}}))}else this._observer=new b(t)}return Object(m.a)(e,[{key:"observe",value:function(e){this._observer.observe(e)}},{key:"unobserve",value:function(e){this._observer.unobserve(e)}}]),e}(),w={editor:"_index-module__editor__3schp",head:"_index-module__head__33fPK",cbtns:"_index-module__cbtns__3KAlm",bottom:"_index-module__bottom__2XFRY",editorBtn:"_index-module__editorBtn__1jIh_",icon:"_index-module__icon__3frI6",active:"_index-module__active__1R_dZ",SL:"_index-module__SL__3qC-Z",slinput:"_index-module__slinput__39eno",sllist:"_index-module__sllist__dehTu",option:"_index-module__option__2zGqk"};function k(e){var t=e.onClick,n=e.name,a=e.options,l=void 0!==a&&a,i=e.setRef,r=e.active,c=void 0!==r&&r;return o.a.createElement("div",{className:w.editorBtn,onClick:function(e){t(e)},ref:i},l&&o.a.createElement("div",{className:[w.icon,c?w.active:null].join(" ").trimEnd()},"\u25b2"),o.a.createElement("div",{className:w.editorBtnName},n))}function N(e){var t=e.onClick,n=e.setDisplay,l=e.interrupt,i=e.onBlur,c=e.onFocus,s=Object(a.useState)(""),d=Object(r.a)(s,2),u=d[0],m=d[1],f=Object(a.useRef)(null),y=Object(a.useRef)(null);Object(a.useEffect)((function(){return document.addEventListener("mousedown",g),y.current&&(y.current.onfocus=function(e){c&&c(e)},y.current.onblur=function(e){i&&i(e)},y.current.focus()),function(){return document.removeEventListener("mousedown",g)}}),[]);var g=function(e){l(e,f)||n()},p=function(e){t(e.target.getAttribute("data-lid"))};return o.a.createElement("div",{className:w.SL,ref:f},o.a.createElement("div",{className:w.slinputContainer},o.a.createElement("input",{ref:y,className:w.slinput,placeholder:"Set Language",value:u,onChange:function(e){m(e.target.value)}})),o.a.createElement("div",{className:w.sllist},Object.keys(_).map((function(e,t){var n=_[e].displayName;return u?n.toLocaleLowerCase().startsWith(u.toLocaleLowerCase())?o.a.createElement("div",{key:t,"data-lid":e,onClick:p},n):null:o.a.createElement("div",{key:t,"data-lid":e,onClick:p},n)}))))}function S(){return o.a.createElement("div",{className:w.head},o.a.createElement("div",{className:w.cbtns,style:{backgroundColor:"#FF5F56"}}),o.a.createElement("div",{className:w.cbtns,style:{backgroundColor:"#FFBD2E"}}),o.a.createElement("div",{className:w.cbtns,style:{backgroundColor:"#27C93F"}}))}function x(e,t){var n=0;return e&&(n+=1.5),t&&(n+=2.25),n}function O(e){var t=e.language,n=void 0===t?"javascript":t,l=e.className,i=e.code,c=void 0===i?"":i,s=e.readOnly,d=void 0!==s&&s,u=e.onChange,m=e.footer,f=void 0!==m&&m,g=e.header,p=void 0!==g&&g,v=e.height,h=void 0===v?"20rem":v,C=e.onBlur,b=e.onFocus,O=Object(a.useState)(n),j=Object(r.a)(O,2),H=j[0],R=j[1],V=Object(a.useState)(!d),L=Object(r.a)(V,2),M=L[0],T=L[1],B=Object(a.useState)(!1),I=Object(r.a)(B,2),A=I[0],F=I[1],Z=Object(a.useRef)(null),D=Object(a.useRef)(H),P=Object(a.useRef)(null),K=Object(a.useRef)(null),q=function(){return F(!A)},U=function(e){D.current=e,R(e)};return Object(a.useEffect)((function(){U(n)}),[n]),Object(a.useEffect)((function(){if(P.current){var e=new E((function(){console.log("Observing editor..."),Z.current&&Z.current.layout()}));return e.observe(P.current),function(){P.current&&e.unobserve(P.current),console.log("Unobserve the editor...")}}return function(){}}),[]),o.a.createElement("div",{className:l,style:{height:h},ref:P},o.a.createElement("div",{className:w.editor},A&&o.a.createElement("div",{className:w.option},o.a.createElement(N,{onBlur:C,onFocus:b,interrupt:function(e,t){var n=t.current,a=e.target;return!(!K.current.contains(a)&&!n.contains(a))},onClick:U,setDisplay:q})),p&&o.a.createElement(S,null),o.a.createElement(y.a,{options:{readOnly:!M},value:c,language:H,theme:"dark",editorDidMount:function(e,t){Z.current=t,Z.current.onDidBlurEditorText((function(e){C&&C(e)})),Z.current.onDidFocusEditorText((function(e){b&&b(e)})),"function"===typeof u&&Z.current.onDidChangeModelContent((function(e){u(Z.current.getValue(),D.current)}))},height:"calc(100% - ".concat(x(f,p),"rem)")}),f&&o.a.createElement("div",{className:w.bottom},!d&&o.a.createElement(a.Fragment,null,o.a.createElement(k,{active:A,setRef:K,onClick:q,name:_[H].displayName,options:!0}),o.a.createElement(k,{active:!1,onClick:function(){return T(!M)},name:"Edit: ".concat(M)})))))}var j=function(e){var t=e.blockProps,n=e.block,l=e.contentState,i=Object(a.useState)({code:"",language:t.language}),c=Object(r.a)(i,2),s=c[0],d=c[1],u=Object(a.useRef)(l);u.current=l,Object(a.useEffect)((function(){var e=n.getEntityAt(0);if(e){var t,a=null===(t=l.getEntity(e))||void 0===t?void 0:t.getData(),o={code:a.content,language:a.language};d(o)}}),[]);var m=Object(a.useCallback)((function(){t.setEditorIsUp(!1)}),[t]),f=Object(a.useCallback)((function(){t.setEditorIsUp(!0)}),[t]);return o.a.createElement(O,{header:!0,footer:!0,onChange:function(e,a){var o=n.getEntityAt(0),l=u.current;if(o){var i=l.mergeEntityData(o,{content:e,language:a||t.language});t.onFinishEdit(i)}else console.log("OOPS")},code:s.code,onBlur:m,onFocus:f,language:s.language,height:t.height,readOnly:t.readonly})},H="_index-module__md__2hquu";function R(e){var t=e.content,n=e.readonly,l=e.onFocus,i=e.onBlur,c=e.onMouseEnter,s=e.onMouseLeave,d=e.onChange,u=Object(a.useState)(t||""),m=Object(r.a)(u,2),f=m[0],y=m[1],g=Object(a.useRef)(null);return Object(a.useEffect)((function(){y(t||""),g.current&&(g.current.innerHTML=h.a.sanitize(p()(t||"")))}),[t]),o.a.createElement("div",{contentEditable:!n,ref:g,className:H,onFocus:function(e){g.current&&(g.current.innerHTML=f),l&&l(e)},onBlur:function(e){g.current&&(g.current.innerHTML=h.a.sanitize(p()(f))),i&&i(e)},onMouseEnter:c,onMouseLeave:s,onInput:function(){var e,t;y((null===(e=g.current)||void 0===e?void 0:e.innerText)||""),d&&d(null===(t=g.current)||void 0===t?void 0:t.innerText)}})}function V(e){var t=e.blockProps,n=e.block,l=e.contentState,i=Object(a.useState)({content:""}),c=Object(r.a)(i,2),s=c[0],d=c[1],u=Object(a.useRef)(!1),m=Object(a.useRef)(l);function f(){u.current?t.setEditorIsUp(!0):u.current||t.setEditorIsUp(!1)}return m.current=l,Object(a.useEffect)((function(){var e=n.getEntityAt(0);if(e){var t,a={content:(null===(t=l.getEntity(e))||void 0===t?void 0:t.getData()).content};d(a)}}),[]),o.a.createElement(R,{content:s.content,readonly:t.readonly,onFocus:function(){u.current=!0,f()},onBlur:function(){u.current=!1,f()},onChange:function(e){var a=n.getEntityAt(0),o=m.current;if(a){var l=o.mergeEntityData(a,{content:e});t.onFinishEdit(l)}else console.log("OOPS MARKDOWN")}})}function L(e){return e.block.getEntityAt(0)?"monaco"===e.contentState.getEntity(e.block.getEntityAt(0)).getData().type?o.a.createElement(j,Object.assign({},e)):o.a.createElement(V,Object.assign({},e)):o.a.createElement(a.Fragment,null)}var M={container:"_index-module__container__mhbMz",editMode:"_index-module__editMode__2jdzh",editor:"_index-module__editor__mCyNl",editorH1:"_index-module__editorH1__EfcB9",editorH2:"_index-module__editorH2__3j10_",editorText:"_index-module__editorText__3h769",editorBlockquote:"_index-module__editorBlockquote__1-A5m",editorUL:"_index-module__editorUL__TtIjr",editorOL:"_index-module__editorOL__1fdPb",editorAtomic:"_index-module__editorAtomic__1NI_V",btn:"_index-module__btn__1m6Ed"},T={toolbarContainer:"_index-module__toolbarContainer__1Dbt8",iconContainer:"_index-module__iconContainer__38GaT",plusIcon:"_index-module__plusIcon__1VETt",controls:"_index-module__controls__8_-BR",styleButton:"_index-module__styleButton__3ld08",icon:"_index-module__icon__xRr58",activeButton:"_index-module__activeButton__eh9S-",drawer:"_index-module__drawer__3DOm6",hide:"_index-module__hide__G6c-p"};function B(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M1 8H15M8 1V15V1Z",stroke:"#6212B2",strokeLinecap:"round",strokeLinejoin:"round"}))}var I=function(e){return document.querySelectorAll('[data-offset-key="'.concat(e,'-0-0"]'))[0]},A=function(e){if(e){var t=window.pageYOffset||document.documentElement.scrollTop,n=window.pageXOffset||document.documentElement.scrollLeft,a=e.getBoundingClientRect();return{top:a.top+t,left:a.left+n}}return{top:0,left:0}};function F(e){var t=e.src,n=Object(c.a)(e,["src"]);return o.a.createElement("div",Object.assign({},n),t)}var Z=function(e){var t=e.onToggle,n=e.active,a=e.style,l=e.label,i=e.subType,r=T.styleButton;return n&&(r+=" "+T.activeButton),o.a.createElement("span",{className:r,onMouseDown:function(e){e.preventDefault(),t(a,i)}},l)},D=[{label:o.a.createElement(F,{className:T.icon,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M16.5 10.5H19.5V25.5H16.5V19.5H10.5V25.5H7.5V10.5H10.5V16.5H16.5V10.5ZM26.355 10.5C25.4649 11.9242 24.0992 12.987 22.5 13.5V15H25.5V25.5H28.5V10.5H26.355Z",fill:"black"}))}),null)}),style:"header-one"},{label:o.a.createElement(F,{className:T.icon,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M13.5 10.5H16.5V25.5H13.5V19.5H7.5V25.5H4.5V10.5H7.5V16.5H13.5V10.5ZM25.5 22.5C26.265 21.885 26.4 21.57 27.09 20.925C27.7455 20.325 28.362 19.683 28.935 19.005C29.436 18.42 29.865 17.775 30.21 17.085C30.51 16.5 30.6675 15.852 30.675 15.195C30.6824 14.533 30.5441 13.8776 30.27 13.275C30.0041 12.6978 29.6149 12.1858 29.13 11.775C28.611 11.3503 28.0152 11.0295 27.375 10.83C26.6474 10.6005 25.8878 10.4891 25.125 10.5C24.585 10.5 24.0495 10.5495 23.52 10.65C23.0055 10.74 22.503 10.887 22.02 11.085C21.5636 11.2805 21.1308 11.527 20.73 11.82C20.3 12.1351 19.8892 12.4757 19.5 12.84L21.36 14.67C21.8219 14.2685 22.3246 13.9165 22.86 13.62C23.385 13.32 23.9805 13.164 24.585 13.17C25.2675 13.125 25.944 13.329 26.49 13.74C26.955 14.157 27.2055 14.766 27.165 15.39C27.144 15.984 26.955 16.56 26.625 17.055C26.1975 17.7347 25.6943 18.3637 25.125 18.93C24.465 19.575 23.655 20.31 22.74 21.075C21.825 21.84 20.625 22.665 19.5 23.55V25.5H31.5V22.5H25.5Z",fill:"black"}))}),null)}),style:"header-two"},{label:o.a.createElement(F,{className:T.icon,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M9.83884 15.955C9.50434 15.955 9.18334 16.006 8.86384 16.0525C8.96734 15.7045 9.07384 15.3505 9.24484 15.0325C9.41584 14.5705 9.68284 14.17 9.94834 13.7665C10.1703 13.33 10.5618 13.0345 10.8498 12.661C11.1513 12.298 11.5623 12.0565 11.8878 11.755C12.2073 11.44 12.6258 11.2825 12.9588 11.0605C13.3068 10.861 13.6098 10.6405 13.9338 10.5355L14.7423 10.2025L15.4533 9.907L14.7258 7L13.8303 7.216C13.5438 7.288 13.1943 7.372 12.7968 7.4725C12.3903 7.5475 11.9568 7.753 11.4738 7.9405C10.9968 8.1535 10.4448 8.2975 9.93184 8.6395C9.41584 8.9665 8.82034 9.2395 8.29534 9.6775C7.78684 10.129 7.17334 10.5205 6.72034 11.095C6.22534 11.632 5.73634 12.196 5.35684 12.838C4.91734 13.45 4.61884 14.122 4.30384 14.7865C4.01884 15.451 3.78934 16.1305 3.60184 16.7905C3.24634 18.1135 3.08734 19.3705 3.02584 20.446C2.97484 21.523 3.00484 22.4185 3.06784 23.0665C3.09034 23.3725 3.13234 23.6695 3.16234 23.875L3.19984 24.127L3.23884 24.118C3.50563 25.3642 4.1198 26.5095 5.01029 27.4213C5.90078 28.333 7.0312 28.9741 8.2708 29.2702C9.5104 29.5664 10.8085 29.5055 12.015 29.0948C13.2214 28.684 14.2869 27.94 15.0883 26.9489C15.8896 25.9579 16.3939 24.7602 16.543 23.4944C16.692 22.2287 16.4797 20.9466 15.9305 19.7965C15.3814 18.6464 14.5178 17.6753 13.4398 16.9955C12.3618 16.3156 11.1133 15.9549 9.83884 15.955V15.955ZM26.3388 15.955C26.0043 15.955 25.6833 16.006 25.3638 16.0525C25.4673 15.7045 25.5738 15.3505 25.7448 15.0325C25.9158 14.5705 26.1828 14.17 26.4483 13.7665C26.6703 13.33 27.0618 13.0345 27.3498 12.661C27.6513 12.298 28.0623 12.0565 28.3878 11.755C28.7073 11.44 29.1258 11.2825 29.4588 11.0605C29.8068 10.861 30.1098 10.6405 30.4338 10.5355L31.2423 10.2025L31.9533 9.907L31.2258 7L30.3303 7.216C30.0438 7.288 29.6943 7.372 29.2968 7.4725C28.8903 7.5475 28.4568 7.753 27.9738 7.9405C27.4983 8.155 26.9448 8.2975 26.4318 8.641C25.9158 8.968 25.3203 9.241 24.7953 9.679C24.2868 10.1305 23.6733 10.522 23.2203 11.095C22.7253 11.632 22.2363 12.196 21.8568 12.838C21.4173 13.45 21.1188 14.122 20.8038 14.7865C20.5188 15.451 20.2893 16.1305 20.1018 16.7905C19.7463 18.1135 19.5873 19.3705 19.5258 20.446C19.4748 21.523 19.5048 22.4185 19.5678 23.0665C19.5903 23.3725 19.6323 23.6695 19.6623 23.875L19.6998 24.127L19.7388 24.118C20.0056 25.3642 20.6198 26.5095 21.5103 27.4213C22.4008 28.333 23.5312 28.9741 24.7708 29.2702C26.0104 29.5664 27.3085 29.5055 28.515 29.0948C29.7214 28.684 30.7869 27.94 31.5883 26.9489C32.3896 25.9579 32.8939 24.7602 33.043 23.4944C33.192 22.2287 32.9797 20.9466 32.4305 19.7965C31.8814 18.6464 31.0178 17.6753 29.9398 16.9955C28.8618 16.3156 27.6133 15.9549 26.3388 15.955V15.955Z",fill:"black"}))}),null)}),style:"blockquote"},{label:o.a.createElement(F,{className:T.icon,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M12 6H31.5V9H12V6ZM6.75 9.75C6.15326 9.75 5.58097 9.51295 5.15901 9.09099C4.73705 8.66903 4.5 8.09674 4.5 7.5C4.5 6.90326 4.73705 6.33097 5.15901 5.90901C5.58097 5.48705 6.15326 5.25 6.75 5.25C7.34674 5.25 7.91903 5.48705 8.34099 5.90901C8.76295 6.33097 9 6.90326 9 7.5C9 8.09674 8.76295 8.66903 8.34099 9.09099C7.91903 9.51295 7.34674 9.75 6.75 9.75ZM6.75 20.25C6.15326 20.25 5.58097 20.0129 5.15901 19.591C4.73705 19.169 4.5 18.5967 4.5 18C4.5 17.4033 4.73705 16.831 5.15901 16.409C5.58097 15.9871 6.15326 15.75 6.75 15.75C7.34674 15.75 7.91903 15.9871 8.34099 16.409C8.76295 16.831 9 17.4033 9 18C9 18.5967 8.76295 19.169 8.34099 19.591C7.91903 20.0129 7.34674 20.25 6.75 20.25ZM6.75 30.6C6.15326 30.6 5.58097 30.3629 5.15901 29.941C4.73705 29.519 4.5 28.9467 4.5 28.35C4.5 27.7533 4.73705 27.181 5.15901 26.759C5.58097 26.3371 6.15326 26.1 6.75 26.1C7.34674 26.1 7.91903 26.3371 8.34099 26.759C8.76295 27.181 9 27.7533 9 28.35C9 28.9467 8.76295 29.519 8.34099 29.941C7.91903 30.3629 7.34674 30.6 6.75 30.6ZM12 16.5H31.5V19.5H12V16.5ZM12 27H31.5V30H12V27Z",fill:"black"}))}),null)}),style:"unordered-list-item"},{label:o.a.createElement(F,{className:T.icon,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M12 6H31.5V9H12V6ZM7.5 4.5V9H9V10.5H4.5V9H6V6H4.5V4.5H7.5ZM4.5 21V17.25H7.5V16.5H4.5V15H9V18.75H6V19.5H9V21H4.5ZM7.5 29.25H4.5V27.75H7.5V27H4.5V25.5H9V31.5H4.5V30H7.5V29.25ZM12 16.5H31.5V19.5H12V16.5ZM12 27H31.5V30H12V27Z",fill:"black"}))}),null)}),style:"ordered-list-item"},{label:o.a.createElement(F,{className:T.icon,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M13.5 33H15V30H13.5165C13.0545 29.991 9 29.7405 9 24C9 21.0105 8.0025 19.131 6.747 18C8.0025 16.869 9 14.9895 9 12C9 6.2595 13.0545 6.009 13.5 6H15V3H13.497C10.9035 3.006 6 4.896 6 12C6 16.2 3.483 16.485 2.979 16.5L3 19.5C3.123 19.5 6 19.551 6 24C6 31.104 10.9035 32.994 13.5 33ZM33 16.5C32.877 16.5 30 16.449 30 12C30 4.896 25.0965 3.006 22.5 3H21V6H22.4835C22.9455 6.009 27 6.2595 27 12C27 14.9895 27.9975 16.869 29.253 18C27.9975 19.131 27 21.0105 27 24C27 29.7405 22.9455 29.991 22.5 30H21V33H22.503C25.0965 32.994 30 31.104 30 24C30 19.8 32.517 19.515 33.021 19.5L33 16.5Z",fill:"black"}))}),null)}),style:"atomic",subType:"monaco"},{label:o.a.createElement(F,{className:T.icon,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 16 16",className:"bi bi-markdown",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"}),o.a.createElement("path",{d:"M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z"}))}),null)}),style:"atomic",subType:"markdown"}],P=function(e){var t=e.editorState,n=t.getSelection(),a=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return o.a.createElement("div",{className:T.controls},D.map((function(t,n){return o.a.createElement(Z,{key:"".concat(t.style,"-").concat(n),active:t.style===a,label:t.label,onToggle:e.onToggle,style:t.style,subType:t.subType})})))};function K(e){var t=e.editor,n=e.editorRef,l=e.toggleBlockStyle,i=e.offSetLeft,c=void 0===i?2:i,s=e.offSetTop,u=void 0===s?1:s,m=Object(a.useState)({top:0,left:0}),f=Object(r.a)(m,2),y=f[0],g=f[1],p=Object(a.useState)(!1),v=Object(r.a)(p,2),h=v[0],C=v[1],_=Object(a.useRef)(null),b=Object(a.useCallback)((function(e){var t;(null===(t=_.current)||void 0===t?void 0:t.contains(e.target))||C(!1)}),[]);return Object(a.useEffect)((function(){return document.addEventListener("mousedown",b),function(){return document.removeEventListener("mousedown",b)}}),[b]),Object(a.useEffect)((function(){var e=t.getSelection().getStartKey(),n=t.getCurrentContent().getBlockForKey(e),a=I(n.getKey()),o=window.getComputedStyle(a),l=parseInt(o.height);g({left:-16*c,top:a.offsetTop+l/2+16*u-12.8})}),[t,n]),o.a.createElement("div",{className:T.toolbarContainer,style:Object(d.a)({},y)},o.a.createElement("div",{className:T.iconContainer,onClick:function(){return C(!h)}},o.a.createElement(F,{className:T.plusIcon,src:o.a.createElement(B,null)})),o.a.createElement("div",{ref:_,className:"".concat(T.drawer," ").concat(h?T.show:T.hide)},o.a.createElement(P,{editorState:t,onToggle:function(e,t){l&&l(e,t),C(!1)}})))}var q="_index-module__toolbarContainer__3i0hv",U="_index-module__controls__3Anne",z="_index-module__styleButton__3wKDs",J="_index-module__activeButton__TLEE9",G="_index-module__icon__35tgK";var W=function(e){var t=e.onToggle,n=e.active,a=e.style,l=e.label,i=z;return n&&(i+=" "+J),o.a.createElement("span",{className:i,onMouseDown:function(e){e.preventDefault(),t(a)}},l)},Y=[{label:o.a.createElement(F,{className:G,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M24.532 16.9242C25.7133 15.6937 26.4375 14.0309 26.4375 12.2027V11.8441C26.4375 8.06133 23.3402 4.99219 19.5223 4.99219H9.11953C8.58867 4.99219 8.15625 5.42461 8.15625 5.95547V29.8301C8.15625 30.4031 8.62031 30.8672 9.19336 30.8672H20.3977C24.5109 30.8672 27.8438 27.5555 27.8438 23.4668V23.0801C27.8438 20.5137 26.5289 18.2531 24.532 16.9242ZM11.5312 8.36719H19.4309C21.4383 8.36719 23.0625 9.92812 23.0625 11.8582V12.1922C23.0625 14.1187 21.4348 15.6832 19.4309 15.6832H11.5312V8.36719ZM24.4195 23.4633C24.4195 25.6746 22.602 27.4676 20.359 27.4676H11.5312V19.0793H20.359C22.602 19.0793 24.4195 20.8723 24.4195 23.0836V23.4633Z",fill:"black"}))}),null)}),style:"BOLD"},{label:o.a.createElement(F,{className:G,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M28.0547 5.625H12.8672C12.7125 5.625 12.5859 5.75156 12.5859 5.90625V8.15625C12.5859 8.31094 12.7125 8.4375 12.8672 8.4375H19.2375L13.7531 27.5625H8.05078C7.89609 27.5625 7.76953 27.6891 7.76953 27.8438V30.0938C7.76953 30.2484 7.89609 30.375 8.05078 30.375H23.2383C23.393 30.375 23.5195 30.2484 23.5195 30.0938V27.8438C23.5195 27.6891 23.393 27.5625 23.2383 27.5625H16.6781L22.1625 8.4375H28.0547C28.2094 8.4375 28.3359 8.31094 28.3359 8.15625V5.90625C28.3359 5.75156 28.2094 5.625 28.0547 5.625Z",fill:"black"}))}),null)}),style:"ITALIC"},{label:o.a.createElement(F,{className:G,src:o.a.createElement((function(){return o.a.createElement("svg",{height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M28.9688 28.2656H7.03125C6.87656 28.2656 6.75 28.3852 6.75 28.5328V30.6703C6.75 30.818 6.87656 30.9375 7.03125 30.9375H28.9688C29.1234 30.9375 29.25 30.818 29.25 30.6703V28.5328C29.25 28.3852 29.1234 28.2656 28.9688 28.2656ZM18 25.5938C20.4398 25.5938 22.732 24.641 24.4617 22.9148C26.1914 21.1887 27.1406 18.893 27.1406 16.4531V5.48438C27.1406 5.25234 26.9508 5.0625 26.7188 5.0625H24.6094C24.3773 5.0625 24.1875 5.25234 24.1875 5.48438V16.4531C24.1875 19.8633 21.4102 22.6406 18 22.6406C14.5898 22.6406 11.8125 19.8633 11.8125 16.4531V5.48438C11.8125 5.25234 11.6227 5.0625 11.3906 5.0625H9.28125C9.04922 5.0625 8.85938 5.25234 8.85938 5.48438V16.4531C8.85938 18.893 9.81211 21.1852 11.5383 22.9148C13.2645 24.6445 15.5602 25.5938 18 25.5938Z",fill:"black"}))}),null)}),style:"UNDERLINE"}],Q=function(e){var t=e.editorState.getCurrentInlineStyle();return o.a.createElement("div",{className:U},Y.map((function(n,a){return o.a.createElement(W,{key:"inline-style-".concat(a),active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style})})))},X={top:-100,left:-100};function $(e){var t=e.editor,n=e.editorRef,l=e.editorPosition,i=e.offsetTop,c=void 0===i?2.5:i,s=e.offsetLeft,u=void 0===s?2:s,m=e.toggleInlineStyle,f=Object(a.useState)(X),y=Object(r.a)(f,2),g=y[0],p=y[1];return Object(a.useEffect)((function(){if(t.getSelection().isCollapsed())p(X);else{var e=function(){var e=null;try{var t,n=null===(t=window.getSelection())||void 0===t?void 0:t.getRangeAt(0).getClientRects();(null===n||void 0===n?void 0:n.length)&&(e=0===n[0].width?n[1]:n[0])}catch(a){console.error(a)}return e}();if(!e)return;var n=16*c,a=16*u,o=window.pageYOffset||document.documentElement.scrollTop;p({top:e.top+o-l.top-n,left:e.left+e.width/2-l.left-a})}}),[t,n]),o.a.createElement("div",{className:q,style:Object(d.a)({},g)},g.top!==X.top&&o.a.createElement(Q,{editorState:t,onToggle:m}))}var ee={btn:"_index-module__btn__3VFj-"};function te(e){var t=e.name,n=e.className,a=e.onClick;return o.a.createElement("button",{onClick:a,className:[ee.btn,n].join(" ")},t)}var ne=function(e){switch(e.getType()){case"header-one":return M.editorH1;case"header-two":return M.editorH2;case"blockquote":return M.editorBlockquote;case"ordered-list-item":return M.editorOL;case"unordered-list-item":return M.editorUL;case"atomic":return M.editorAtomic;default:return M.editorText}},ae=function(){var e;return function(t){var n=t.key,a=void 0===n?"article":n,o=t.content;clearTimeout(e),e=setTimeout((function(){(window.localStorage||localStorage).setItem(a,o)}),300)}}(),oe=function(e){var t=e.key;return(window.localStorage||localStorage).getItem(t)},le=function(e){return Object(C.convertFromRaw)(JSON.parse(e))};var ie=function(e){var t=e.readonly,n=e.content,l=e.className,i=e.storageKey,c=void 0===i?"article":i,s=Object(a.useState)(function(e){var t=e.content,n=e.readonly,a=e.storageKey;if(t)return C.EditorState.createWithContent(le(t));var o=oe({key:a});return o&&!n?C.EditorState.createWithContent(le(o)):C.EditorState.createEmpty()}({content:n,storageKey:c,readonly:t})),d=Object(r.a)(s,2),u=d[0],m=d[1],f=Object(a.useState)(!1),y=Object(r.a)(f,2),g=y[0],p=y[1],v=Object(a.useRef)(null),h=Object(a.useRef)(null),_=Object(a.useCallback)((function(){var e,t=u.getCurrentContent();ae({content:(e=t,JSON.stringify(Object(C.convertToRaw)(e))),key:c})}),[u]),b=Object(a.useCallback)((function(e){if("atomic"===e.getType())return{component:L,editable:!1,props:{language:"javascript",height:"20rem",readonly:t,setEditorIsUp:p,onFinishEdit:function(e){m(C.EditorState.createWithContent(e))}}}}),[]);return Object(a.useEffect)((function(){_()}),[_,u]),o.a.createElement("div",{ref:h,className:"".concat(M.container," ").concat(!t&&M.editMode)},o.a.createElement("div",{className:[M.editor,l].join(" "),onClick:function(){!t&&v.current&&v.current.focus()}},!t&&o.a.createElement(K,{offSetLeft:1,offSetTop:1,editor:u,editorRef:v,toggleBlockStyle:function(e,t){if("atomic"!==e)m(C.RichUtils.toggleBlockType(u,e));else{var n=u.getCurrentContent().createEntity("ATOMIC","IMMUTABLE",{type:t}),a=n.getLastCreatedEntityKey(),o=C.EditorState.set(u,{currentContent:n}),l=C.AtomicBlockUtils.insertAtomicBlock(o,a," ");m(l);var i=l.getCurrentContent(),r=i.getLastBlock().getKey(),c=i.getKeyBefore(r);setTimeout((function(){var e=I(c);e&&(e.contentEditable="false")}),0)}}}),!t&&o.a.createElement($,{editorPosition:A(h.current),editor:u,editorRef:v,toggleInlineStyle:function(e){m(C.RichUtils.toggleInlineStyle(u,e))}}),o.a.createElement(C.Editor,{spellCheck:!0,ref:v,readOnly:t||g,editorState:u,onChange:function(e){return m(e)},blockStyleFn:ne,keyBindingFn:function(e){if(_(),9!==e.keyCode)return Object(C.getDefaultKeyBinding)(e);var t=C.RichUtils.onTab(e,u,4);t!==u&&m(t)},handleKeyCommand:function(e,t){var n=C.RichUtils.handleKeyCommand(t,e);return!!n&&(m(n),!0)},blockRendererFn:b})),!t&&o.a.createElement(te,{name:"Show data",onClick:function(){return console.log(u.toJS())},className:M.btn}))},re=n(99),ce=(n(232),JSON.stringify(re)),se=function(){var e=function(e){var t=Object(a.useState)(e),n=Object(r.a)(t,2),o=n[0],l=n[1];return[o,function(e){window.history.pushState({data:"any"},e,e),l(window.location.pathname+window.location.hash)}]}(window.location.pathname+window.location.hash),t=Object(r.a)(e,2),n=t[0],l=t[1];return o.a.createElement("div",{className:"container"},function(e){switch(!0){case"/saged/"===e:return o.a.createElement("div",{className:"editor"},o.a.createElement(ie,{content:ce}));case"/saged/#preview"===e:return o.a.createElement("div",{className:"editor"},o.a.createElement(ie,{content:ce,readonly:!0}));case"/saged/#editor"===e:return o.a.createElement("div",{className:"editor"},o.a.createElement(ie,{storageKey:"saged-example-item-eerTy443"}));case"/saged/#editor/preview"===e:return o.a.createElement("div",{className:"editor"},o.a.createElement(ie,{content:localStorage.getItem("saged-example-item-eerTy443"),readonly:!0}));case"/saged/code-editor"===e:return o.a.createElement("div",{className:"editor"},o.a.createElement(O,{header:!0,footer:!0}));default:return o.a.createElement("div",{className:"notfound-container"},o.a.createElement("div",{className:"notfound-text"},"404 - Page Not Found"))}}(n),o.a.createElement("div",{className:"btn-container"},o.a.createElement("div",{className:"btn",onClick:function(){l("/saged/")}},"Editor"),o.a.createElement("div",{className:"btn",onClick:function(){l("#preview")}},"Preview")))};i.a.render(o.a.createElement(se,null),document.getElementById("root"))},56:function(e,t,n){},99:function(e){e.exports=JSON.parse('{"blocks":[{"key":"b29vn","text":"React Hooks and its mates","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eqs2m","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1lj3l","text":"React hooks has quickly became industry demands. Now I am going to define some of the advantages of using react hooks. The following are the advantages of using react hooks.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7r40b","text":"Hooks are highly re-usable.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"74l1g","text":"They produce far better code.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5koh4","text":"Code is easily maintainable.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ana2","text":"Hooks enforces good developer practices.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7tgh0","text":"I love hooks!","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"407k2","text":"Now we are essentially ready to see some react hooks code on the editor (which uses hooks) which uses an editor which in itself uses react hooks! Inception! Lol \ud83d\ude02","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f5lq3","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9tll9","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"e75kv","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aspn9","text":"As an advantage, we can even define our own react hooks! Ain\'t that cool? Indeed it is! \ud83e\udd29","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cjq8o","text":"Now let\'s test some markdown shall we? Okay the first test definitely failed. ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d86il","text":"Doing a second test now","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5as3q","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":1}],"data":{}},{"key":"bb4lg","text":"Random blah blah stuff","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a9ou0","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f9ed2","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":2}],"data":{}},{"key":"3r047","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"ATOMIC","mutability":"IMMUTABLE","data":{"type":"monaco","content":"import React, { useState } from \'react\'\\n\\nexport default function App() {\\n    // useState is a react hook\\n    // There are many other react hooks like\\n    // 1. useEffect\\n    // 2. useCallback\\n    // 3. useRef and many more!\\n    const [state, setState] = useState(\\"\\")\\n    return (\\n        <div>\\n            Super Cool stuff in here\\n        </div>\\n    )\\n}","language":"javascript"}},"1":{"type":"ATOMIC","mutability":"IMMUTABLE","data":{"type":"markdown","content":"Some random markdown in here"}},"2":{"type":"ATOMIC","mutability":"IMMUTABLE","data":{"type":"markdown","content":"**TABLE**  \\n\\n\\n\\n| Tables   |      Are      |  Cool |\\n|----------|:-------------:|------:|\\n| col 1 is |  left-aligned | $1600 |\\n| col 2 is |    centred   |   $12 |\\n| col 3 is | right-aligned |    $1 |"}}}}')}},[[101,1,2]]]);
//# sourceMappingURL=main.a72e114c.chunk.js.map