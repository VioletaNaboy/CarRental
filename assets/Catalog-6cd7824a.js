import{s as d,r as F,j as i,a as P,f as z,u as A}from"./index-b4f16e9f.js";import{u as L,C as O}from"./CarsList-1fb9e10d.js";var M="NOT_FOUND";function R(n){var t;return{get:function(r){return t&&n(t.key,r)?t.value:M},put:function(r,s){t={key:r,value:s}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function N(n,t){var e=[];function r(c){var l=e.findIndex(function(h){return t(c,h.key)});if(l>-1){var u=e[l];return l>0&&(e.splice(l,1),e.unshift(u)),u.value}return M}function s(c,l){r(c)===M&&(e.unshift({key:c,value:l}),e.length>n&&e.pop())}function o(){return e}function m(){e=[]}return{get:r,put:s,getEntries:o,clear:m}}var q=function(t,e){return t===e};function D(n){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var s=e.length,o=0;o<s;o++)if(!n(e[o],r[o]))return!1;return!0}}function I(n,t){var e=typeof t=="object"?t:{equalityCheck:t},r=e.equalityCheck,s=r===void 0?q:r,o=e.maxSize,m=o===void 0?1:o,c=e.resultEqualityCheck,l=D(s),u=m===1?R(l):N(m,l);function h(){var g=u.get(arguments);if(g===M){if(g=n.apply(null,arguments),c){var f=u.getEntries(),x=f.find(function(v){return c(v.value,g)});x&&(g=x.value)}u.put(arguments,g)}return g}return h.clearCache=function(){return u.clear()},h}function G(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(r){return typeof r=="function"})){var e=t.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function U(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var s=function(){for(var m=arguments.length,c=new Array(m),l=0;l<m;l++)c[l]=arguments[l];var u=0,h,g={memoizeOptions:void 0},f=c.pop();if(typeof f=="object"&&(g=f,f=c.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var x=g,v=x.memoizeOptions,b=v===void 0?e:v,a=Array.isArray(b)?b:[b],p=G(c),C=n.apply(void 0,[function(){return u++,f.apply(null,arguments)}].concat(a)),j=n(function(){for(var S=[],E=p.length,k=0;k<E;k++)S.push(p[k].apply(null,arguments));return h=C.apply(null,S),h});return Object.assign(j,{resultFunc:f,memoizedResultFunc:C,dependencies:p,lastResult:function(){return h},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),j};return s}var $=U(I);const H=n=>n.cars.items,K=n=>n.filter,V=$([H,K],(n,t)=>n.filter(o=>o.make.toLowerCase().includes(t.make.toLowerCase())).filter(o=>o.rentalPrice.substring(1)<=t.price).filter(o=>o.mileage>=t.mileageFrom&&o.mileage<=t.mileageTo)),W=d.button`
background:none;
border: none;
text-align: center;
color: #3470FF;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
text-decoration-line: underline;
`,J=d.form`
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
`,T=d.label`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`,B=d.select`
display: flex;
padding: 14px 160px 14px 18px;
justify-content: center;
align-items: center;
gap: 32px;
border-radius: 14px;
background: #F7F7FB;
height: 48px;
border:none;
`,Q=d.fieldset`
border:none;
padding:0;
`,X=d.legend`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`,Y=d.button`
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
`,Z=d.input`
border-radius: 14px 0px 0px 14px;
border:none;
border-right: 1px solid rgba(138, 138, 137, 0.20);
width: 160px;
height: 48px;
background: #F7F7FB;
padding: 16px 16px 16px 74px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;

`,_=d.input`
width: 160px;
height: 48px;
border:none;
border-radius: 0px 14px 14px 0px;
background: #F7F7FB;
padding: 16px 16px 16px 74px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;
`,w=d.div`
display: flex;
flex-direction: column;
gap: 8px; 
align-items: flex-start;
`,ee=d.label`
font-size: 18px;
font-weight: 500;
position:absolute;
left: 24px;
top:15px;
`,te=d.label`
font-size: 18px;
font-weight: 500;
position:absolute;
left: 184px;
top:15px;
`,re=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],ne=()=>{const n=L(),[t,e]=F.useState("all"),[r,s]=F.useState("all"),[o,m]=F.useState(0),[c,l]=F.useState(1e5),u=a=>{e(a.target.value)},h=a=>{s(a.target.value)},g=a=>{m(a.target.value)},f=a=>{l(a.target.value)},x=()=>{const a=[];for(let p=20;p<=100;p+=10)a.push(i.jsxs("option",{value:p,children:[p,"$"]},p));return a},v=()=>re.map((a,p)=>i.jsx("option",{value:a,children:a},p)),b=a=>{a.preventDefault();const p=a.currentTarget.carMake.value==="all"?"":a.currentTarget.carMake.value,C=a.currentTarget.carPrice.value==="all"?1/0:a.currentTarget.carPrice.value,j=Number(a.currentTarget.mileageFrom.value)?a.currentTarget.mileageFrom.value:0,y=Number(a.currentTarget.mileageTo.value)?a.currentTarget.mileageTo.value:1e5;n(P({make:p,price:C,mileageFrom:j,mileageTo:y})),a.currentTarget.reset()};return i.jsxs(J,{onSubmit:b,children:[i.jsxs(w,{children:[i.jsx(T,{htmlFor:"carMake",children:"Car brand"}),i.jsxs(B,{id:"carMake",value:r,onChange:h,children:[i.jsx("option",{value:"all",children:"ALL"}),v()]})]}),i.jsxs(w,{children:[i.jsx(T,{htmlFor:"carPrice",children:"Price/ 1 hour"}),i.jsxs(B,{id:"carPrice",value:t,onChange:u,children:[i.jsx("option",{value:"all",children:"ALL"}),x()]})]}),i.jsx(Q,{children:i.jsxs(w,{children:[i.jsx(X,{children:"Сar mileage / km"}),i.jsxs("div",{style:{display:"flex",position:"relative"},children:[i.jsx(ee,{children:"From"}),i.jsx(Z,{id:"mileageFrom",type:"number",value:o,onChange:g}),i.jsx(te,{children:"To"}),i.jsx(_,{id:"mileageTo",type:"number",value:c,onChange:f})]})]})}),i.jsx(Y,{type:"submit",children:"Search"})]})},oe=()=>{const[n,t]=F.useState(1),e=L();F.useEffect(()=>{e(z(n))},[n]);const r=()=>{t(n+1)},s=A(V);return i.jsxs("div",{children:[i.jsx("h1",{children:"Catalog"}),i.jsx(ne,{}),i.jsx(O,{cars:s}),n<=3&&i.jsx(W,{type:"button",onClick:r,children:"Load More"})]})};export{oe as default};
