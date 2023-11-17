import{R as r,a as h,c as u,s as o,u as m,j as e,l as a,b as g,d as f}from"./index-c3ec2581.js";function c(t=r){const n=t===r?h:u(t);return function(){const{store:i}=n();return i}}const j=c();function b(t=r){const n=t===r?j:c(t);return function(){return n().dispatch}}const w=b(),v=o.ul`
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
}`,k=o.li`
width: 274px;
height: 426px;
display: flex;
flex-direction: column;
gap: 18px;
`,y=o.div`
position:relative;
width: 274px;
height: 268px;
border-radius: 14px;
overflow: hidden;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,C=o.img`
width: auto;
height: 268px;
`,F=o.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 1.5;

`,R=o.div`
width: 100%;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`,H=o.button`
width: 100%;
padding: 12px 0;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: #fff;
`,d=o.button`
width: 46px;
height: 46px;
position: absolute;
top:0;
right:0;
justify-content: center;
align-items: center;
border:none;
background: transparent;
`,S=t=>t.favorites.items,I=({car:t})=>{const n=m(S),s=w(),i=()=>{s(g(t))},p=()=>{s(f(t))},l=n.find(function(x){return x.id===t.id});return e.jsxs(k,{children:[e.jsxs(y,{children:[e.jsx(C,{src:t.img,alt:` Photo of a car ${t.make} ${t.model} `}),l?e.jsx(d,{onClick:p,type:"button",children:e.jsx(a.Heart,{color:"#3470FF",height:"18px",width:"18px"})}):e.jsx(d,{onClick:i,type:"button",children:e.jsx(a.HeartOutline,{color:"#fff",height:"18px",width:"18px"})})]}),e.jsxs(F,{children:[e.jsxs("p",{children:[t.make,e.jsx("span",{children:t.model}),",",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(R,{children:[t.adress," | ",t.make," | ",t.make," | ",t.rentalCompany," | ",t.make," | ",t.make," | ",t.mileage]}),e.jsx(H,{type:"button",children:"Learn more"})]})},P=({cars:t})=>e.jsx(v,{children:t.map(n=>e.jsx(I,{car:n},n.id))});export{P as C,S as s,w as u};
