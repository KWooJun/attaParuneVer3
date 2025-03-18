import{a9 as E,c,u as M,d as _,z as q,j as e,A as B,p as g,N as u,B as m,q as O}from"./index-C7IDMRLB.js";import{S as U}from"./SideBar-LHlr-Z3T.js";import{h as z}from"./index.esm-DktHDQrE.js";import{c as P}from"./index-ydYAXTdr.js";import{R as K}from"./quill.snow-BioxtEoY.js";import{u as V}from"./useModal-Bkx5xisA.js";import"./index-CN4ghhxF.js";import"./isEqual-CwlUOuli.js";function Q(d){return E({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,9 L12,2 L19,9"},child:[]}]})(d)}const W=B({restaurantName:m().required("매장명은 필수입력 항목입니다"),restaurantAddress:m().required("매장주소는 필수입력 항목입니다"),restaurantNumber:m().required("전화번호는 필수입력 항목입니다"),startTime:m(),endTime:m(),status:u(),maxCapacity:u(),lat:u(),lng:u()}),J=()=>{var y;const[d,N]=c.useState([]),[x,j]=c.useState([]),[b,v]=c.useState({}),[l,C]=c.useState({}),p=c.useRef(null),f=sessionStorage.getItem("restaurantId"),{Modal:I,open:h,close:k}=V({title:"주소검색"}),S=M(),{register:o,handleSubmit:T,setValue:r,formState:{errors:A}}=_({resolver:q(W),defaultValues:{restaurantName:l.restaurantName,restaurantAddress:"",restaurantNumber:"",restaurantDescription:"",status:0,maxCapacity:0},mode:"onChange"}),w=async()=>{try{const s={restaurantId:f},a=await g.get("/api/restaurant",{params:s});console.log(a),console.log(a.data.resultData);const t=a.data.resultData;C(t)}catch(s){console.log(s)}};c.useEffect(()=>{w()},[]),c.useEffect(()=>{if(l&&l.operatingHours){const[s,a]=l.operatingHours.split("~").map(t=>t.trim());r("startTime",s),r("endTime",a)}r("lat",l.lat),r("lng",l.lng),r("restaurantName",l.restaurantName),r("restaurantDescription",l.restaurantDescription),r("restaurantAddress",l.restaurantAddress),r("restaurantNumber",l.restaurantNumber),r("operatingHours",l.operatingHours),r("maxCapacity",l.maxCapacity),r("status",l.status)},[l]);const D=s=>{const a=s.target.files;console.log(a);const t=[...a];N([...t]);const n=t.map(i=>URL.createObjectURL(i));j([...n]),p.current&&(p.current.value="")};console.log(x),console.log("요거다!!!!!!!",d);const F=s=>{const a=x.indexOf(s);a!==-1&&(N(t=>t.filter((n,i)=>i!==a)),j(t=>t.filter((n,i)=>i!==a)),console.log(d))},R=async s=>{try{const t=await(await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(s)}`,{headers:{Authorization:"KakaoAK c39062d8559862a0fe376de133d3af0c"}})).json();if(t.documents.length>0){const{x:n,y:i}=t.documents[0];r("lat",i),r("lng",n)}}catch(a){console.error("Error fetching coordinates:",a)}},G=async s=>{console.log(s);let a=s.address,t="";const n=s.zonecode;s.addressType==="R"&&(s.bname!==""&&(t+=s.bname),s.buildingName!==""&&(t+=t!==""?`, ${s.buildingName}`:s.buildingName),a+=t!==""?` (${t})`:""),await R(a),k(),v({fullAddress:a,zoneCode:n}),console.log(a),r("restaurantAddress",a)},L=async s=>{try{await g.patch("/api/admin/restaurant",s),w(),O.fire({title:"매장 정보가 수정되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(a=>{a.isConfirmed&&S("/store")})}catch(a){console.log(a)}},$=async s=>{try{await g.post(`/api/admin/restaurant/v3/pic?restaurantId=${f}`,s,{headers:{"Content-Type":"multipart/form-data"}}),console.log("이미지 데이터",s)}catch(a){console.log(a)}},H=s=>{const a=`${s.startTime} ~ ${s.endTime}`;console.log(a);const t={restaurantId:parseInt(f),restaurantName:s.restaurantName,restaurantAddress:s.restaurantAddress,restaurantNumber:s.restaurantNumber,operatingHours:a,restaurantDescription:s.restaurantDescription,status:s.status,maxCapacity:s.maxCapacity,lat:s.lat,lng:s.lng},n=new FormData;d.map(i=>{n.append("picName",i)}),console.log("ImgData 확인:",[...n.entries()]),$(n),L(t),console.log("patchStoreData!!!!!!!!!",t),console.log(s)};return e.jsx("div",{className:"flex w-[calc(100%_-_11rem)] h-full bg-gray justify-center items-center",children:e.jsx("div",{className:"flex w-[96.5%] h-[calc(100%_-_4rem)] bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide",children:e.jsx("form",{className:"flex w-full justify-evenly",onSubmit:T(H),children:e.jsxs("div",{className:"flex flex-col w-full h-full p-10 gap-6",children:[e.jsx("span",{className:"text-2xl",children:"매장정보 수정"}),e.jsxs("div",{className:"flex w-full gap-2",children:[e.jsxs("label",{htmlFor:"inputImg",className:"flex flex-col w-36 h-32 border border-darkGray items-center justify-center gap-2 cursor-pointer",children:[e.jsx(Q,{className:"w-6 h-6"}),e.jsx("span",{className:"text-lg",children:"이미지 업로드"}),e.jsx("span",{className:"text-sm",children:"최대 6개까지"})]}),e.jsx("input",{type:"file",id:"inputImg",multiple:!0,ref:p,onChange:s=>D(s),accept:"image/png, image/jpeg",className:"hidden"}),e.jsx("div",{className:"flex w-[80%] gap-2 justify-start",children:x.map((s,a)=>e.jsxs("div",{className:"relative",children:[e.jsx(P,{className:"absolute flex p-1 text-3xl right-0.5 text-black cursor-pointer",onClick:()=>F(s)}),e.jsx("img",{src:s,alt:"",className:"w-32 h-32"})]},a))})]}),e.jsxs("div",{className:"flex w-1/2 gap-11 items-center",children:[e.jsx("span",{className:"text-darkGray",children:"가게 이름"}),e.jsx("input",{type:"text",className:"border-b px-2 max-w-48 outline-none",...o("restaurantName")})]}),e.jsxs("div",{className:"flex w-full h-full gap-11 items-center",children:[e.jsx("span",{className:"text-darkGray",children:"가게 설명"}),e.jsx(K,{value:l.restaurantDescription,onChange:s=>{r("restaurantDescription",s)},className:"flex flex-col w-2/3 h-full",readOnly:!1,modules:{toolbar:!1}})]}),e.jsxs("div",{className:"flex flex-col w-[45%] gap-2",children:[e.jsxs("div",{className:"flex gap-11",children:[e.jsx("label",{htmlFor:"",className:"text-nowrap text-darkGray",children:"전화 번호"}),e.jsx("input",{type:"tel",maxLength:12,className:"border-b px-2 w-40 outline-none",placeholder:"00(0)-000(0)-0000",...o("restaurantNumber")})]}),e.jsx("p",{className:"text-red w-60",children:(y=A.restaurantNumber)==null?void 0:y.message})]}),e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("label",{className:"text-darkGray block",children:"주소"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("input",{type:"text",className:"border rounded-md px-2 w-60",onClick:()=>h(),value:b?b.fullAddress:"",...o("restaurantAddress")}),e.jsx("button",{type:"button",className:"px-2 py-1 border rounded-md",onClick:()=>h(),children:"주소찾기"})]}),h?e.jsx(I,{children:e.jsx(z,{onComplete:s=>G(s)})}):e.jsx(e.Fragment,{})]}),e.jsxs("div",{className:"flex w-[45%] gap-4",children:[e.jsx("label",{htmlFor:"",className:"text-nowrap text-darkGray",children:"최대 수용인원"}),e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx("input",{type:"number",className:"border px-2 rounded-md w-12 text-end",...o("maxCapacity")}),e.jsx("span",{children:"명"})]})]}),e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex flex-col w-1/2 gap-2",children:[e.jsx("label",{htmlFor:"",className:"w-[15%] text-nowrap text-darkGray",children:"영업 시간"}),e.jsxs("div",{className:"flex gap-[15px] w-60",children:[e.jsx("label",{htmlFor:"openTime",children:"오픈시간"}),e.jsx("input",{type:"time",id:"openTime",className:"w-[130px] border px-2 rounded-md",...o("startTime")})]}),e.jsxs("div",{className:"flex gap-[15px] w-60",children:[e.jsx("label",{htmlFor:"closedTime",children:"마감시간"}),e.jsx("input",{type:"time",id:"closedTime",className:"w-[130px] border px-2 rounded-md",...o("endTime")})]})]}),e.jsxs("fieldset",{className:"flex w-1/2",children:[e.jsx("legend",{htmlFor:"",className:"w-[15%] text-nowrap text-darkGray",children:"영업 상태"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"radio",id:"open",className:"border px-2 rounded-md",value:0,onChange:()=>r("status",0),...o("status")}),e.jsx("label",{htmlFor:"open",className:"w-16",children:"영업중"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"radio",id:"break",className:"border px-2 rounded-md",value:1,onChange:()=>r("status",1),...o("status")}),e.jsx("label",{htmlFor:"break",className:"w-28",children:"브레이크타임"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"radio",id:"closed",className:"border px-2 rounded-md",value:9,onChange:()=>r("status",9),...o("status")}),e.jsx("label",{htmlFor:"closed",className:"w-20",children:"영업종료"})]})]})]}),e.jsx("div",{className:"flex flex-col w-[45%] gap-2",children:e.jsx("div",{className:"flex gap-1 items-center",children:e.jsx("button",{className:"bg-primary px-4 py-1 rounded-lg text-white",type:"submit",children:"수정완료"})})})]})})})})},le=()=>e.jsxs("div",{className:"flex w-full h-dvh overflow-hidden scrollbar-hide justify-between",children:[e.jsx(U,{}),e.jsx(J,{})]});export{le as default};
