import{s as m,r as F,j as i,a as P,f as A,u as z}from"./index-390801f0.js";import{u as E,C as B}from"./CarsList-f3af14af.js";var k="NOT_FOUND";function O(n){var t;return{get:function(r){return t&&n(t.key,r)?t.value:k},put:function(r,l){t={key:r,value:l}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function R(n,t){var e=[];function r(s){var c=e.findIndex(function(h){return t(s,h.key)});if(c>-1){var u=e[c];return c>0&&(e.splice(c,1),e.unshift(u)),u.value}return k}function l(s,c){r(s)===k&&(e.unshift({key:s,value:c}),e.length>n&&e.pop())}function o(){return e}function f(){e=[]}return{get:r,put:l,getEntries:o,clear:f}}var I=function(t,e){return t===e};function N(n){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var l=e.length,o=0;o<l;o++)if(!n(e[o],r[o]))return!1;return!0}}function q(n,t){var e=typeof t=="object"?t:{equalityCheck:t},r=e.equalityCheck,l=r===void 0?I:r,o=e.maxSize,f=o===void 0?1:o,s=e.resultEqualityCheck,c=N(l),u=f===1?O(c):R(f,c);function h(){var d=u.get(arguments);if(d===k){if(d=n.apply(null,arguments),s){var g=u.getEntries(),x=g.find(function(v){return s(v.value,d)});x&&(d=x.value)}u.put(arguments,d)}return d}return h.clearCache=function(){return u.clear()},h}function D(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(r){return typeof r=="function"})){var e=t.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function G(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var l=function(){for(var f=arguments.length,s=new Array(f),c=0;c<f;c++)s[c]=arguments[c];var u=0,h,d={memoizeOptions:void 0},g=s.pop();if(typeof g=="object"&&(d=g,g=s.pop()),typeof g!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof g+"]");var x=d,v=x.memoizeOptions,b=v===void 0?e:v,a=Array.isArray(b)?b:[b],p=D(s),C=n.apply(void 0,[function(){return u++,g.apply(null,arguments)}].concat(a)),j=n(function(){for(var T=[],L=p.length,S=0;S<L;S++)T.push(p[S].apply(null,arguments));return h=C.apply(null,T),h});return Object.assign(j,{resultFunc:g,memoizedResultFunc:C,dependencies:p,lastResult:function(){return h},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),j};return l}var U=G(q);const $=n=>n.cars.items,H=n=>n.filter,K=U([$,H],(n,t)=>{const e=n.filter(o=>o.make.toLowerCase().includes(t.make.toLowerCase()));console.log(e);const r=e.filter(o=>o.rentalPrice.substring(1)<t.price);console.log(r);const l=r.filter(o=>o.mileage>=t.mileageFrom&&o.mileage<=t.mileageTo);return console.log(l),l}),V=m.button`
background:none;
border: none;
text-align: center;
color: #3470FF;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
text-decoration-line: underline;
`,W=m.form`
width:100%;
height: 74px; 
margin: 0 auto;
display:flex;
justify-content: center;
align-items:center;
gap: 18px;
`,M=m.label`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`,w=m.select`
display: flex;
padding: 14px 160px 14px 18px;
justify-content: center;
align-items: center;
gap: 32px;
border-radius: 14px;
background: #F7F7FB;
height: 48px;
border:none;
`,J=m.fieldset`
display: flex;
flex-direction: column;
gap:8px;
border:none;
`,Q=m.legend`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`,X=m.button`
height: 48px;
border-radius: 12px;
background: #3470FF;
display: flex;
padding: 14px 44px;
justify-content: center;
align-items: center;
color: #FFF;
font-weight: 600;
line-height: 1.43;
border:none;
`,Y=m.input`
border-radius: 14px 0px 0px 14px;
border:none;
border-right: 1px solid rgba(138, 138, 137, 0.20);
width: 160px;
height: 48px;
background: #F7F7FB;
padding: 16px 16px 16px 75px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;

`,Z=m.input`
width: 160px;
height: 48px;
border:none;
border-radius: 0px 14px 14px 0px;
background: #F7F7FB;
padding: 16px 16px 16px 75px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;
`,_=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],ee=()=>{const n=E(),[t,e]=F.useState("all"),[r,l]=F.useState("all"),[o,f]=F.useState(0),[s,c]=F.useState(1/0),u=a=>{e(a.target.value)},h=a=>{l(a.target.value)},d=a=>{f(a.target.value)},g=a=>{c(a.target.value)},x=()=>{const a=[];for(let p=20;p<=100;p+=10)a.push(i.jsxs("option",{value:p,children:[p,"$"]},p));return a},v=()=>_.map((a,p)=>i.jsx("option",{value:a,children:a},p)),b=a=>{a.preventDefault();const p=a.currentTarget.carMake.value==="all"?"":a.currentTarget.carMake.value,C=a.currentTarget.carPrice.value==="all"?1/0:a.currentTarget.carPrice.value,j=Number(a.currentTarget.mileageFrom.value)?a.currentTarget.mileageFrom.value:0,y=Number(a.currentTarget.mileageTo.value)?a.currentTarget.mileageTo.value:1/0;n(P({make:p,price:C,mileageFrom:j,mileageTo:y})),a.currentTarget.reset()};return i.jsxs(W,{onSubmit:b,children:[i.jsxs("div",{children:[i.jsx(M,{htmlFor:"carMake",children:"Car brand"}),i.jsxs(w,{id:"carMake",value:r,onChange:h,children:[i.jsx("option",{value:"all",children:"ALL"}),v()]})]}),i.jsxs("div",{children:[i.jsx(M,{htmlFor:"carPrice",children:"Price/ 1 hour"}),i.jsxs(w,{id:"carPrice",value:t,onChange:u,children:[i.jsx("option",{value:"all",children:"ALL"}),x()]})]}),i.jsxs(J,{children:[i.jsx(Q,{children:"Сar mileage / km"}),i.jsx(M,{}),i.jsx(M,{}),i.jsxs("div",{style:{display:"flex"},children:[i.jsx(Y,{id:"mileageFrom",value:o,onChange:d}),i.jsx(Z,{id:"mileageTo",value:s,onChange:g})]})]}),i.jsx(X,{type:"submit",children:"Search"})]})},ne=()=>{const[n,t]=F.useState(1),e=E();F.useEffect(()=>{e(A(n))},[n]);const r=()=>{t(n+1)},l=z(K);return i.jsxs("div",{children:[i.jsx("h1",{children:"Catalog"}),i.jsx(ee,{}),i.jsx(B,{cars:l}),i.jsx(V,{type:"button",onClick:r,children:"Load More"})]})};export{ne as default};
