import{s as h,r as F,j as i,a as L,f as A,u as z}from"./index-117f15b9.js";import{u as E,C as O}from"./CarsList-5788ad50.js";var k="NOT_FOUND";function R(n){var t;return{get:function(r){return t&&n(t.key,r)?t.value:k},put:function(r,c){t={key:r,value:c}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function I(n,t){var e=[];function r(s){var l=e.findIndex(function(f){return t(s,f.key)});if(l>-1){var u=e[l];return l>0&&(e.splice(l,1),e.unshift(u)),u.value}return k}function c(s,l){r(s)===k&&(e.unshift({key:s,value:l}),e.length>n&&e.pop())}function o(){return e}function m(){e=[]}return{get:r,put:c,getEntries:o,clear:m}}var N=function(t,e){return t===e};function q(n){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var c=e.length,o=0;o<c;o++)if(!n(e[o],r[o]))return!1;return!0}}function D(n,t){var e=typeof t=="object"?t:{equalityCheck:t},r=e.equalityCheck,c=r===void 0?N:r,o=e.maxSize,m=o===void 0?1:o,s=e.resultEqualityCheck,l=q(c),u=m===1?R(l):I(m,l);function f(){var d=u.get(arguments);if(d===k){if(d=n.apply(null,arguments),s){var g=u.getEntries(),x=g.find(function(v){return s(v.value,d)});x&&(d=x.value)}u.put(arguments,d)}return d}return f.clearCache=function(){return u.clear()},f}function G(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(r){return typeof r=="function"})){var e=t.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function U(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var c=function(){for(var m=arguments.length,s=new Array(m),l=0;l<m;l++)s[l]=arguments[l];var u=0,f,d={memoizeOptions:void 0},g=s.pop();if(typeof g=="object"&&(d=g,g=s.pop()),typeof g!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof g+"]");var x=d,v=x.memoizeOptions,b=v===void 0?e:v,a=Array.isArray(b)?b:[b],p=G(s),C=n.apply(void 0,[function(){return u++,g.apply(null,arguments)}].concat(a)),j=n(function(){for(var T=[],P=p.length,w=0;w<P;w++)T.push(p[w].apply(null,arguments));return f=C.apply(null,T),f});return Object.assign(j,{resultFunc:g,memoizedResultFunc:C,dependencies:p,lastResult:function(){return f},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),j};return c}var $=U(D);const H=n=>n.cars.items,K=n=>n.filter,V=$([H,K],(n,t)=>n.filter(o=>o.make.toLowerCase().includes(t.make.toLowerCase())).filter(o=>o.rentalPrice.substring(1)<t.price).filter(o=>o.mileage>=t.mileageFrom&&o.mileage<=t.mileageTo)),W=h.button`
background:none;
border: none;
text-align: center;
color: #3470FF;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
text-decoration-line: underline;
`,J=h.form`
width:100%;
height: 74px; 
margin: 0 auto;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:flex-end;
gap: 18px;
@media only screen and (min-width: 1200px) {
  flex-wrap:nowrap; 
}
`,M=h.label`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`,B=h.select`
display: flex;
padding: 14px 160px 14px 18px;
justify-content: center;
align-items: center;
gap: 32px;
border-radius: 14px;
background: #F7F7FB;
height: 48px;
border:none;
`,Q=h.fieldset`
border:none;
padding:0;
`,X=h.legend`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`,Y=h.button`
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
&:hover, &:focus {
    background: #0B44CD;
}
`,Z=h.input`
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

`,_=h.input`
width: 160px;
height: 48px;
border:none;
border-radius: 0px 14px 14px 0px;
background: #F7F7FB;
padding: 16px 16px 16px 75px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;
`,S=h.div`
display: flex;
flex-direction: column;
gap: 8px; 
align-items: flex-start;
`,ee=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],te=()=>{const n=E(),[t,e]=F.useState("all"),[r,c]=F.useState("all"),[o,m]=F.useState(0),[s,l]=F.useState(1/0),u=a=>{e(a.target.value)},f=a=>{c(a.target.value)},d=a=>{m(a.target.value)},g=a=>{l(a.target.value)},x=()=>{const a=[];for(let p=20;p<=100;p+=10)a.push(i.jsxs("option",{value:p,children:[p,"$"]},p));return a},v=()=>ee.map((a,p)=>i.jsx("option",{value:a,children:a},p)),b=a=>{a.preventDefault();const p=a.currentTarget.carMake.value==="all"?"":a.currentTarget.carMake.value,C=a.currentTarget.carPrice.value==="all"?1/0:a.currentTarget.carPrice.value,j=Number(a.currentTarget.mileageFrom.value)?a.currentTarget.mileageFrom.value:0,y=Number(a.currentTarget.mileageTo.value)?a.currentTarget.mileageTo.value:1/0;n(L({make:p,price:C,mileageFrom:j,mileageTo:y})),a.currentTarget.reset()};return i.jsxs(J,{onSubmit:b,children:[i.jsxs(S,{children:[i.jsx(M,{htmlFor:"carMake",children:"Car brand"}),i.jsxs(B,{id:"carMake",value:r,onChange:f,children:[i.jsx("option",{value:"all",children:"ALL"}),v()]})]}),i.jsxs(S,{children:[i.jsx(M,{htmlFor:"carPrice",children:"Price/ 1 hour"}),i.jsxs(B,{id:"carPrice",value:t,onChange:u,children:[i.jsx("option",{value:"all",children:"ALL"}),x()]})]}),i.jsx(Q,{children:i.jsxs(S,{children:[i.jsx(X,{children:"Сar mileage / km"}),i.jsxs("div",{style:{display:"flex"},children:[i.jsx(M,{}),i.jsx(Z,{id:"mileageFrom",value:o,onChange:d}),i.jsx(M,{}),i.jsx(_,{id:"mileageTo",value:s,onChange:g})]})]})}),i.jsx(Y,{type:"submit",children:"Search"})]})},ae=()=>{const[n,t]=F.useState(1),e=E();F.useEffect(()=>{e(A(n))},[n]);const r=()=>{t(n+1)},c=z(V);return i.jsxs("div",{children:[i.jsx("h1",{children:"Catalog"}),i.jsx(te,{}),i.jsx(O,{cars:c}),i.jsx(W,{type:"button",onClick:r,children:"Load More"})]})};export{ae as default};