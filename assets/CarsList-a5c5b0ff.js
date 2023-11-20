import{R as p,b as F,c as C,s as o,d as v,j as e,l as x,u as R,r as g,e as M,g as P}from"./index-17885651.js";function b(t=p){const s=t===p?F:C(t);return function(){const{store:a}=s();return a}}const E=b();function B(t=p){const s=t===p?E:b(t);return function(){return s().dispatch}}const S=B(),I=o.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
margin: 284px 0 51px;
@media only screen and (min-width: 768px) {
row-gap: 44px;
column-gap: 29px;   
margin: 136px 0 80px;
}
@media only screen and (min-width: 1200px) {
  margin: 40px 0 80px;  
}`,D=o.li`
width: 274px;
height: 426px;
display: flex;
flex-direction: column;
gap: 18px;
`,L=o.div`
position:relative;
width: 274px;
height: 268px;
border-radius: 14px;
overflow: hidden;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,$=o.img`
width: auto;
height: 268px;
`,z=o.div`
width: 100%;
display:flex;
justify-content: space-between;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
`,T=o.div`
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
border: none;
&:hover, &:focus {
    background: #0B44CD;
}
`,f=o.button`
width: 46px;
height: 46px;
position: absolute;
top:0;
right:0;
justify-content: center;
align-items: center;
border:none;
background: transparent;
`,O=t=>t.favorites.items,A=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,W=o.div`
  width: 541px;
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
`,Y=o.p`
width: 100%;
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
`,m=o.p`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`,q=o.p`
line-height: 1.43;
`,j=o.div`
width:100%;
display:flex;
flex-direction:column;
gap: 8px;
font-weight: 500;
line-height: 1.43;
margin-bottom:24px;
`,h=o.span`
display: inline-block;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
letter-spacing: -0.24px;
padding: 7px 14px;
border-radius: 35px;
background: #F9F9F9;
margin-right: 8px;
`,G=o.a`
height: 48px;
width: 168px;
border-radius: 12px;
background: #3470FF;
display: flex;
padding: 14px 44px;
justify-content: center;
align-items: center;
color: #FFF;
font-weight: 600;
line-height: 1.43;
cursor:pointer;
&:hover, &:focus {
    background: #0B44CD;
}
`,J=o.div`
display:flex;
flex-wrap:wrap;
gap: 8px;
`,y="/CarRental/assets/dummyPhoto-9fcfdba9.jpg",N=({isOpen:t,onClose:s,car:n})=>{if(!t)return null;const a=i=>{i.target===i.currentTarget&&s()};return v.createPortal(e.jsx(A,{onClick:a,children:e.jsxs(W,{children:[e.jsx(K,{onClick:s,children:e.jsx(x.CloseOutline,{color:"#121417",height:"24px",width:"24px"})}),e.jsx(U,{src:n.img,alt:` Photo of a car ${n.make} ${n.model}`,onError:i=>{i.currentTarget.src=y}}),e.jsxs(Y,{children:[n.make," ",e.jsx("span",{style:{color:"#3470FF"},children:n.model}),","," ",n.year]}),e.jsxs(m,{children:[" ",n.address," | Year:",n.year," | Type: ",n.type," | Fuel Consumption: ",n.fuelConsumption," | Engine Size : ",n.engineSize]}),e.jsx(q,{children:n.description}),e.jsxs(j,{children:[e.jsx("span",{children:" Accessories and functionalities:"}),e.jsxs(m,{children:[n.accessories.map((i,r)=>e.jsxs("span",{children:[i," | "]},r)),n.functionalities.map((i,r)=>e.jsxs("span",{children:[i," | "]},r))]})]}),e.jsxs(j,{children:[e.jsx("span",{children:"Rental Conditions:"}),e.jsxs(J,{children:[n.rentalConditions.split(`
`).map((i,r)=>{const[d,l]=i.split(":");return e.jsxs(h,{children:[d," ",l?e.jsxs("span",{style:{color:"#3470FF"},children:[":"," ",l]}):null]},r)}),e.jsxs(h,{children:["Mileage:"," ",e.jsxs("span",{style:{color:"#3470FF"},children:[" ",n.mileage.toLocaleString()]})]}),e.jsxs(h,{children:["Price:"," ",e.jsxs("span",{style:{color:"#3470FF"},children:[" ",n.rentalPrice]})]})]})]}),e.jsx(G,{href:"tel:+380730000000",children:"Rental car"})]})}),document.getElementById("portal-root"))},Q=({car:t})=>{const s=R(O),n=S(),a=()=>{n(M(t))},i=()=>{n(P(t))},r=s.find(function(c){return c.id===t.id}),[d,l]=g.useState(!1),w=()=>{l(!0)},k=()=>{l(!1)},u=c=>{c.key==="Escape"&&l(!1)};return g.useEffect(()=>{if(d)return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[d]),e.jsxs(D,{children:[e.jsx(N,{isOpen:d,onClose:k,car:t}),e.jsxs(L,{children:[e.jsx($,{src:t.img,alt:` Photo of a car ${t.make} ${t.model} `,onError:c=>{c.currentTarget.src=y}}),r?e.jsx(f,{onClick:i,type:"button",children:e.jsx(x.Heart,{color:"#3470FF",height:"18px",width:"18px"})}):e.jsx(f,{onClick:a,type:"button",children:e.jsx(x.HeartOutline,{color:"#fff",height:"18px",width:"18px"})})]}),e.jsxs(z,{children:[e.jsxs("p",{children:[t.make," ",e.jsx("span",{style:{color:"#3470FF"},children:t.model}),","," ",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(T,{children:[t.address," | ",t.rentalCompany," | ",t.type," | ",t.make," | ",t.mileage.toLocaleString()," | ",t.functionalities[0]]}),e.jsx(H,{type:"button",onClick:w,children:"Learn more"})]})},X=({cars:t})=>e.jsx(I,{children:t.map(s=>e.jsx(Q,{car:s},s.id))});export{X as C,O as s,S as u};
