import{R as p,a as w,c as y,s as o,b as v,j as e,l as h,u as C,r as u,d as F,e as M}from"./index-47cd4e96.js";function j(t=p){const i=t===p?w:y(t);return function(){const{store:a}=i();return a}}const R=j();function E(t=p){const i=t===p?R:j(t);return function(){return i().dispatch}}const I=E(),P=o.ul`
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
}`,S=o.li`
width: 274px;
height: 426px;
display: flex;
flex-direction: column;
gap: 18px;
`,$=o.div`
position:relative;
width: 274px;
height: 268px;
border-radius: 14px;
overflow: hidden;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,z=o.img`
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
`,L=o.button`
width: 100%;
padding: 12px 0;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: #fff;
`,g=o.button`
width: 46px;
height: 46px;
position: absolute;
top:0;
right:0;
justify-content: center;
align-items: center;
border:none;
background: transparent;
`,O=t=>t.favorites.items,D=o.div`
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
`,T=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`,K=o.img`
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
`,f=o.p`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`,W=o.p`
line-height: 1.43;
`,m=o.div`
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
`,q=({isOpen:t,onClose:i,car:n})=>{if(!t)return null;const a=s=>{s.target===s.currentTarget&&i()};return v.createPortal(e.jsx(D,{onClick:a,children:e.jsxs(A,{children:[e.jsx(T,{onClick:i,children:e.jsx(h.CloseOutline,{color:"#121417",height:"24px",width:"24px"})}),e.jsx(K,{src:n.img,alt:` Photo of a car ${n.make} ${n.model}`}),e.jsxs(U,{children:[n.make," ",e.jsx("span",{children:n.model}),","," ",n.year]}),e.jsxs(f,{children:[" ",n.address," | Year:",n.year," | Type: ",n.type," | Fuel Consumption: ",n.fuelConsumption," | Engine Size : ",n.engineSize]}),e.jsx(W,{children:n.description}),e.jsxs(m,{children:[e.jsx("span",{children:" Accessories and functionalities:"}),e.jsxs(f,{children:[n.accessories.map((s,r)=>e.jsxs("span",{children:[s," | "]},r)),n.functionalities.map((s,r)=>e.jsxs("span",{children:[s," | "]},r))]})]}),e.jsxs(m,{children:[e.jsx("span",{children:"Rental Conditions:"}),e.jsx("div",{children:n.rentalConditions.split(`
`).map((s,r)=>{const[l,d]=s.split(":");return e.jsxs(Y,{children:[l," ",d?e.jsxs("span",{style:{color:"#3470FF"},children:[":"," ",d]}):null]},r)})})]})]})}),document.getElementById("portal-root"))},G=({car:t})=>{const i=C(O),n=I(),a=()=>{n(F(t))},s=()=>{n(M(t))},r=i.find(function(c){return c.id===t.id}),[l,d]=u.useState(!1),b=()=>{d(!0)},k=()=>{d(!1)},x=c=>{c.key==="Escape"&&d(!1)};return u.useEffect(()=>{if(l)return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[l]),e.jsxs(S,{children:[e.jsx(q,{isOpen:l,onClose:k,car:t}),e.jsxs($,{children:[e.jsx(z,{src:t.img,alt:` Photo of a car ${t.make} ${t.model} `}),r?e.jsx(g,{onClick:s,type:"button",children:e.jsx(h.Heart,{color:"#3470FF",height:"18px",width:"18px"})}):e.jsx(g,{onClick:a,type:"button",children:e.jsx(h.HeartOutline,{color:"#fff",height:"18px",width:"18px"})})]}),e.jsxs(B,{children:[e.jsxs("p",{children:[t.make,e.jsx("span",{children:t.model}),",",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(H,{children:[t.adress," | ",t.make," | ",t.make," | ",t.rentalCompany," | ",t.make," | ",t.make," | ",t.mileage]}),e.jsx(L,{type:"button",onClick:b,children:"Learn more"})]})},N=({cars:t})=>e.jsx(P,{children:t.map(i=>e.jsx(G,{car:i},i.id))});export{N as C,O as s,I as u};
