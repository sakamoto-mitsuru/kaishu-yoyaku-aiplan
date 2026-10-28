const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./heic2any-DeScvsm4.js","./vendor-DeuZR1BC.js"])))=>i.map(i=>d[i]);
import{j as e,_ as xe}from"./index-B_dv5xxJ.js";import{i as he}from"./browser-image-compression-DILJcqf6.js";import{m as ue,n as ge,j as fe,r as x}from"./vendor-DeuZR1BC.js";import{a as be}from"./index.esm-DpnrEcOg.js";import{D as ye,r as H,c as _}from"./preNeedMyNoteEventAssistedDraft-C-R3MVBl.js";import{j as ee,o as E,B as K}from"./GlobalToast-zbs3-dSv.js";import"./lazyImport-MaBEaidp.js";import{u as J,a as te}from"./useEventCrmDemo-Al7fOLa4.js";import{w as L,C as Ne}from"./preNeedMyNoteEventContext-96RKCWnm.js";import{p as v,a as je}from"./LegacyBootstrap-CBhubFcB.js";import{T as ve}from"./triangle-alert-ChMFFcis.js";import{C as we}from"./chevron-right-Dh8rKpCK.js";import"./amplify-DNd1v532.js";import"./antd-Dp5aZBC_.js";import"./format-Bq-oN8ze.js";import"./prefecture-CCORwHms.js";import"./Portrait-Dag6kX2K.js";import"./portraitImage-DQhftNzu.js";import"./heic2any-DeScvsm4.js";import"./Img-DKgNbRRZ.js";import"./request-BBV-0yFD.js";import"./stripe-CH2uswN8.js";import"./FileSaver.min-C9jHjZs6.js";import"./download-BVuBqFdb.js";import"./Select-GSaqH8W2.js";import"./mockOfferProducts-CvTFdEW3.js";import"./LPLayout-D8c-okyI.js";import"./loadLegacyStylesheets-BkaJEeS7.js";import"./funeralContact-CpwFbWpr.js";import"./sagawaLegalNotation-Bad5U82q.js";import"./memoleadAddress-eRpg5Z9s.js";import"./serviceOutage-RCau9DIa.js";import"./sms-jOqJXhKc.js";import"./paymentDueNotice-BZUPkfKL.js";import"./pure-DCjeatwR.js";import"./useReceiptReady-Dbvz_WVR.js";import"./npPostPaymentErrors-UBN7cL27.js";import"./npPaymentDueNotice-DWoE6ZFt.js";import"./index-DzhyO0s1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],ae=ee("mic",Se);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ke=ee("pencil",Ie),q="preNeedMyNoteCreatedPostContext",Y=()=>{try{return window.sessionStorage}catch{return null}},se=()=>{const t=Y();if(!t)return null;try{const a=t.getItem(q);if(!a)return null;const s=JSON.parse(a);return!s.eventId||!s.companyId||!s.postId?null:{eventId:s.eventId,companyId:s.companyId,postId:s.postId,updatedAt:s.updatedAt??""}}catch{return null}},Ce=t=>{const a=Y();if(a)try{a.setItem(q,JSON.stringify({...t,updatedAt:new Date().toISOString()}))}catch{}},T=()=>{const t=Y();if(t)try{t.removeItem(q)}catch{}},re=t=>`eventCrmDemoUserId:${t}`,ne=(t,a)=>`eventCrmDemoUserId:${t}:${a}`,O=(t,a)=>{if(!a||typeof window>"u")return null;try{const s=window.localStorage.getItem(re(a))??(t?window.localStorage.getItem(ne(t,a)):null);if(!s)return null;const n=JSON.parse(s);return typeof n.demoUserId!="string"||!n.demoUserId||typeof n.displayName!="string"||!n.displayName||typeof n.createdAt!="string"||!n.createdAt?null:{demoUserId:n.demoUserId,displayName:n.displayName,createdAt:n.createdAt}}catch{return null}},X=(t,a,s)=>{if(!(!a||typeof window>"u"))try{const n=O(t,a),i={demoUserId:s.demoUserId,displayName:s.displayName,createdAt:(n==null?void 0:n.createdAt)??new Date().toISOString()};window.localStorage.setItem(re(a),JSON.stringify(i)),t&&window.localStorage.setItem(ne(t,a),JSON.stringify(i))}catch{}},f={welcome:{id:"01",title:"ウェルカム画面",pathLabel:"page-welcome",description:"会場名と来場者への挨拶を表示する予定のページです。",next:v.record},record:{id:"02",title:"記録画面",pathLabel:"page-record-create",description:"写真追加とメモ入力を行う予定のページです。",previous:v.welcome,next:v.share},share:{id:"03",title:"伝える選択",pathLabel:"share-choice",description:"いま伝える、いつか伝える、自分だけに残す、の分岐を選ぶ予定のページです。",previous:v.record,next:v.family},family:{id:"04",title:"家族選択",pathLabel:"family-select",description:"いま伝える場合に、伝える相手を選ぶ予定のページです。",previous:v.share,next:v.complete},complete:{id:"05",title:"完了画面",pathLabel:"complete",description:"選択した残し方に応じた完了状態を表示する予定のページです。",previous:v.family}},Pe="./pre-need/my-note/start-writing.png",Me="./pre-need/my-note/start-sharing.png",Ue="./pre-need/my-note/start-support.png",Ee="./pre-need/my-note/start-post.png",Ae="./pre-need/my-note/start-speaking.png",De="./pre-need/my-note/my-note-logo.png",D="./pre-need/my-note/home-sakura-street.jpg",_e=30*1024*1024,Te={maxSizeMB:3,maxWidthOrHeight:2048,useWebWorker:!0,fileType:"image/jpeg"},Le=t=>new Promise((a,s)=>{const n=new FileReader;n.onload=()=>{if(typeof n.result=="string"){a(n.result);return}s(new Error("file read failed"))},n.onerror=()=>s(n.error??new Error("file read failed")),n.readAsDataURL(t)}),Oe=t=>{var s;const a=(s=t.name.split(".").pop())==null?void 0:s.toLowerCase();return a==="heic"||a==="heif"||t.type==="image/heic"||t.type==="image/heif"||t.type==="image/heic-sequence"||t.type==="image/heif-sequence"},Re=async t=>{const{default:a}=await xe(async()=>{const{default:i}=await import("./heic2any-DeScvsm4.js").then(p=>p.h);return{default:i}},__vite__mapDeps([0,1]),import.meta.url),s=await a({blob:t,toType:"image/jpeg",quality:.92}),n=Array.isArray(s)?s[0]:s;return new File([n],t.name.replace(/\.(heic|heif)$/i,".jpg"),{type:"image/jpeg",lastModified:Date.now()})},U=[{line1:"あなたらしく綴る",line2:`あなたの「物語」を
綴って、残して`,imageSrc:Pe},{line1:"安心の共有設定",line2:`勝手に公開も共有もしません
見せたい人に、その時に`,imageSrc:Me},{line1:"大切な人の支えに",line2:`その言葉が、いつか誰かにとって
宝物になる日が来ます`,imageSrc:Ue},{line1:"かんたん投稿",line2:`写真を選ぶ、ひとこと添える
それだけでも思い出に`,imageSrc:Ee},{line1:"話して投稿",line2:`話した内容を読みやすく
あなたらしい文章に整えます`,imageSrc:Ae}],$e=4500,ze=`
.my-note-start-shell {
  background-color: #ffffff;
  background-image: url("./pre-need/my-note/my-note-start-background.png");
  background-position: center top;
  background-repeat: repeat-y;
  background-size: min(100%, 460px) auto;
}

.my-note-start-viewport {
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
}

@supports (height: 100svh) {
  .my-note-start-viewport {
    height: 100svh;
    max-height: 100svh;
    min-height: 100svh;
  }
}

@supports (height: 100dvh) {
  .my-note-start-viewport {
    height: 100dvh;
    max-height: 100dvh;
    min-height: 100dvh;
  }
}

.my-note-start-shell-plain {
  background-image: none;
}

.my-note-start-welcome {
  padding-bottom: max(clamp(20px, 4svh, 36px), calc(env(safe-area-inset-bottom) + 16px));
  padding-top: clamp(16px, 3.2svh, 32px);
}

.my-note-start-logo {
  height: clamp(38px, 5.6vh, 48px);
  width: auto;
  max-width: min(82vw, 300px);
  object-fit: contain;
}

.my-note-start-slide-logo {
  height: clamp(26px, 4vh, 34px);
  margin-bottom: clamp(8px, 1.4vh, 12px);
  width: auto;
  max-width: min(58vw, 210px);
  object-fit: contain;
}

.my-note-start-copy {
  font-size: clamp(18px, 2.4svh, 20px) !important;
  line-height: 1.65;
  margin-top: clamp(16px, 2.8svh, 24px);
  height: clamp(72px, 9svh, 80px);
}

.my-note-start-copy-text {
  font-size: inherit !important;
  line-height: inherit;
}

.my-note-start-hero {
  flex: 1 1 auto;
  height: min(38svh, 420px);
  min-height: 0;
  margin-top: clamp(18px, 3svh, 28px);
}

.my-note-start-dots {
  margin-top: clamp(10px, 2svh, 18px);
}

.my-note-start-actions {
  margin-top: clamp(14px, 2.4svh, 24px);
}

.my-note-start-button {
  font-size: 16px;
  height: clamp(46px, 6svh, 54px);
}

.my-note-start-primary-button {
  background-color: rgb(49, 112, 186) !important;
  color: #ffffff !important;
}

.my-note-start-primary-button:hover {
  background-color: rgb(41, 96, 163) !important;
}

@media (min-aspect-ratio: 1/2) {
  .my-note-start-welcome {
    padding-bottom: max(28px, calc(env(safe-area-inset-bottom) + 20px));
    padding-top: 18px;
  }

  .my-note-start-copy {
    font-size: 18px !important;
    line-height: 1.65;
    margin-top: 16px;
    height: 76px;
  }

  .my-note-start-hero {
    height: min(40svh, 390px);
    margin-top: 18px;
  }

  .my-note-start-dots {
    margin-top: 8px;
  }

  .my-note-start-actions {
    gap: 10px;
    margin-top: 10px;
  }

  .my-note-start-button {
    height: clamp(44px, 6svh, 50px);
    font-size: 16px;
  }
}

@media (max-height: 700px) {
  .my-note-start-hero {
    height: clamp(280px, 42svh, 320px);
    margin-top: 14px;
  }

  .my-note-start-button {
    height: 44px;
  }
}

@media (min-width: 430px) and (min-height: 850px) {
  .my-note-start-welcome {
    padding-bottom: max(20px, calc(env(safe-area-inset-bottom) + 16px));
    padding-top: 24px;
  }

  .my-note-start-copy {
    margin-top: 22px;
    height: 76px;
  }

  .my-note-start-hero {
    height: min(40svh, 400px);
    margin-top: 24px;
  }

  .my-note-start-dots {
    margin-top: 14px;
  }

  .my-note-start-actions {
    margin-top: 28px;
  }

  .my-note-start-button {
    height: 50px;
  }
}
`,Be=[{id:"photo",title:"写真で投稿",description:`写真を選んで
思い出を残します`,Icon:Ne,accentClassName:"bg-[#ff8a2a] text-white",cardClassName:"border-[#f6c991] bg-[#fff8ed]"},{id:"voice",title:"話して投稿",description:`話すだけで
文章にしてくれます`,Icon:ae,accentClassName:"bg-[#2f80ed] text-white",cardClassName:"border-[#bfdbff] bg-[#eff7ff]"},{id:"text",title:"文字だけ投稿",description:`短い文章を
そのまま残せます`,Icon:ke,accentClassName:"bg-[#6abf4b] text-white",cardClassName:"border-[#bedfb2] bg-[#f2fbef]"}],Z=t=>{if(!t)return 0;const a=Date.parse(t);return Number.isNaN(a)?0:a},oe=(t,a)=>{var s;return(s=t==null?void 0:t.generatedMessage)!=null&&s.trim()?a?Z(t.updatedAt)>=Z(a.updatedAt):!0:!1},W=[{id:"now",label:"いま伝える",title:"家族に今すぐ届ける",nextLabel:"相手を選ぶ",nextPath:v.family},{id:"later",label:"いつか伝える",title:"大切な時まで預ける",nextLabel:"この内容で保存",nextPath:v.complete},{id:"private",label:"自分だけに残す",title:"自分のノートにしまう",nextLabel:"自分だけに保存",nextPath:v.complete}],Fe=[{id:"kenichi",name:"健一さん",relation:"長男",description:"日々の記録や写真を共有する相手",initial:"健"},{id:"sakura",name:"さくらさん",relation:"孫",description:"写真や短いメッセージを届けたい相手",initial:"桜"},{id:"takashi",name:"隆さん",relation:"次男",description:"大切なことを必要な時に見てもらう相手",initial:"隆"},{id:"miki",name:"美紀さん",relation:"長女",description:"家族の近況とあわせて伝えたい相手",initial:"美"}],I=({primary:t,secondary:a,className:s})=>[t,a].filter(i=>!!i).length===0?null:e.jsxs("div",{className:E("mt-auto grid shrink-0 gap-2.5 px-page pb-[max(18px,calc(env(safe-area-inset-bottom)+12px))] pt-4",s),children:[t&&e.jsx(K,{fullWidth:!0,size:"lg",disabled:t.disabled,onClick:t.onClick,className:"my-note-start-button my-note-start-primary-button",children:t.label}),a&&e.jsx(K,{fullWidth:!0,size:"lg",variant:a.variant??"secondary",disabled:a.disabled,onClick:a.onClick,className:"my-note-start-button",children:a.label})]}),Ve=({eventId:t,onStart:a,onExistingUser:s})=>{const[n,i]=x.useState(!1),[p,l]=x.useState(0),[h,b]=x.useState(!1),j=U[p],o=()=>{l(m=>m===0?U.length-1:m-1)},u=()=>{l(m=>(m+1)%U.length)};x.useEffect(()=>{if(h)return;const m=window.setInterval(()=>{l(y=>(y+1)%U.length)},$e);return()=>window.clearInterval(m)},[h]);const d=()=>{b(!0)},c=()=>{b(!1)},N=m=>{const y=m.relatedTarget;m.currentTarget.contains(y)||c()},w=()=>{if(!t){i(!0);return}a()};return n?e.jsx("div",{className:"flex h-full min-h-0 flex-col justify-between px-page pb-page pt-12 text-center",children:e.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center",children:[e.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-pill bg-error-bg text-error",children:e.jsx(ve,{"aria-hidden":"true",className:"h-7 w-7"})}),e.jsx("h1",{className:"m-0 mt-stack text-title font-semibold text-text-primary",children:"イベント情報が取得できませんでした"}),e.jsx("p",{className:"m-0 mt-3 text-label leading-6 text-text-secondary",children:"QRコードまたは案内されたURLから、もう一度アクセスしてください。"})]})}):e.jsxs("div",{className:"my-note-start-welcome flex h-full min-h-0 flex-col overflow-hidden px-page",onMouseEnter:d,onMouseLeave:c,onFocus:d,onBlur:N,children:[e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col items-center text-center",children:[e.jsx("img",{src:De,alt:"itowa マイノート",className:"my-note-start-slide-logo"}),e.jsx("h1",{className:"m-0 flex h-[clamp(40px,5.8vh,48px)] items-center justify-center gap-3",children:e.jsx("span",{className:"font-sans-jp text-[clamp(24px,4vh,32px)] font-semibold leading-[1.35] text-text-primary",children:j.line1})}),e.jsx("p",{className:"my-note-start-copy m-0 flex items-center justify-center whitespace-pre-line font-medium text-text-primary","aria-live":h?"polite":"off",children:e.jsx("span",{className:"my-note-start-copy-text",children:j.line2})}),e.jsxs("div",{className:"my-note-start-hero relative aspect-[0.74] max-w-full",children:[e.jsx("img",{src:j.imageSrc,alt:"",className:"relative h-full w-full rounded-[30px] object-cover object-center shadow-[0_18px_40px_rgba(36,28,20,0.14)]"}),e.jsx("button",{type:"button","aria-label":"前の説明を表示",onClick:o,className:"absolute inset-y-0 left-0 w-1/2 rounded-l-[30px] border-0 bg-transparent p-0"}),e.jsx("button",{type:"button","aria-label":"次の説明を表示",onClick:u,className:"absolute inset-y-0 right-0 w-1/2 rounded-r-[30px] border-0 bg-transparent p-0"})]}),e.jsx("div",{className:"my-note-start-dots flex justify-center gap-2","aria-label":"説明スライド",children:U.map((m,y)=>e.jsx("button",{type:"button","aria-label":`${y+1}枚目の説明を表示`,"aria-pressed":p===y,onClick:()=>l(y),className:`h-2.5 rounded-pill border-0 p-0 transition-all ${p===y?"w-7 bg-text-primary":"w-2.5 bg-border-strong"}`},`${m.line1}${m.line2}`))})]}),e.jsx(I,{primary:{label:"＋新しくノートを作成",onClick:w},secondary:{label:"すでに利用中の方",onClick:s},className:"my-note-start-actions px-0 pb-0 pt-0"})]})},We=({companyId:t,eventId:a,onBack:s,onNext:n})=>{const[i,p]=x.useState("select"),l=x.useRef(null),[h,b]=x.useState(D),[j,o]=x.useState(null),[u,d]=x.useState(null),[c,N]=x.useState(""),[w,m]=x.useState(!1),[y,ie]=x.useState(!1),[R,le]=x.useState(`今日は孫と公園に行きました。
ブランコに乗ったり、すべり台で遊んだりして、とても楽しそうでした。また一緒に行きたいです。`),[G,ce]=x.useState(""),[$,de]=x.useState(""),[k,S]=x.useState(null),z=J(),Q=async r=>{var P;const g=(P=r.target.files)==null?void 0:P[0];if(g){o(g.name),d(null),S(null);try{if(g.size>_e){S("画像サイズが大きすぎます。別の画像を選択してください。"),b(D);return}const C=Oe(g)?await Re(g):g,M=await he(C,Te),V=await Le(M);if(V.length>ye){S("画像サイズが大きすぎます。別の画像を選択してください。"),b(D);return}b(V),d(V)}catch{S("画像の読み込みに失敗しました。別の画像を選択してください。"),b(D)}}},me=()=>{if(i==="photo")return c.trim()||"写真を投稿しました";if(i==="voice")return R.trim();const r=G.trim(),g=$.trim();return r&&g?`${r}
${g}`:r||g},pe=async()=>{S(null);const r=me();if(!r){S("本文を入力してください。");return}if(!a){n();return}if(i==="photo"&&j&&!u){S("画像サイズが大きすぎます。別の画像を選択してください。");return}try{const g=O(t,a),P=i==="photo",C=await z.mutateAsync({eventId:a,...t?{companyId:t}:{},demoUserId:g==null?void 0:g.demoUserId,message:r,imageKey:P&&j?`demo-local:${j}`:null,imageDataUrl:P?u:null}),M=C.demoUser.companyId;X(M,a,{demoUserId:C.demoUser.demoUserId,displayName:C.demoUser.displayName}),L({eventId:a,companyId:M}),Ce({eventId:a,companyId:M,postId:C.post.postId}),n()}catch{S("保存に失敗しました。時間をおいてもう一度お試しください。")}},B={label:z.isPending?"保存中...":"保存して次へ",onClick:pe,disabled:z.isPending},F=()=>{S(null),p("select")};return i==="select"?e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden bg-[#fffdf8]",children:[e.jsx("div",{className:"flex min-h-0 flex-1 flex-col px-3 pt-7",children:e.jsx("div",{className:"grid gap-5",children:Be.map(r=>{const g=r.Icon;return e.jsxs("button",{type:"button",onClick:()=>p(r.id),className:E("flex min-h-[148px] items-center gap-5 rounded-[20px] border-2 px-4 py-5 text-left transition active:scale-[0.99]",r.cardClassName),children:[e.jsx("span",{className:E("grid h-[86px] w-[86px] shrink-0 place-items-center rounded-pill",r.accentClassName),children:e.jsx(g,{"aria-hidden":"true",className:"h-12 w-12",strokeWidth:2.4})}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:"block text-[28px] font-bold leading-tight text-text-primary",children:r.title}),e.jsx("span",{className:"mt-4 block whitespace-pre-line text-body font-semibold leading-8 text-text-secondary",children:r.description})]}),e.jsx("span",{className:E("grid h-10 w-10 shrink-0 place-items-center rounded-pill",r.accentClassName),children:e.jsx(we,{"aria-hidden":"true",className:"h-8 w-8",strokeWidth:2.6})})]},r.id)})})}),e.jsx(I,{secondary:{label:"もどる",onClick:s}})]}):i==="photo"?e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden bg-surface",children:[e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col px-4 pt-7",children:[e.jsx("h1",{className:"m-0 text-center text-lead font-semibold text-text-primary",children:"写真で投稿"}),e.jsxs("div",{className:"relative mt-5 overflow-hidden rounded-[12px] border border-border",children:[e.jsx("img",{src:h,alt:"選択中の思い出写真",className:"aspect-[1.36] w-full object-cover object-center"}),e.jsx("input",{ref:l,type:"file",accept:"image/*","aria-label":"思い出写真を選択",className:"sr-only",onChange:Q}),e.jsx("button",{type:"button",onClick:()=>{var r;return(r=l.current)==null?void 0:r.click()},className:"absolute bottom-3 right-3 rounded-pill border border-surface bg-[#2f80ed] px-4 py-2 text-body font-semibold text-white",children:"変更"})]}),e.jsxs("label",{className:"mt-7 block",children:[e.jsx("span",{className:"text-body font-semibold text-text-primary",children:"メモ（自由入力）"}),e.jsx("textarea",{value:c,onChange:r=>N(r.target.value),rows:5,className:"mt-3 w-full resize-none rounded-[12px] border border-border bg-surface px-4 py-4 text-body leading-7 text-text-primary outline-none focus:border-brand",placeholder:"写真について、思い出したことを自由に書きましょう（任意）"})]}),k&&e.jsx("p",{role:"alert",className:"m-0 mt-3 text-label font-semibold text-error",children:k})]}),e.jsx(I,{primary:B,secondary:{label:"もどる",onClick:F}})]}):i==="voice"?e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden bg-surface",children:[e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col px-4 pt-7",children:[e.jsx("h1",{className:"m-0 text-center text-lead font-semibold text-text-primary",children:"話して投稿"}),e.jsxs("div",{className:"relative mt-5 overflow-hidden rounded-[12px] border border-border",children:[e.jsx("img",{src:h,alt:"音声投稿に添える写真",className:"aspect-[1.36] w-full object-cover object-center"}),e.jsx("input",{ref:l,type:"file",accept:"image/*","aria-label":"音声投稿に添える写真を選択",className:"sr-only",onChange:Q}),e.jsx("button",{type:"button",onClick:()=>{var r;return(r=l.current)==null?void 0:r.click()},className:"absolute bottom-3 right-3 rounded-pill border border-surface bg-[#2f80ed] px-4 py-2 text-body font-semibold text-white",children:"変更"})]}),e.jsxs("div",{className:"mt-8 grid place-items-center",children:[e.jsx("div",{className:"grid h-[168px] w-[168px] place-items-center rounded-pill border-[14px] border-[#edf6ff] bg-[#dcecff]",children:e.jsx("button",{type:"button","aria-label":w?"タップして終了":"タップして話す",onClick:()=>m(r=>!r),className:"grid h-[118px] w-[118px] place-items-center rounded-pill border-0 bg-[#2f80ed] text-white",children:e.jsx(ae,{"aria-hidden":"true",className:"h-16 w-16",strokeWidth:2.2})})}),e.jsx("p",{className:"m-0 mt-3 text-body font-semibold text-text-primary",children:w?"タップして終了":"タップして話す"}),w&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"m-0 mt-5 text-body font-semibold text-[#2f80ed]",children:"聞き取り中..."}),e.jsx("div",{className:"mt-2 flex h-9 items-center gap-1 text-[#2f80ed]","aria-hidden":"true",children:[12,22,14,28,18,34,18,28,14,22,12].map((r,g)=>e.jsx("span",{className:"w-1 rounded-pill bg-current",style:{height:r}},`${r}-${g}`))})]})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"m-0 text-lead font-semibold text-text-primary",children:"音声を整理した下書き"}),e.jsx("div",{className:"mt-3 rounded-[14px] border border-border bg-surface px-4 py-4",children:y?e.jsx("textarea",{"aria-label":"音声を整理した下書き",value:R,onChange:r=>le(r.target.value),rows:5,className:"w-full resize-none border-0 bg-transparent p-0 text-body font-semibold leading-8 text-text-primary outline-none"}):e.jsx("p",{className:"m-0 whitespace-pre-line text-body font-semibold leading-8 text-text-primary",children:R})}),!y&&e.jsx(K,{variant:"secondary",className:"mt-4 border-[#b9cfe0] px-8 text-[#2f80ed]",onClick:()=>ie(!0),children:"内容を編集する"})]}),k&&e.jsx("p",{role:"alert",className:"m-0 mt-3 text-label font-semibold text-error",children:k})]}),e.jsx(I,{primary:B,secondary:{label:"もどる",onClick:F}})]}):e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden bg-surface",children:[e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col px-4 pt-7",children:[e.jsx("h1",{className:"m-0 text-center text-lead font-semibold text-text-primary",children:"文字だけ投稿"}),e.jsxs("label",{className:"mt-8 block",children:[e.jsx("span",{className:"text-lead font-semibold text-text-primary",children:"タイトル（任意）"}),e.jsx("input",{"aria-label":"タイトル（任意）",value:G,onChange:r=>ce(r.target.value),className:"mt-4 h-14 w-full rounded-[14px] border border-border bg-surface px-4 text-body text-text-primary outline-none focus:border-brand",placeholder:"例：今日の出来事"})]}),e.jsxs("label",{className:"mt-9 flex min-h-0 flex-1 flex-col",children:[e.jsx("span",{className:"text-lead font-semibold text-text-primary",children:"本文"}),e.jsx("textarea",{"aria-label":"本文",value:$,onChange:r=>de(r.target.value),className:"mt-4 min-h-0 flex-1 resize-none rounded-[14px] border border-border bg-surface px-4 py-4 text-body leading-8 text-text-primary outline-none focus:border-brand",placeholder:`ここに短い文章を入力してください。
気持ちや出来事など、自由に
書きましょう。`,maxLength:500}),e.jsxs("span",{className:"mt-1 block text-right text-label text-text-muted",children:[$.length,"/500"]})]}),k&&e.jsx("p",{role:"alert",className:"m-0 mt-3 text-label font-semibold text-error",children:k})]}),e.jsx(I,{primary:B,secondary:{label:"もどる",onClick:F}})]})},He=({onBack:t,onNext:a})=>{const[s,n]=x.useState("now"),[i,p]=x.useState(null),l=J(),h=te(),b=W.find(d=>d.id===s)??W[0],j=async d=>{var w;const c=H(),N=(w=c==null?void 0:c.generatedMessage)==null?void 0:w.trim();if(!c||!N)return!0;p(null);try{const m=O(c.companyId,c.eventId),y=await l.mutateAsync({eventId:c.eventId,...c.companyId?{companyId:c.companyId}:{},demoUserId:m==null?void 0:m.demoUserId,message:N,imageKey:c.imageKey,imageDataUrl:c.imageDataUrl,shareTiming:d,shareTargetIds:[]});return X(y.demoUser.companyId,c.eventId,{demoUserId:y.demoUser.demoUserId,displayName:y.demoUser.displayName}),L({eventId:c.eventId,companyId:y.demoUser.companyId}),T(),_(),!0}catch{return p("投稿の保存に失敗しました。時間をおいてもう一度お試しください。"),!1}},o=async d=>{const c=H(),N=se();if(oe(c,N)||!N)return j(d);p(null);try{return await h.mutateAsync({postId:N.postId,request:{eventId:N.eventId,companyId:N.companyId,shareTiming:d,shareTargetIds:[]}}),T(),_(),!0}catch{return p("共有設定の保存に失敗しました。時間をおいてもう一度お試しください。"),!1}},u=async()=>{if(b.id==="now"){a(b.nextPath);return}await o(b.id)&&a(b.nextPath)};return e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden px-page pt-7",children:[e.jsx("div",{className:"space-y-2",children:e.jsx("h1",{className:"m-0 text-title font-semibold leading-[1.35] text-text-primary",children:"誰に、いつ伝えますか"})}),e.jsx("div",{className:"mt-section grid gap-stack",role:"radiogroup","aria-label":"伝えるタイミング",children:W.map(d=>{const c=d.id===s;return e.jsx("button",{type:"button",role:"radio","aria-checked":c,onClick:()=>n(d.id),className:`rounded-card border p-card text-left transition ${c?"border-brand bg-brand-light shadow-sm":"border-border bg-surface"}`,children:e.jsxs("span",{className:"flex items-start gap-3",children:[e.jsx("span",{className:`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-pill border ${c?"border-brand bg-brand":"border-border-strong bg-surface"}`,"aria-hidden":"true",children:c&&e.jsx("span",{className:"h-2 w-2 rounded-pill bg-text-on-brand"})}),e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"block text-label font-medium text-accent",children:d.label}),e.jsx("span",{className:"mt-1 block text-lead font-semibold text-text-primary",children:d.title})]})]})},d.id)})}),i&&e.jsx("p",{role:"alert",className:"m-0 mt-3 text-label font-semibold text-error",children:i}),e.jsx(I,{primary:{label:h.isPending||l.isPending?"保存中...":b.nextLabel,onClick:u,disabled:h.isPending||l.isPending},secondary:{label:"もどる",onClick:t,disabled:h.isPending||l.isPending},className:"px-0"})]})},Ke=({onBack:t,onComplete:a})=>{const[s,n]=x.useState(["kenichi","sakura"]),[i,p]=x.useState(null),l=J(),h=te(),b=o=>{n(u=>u.includes(o)?u.filter(d=>d!==o):[...u,o])},j=async()=>{var N;const o=H(),u=(N=o==null?void 0:o.generatedMessage)==null?void 0:N.trim(),d=se(),c=oe(o,d);if(!d||c){if(!o||!u){a();return}p(null);try{const w=O(o.companyId,o.eventId),m=await l.mutateAsync({eventId:o.eventId,...o.companyId?{companyId:o.companyId}:{},demoUserId:w==null?void 0:w.demoUserId,message:u,imageKey:o.imageKey,imageDataUrl:o.imageDataUrl,shareTiming:"now",shareTargetIds:[...s]});X(m.demoUser.companyId,o.eventId,{demoUserId:m.demoUser.demoUserId,displayName:m.demoUser.displayName}),L({eventId:o.eventId,companyId:m.demoUser.companyId}),T(),_(),a()}catch{p("投稿の保存に失敗しました。時間をおいてもう一度お試しください。")}return}p(null);try{await h.mutateAsync({postId:d.postId,request:{eventId:d.eventId,companyId:d.companyId,shareTiming:"now",shareTargetIds:[...s]}}),T(),_(),a()}catch{p("共有設定の保存に失敗しました。時間をおいてもう一度お試しください。")}};return e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden px-page pt-7",children:[e.jsx("div",{className:"space-y-2",children:e.jsx("h1",{className:"m-0 text-title font-semibold leading-[1.35] text-text-primary",children:"伝える相手を選びます"})}),e.jsx("div",{className:"mt-section grid gap-stack","aria-label":"伝える相手",children:Fe.map(o=>{const u=s.includes(o.id);return e.jsx("button",{type:"button","aria-pressed":u,onClick:()=>b(o.id),className:`rounded-card border p-card text-left transition ${u?"border-brand bg-brand-light shadow-sm":"border-border bg-surface"}`,children:e.jsxs("span",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-accent-subtle font-serif-jp text-body font-semibold text-accent",children:o.initial}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsxs("span",{className:"flex items-center justify-between gap-3",children:[e.jsx("span",{className:"text-body font-semibold text-text-primary",children:o.name}),e.jsx("span",{className:`rounded-badge px-2 py-1 text-caption font-medium ${u?"bg-brand text-text-on-brand":"bg-surface-subtle text-text-secondary"}`,children:u?"選択中":"未選択"})]}),e.jsx("span",{className:"mt-1 block text-label font-medium text-accent",children:o.relation}),e.jsx("span",{className:"mt-2 block text-label leading-6 text-text-secondary",children:o.description})]})]})},o.id)})}),i&&e.jsx("p",{role:"alert",className:"m-0 mt-3 text-label font-semibold text-error",children:i}),e.jsx(I,{primary:{label:h.isPending||l.isPending?"保存中...":"この家族に伝える",onClick:j,disabled:s.length===0||h.isPending||l.isPending},secondary:{label:"もどる",onClick:t,disabled:h.isPending||l.isPending},className:"px-0"})]})},Je=({onHome:t})=>e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden px-page pt-7",children:[e.jsx("div",{className:"space-y-2",children:e.jsx("h1",{className:"m-0 text-title font-semibold leading-[1.35] text-text-primary",children:"記録できました"})}),e.jsx("div",{className:"flex flex-1 items-center justify-center pb-24 text-center",children:e.jsxs("div",{children:[e.jsx("div",{className:"mx-auto grid h-14 w-14 place-items-center rounded-pill bg-success text-text-on-brand",children:e.jsx("span",{className:"text-title font-semibold","aria-hidden":"true",children:"✓"})}),e.jsx("h2",{className:"m-0 mt-stack text-lead font-semibold text-text-primary",children:"マイノートに保存しました"})]})}),e.jsx(I,{primary:{label:"ホームへ",onClick:t},className:"px-0"})]}),A=({step:t})=>{const a=ue(),s=ge(),[n]=fe(),i=n.get("eventId")??"",p=n.get("companyId")??"";x.useEffect(()=>{L({eventId:i,companyId:p})},[p,i]);const l=j=>{s({pathname:j,search:a.search})},h=()=>{l(i?v.eventAssistedRecord:v.record)},b=t.id===f.share.id||t.id===f.family.id||t.id===f.complete.id;return e.jsxs("main",{"data-testid":"my-note-start-shell",className:E("my-note-start-shell my-note-start-viewport font-sans-jp text-text-primary",b&&"my-note-start-shell-plain"),children:[e.jsx(be,{children:e.jsxs("title",{children:[t.title," | マイノート"]})}),e.jsx("style",{children:ze}),e.jsxs("section",{className:"my-note-start-viewport mx-auto flex w-full max-w-[460px] flex-col justify-between",children:[t.id===f.welcome.id?e.jsx(Ve,{eventId:i,onStart:h,onExistingUser:()=>s("/my-note")}):t.id===f.record.id?e.jsx(We,{companyId:p,eventId:i,onBack:()=>t.previous&&l(t.previous),onNext:()=>t.next&&l(t.next)}):t.id===f.share.id?e.jsx(He,{onBack:()=>t.previous&&l(t.previous),onNext:l}):t.id===f.family.id?e.jsx(Ke,{onBack:()=>t.previous&&l(t.previous),onComplete:()=>t.next&&l(t.next)}):t.id===f.complete.id?e.jsx(Je,{onHome:()=>s(je.home)}):e.jsxs("div",{className:"space-y-6 p-card",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"m-0 text-label font-medium text-text-secondary",children:"マイノート開始ルート"}),e.jsx("h1",{className:"m-0 text-title font-semibold",children:t.title}),e.jsx("p",{className:"m-0 text-label text-text-secondary",children:t.pathLabel})]}),e.jsxs("div",{className:"rounded-card border border-border-subtle bg-surface-subtle p-card",children:[e.jsxs("p",{className:"m-0 text-caption font-medium text-text-secondary",children:["Step ",t.id]}),e.jsx("p",{className:"m-0 mt-2 text-body leading-7",children:t.description})]}),e.jsxs("dl",{className:"m-0 grid gap-2 text-label",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsx("dt",{className:"text-text-secondary",children:"URL"}),e.jsxs("dd",{className:"m-0 break-all text-right",children:[window.location.pathname,window.location.search]})]}),e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsx("dt",{className:"text-text-secondary",children:"eventId"}),e.jsx("dd",{className:"m-0 break-all text-right",children:i||"未指定"})]})]})]}),t.id!==f.welcome.id&&t.id!==f.record.id&&t.id!==f.share.id&&t.id!==f.family.id&&t.id!==f.complete.id&&e.jsx(I,{primary:{label:"進む",onClick:()=>t.next&&l(t.next),disabled:!t.next},secondary:{label:"もどる",onClick:()=>t.previous&&l(t.previous),disabled:!t.previous}})]})]})},_t=()=>e.jsx(A,{step:f.welcome}),Tt=()=>e.jsx(A,{step:f.record}),Lt=()=>e.jsx(A,{step:f.share}),Ot=()=>e.jsx(A,{step:f.family}),Rt=()=>e.jsx(A,{step:f.complete});export{Rt as MyNoteStartComplete,Ot as MyNoteStartFamilySelect,Tt as MyNoteStartRecordCreate,Lt as MyNoteStartShareChoice,_t as MyNoteStartWelcome};
