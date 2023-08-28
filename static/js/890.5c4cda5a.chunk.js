"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[890],{3890:function(e,n,t){t.r(n),t.d(n,{default:function(){return ne}});var r=t(9434),a=t(3634),i="ContactsForm_formContact__lHqfV",o="NOT_FOUND";var s=function(e,n){return e===n};function u(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?s:r,i=t.maxSize,u=void 0===i?1:i,c=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),d=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:o},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return o}return{get:r,put:function(n,a){r(n)===o&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,l);function f(){var n=d.get(arguments);if(n===o){if(n=e.apply(null,arguments),c){var t=d.getEntries(),r=t.find((function(e){return c(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function c(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function l(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i,o=0,s={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(s=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=s,d=l.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],m=c(r),v=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:v,dependencies:m,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var d=l(u),f=function(e){return e.filter},p=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},v=function(e){return e.contacts.error},h=d([p,f],(function(e,n){return e.filter((function(e){return e.name&&e.name.toLowerCase().includes(n.toLowerCase())}))})),y=t(5325),x=t(1413),C=t(4925),j=t(5597),g=t(6232),Z=t(2996),_=t(5113),N=t(6992),b=t(184),L=["className","children","requiredIndicator","optionalIndicator"],I=(0,j.G)((function(e,n){var t,r=(0,g.mq)("FormLabel",e),a=(0,Z.Lr)(e),i=(a.className,a.children),o=a.requiredIndicator,s=void 0===o?(0,b.jsx)(k,{}):o,u=a.optionalIndicator,c=void 0===u?null:u,l=(0,C.Z)(a,L),d=(0,y.NJ)(),f=null!=(t=null==d?void 0:d.getLabelProps(l,n))?t:(0,x.Z)({ref:n},l);return(0,b.jsxs)(_.m.label,(0,x.Z)((0,x.Z)({},f),{},{className:(0,N.cx)("chakra-form__label",a.className),__css:(0,x.Z)({display:"block",textAlign:"start"},r),children:[i,(null==d?void 0:d.isRequired)?s:c]}))}));I.displayName="FormLabel";var k=(0,j.G)((function(e,n){var t=(0,y.NJ)(),r=(0,y.e)();if(!(null==t?void 0:t.isRequired))return null;var a=(0,N.cx)("chakra-form__required-indicator",e.className);return(0,b.jsx)(_.m.span,(0,x.Z)((0,x.Z)({},null==t?void 0:t.getRequiredIndicatorProps(e,n)),{},{__css:r.requiredIndicator,className:a}))}));k.displayName="RequiredIndicator";var w=t(9163),q=t(9055),A=function(){var e=(0,r.I0)(),n=(0,r.v9)(p);return(0,b.jsxs)(y.NI,{className:i,onSubmit:function(t){t.preventDefault();var r=t.target.elements.name.value,i=t.target.elements.phone.value;n.find((function(e){return e.name===r}))?alert("".concat(r," is already in contacts.")):e((0,a.uK)({name:r,number:i})),t.target.reset()},children:[(0,b.jsxs)(I,{htmlFor:"name",children:["Name",(0,b.jsx)(w.I,{type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' \\-][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)(I,{htmlFor:"phone",children:["Number",(0,b.jsx)(w.I,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[.\\-\\s]?\\(?\\d{1,3}?\\)?[.\\-\\s]?\\d{1,4}[.\\-\\s]?\\d{1,4}[.\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)(q.z,{type:"submit",mt:"8",children:"Add Contact"})]})},F=t(2791),S=function(e){var n=e.contact,t=(0,r.I0)();return(0,b.jsxs)("li",{children:[n.name," : ",n.phone,(0,b.jsx)(q.z,{onClick:function(){return t((0,a.GK)(n.id))},children:"Delete"})]})},z="ContactsList_contactsList__7sAfD",G=t(4942),P=t(9439),E=t(9640),R=t(9886);var O=["children","styleType","stylePosition","spacing"],T=["as"],J=["as"],B=(0,R.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),D=(0,P.Z)(B,2),M=D[0],K=D[1],U=(0,j.G)((function(e,n){var t=(0,g.jC)("List",e),r=(0,Z.Lr)(e),a=r.children,i=r.styleType,o=void 0===i?"none":i,s=r.stylePosition,u=r.spacing,c=(0,C.Z)(r,O),l=function(e){return F.Children.toArray(e).filter((function(e){return(0,F.isValidElement)(e)}))}(a),d=u?(0,G.Z)({},"& > *:not(style) ~ *:not(style)",{mt:u}):{};return(0,b.jsx)(M,{value:t,children:(0,b.jsx)(_.m.ul,(0,x.Z)((0,x.Z)({ref:n,listStyleType:o,listStylePosition:s,role:"list",__css:(0,x.Z)((0,x.Z)({},t.container),d)},c),{},{children:l}))})}));U.displayName="List",(0,j.G)((function(e,n){e.as;var t=(0,C.Z)(e,T);return(0,b.jsx)(U,(0,x.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,j.G)((function(e,n){e.as;var t=(0,C.Z)(e,J);return(0,b.jsx)(U,(0,x.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var V=(0,j.G)((function(e,n){var t=K();return(0,b.jsx)(_.m.li,(0,x.Z)((0,x.Z)({ref:n},e),{},{__css:t.item}))}));V.displayName="ListItem";var H=(0,j.G)((function(e,n){var t=K();return(0,b.jsx)(E.J,(0,x.Z)((0,x.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))}));H.displayName="ListIcon";var W=function(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,r=e.d,a=e.displayName,i=e.defaultProps,o=void 0===i?{}:i,s=F.Children.toArray(e.path),u=(0,j.G)((function(e,n){return(0,b.jsx)(E.J,(0,x.Z)((0,x.Z)((0,x.Z)({ref:n,viewBox:t},o),e),{},{children:s.length?s:(0,b.jsx)("path",{fill:"currentColor",d:r})}))}));return u.displayName=a,u}({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),Y=function(){var e=(0,r.v9)(h);return(0,b.jsx)(U,{className:z,children:e.map((function(e){return(0,b.jsxs)(V,{children:[(0,b.jsx)(H,{as:W,color:"green.500"}),(0,b.jsx)(S,{contact:e},e.id)]})}))})},$=t(3165),Q="Filter_filterLabel__+pnW-",X=function(){var e=(0,r.v9)(f),n=(0,r.I0)();return(0,b.jsxs)(I,{className:Q,children:["Find contacts by name",(0,b.jsx)(w.I,{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,$.bI)(t))},placeholder:"Search contacts"})]})},ee=t(4270);function ne(){var e=(0,r.I0)(),n=(0,r.v9)(m),t=(0,r.v9)(v);return(0,F.useEffect)((function(){e((0,a.yF)())}),[e]),(0,b.jsxs)("div",{children:[(0,b.jsx)(ee.q,{children:(0,b.jsx)("title",{children:"Your Phonebook"})}),(0,b.jsx)(A,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(X,{}),n&&!t&&(0,b.jsx)("b",{children:"Request in progress..."}),(0,b.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=890.5c4cda5a.chunk.js.map