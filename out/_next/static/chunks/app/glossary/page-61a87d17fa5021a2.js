(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{3374:function(n,e,t){"use strict";var r,i=t(2265);function o(){return(o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}e.Z=function(n){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"current",height:"current",fill:"current",viewBox:"0 0 256 256"},n),r||(r=i.createElement("path",{d:"M69.55 254.307a9.806 9.806 0 0 1-6.956-2.88c-3.84-3.84-3.84-10.069 0-13.907l109.66-109.663-109.66-109.66c-3.84-3.842-3.84-10.069 0-13.91 3.842-3.839 10.069-3.839 13.91 0l116.615 116.615c3.841 3.838 3.841 10.068 0 13.907L76.504 251.424a9.797 9.797 0 0 1-6.955 2.883z"})))}},1383:function(n,e,t){"use strict";var r,i=t(2265);function o(){return(o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}e.Z=function(n){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"current",height:"current",fill:"current",viewBox:"0 0 256 256"},n),r||(r=i.createElement("path",{d:"M186.164 254.307a9.806 9.806 0 0 0 6.955-2.88c3.841-3.84 3.841-10.069 0-13.907L83.459 127.857l109.66-109.66c3.841-3.842 3.841-10.069 0-13.91-3.841-3.839-10.068-3.839-13.91 0L62.594 120.902c-3.84 3.838-3.84 10.068 0 13.907L179.21 251.424a9.797 9.797 0 0 0 6.955 2.883z"})))}},2422:function(n,e,t){Promise.resolve().then(t.bind(t,7638))},7638:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return q}});var r=t(4670),i=t(7437),o=t(2853),a=t(6978),d=t(756),s=t(1070),c=t(5870),l=t(1341),u=t(9614),p=t(7858),g=t(2265),f=t(1997),h=t(5672),m=t(3198),x=t(8983),v=t(995),b=t(346),w=t(5573),j=t(230),k=t(2369),Z=t(3067);function y(){var n=(0,j._)(['\n    position: absolute;\n    width: 410px;\n    height: 500px;\n    transform-origin: 0 0;\n    transition: transform 1.4s;\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    box-shadow: 3px 7px 12px rgba(0, 0, 0, 0.253);\n\n    &:nth-child(odd){\n        pointer-events: all;\n        transform: rotateY(0deg);\n        right: 0;\n    }\n\n    &:nth-child(even){\n        pointer-events: none;\n        transform: rotateY(180deg);\n        transform-origin: 100% 0;\n        left: 0;\n    }\n\n    &.flipped:nth-child(odd){\n        transform: rotateY(-180deg);\n        pointer-events: none;\n    }\n\n    &.flipped:nth-child(even){\n        transform: rotateY(0deg);\n        pointer-events: all;\n    }\n\n    &.first{\n        background: url("/images/common/img-book-front.jpg") no-repeat center;\n        background-size: 410px 500px;\n        z-index: 6;\n    }\n\n    &.end{\n        background: url("/images/common/img-book-back.webp") no-repeat center;\n        background-size: auto 500px;\n        z-index: 6;\n\n        &:nth-child(odd),&:nth-child(even){\n            pointer-events: none;\n            transform: rotateY(180deg);\n            transform-origin: 100% 0;\n            left: 0;\n            right: auto;\n\n            &.flipped{\n                transform: rotateY(0deg);\n                pointer-events: all;\n            }\n        }\n    }\n\n    &:not(.first):not(.end){\n        background: url(\'/images/common/img-paper.webp\') no-repeat center;\n    }\n\n    @media (max-width: 1300px){\n        &:nth-child(odd),&:nth-child(even){\n            pointer-events: none;\n            transform: rotateY(180deg);\n            transform-origin: 100% 0;\n            left: 0;\n            right: auto;\n            z-index: 1;\n\n            &.flipped{\n                transform: rotateY(0deg);\n                pointer-events: all;\n            }\n        }\n\n        &.first{\n            pointer-events: all;\n            left: auto;\n            right: 0;\n            transform: rotateY(0deg);\n            transform-origin: 0 100%;\n\n            &.flipped{\n                transform: rotateY(-180deg);\n                pointer-events: none;\n            }\n        }\n    }\n\n    @media (max-width: 820px){\n        width: 100%;\n        height: 100%;\n        \n        &.first{\n            background-size: 100% 100%;\n        }\n\n        &:not(.first):not(.end){\n            background-size: 100%;\n        }\n\n        &.end{\n            background-size: auto 100%;\n        }\n    }\n']);return y=function(){return n},n}function _(){var n=(0,j._)(["\n        height: auto;\n    "]);return _=function(){return n},n}function z(){var n=(0,j._)(["\n    perspective: 2000px;\n    max-width: 820px;\n    height: 500px;\n    transition: margin-left .3s ease-in-out;\n    transform-style: preserve-3d;\n\n    &.active{\n        margin-left: 220px;\n    }\n\n    &.closed{\n        margin-left: 440px;\n    }\n\n    @media (max-width: 1300px){\n        ",";\n        margin: 0 auto;\n\n        &.active,&.closed{\n            margin: 0 auto;\n        }\n    }\n\n    @media (max-width: 820px){\n        width: 100%;\n        max-width: none;\n    }\n\n    ","\n"]);return z=function(){return n},n}function P(){var n=(0,j._)(["\n        padding-bottom: 107.067%;\n    "]);return P=function(){return n},n}function N(){var n=(0,j._)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    transform-style: preserve-3d;\n    backface-visibility: hidden;\n\n    @media (max-width: 1300px){\n        width: 50%;\n    }\n\n    @media (max-width: 820px){\n        width: 100%;\n    }\n\n    ","\n"]);return N=function(){return n},n}function O(){var n=(0,j._)(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    width: 50px;\n    height: 50px;\n"]);return O=function(){return n},n}function S(){var n=(0,j._)(["\n    left: auto;\n    right: 0;\n"]);return S=function(){return n},n}function C(){var n=(0,j._)(["\n    text-align: center;\n    color: #000;\n    ","\n    font-weight: 600;\n    font-size: ",";\n    padding-top: 15px;\n"]);return C=function(){return n},n}function E(){var n=(0,j._)(["\n    padding: 12px 8px;\n    overflow-y: auto;\n    max-height: calc(100% - 33px);\n\n    &::-webkit-scrollbar{\n        width: 11px;\n    }\n\n    &::-webkit-scrollbar-thumb{\n        background-color: #666;\n    }\n    \n    &::-webkit-scrollbar-track{\n        background-color: transparent;\n    }\n"]);return E=function(){return n},n}function Y(){var n=(0,j._)(["\n    font-size: ",";\n    ","\n    word-break: keep-all;\n    line-height: 18px;\n\n    &+&{\n        margin-top: 20px;\n    }\n"]);return Y=function(){return n},n}var I=k.ZP.div.withConfig({componentId:"sc-7772cf44-0"})(y()),T=k.ZP.div.withConfig({componentId:"sc-7772cf44-1"})(z(),Z.ZP.jcc,function(n){return n.theme.mobile(_())}),L=k.ZP.div.withConfig({componentId:"sc-7772cf44-2"})(N(),function(n){return n.theme.mobile(P())}),M=k.ZP.button.attrs({type:"button"}).withConfig({componentId:"sc-7772cf44-3"})(O());(0,k.ZP)(M).withConfig({componentId:"sc-7772cf44-4"})(S());var G=k.ZP.h2.withConfig({componentId:"sc-7772cf44-5"})(C(),Z.ZP.font("nexonLv1Gothic","#000"),function(n){return n.theme.fontSizes.f16}),R=k.ZP.div.withConfig({componentId:"sc-7772cf44-6"})(E()),W=k.ZP.p.withConfig({componentId:"sc-7772cf44-7"})(Y(),function(n){return n.theme.fontSizes.f14},Z.ZP.font("nexonLv1Gothic","#222"));t(6356),t(3374),t(1383),t(1606);var B=t(3272);t(9126),t(7725);var F=function(){var n=(0,r._)((0,g.useState)(!1),2),e=n[0],t=n[1],o=(0,r._)((0,g.useState)(!1),2),a=o[0],d=o[1],s=(0,h.$G)().t,c=Object.keys(B.glossary),l=c.length+2,u=[s("glossaryTitle.detail1"),s("glossaryTitle.detail2")],p=[B.glossary.speedTerm,B.glossary.itemTerm],f=["glossary.speedTerm","glossary.itemTerm"],m=(0,r._)((0,g.useState)(0),2),x=m[0],v=m[1],j=(0,r._)((0,g.useState)({prev:!1,next:!1}),2),k=j[0],Z=j[1];return(0,g.useEffect)(function(){x>0?(t(!0),Z({prev:!1})):t(!1),x>=l?(t(!1),d(!0)):d(!1)},[x,t,Z,d]),(0,g.useEffect)(function(){0===x?Z({prev:!0}):x===l?Z({next:!0}):Z({prev:!1,next:!1})},[x,l]),console.log(x),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{className:"".concat(e?"active":""," ").concat(a?"closed":""),children:(0,i.jsxs)(L,{children:[(0,i.jsx)(I,{className:x>=1?"first flipped":"first"}),c.map(function(n,e){return(0,i.jsxs)(I,{className:x>=e+2?"flipped":"",children:[(0,i.jsx)(G,{children:u[e]}),(0,i.jsx)(R,{children:Object.values(p[e]).map(function(n,t){return(0,i.jsx)(W,{children:(0,b.ZP)(s("".concat(f[e],".group").concat(t+1,".detail")))},n.id)})})]},e)}),(0,i.jsx)(I,{className:x>=l?"end flipped":"end"})]})}),(0,i.jsxs)(w.Z7,{cg:"10px",children:[(0,i.jsx)(w.un,{radius:"4px",onClick:function(){window.innerWidth<=1300&&x>0?v(x-1):v(x-2),window.innerWidth<=1300&&2===x&&v(x-2)},color:"#fff",fontSize:"0.875rem",border:"none",height:"44px",padding:"0 19.67px",background:"#333",className:k.prev?"disabled":"",children:s("book.prev")}),(0,i.jsx)(w.un,{onClick:function(){window.innerWidth<=1300?v(x+1):v(x+2),(window.innerWidth<=1300&&0===x||1===x)&&v(x+2)},radius:"4px",color:"#fff",fontSize:"0.875rem",border:"none",height:"44px",padding:"0 19.67px",background:"#333",className:k.next?"disabled":"",children:s("book.next")})]})]})},$=function(){var n=(0,m.v9)(function(n){return n.toggle.clipBoard});return(0,h.$G)().t,(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{active:n&&"active"}),(0,i.jsx)(u.mz,{children:(0,i.jsx)(v.Z,{active:n&&"active"})}),(0,i.jsx)(p.Eq,{children:(0,i.jsxs)(p.Nh,{children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(F,{})}),(0,i.jsx)(x.Z,{}),(0,i.jsx)(f.Z,{})]})})]})};function q(){var n=(0,r._)((0,g.useState)(window.localStorage.getItem("theme")),2),e=n[0],t=n[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{themeMode:e,setThemeMode:t}),(0,i.jsxs)(p.or,{id:"main",children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)($,{}),(0,i.jsx)(a.Z,{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(d.Z,{themeMode:e})]}),(0,i.jsx)(u.RE,{children:(0,i.jsx)(l.Z,{})})]})}},3272:function(n){"use strict";n.exports=JSON.parse('{"glossary":{"speedTerm":{"group1":{"id":1,"detail":"닐빌드: 평범한 길이 아닌, 평소라면 갈 수 없을 것 같은 곳을 어떻게든 개척해서 궁극적으로는 기록을 줄이는 것을 목표로 하는 빌드. 대만의 \'NEAL\'이라는 프로게이머가 이런 빌드를 처음으로 찾아내서 닐빌드라고 지어졌으며, 이제는 닐이 발견하지 않아도 특이한 길로 간다면 닐빌드라는 이름이 붙는다."},"group2":{"id":2,"detail":"드립, 드맆: 드리프트."},"group3":{"id":3,"detail":"드랲: 드래프트."},"group4":{"id":4,"detail":"삽: 너무 무리하게 인코스를 파는 등의 이유로 벽에 충돌하는 것."},"group5":{"id":5,"detail":"삽킬: 앞서가던 상대방이 벽에 충돌했는데 미처 피하지 못하고 벽에 충돌한 상대방과 충돌하는 것. 또는 뒷 순위를 견제하기 위해 일부러 인코스에서 충돌하는 것."},"group6":{"id":6,"detail":"손딜: 연타 속도가 빨라서 노딜로 착각할 정도로 부스터 딜레이가 굉장히 짧은 경우를 유저들 사이에서 자조적으로 부르는 말이다."},"group7":{"id":7,"detail":"노딜: \'노 딜레이(No Delay)\' 매크로 프로그램을 이용하여 자동으로 부스터 키를 눌러주는 것. 이렇게 되면 부스터와 부스터 사이의 딜레이가 줄어들고, 딜레이가 줄어들면 결론적으로 그 동안의 감속도 줄어드는 셈이 되기 때문에 많은 논란거리가 되고 있다."},"group8":{"id":8,"detail":"순부: 순간 부스터."},"group9":{"id":9,"detail":"스탑, 스탑카트: 뒷쪽의 상대방을 견제하기 위해서 카트를 일부러 멈춰 충돌을 유도하는 행위. 과거에는 비매너였으나 현재는 아예 멈추는 것이 아니라면 하나의 몸싸움으로 인정해 주고 있는 분위기다. 리그에서도 후진 키를 누르는 게 아니라면 허용되고 있다."},"group10":{"id":10,"detail":"운동장: 길이 넓고 대부분이 평지 위주인 트랙. 이 때문에 톡톡이를 쓰기가 쉽다."},"group11":{"id":11,"detail":"유령: 플레이어의 인터넷 회선이 불안정하면 카트라이더 시스템은 비주얼 면에서 자연스럽도록 처리하기 위해 연결이 끊긴 당시의 가속도를 가진 플레이어의 잔상을 만드는데, 이를 일컫는 말. 이 잔상은 피격 판정이 있다."},"group12":{"id":12,"detail":"원투: 스피드 팀전에서 한 팀이 1등과 2등을 연달아 하는 것. 상대 팀이 3-4-5-6위를 기록하고 우리 팀 2명이 완주하지 못했다 하더라도 무조건 승리할 수 있다."},"group13":{"id":13,"detail":"작업: 스피드 팀전 계열에서 상대방의 순위를 끌어내리기 위해 몸싸움을 하는 것."},"group14":{"id":14,"detail":"직부: 직진 부스터. 코너를 도는 상대방에게 커브를 틀지 않고 직선으로 그냥 때려박는 몸싸움 기술."},"group15":{"id":15,"detail":"키씹: 키보드를 눌렀는데도 인식이 되지 않아 벽에 충돌했거나 드리프트를 하지 못해 라인을 잃었을 때."},"group16":{"id":16,"detail":"팀부: 팀전 부스터(파워 부스터)."},"group17":{"id":17,"detail":"팀딜, 딜: 스피드 팀전 중 일반 부스터가 팀 부스터로 바뀌는 데에 걸리는 대기 시간. 이 대기 시간 도중에는 부스터를 사용할 수 없다. 적절한 타이밍에 슬롯 체인저를 사용하여 딜레이를 최소화하는 플레이가 중요."},"group18":{"id":18,"detail":"톡톡이: 코너 구간에서 드리프트를 길게 끌어 카트바디에 가속을 주는 기술."},"group19":{"id":19,"detail":"투부: 복합굴절 구간이나 90도로 급하게 여러번 꺾인 구간 등, 부스터를 끄면서 가야 안정적으로 갈 수 있는 구간에서 최대한 라인을 굴절 한가운데로 가져가 부스터를 쓰면서 지나가는 기술을 말한다. 프로들도 굉장히 까다롭게 구사하는 기술이다. 주로 투부구간이 존재하는 트랙들은 노르테유 익스프레스, 사막 빙글빙글 공사장, 광산 꼬불꼬불 다운힐 정도가 있다."}},"itemTerm":{"group1":{"id":1,"detail":"긁기, 템긁, 템쓸: 한 라인의 아이템 박스를 한명이 다 쓸어담는 행위로, 다른 유저의 아이템<br/>획득을 막는 일종의 비매너 행위."},"group2":{"id":2,"detail":"꽉물: 보통의 아이템전 트랙은 물폭탄 범위보다 길이 더 넓어서 양쪽 끝 (사이드) 으로 주행하면 물폭탄 공격을 안받을 수 있다.<br/>하지만 길 폭이 넓지 않은 경우, 물폭탄 범위에 다 들어오는 경우가 있는데, 이를 지칭하는 말."},"group3":{"id":3,"detail":"떴다: 미사일 피격으로 공중으로 떠오를 때 이를 알리는 콜."},"group4":{"id":4,"detail":"상천: 상대 편이 천사를 썼다는 의미."},"group5":{"id":5,"detail":"막미: 1등이 완주하여 이미 게임이 끝난 상태인데 이 때 미사일을 쏘는 행위.<br/>원작 카트라이더 1에서는 비매너 행위였다."},"group6":{"id":6,"detail":"먹천: 천사를 획득하자마자 바로 쓰는 것."},"group7":{"id":7,"detail":"물: 물폭탄 혹은 물파리 아이템, 물폭탄이나 물파리에 피격되었다는 알림.<br/>다만, 물파리의 경우 파리라고 말하기 때문에 물폭탄을 지칭하는 말로 더 많이 쓰인다."},"group8":{"id":8,"detail":"팀물: 팀원의 물폭탄을 지칭하는 말."},"group9":{"id":9,"detail":"물거리: 물폭탄이 던져지는 거리. 보통은 감에 의존하지만, 고인물들 사이에서는 트랙별, 위치별로 물거리를<br/>외워서 물폭탄을 던진다. 또는 거리 차이가 많이 날 때 물거리 몇개 차이라고 표현하기도 한다."},"group10":{"id":10,"detail":"삑났다: 미사일 혹은 자석 아이템을 조준 중에 있다가, 조준 실패하여 아이템을 날리는 경우를 말한다.<br/>“미사일 삑났어”,”자석 삑났어” 등으로 표현한다."},"group11":{"id":11,"detail":"미찍 or 자찍: 미사일 혹은 자석 아이템을 조준만 하는 것."},"group12":{"id":12,"detail":"바리: 바리케이드 아이템."},"group13":{"id":13,"detail":"빠: 바나나 아이템."},"group14":{"id":14,"detail":"번: 벼락 아이템. 정식 명칭은 벼락이지만 편의 상 번개라고 부른다."},"group15":{"id":15,"detail":"벽미: 미사일을 벽 통과시켜 쏘는 것. 조준점이 빨갛게 되었을 때 쏘면 벽이든 장애물이든 통과해서 적에게 발사되는걸 이용한 기술."},"group16":{"id":16,"detail":"빨다: 자석 아이템을 맞추었거나, 상대 편이 자석 아이템을 사용했을 경우를 의미."},"group17":{"id":17,"detail":"센실: 센터 실드의 줄임말로 상대의 공격을 예측하고 실드를 미리 쓰는 행위. 주로 좁은 꽉물 구간이나<br/>지름길 앞,점프 구간, 결승선 앞에서 많이 사용한다."},"group18":{"id":18,"detail":"천: 천사 아이템. 또는 팀원에게 브리핑 시 천사 아이템을 써달라는 의미로도 사용."},"group19":{"id":19,"detail":"알 (R): 기본 재배치가 R이라서 편의 상 R이라고 부른다. 결승선 앞에서 상대가 자석을 빨았을 때<br/>상대방을 뒤로 끌기위해 사용."},"group20":{"id":20,"detail":"일미: 일등 미사일의 줄임말로, 1등에게 미사일을 쐈다는 의미. 일파 (일등 물파리) 도 같은 의미이다.<br/>(원작에서는 1등 미사일 아이템을 줄여서 부르기도 한다.)"},"group21":{"id":21,"detail":"인빠: 인코스에 바나나를 깔았으니 안 밟게 라인을 바깥쪽으로 파라는 의미."},"group22":{"id":22,"detail":"짜부: 자석과 부스터를 같이 쓰는 것."},"group23":{"id":23,"detail":"칼물: 바로 머리위로 떨어지는 물폭탄. 반응하기 힘들어 물폭탄을 사용할때에 필수 테크닉."},"group24":{"id":24,"detail":"해지: 정식 명칭은 전자파지만 편의 상 우주해지 또는 해지라고 부른다."}}}}')}},function(n){n.O(0,[148,781,685,806,346,725,817,188,280,971,596,744],function(){return n(n.s=2422)}),_N_E=n.O()}]);