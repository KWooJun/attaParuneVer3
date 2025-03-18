import{R as v,aE as R,aF as E,w as D,c as n,u as H,ag as S,af as C,p as f,q as A,j as t,D as Q}from"./index-C7S2opxg.js";import{Q as T}from"./index-BGMEpNCu.js";import{M as z}from"./MenuBar-DoFWzcot.js";import"./index-dD2W0IHS.js";import"./index-BSzk3Vef.js";const _=()=>{var m,h,p;const[i,g]=v(R),[a,k]=v(E),u=D(),j=sessionStorage.getItem("userId"),[x,w]=n.useState({couponW:0,visualH:0,infoH:0}),[W,N]=n.useState(0),$=H();S();const{id:I}=C(),o=n.useRef(null),l=n.useRef(null),b=()=>{const s=o.current,e=s.clientWidth,c=l.current,r=s.clientHeight,d=c.clientHeight;s.style.clipPath=`path('M0 0 L0 ${r-5} Q10 ${r-5} 10 ${r} L ${e-10} ${r} Q${e-10} ${r-5} ${e} ${r-5} L${e} 0 Z')`,c.style.clipPath=`path('M10 0 Q10 10 0 10 L0 ${d} L${e} ${d} L${e} 10 Q${e-10} 10 ${e-10} 0 Z')`};n.useLayoutEffect(()=>{x.couponW>0&&requestAnimationFrame(()=>{b()})},[x]),n.useEffect(()=>{const s=()=>{o.current&&l.current&&w({couponW:o.current.clientWidth,visualH:o.current.clientHeight,infoH:l.current.clientHeight})};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),n.useEffect(()=>{(!i||i<=0)&&y()},[]),n.useEffect(()=>{i&&i>0&&L(i)},[i]);const y=async()=>{const s={userId:j};try{const e=await f.get("/api/order/ticket/ticketOne",{params:s,headers:{Authorization:`Bearer ${u}`}});console.log("API 응답:",e.data);const c=e.data.resultData;c?g(c):console.warn("유효한 티켓 ID가 없습니다.")}catch(e){console.error("티켓 ID를 가져오는 중 오류 발생:",e)}},L=async s=>{try{const e=await f.get("/api/order/ticket",{params:{ticketId:s},headers:{Authorization:`Bearer ${u}`}});console.log("티켓 데이터 : ",e.data.resultData.ticket),k(e.data.resultData.ticket)}catch(e){console.error("티켓 데이터를 가져오는 중 오류 발생:",e),alert("티켓 정보를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.")}};return n.useEffect(()=>{const s=setInterval(async()=>{const e={ticketId:i};try{const r=(await f.get("/api/order/ticket",{params:e,headers:{Authorization:`Bearer ${u}`}})).data.resultData.ticket;console.log("티켓 데이터 : ",r.ticketStatus),r.ticketStatus===1&&(N(1),clearInterval(s),A.fire({title:"식권이 사용되었어요",icon:"success",confirmButtonText:"확인",allowOutsideClick:!1}).then(d=>{d.isConfirmed&&$("/user")}))}catch(c){console.error("티켓 상태 조회 실패:",c)}},3e3);return()=>clearInterval(s)},[i]),t.jsxs("div",{className:"flex flex-col w-full h-dvh px-10 pt-20 overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[t.jsx("section",{id:"visual",ref:o,className:"overflow-visible",children:t.jsxs("div",{className:"gap-4 pb-4 flex flex-col items-center justify-center bg-gray rounded-t-2xl border-b-4 border-dotted border-darkGray",children:[t.jsx("div",{className:"w-full text-center bg-primary rounded-t-2xl p-6 text-white font-bold",children:t.jsx("span",{className:"font-bold text-4xl text-nowrap",children:a.restaurantName})}),t.jsxs("div",{className:"flex flex-col w-full items-center",children:[t.jsx("span",{className:"text-base -ml-44 text-nowrap",children:"식권 발급 시간"}),t.jsxs("div",{className:"flex text-2xl text-center font-semibold gap-8",children:[t.jsx("span",{className:"flex tracking-widest",children:(m=a==null?void 0:a.reservationTime)==null?void 0:m.split(" ")[0]}),t.jsx("span",{className:"flex tracking-widest",children:(p=(h=a==null?void 0:a.reservationTime)==null?void 0:h.split(" ")[1])==null?void 0:p.slice(0,5)})]})]}),t.jsxs("div",{className:"flex flex-col w-full items-center gap-2",children:[t.jsxs("span",{className:"text-2xl",children:[a.menuNames[0],"외  ",a.menuNames.length-1,"개"]}),t.jsxs("span",{className:"text-4xl font-bold tracking-wider",children:[a.totalAmount.toLocaleString("ko-KR"),"원"]}),t.jsxs("span",{className:"text-xl",children:[a.personCount,"명 결제"]})]})]})}),t.jsx("section",{id:"info",ref:l,children:t.jsx("div",{className:"p-10 flex flex-col justify-center items-center bg-gray rounded-b-2xl",children:t.jsx("div",{className:"flex w-full justify-center items-center ",children:t.jsx(T,{value:`${Q}/store/request?ticketId=${I}&restaurantId=${a.restaurantId}`,size:180,bgColor:"none"})})})}),t.jsx("div",{className:"text-xl underline text-center mt-10 pb-16",children:"예약 취소는 매장으로 문의해주세요"}),t.jsx(z,{})]})};export{_ as default};
