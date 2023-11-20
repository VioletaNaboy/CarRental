import{R as p,b as w,c as C,s as o,d as v,j as e,l as h,u as F,r as u,e as R,g as E}from"./index-a71aa897.js";function j(t=p){const s=t===p?w:C(t);return function(){const{store:a}=s();return a}}const M=j();function B(t=p){const s=t===p?M:j(t);return function(){return s().dispatch}}const P=B(),I=o.ul`
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
`,S=o.div`
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
border: none;
&:hover, &:focus {
    background: #0B44CD;
}
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
`,b="/CarRental/assets/dummyPhoto-9fcfdba9.jpg",J=({isOpen:t,onClose:s,car:n})=>{if(!t)return null;const a=i=>{i.target===i.currentTarget&&s()};return v.createPortal(e.jsx(T,{onClick:a,children:e.jsxs(A,{children:[e.jsx(K,{onClick:s,children:e.jsx(h.CloseOutline,{color:"#121417",height:"24px",width:"24px"})}),e.jsx(U,{src:n.img,alt:` Photo of a car ${n.make} ${n.model}`,onError:i=>{i.currentTarget.src=b}}),e.jsxs(W,{children:[n.make," ",e.jsx("span",{style:{color:"#3470FF"},children:n.model}),","," ",n.year]}),e.jsxs(f,{children:[" ",n.address," | Year:",n.year," | Type: ",n.type," | Fuel Consumption: ",n.fuelConsumption," | Engine Size : ",n.engineSize]}),e.jsx(Y,{children:n.description}),e.jsxs(m,{children:[e.jsx("span",{children:" Accessories and functionalities:"}),e.jsxs(f,{children:[n.accessories.map((i,r)=>e.jsxs("span",{children:[i," | "]},r)),n.functionalities.map((i,r)=>e.jsxs("span",{children:[i," | "]},r))]})]}),e.jsxs(m,{children:[e.jsx("span",{children:"Rental Conditions:"}),e.jsx("div",{children:n.rentalConditions.split(`
`).map((i,r)=>{const[l,d]=i.split(":");return e.jsxs(q,{children:[l," ",d?e.jsxs("span",{style:{color:"#3470FF"},children:[":"," ",d]}):null]},r)})})]}),e.jsx(G,{href:"tel:+380730000000",children:"Rental car"})]})}),document.getElementById("portal-root"))},N=({car:t})=>{const s=F(O),n=P(),a=()=>{n(R(t))},i=()=>{n(E(t))},r=s.find(function(c){return c.id===t.id}),[l,d]=u.useState(!1),y=()=>{d(!0)},k=()=>{d(!1)},x=c=>{c.key==="Escape"&&d(!1)};return u.useEffect(()=>{if(l)return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[l]),e.jsxs(D,{children:[e.jsx(J,{isOpen:l,onClose:k,car:t}),e.jsxs(S,{children:[e.jsx($,{src:t.img,alt:` Photo of a car ${t.make} ${t.model} `,onError:c=>{c.currentTarget.src=b}}),r?e.jsx(g,{onClick:i,type:"button",children:e.jsx(h.Heart,{color:"#3470FF",height:"18px",width:"18px"})}):e.jsx(g,{onClick:a,type:"button",children:e.jsx(h.HeartOutline,{color:"#fff",height:"18px",width:"18px"})})]}),e.jsxs(z,{children:[e.jsxs("p",{children:[t.make," ",e.jsx("span",{style:{color:"#3470FF"},children:t.model}),","," ",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(H,{children:[t.address," | ",t.rentalCompany," | ",t.type," | ",t.make," | ",t.mileage," | ",t.functionalities[0]]}),e.jsx(L,{type:"button",onClick:y,children:"Learn more"})]})},V=({cars:t})=>e.jsx(I,{children:t.map(s=>e.jsx(N,{car:s},s.id))});export{V as C,O as s,P as u};
