import{s as c,r as s,f as i,u as l,j as e}from"./index-c3ec2581.js";import{u,C as d}from"./CarsList-3e01fd05.js";const h=t=>t.cars.items,x=c.button`
background:none;
border: none;
text-align: center;
color: #3470FF;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
text-decoration-line: underline;
`,g=()=>{const[t,o]=s.useState(1),n=u();s.useEffect(()=>{n(i(t))},[t]);const a=()=>{o(t+1)},r=l(h);return e.jsxs("div",{children:[e.jsx("h1",{children:"Catalog"}),e.jsx(d,{cars:r}),e.jsx(x,{type:"button",onClick:a,children:"Load More"})]})};export{g as default};
