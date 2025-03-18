import{c as i,R as O,ap as C,j as e,p as m,q as _,w as R,a0 as $}from"./index-C7S2opxg.js";import{S as G}from"./SideBar-CMh59n1d.js";import{u as M}from"./useModal-B393pcNL.js";import"./index-Cd0fIeT7.js";import"./index-Cma3xYg2.js";const E=()=>{var y,b,v,k,I;const[h,w]=i.useState([]),[g,f]=i.useState([]),[N,u]=O(C),l=window.sessionStorage.getItem("restaurantId"),{Modal:a,open:c,close:x,eventData:s}=M({title:"주문 정보를 확인해주세요"});i.useEffect(()=>{(async()=>{const t={restaurantId:l};try{const n=await m.get("/api/admin/restaurant/order/reservation",{params:t}),d=n.data.resultData;console.log(n),console.log(d);const o=d.map(p=>p.orderDetails?p.orderDetails:[]);console.log(o.flat()),w([...d]),f([...o.flat()]),j()}catch(n){console.log(n)}})()},[]);const j=()=>u(r=>!r),S=async()=>{console.log(s);const r={orderId:s.orderId,reservationStatus:1};try{const t=await m.put("/api/admin/restaurant/order/reservation/status",r);console.log(t),_.fire({title:"주문을 승인했습니다!",text:"사용자 결제완료 후 테이블 목록에 추가됩니다",icon:"success"}),x(),j()}catch(t){console.log(t)}},L=async()=>{const r={orderId:s.orderId,reservationStatus:2};try{const t=await m.put("/api/order/access",r);console.log(t),x(),j()}catch(t){console.log(t)}};return e.jsx("div",{className:"flex flex-col w-2/5 h-dvh border-l-2 bg-white border-l-gray shadow-xl",children:e.jsxs("div",{className:"w-100% h-dvh",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex w-100% h-100% flex-col text-center pt-10 text-2xl mb-6 font-semibold",children:"새로운 주문"}),e.jsxs("div",{className:"flex w-full items-center justify-between px-6 py-2 border-b border-gray",children:[e.jsx("span",{className:"flex w-[30%] justify-center text-darkGray",children:"주문번호"}),e.jsx("span",{className:"flex w-[40%] justify-center text-darkGray",children:"메뉴"}),e.jsx("span",{className:"flex w-[30%] justify-center text-darkGray",children:"주문시간"})]})]}),e.jsx("ul",{className:"flex flex-col w-[100%] h-[100%] gap-4 pt-3 text-nowrap",children:h.map((r,t)=>{var n,d;return r.length===0?e.jsx("li",{className:"flex w-full items-center justify-between px-6 py-2",children:e.jsx("span",{children:"새로운 주문이 없습니다"})},r):e.jsxs("li",{onClick:()=>c(r),className:"flex w-full items-center justify-between px-6 py-2 border-b border-gray",children:[e.jsx("span",{className:"flex w-[30%] justify-center text-black",children:r.orderId}),e.jsx("span",{className:"flex flex-col w-[30%] justify-center text-black",children:r.orderDetails.map((o,p)=>e.jsx("div",{className:"truncate",children:o==null?void 0:o.menuName},p))}),e.jsx("span",{className:"flex w-[30%] justify-center text-black",children:(d=(n=r.orderDetails[0])==null?void 0:n.createdAt.split(" "))==null?void 0:d[1].slice(0,5)})]},t)})}),e.jsx(a,{children:e.jsxs("div",{className:"flex flex-col w-full h-full justify-between",children:[e.jsxs("div",{className:"flex flex-col w-full h-[60%] gap-4 pt-10 items-center",children:[e.jsxs("div",{className:"flex w-full px-10 gap-3",children:[e.jsx("span",{className:"flex w-[25%]",children:"주문번호"}),e.jsx("span",{className:"text-xl",children:s==null?void 0:s.orderId})]}),e.jsxs("div",{className:"flex w-full px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"주문한 메뉴"}),e.jsx("span",{className:"text-xl",children:((b=(y=s==null?void 0:s.orderDetails)==null?void 0:y[0])==null?void 0:b.menuName)||"메뉴 정보 없음"})]}),e.jsxs("div",{className:"flex w-full px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"주문한 사람"}),e.jsx("span",{className:"text-xl",children:s==null?void 0:s.userName})]}),e.jsxs("div",{className:"flex w-full px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"핸드폰 번호"}),s.userPhone===null?e.jsx("span",{className:"text-darkGray",children:"등록된 번호가 없어요"}):e.jsx("span",{className:"text-xl",children:(I=(k=(v=s==null?void 0:s.userPhone)==null?void 0:v.replace(/[^0-9]/g,""))==null?void 0:k.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3"))==null?void 0:I.replace(/(-{1,2})$/g,"")})]}),e.jsxs("div",{className:"flex w-full h-[20%] px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"인원 수"}),e.jsxs("span",{className:"text-xl",children:[s==null?void 0:s.reservationPeopleCount," 명"]})]})]}),e.jsxs("div",{className:"flex w-full justify-center gap-10 mb-10",children:[e.jsx("div",{onClick:S,className:"bg-blue px-2 py-1 rounded-md text-nowrap text-white font-medium",children:"주문 승인"}),e.jsx("div",{onClick:L,className:"bg-red px-2 py-1 rounded-md text-nowrap text-white font-medium",children:"주문 취소"})]})]})})]})})},H=()=>{const[h,w]=i.useState(!0),[g,f]=i.useState([]),N=sessionStorage.getItem("restaurantId"),u=R();return i.useEffect(()=>{const l={restaurantId:N};(async()=>{try{const c=await m.get("/api/admin/restaurant/order",{params:l,headers:{Authorization:`Bearer ${u}`}});console.log(c.data.resultData);const x=c.data.resultData;f([...x])}catch(c){console.log(c)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full h-full bg-gray",children:e.jsx("div",{className:"w-100% h-[calc(100%_-_4rem)] mx-4 my-8 bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide",children:e.jsx("div",{className:"flex flex-wrap ml-5 mt-5 gap-4 bg-white justify-start",children:g.map(l=>e.jsxs("div",{className:`${h?"w-[calc(33%_-_1rem)]":"w-[calc(25%_-_1rem)]"} min-w-40 h-48 border-2 border-darkGray bg-white cursor-pointer`,children:[e.jsxs("div",{className:" px-4 py-1 bg-third",children:[e.jsxs("div",{className:"flex justify-between items-center gap-3",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("span",{className:"text-sm text-nowrap",children:"주문번호"}),e.jsx("span",{className:"text-lg",children:l.orderId})]}),e.jsxs("span",{className:"font-semibold text-nowrap",children:[l==null?void 0:l.orderDetails.reduce((a,c)=>a+c.price,0).toLocaleString("ko-KR")," ","원"]})]}),e.jsxs("div",{className:"flex gap-2 tracking-wider items-center",children:[e.jsx("span",{className:"text-sm",children:"주문시간"}),e.jsxs("span",{className:"text-md",children:[$(l.reservationTime).format("HH:MM")," ~"]})]})]}),e.jsxs("div",{className:"px-3 py-3",children:[l.orderDetails.map((a,c)=>e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:a==null?void 0:a.menuName}),e.jsxs("span",{children:["x",a==null?void 0:a.menuCount]})]},c)),e.jsx("div",{className:"pt-1 pl-6 text-darkGray",children:l.menuInfo})]})]},l.orderId))})})}),e.jsx(E,{})]})},q=()=>e.jsxs("div",{className:"flex w-full h-dvh overflow-hidden scrollbar-hide justify-between",children:[e.jsx(G,{}),e.jsx(H,{})]});export{q as default};
