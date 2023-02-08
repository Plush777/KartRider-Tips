# Kartrider-archive
카트라이더를 기억하고 기록하는 공간. 카트라이더 아카이브

디자인 : https://www.figma.com/file/qYIvf9SGHXZzqOvyfqfQuB/KARTRIDER-ARCHIVE?node-id=29%3A153&t=pTPgmPkWqcSNZFE2-1 <br/><br/>

목표 배포일 : 4월 2일
<br/><br/>
## 📁폴더 구조

<br/>

### ✨components : 한 페이지에 쓰이는 레이아웃들을 역할별로 쪼개서 넣어둔 폴더

- article : 독립적으로 쓰이는 컴포넌트들
- layout : 페이지를 구성하는 기본 요소들
- style : 페이지의 스타일들을 정의한 폴더 (추후 sub style 다시 정리 필요)
- sub : 서브 페이지들을 각 카테고리에 맞게 정의한 폴더
- svg : svg 이미지들

<br/>

### 📒data : 페이지마다 쓰이는 데이터들을 역할별로 쪼개서 넣어둔 폴더

- gnb : gnb 데이터
- kartbody : 카트바디 페이지에 쓰이는 데이터
- mode : 모드 페이지에 쓰이는 데이터
- tab : 탭에 쓰이는 데이터

<br/>

### 🛠️Meta : 페이지마다 쓰이는 메타데이터들 모아둔 폴더

### 🎇redux : 공통으로 쓰이는 상태들 모아둔 폴더
- 상태가 많아지면 추후에 폴더 세분화할 예정
### 🔋Routes : 라우트와 관련된 컴포넌트 모아둔 폴더
<br/>

```
📦src
 ┣ 📂components
 ┃ ┣ 📂article
 ┃ ┃ ┣ 📜BtnTop.jsx
 ┃ ┃ ┣ 📜MainBox.jsx
 ┃ ┃ ┗ 📜VisualCenter.jsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Gnb.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Visual.jsx
 ┃ ┣ 📂style
 ┃ ┃ ┣ 📜Footer.style.js
 ┃ ┃ ┣ 📜Header.style.js
 ┃ ┃ ┣ 📜MainBox.style.js
 ┃ ┃ ┣ 📜mixins.js
 ┃ ┃ ┣ 📜Sub.style.js
 ┃ ┃ ┣ 📜SubTab.style.js
 ┃ ┃ ┣ 📜SubVisual.style.js
 ┃ ┃ ┣ 📜theme.js
 ┃ ┃ ┣ 📜Visual.style.js
 ┃ ┃ ┗ 📜VisualCenter.style.js
 ┃ ┣ 📂sub
 ┃ ┃ ┣ 📂item
 ┃ ┃ ┃ ┣ 📜ItemContents.jsx
 ┃ ┃ ┃ ┗ 📜SubItem.jsx
 ┃ ┃ ┣ 📂kartbody
 ┃ ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┃ ┣ 📜Star.jsx
 ┃ ┃ ┃ ┃ ┣ 📜SubCommonContents.jsx
 ┃ ┃ ┃ ┃ ┗ 📜SubCommonKartbody.jsx
 ┃ ┃ ┣ 📂speed
 ┃ ┃ ┃ ┣ 📜SpeedConents.jsx
 ┃ ┃ ┃ ┗ 📜SubSpeed.jsx
 ┃ ┃ ┣ 📜SubTab.jsx
 ┃ ┃ ┗ 📜SubVisual.jsx
 ┃ ┣ 📂svg
 ┃ ┃ ┣ 📜ico-kart-logo-black.svg
 ┃ ┃ ┣ 📜ico-kart-logo-grayscale.svg
 ┃ ┃ ┗ 📜ico-kart-logo-white.svg
 ┃ ┣ 📜Main.jsx
 ┃ ┗ 📜Notfound.jsx
 ┣ 📂data
 ┃ ┣ 📂gnb
 ┃ ┃ ┗ 📜gnb.js
 ┃ ┣ 📂kartbody
 ┃ ┃ ┣ 📂advanced
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┗ 📜contents.json
 ┃ ┃ ┣ 📂epic
 ┃ ┃ ┣ 📂legend
 ┃ ┃ ┗ 📂rare
 ┃ ┣ 📂mode
 ┃ ┃ ┣ 📂itemMode
 ┃ ┃ ┃ ┗ 📜contents.json
 ┃ ┃ ┗ 📂speedMode
 ┃ ┃ ┃ ┗ 📜contents.json
 ┃ ┗ 📂tab
 ┃ ┃ ┗ 📜tab.json
 ┣ 📂fonts
 ┃ ┣ 📂notoSans
 ┃ ┃ ┣ 📂woff
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Black-Hestia.woff
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Bold-Hestia.woff
 ┃ ┃ ┃ ┣ 📜NotoSansKR-DemiLight-Hestia.woff
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Light-Hestia.woff
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Medium-Hestia.woff
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Regular-Hestia.woff
 ┃ ┃ ┃ ┗ 📜NotoSansKR-Thin-Hestia.woff
 ┃ ┃ ┗ 📂woff2
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Black-Hestia.woff2
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Bold-Hestia.woff2
 ┃ ┃ ┃ ┣ 📜NotoSansKR-DemiLight-Hestia.woff2
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Light-Hestia.woff2
 ┃ ┃ ┃ ┣ 📜NotoSansKR-Medium-Hestia.woff2
 ┃ ┃ ┃ ┗ 📜NotoSansKR-Regular-Hestia.woff2
 ┃ ┣ 📂tmon
 ┃ ┃ ┣ 📂woff
 ┃ ┃ ┃ ┗ 📜TmonMonsori.woff
 ┃ ┃ ┗ 📂woff2
 ┃ ┃ ┃ ┗ 📜TmonMonsori.woff2
 ┃ ┗ 📂WEB_NEXON_Lv1_Gothic
 ┃ ┃ ┣ 📂woff
 ┃ ┃ ┃ ┣ 📜NEXON_Lv1_Gothic.woff
 ┃ ┃ ┃ ┣ 📜NEXON_Lv1_Gothic_Bold.woff
 ┃ ┃ ┃ ┗ 📜NEXON_Lv1_Gothic_Light.woff
 ┃ ┃ ┗ 📂woff2
 ┃ ┃ ┃ ┣ 📜NEXON_Lv1_Gothic.woff2
 ┃ ┃ ┃ ┣ 📜NEXON_Lv1_Gothic_Bold.woff2
 ┃ ┃ ┃ ┗ 📜NEXON_Lv1_Gothic_Light.woff2
 ┣ 📂Meta
 ┃ ┗ 📜MetaTag.js
 ┣ 📂redux
 ┃ ┗ 📂store
 ┃ ┃ ┗ 📜store.js
 ┣ 📂Routes
 ┃ ┗ 📜RouteScroll.jsx
 ┣ 📜App.jsx
 ┣ 📜App.test.js
 ┣ 📜font.scss
 ┣ 📜GlobalStyle.jsx
 ┣ 📜index.js
 ┣ 📜index.scss
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
 ```