import{R as i,u as d,c as l,s as o,j as t,a as p,r as a,f as x}from"./index-19043277.js";function c(e=i){const n=e===i?d:l(e);return function(){const{store:s}=n();return s}}const u=c();function h(e=i){const n=e===i?u:c(e);return function(){return n().dispatch}}const g=h(),f=o.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
margin: 40px 0 51px;
@media only screen and (min-width: 768px) {
row-gap: 44px;
column-gap: 29px;   
margin: 60px 0 80px;
}`,m=o.li`
width: 274px;
height: 426px;
display: flex;
flex-direction: column;
gap: 18px;
`,j=o.div`
width: 274px;
height: 268px;
border-radius: 14px;
overflow: hidden;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,b=o.img`
width: auto;
height: 268px;
`,k=o.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 1.5;

`,w=o.div`
width: 100%;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`,C=o.button`
width: 100%;
padding: 12px 0;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: #fff;
`,y=({car:e})=>t.jsxs(m,{children:[t.jsx(j,{children:t.jsx(b,{src:e.img,alt:` Photo of a car ${e.make} ${e.model} `})}),t.jsxs(k,{children:[t.jsxs("p",{children:[e.make,t.jsx("span",{children:e.model}),",",e.year]}),t.jsx("span",{children:e.rentalPrice})]}),t.jsxs(w,{children:[e.adress," | ",e.make," | ",e.make," | ",e.rentalCompany," | ",e.make," | ",e.make," | ",e.mileage]}),t.jsx(C,{type:"button",children:"Learn more"})]}),R=e=>e.cars.items,v=()=>{const e=p(R);return t.jsx(f,{children:e.map(n=>t.jsx(y,{car:n},n.id))})},L=o.button`
background:none;
border: none;
text-align: center;
color: #3470FF;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
text-decoration-line: underline;
`,M=()=>{const[e,n]=a.useState(1),r=g();a.useEffect(()=>{r(x(e))},[e]);const s=()=>{console.log(e+1),n(e+1)};return t.jsxs("div",{children:[t.jsx("h1",{children:"Catalog"}),t.jsx(v,{}),t.jsx(L,{type:"button",onClick:s,children:"Load More"})]})};export{M as default};
