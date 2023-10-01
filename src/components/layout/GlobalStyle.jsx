import { createGlobalStyle } from "styled-components";
import mixins from 'components/style/mixins';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'NexonMaplestory';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/NexonMaplestory/NexonMaplestoryLight.woff') format('woff');
    font-display: swap;
}

@font-face {
    font-family: 'nexonLv1Gothic';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-display: swap;
}

html{
  &.small{font-size: 15px;}
  &.default{font-size: 16px;}
  &.large{font-size: 17.5px;}
}

body{background-color: var(--bgColor); touch-action: pan-y;
  &.noScroll{overflow-x: hidden;
    &::-webkit-scrollbar{display: none;}
  }
}

body,html{margin: 0;padding: 0; color: #000; -webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-text-size-adjust: 100%;
-moz-text-size-adjust : none; -o-text-size-adjust : none; -webkit-touch-callout:none;}
:where(html, body, div, span, object,h1, h2, h3, h4, h5, h6, p, blockquote, a, button, abbr, address, img, q,dl, dt, dd, ol, ul, li,fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,article, aside, footer, header, section, summary){
  margin:0;padding:0;border:0;
}  
:where(article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section){display: block;}
ol,ul,li{list-style: none;}
table{border-collapse: collapse;border-spacing: 0;}
a{text-decoration: none;color: inherit;}
address{font-style: normal;}
button{display: inline-block;border: none;background-color: transparent;cursor: pointer;}
caption,hr{display:none;}
pre{word-break:break-all;white-space:pre-line;margin: 0;}
*{box-sizing: border-box;}
img{-webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-select: none; display: block; -webkit-touch-callout:none; pointer-events: none;
  &:not([loading="lazy"]){width: 100%; height: auto;}
}
.hidden{display: block; width: 0;height: 0; margin: 0; padding: 0; line-height: 0; font-size: 0;overflow: hidden;}
figure{margin: 0;}
figcaption{position: absolute; clip: rect(0 0 0 0); width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;}
h1,h2,h3,h4,h5,h6{font-weight: normal;}

/* mobile scroll */
::-webkit-scrollbar {-webkit-appearance: none; -webkit-overflow-scrolling: auto;}
::-webkit-scrollbar:vertical {width: 14px;}
::-webkit-scrollbar:horizontal {height: 14px;}
/*---*/

::-webkit-scrollbar{width: 14px;}
::-webkit-scrollbar-button{display: none;}
::-webkit-scrollbar-track{background-color: var(--scrollbarTrack);}
::-webkit-scrollbar-thumb {border: solid transparent; background-clip: padding-box; 
border-radius: 8px; background-color: var(--scrollbar);}

.eps{width: 100%; max-width: 100%; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;
    &.type01{display: table; table-layout: fixed; width: 100%; white-space: nowrap;
        >*{display: table-cell; overflow: hidden; text-overflow: ellipsis;}
    }
}

.scY{overflow-y: auto;
  &::-webkit-scrollbar {width: 5px;}
  &::-webkit-scrollbar-thumb {border: 0; border-radius: 10px; background-color: var(--scrollbar);}
}

table{width: 100%;
  td{height: 40px; font-size: 1rem; font-family: 'nexonLv1Gothic'; text-align: center; 
  border: 1px solid #ddd; border-top: 0;}

  &.style01{
    tr{
      td{
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(5),
        &:nth-of-type(6),
        &:nth-of-type(7),
        &:nth-of-type(8),
        &:nth-of-type(9),
        &:nth-of-type(10){
            color: #000;
        }

        &:nth-of-type(5),
        &:nth-of-type(6),
        &:nth-of-type(7),
        &:nth-of-type(8),
        &:nth-of-type(9){
            background-color: #ececec;
        }

        &:first-of-type{
            border-left: 0; 
            border-top-left-radius: 4px; 
            color: #fff;
            background-color: ${({ theme }) => theme.bgColors.scalettRed};
        }

        &:nth-of-type(2) {
            border-bottom-color: #000;
            background-color: ${({ theme }) => theme.bgColors.yellow2};
        }

        &:nth-of-type(3) {
            border-bottom-color: #000;
            background-color: ${({ theme }) => theme.bgColors.gray2};
        }

        &:nth-of-type(4) {
            border-bottom-color: #000;
            background-color: ${({ theme }) => theme.bgColors.brown2};
        }
        
        &:nth-of-type(10) {
            border-bottom-color: #000;
            background-color: ${({ theme }) => theme.bgColors.softRed};
        }

        &:last-of-type{
            border-right: 0; border-top-right-radius: 4px;
        }
      }

      ~tr{
        td{border-top: 0; border-bottom: 0; 
            &:first-of-type{
                border-top-left-radius: 0; 
                border-bottom-left-radius: 4px;
            }
            &:last-of-type{
                border-top-right-radius: 0; 
                border-bottom-right-radius: 4px;
            }
            &:nth-of-type(5), &:nth-of-type(6), &:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9){
                border-bottom: 1px solid #ddd;
            }
        }
      }
    }
  }
}

.swiper-slide{
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
  }
}

.full{
  ${mixins.whFull};
  ${mixins.fc};
}

${({ theme }) => theme.laptopL`
    br{
      display: inline-block;
      content: " ";
      padding: 0 2px;
    }
`};

${({ theme }) => theme.laptop`
   .mini{
      &::-webkit-scrollbar-thumb {border-radius: 0; background-color: #C0C0C0;}
      
      &X{overflow-y: hidden;
        &::-webkit-scrollbar {height: 10px;}
      }

      &Y{overflow-x: hidden;
        &::-webkit-scrollbar {width: 5px;}
      }
    }
`};

${({ theme }) => theme.tablet`
    body,html{
      user-select: none;
    }
`};
`;

export default GlobalStyle;