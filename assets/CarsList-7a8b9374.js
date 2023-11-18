import{R as a,a as b,c as w,s as o,b as k,j as e,l as p,u as y,r as C,d as v,e as F}from"./index-00205f73.js";function g(t=a){const i=t===a?b:w(t);return function(){const{store:s}=i();return s}}const M=g();function R(t=a){const i=t===a?M:g(t);return function(){return i().dispatch}}const I=R(),S=o.ul`
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
}`,$=o.li`
width: 274px;
height: 426px;
display: flex;
flex-direction: column;
gap: 18px;
`,z=o.div`
position:relative;
width: 274px;
height: 268px;
border-radius: 14px;
overflow: hidden;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,P=o.img`
width: auto;
height: 268px;
`,B=o.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
`,H=o.div`
width: 100%;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`,O=o.button`
width: 100%;
padding: 12px 0;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: #fff;
`,x=o.button`
width: 46px;
height: 46px;
position: absolute;
top:0;
right:0;
justify-content: center;
align-items: center;
border:none;
background: transparent;
`,D=t=>t.favorites.items,E=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,A=o.div`
  width: 461px;
  background: white;
  padding: 40px;
  border-radius: 8px;
  position: relative;
`,L=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`,T=o.img`
width: 469px;
height:248px;
border-radius: 14px;
margin-bottom:14px;
`,U=o.p`
width: 100%;
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
`,h=o.p`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`,W=o.p`
line-height: 1.43;
`,u=o.div`
width:100%;
display:flex;
flex-direction:column;
gap: 8px;
font-weight: 500;
line-height: 1.43;
margin-bottom:24px;
`,Y=o.span`
display: inline-block;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
letter-spacing: -0.24px;
padding: 7px 14px;
border-radius: 35px;
background: #F9F9F9;
margin-right: 8px;
`,q=({isOpen:t,onClose:i,car:n})=>t?k.createPortal(e.jsx(E,{children:e.jsxs(A,{children:[e.jsx(L,{onClick:i,children:e.jsx(p.CloseOutline,{color:"#121417",height:"24px",width:"24px"})}),e.jsx(T,{src:n.img,alt:` Photo of a car ${n.make} ${n.model}`}),e.jsxs(U,{children:[n.make," ",e.jsx("span",{children:n.model}),","," ",n.year]}),e.jsxs(h,{children:[" ",n.address," | Year:",n.year," | Type: ",n.type," | Fuel Consumption: ",n.fuelConsumption," | Engine Size : ",n.engineSize]}),e.jsx(W,{children:n.description}),e.jsxs(u,{children:[e.jsx("span",{children:" Accessories and functionalities:"}),e.jsxs(h,{children:[n.accessories.map((s,r)=>e.jsxs("span",{children:[s," | "]},r)),n.functionalities.map((s,r)=>e.jsxs("span",{children:[s," | "]},r))]})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Rental Conditions:"}),e.jsx("div",{children:n.rentalConditions.split(`
`).map((s,r)=>{const[d,l]=s.split(":");return e.jsxs(Y,{children:[d," ",l?e.jsxs("span",{style:{color:"#3470FF"},children:[":"," ",l]}):null]},r)})})]})]})}),document.getElementById("portal-root")):null,G=({car:t})=>{const i=y(D),n=I(),s=()=>{n(v(t))},r=()=>{n(F(t))},d=i.find(function(j){return j.id===t.id}),[l,c]=C.useState(!1),m=()=>{c(!0)},f=()=>{c(!1)};return e.jsxs($,{children:[e.jsx(q,{isOpen:l,onClose:f,car:t}),e.jsxs(z,{children:[e.jsx(P,{src:t.img,alt:` Photo of a car ${t.make} ${t.model} `}),d?e.jsx(x,{onClick:r,type:"button",children:e.jsx(p.Heart,{color:"#3470FF",height:"18px",width:"18px"})}):e.jsx(x,{onClick:s,type:"button",children:e.jsx(p.HeartOutline,{color:"#fff",height:"18px",width:"18px"})})]}),e.jsxs(B,{children:[e.jsxs("p",{children:[t.make,e.jsx("span",{children:t.model}),",",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(H,{children:[t.adress," | ",t.make," | ",t.make," | ",t.rentalCompany," | ",t.make," | ",t.make," | ",t.mileage]}),e.jsx(O,{type:"button",onClick:m,children:"Learn more"})]})},K=({cars:t})=>e.jsx(S,{children:t.map(i=>e.jsx(G,{car:i},i.id))});export{K as C,D as s,I as u};
