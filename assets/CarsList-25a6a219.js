import{R as p,a as w,c as v,s as o,b as C,j as e,l as h,u as F,r as u,d as E,e as M}from"./index-5eb432e4.js";function j(t=p){const s=t===p?w:v(t);return function(){const{store:a}=s();return a}}const R=j();function P(t=p){const s=t===p?R:j(t);return function(){return s().dispatch}}const I=P(),S=o.ul`
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
`,B=o.img`
width: auto;
height: 268px;
`,D=o.div`
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
`,O=t=>t.favorites.items,T=o.div`
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
`,K=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`,U=o.img`
width: 469px;
height:248px;
border-radius: 14px;
margin-bottom:14px;
`,W=o.p`
width: 100%;
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
`,f=o.p`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`,Y=o.p`
line-height: 1.43;
`,m=o.div`
width:100%;
display:flex;
flex-direction:column;
gap: 8px;
font-weight: 500;
line-height: 1.43;
margin-bottom:24px;
`,q=o.span`
display: inline-block;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
letter-spacing: -0.24px;
padding: 7px 14px;
border-radius: 35px;
background: #F9F9F9;
margin-right: 8px;
`,b="/CarRental/assets/dummyPhoto-9fcfdba9.jpg",G=({isOpen:t,onClose:s,car:n})=>{if(!t)return null;const a=i=>{i.target===i.currentTarget&&s()};return C.createPortal(e.jsx(T,{onClick:a,children:e.jsxs(A,{children:[e.jsx(K,{onClick:s,children:e.jsx(h.CloseOutline,{color:"#121417",height:"24px",width:"24px"})}),e.jsx(U,{src:n.img,alt:` Photo of a car ${n.make} ${n.model}`,onError:i=>{i.currentTarget.src=b}}),e.jsxs(W,{children:[n.make," ",e.jsx("span",{children:n.model}),","," ",n.year]}),e.jsxs(f,{children:[" ",n.address," | Year:",n.year," | Type: ",n.type," | Fuel Consumption: ",n.fuelConsumption," | Engine Size : ",n.engineSize]}),e.jsx(Y,{children:n.description}),e.jsxs(m,{children:[e.jsx("span",{children:" Accessories and functionalities:"}),e.jsxs(f,{children:[n.accessories.map((i,r)=>e.jsxs("span",{children:[i," | "]},r)),n.functionalities.map((i,r)=>e.jsxs("span",{children:[i," | "]},r))]})]}),e.jsxs(m,{children:[e.jsx("span",{children:"Rental Conditions:"}),e.jsx("div",{children:n.rentalConditions.split(`
`).map((i,r)=>{const[l,d]=i.split(":");return e.jsxs(q,{children:[l," ",d?e.jsxs("span",{style:{color:"#3470FF"},children:[":"," ",d]}):null]},r)})})]})]})}),document.getElementById("portal-root"))},J=({car:t})=>{const s=F(O),n=I(),a=()=>{n(E(t))},i=()=>{n(M(t))},r=s.find(function(c){return c.id===t.id}),[l,d]=u.useState(!1),k=()=>{d(!0)},y=()=>{d(!1)},x=c=>{c.key==="Escape"&&d(!1)};return u.useEffect(()=>{if(l)return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[l]),e.jsxs($,{children:[e.jsx(G,{isOpen:l,onClose:y,car:t}),e.jsxs(z,{children:[e.jsx(B,{src:t.img,alt:` Photo of a car ${t.make} ${t.model} `,onError:c=>{c.currentTarget.src=b}}),r?e.jsx(g,{onClick:i,type:"button",children:e.jsx(h.Heart,{color:"#3470FF",height:"18px",width:"18px"})}):e.jsx(g,{onClick:a,type:"button",children:e.jsx(h.HeartOutline,{color:"#fff",height:"18px",width:"18px"})})]}),e.jsxs(D,{children:[e.jsxs("p",{children:[t.make,e.jsx("span",{children:t.model}),",",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(H,{children:[t.adress," | ",t.make," | ",t.make," | ",t.rentalCompany," | ",t.make," | ",t.make," | ",t.mileage]}),e.jsx(L,{type:"button",onClick:k,children:"Learn more"})]})},Q=({cars:t})=>e.jsx(S,{children:t.map(s=>e.jsx(J,{car:s},s.id))});export{Q as C,O as s,I as u};
