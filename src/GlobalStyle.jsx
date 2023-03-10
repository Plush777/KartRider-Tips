import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`

body,html{margin: 0;padding: 0; color: #000; -webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-text-size-adjust: 100%;
-moz-text-size-adjust : none; -o-text-size-adjust : none;}
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
img{-webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-select: none; display: block;
width: 100%; height: auto;}
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
::-webkit-scrollbar-track{background: transparent;}
::-webkit-scrollbar-thumb {border: solid transparent; background-clip: padding-box; 
border-radius: 8px; box-shadow: rgb(0 0 0 / 11%) 0px 0px 100px inset;}

.scY{overflow-y: auto;
  &::-webkit-scrollbar {width: 5px;}
  &::-webkit-scrollbar-thumb {border: 0; border-radius: 10px; background-color: ${({theme}) => theme.colors.rgbaBlack}}
}

table{width: 100%;
  td{height: 40px; font-size: 1rem; font-family: 'nexonLv1Gothic'; text-align: center; 
  border: 1px solid #ddd; border-top: 0;}

  &.style01{
    tr{
      td{
        &:first-of-type{border-left: 0; border-top-left-radius: 4px;}
        &:last-of-type{border-right: 0; border-top-right-radius: 4px;}
      }
      ~tr{
        td{border-top: 0; border-bottom: 0; 
          &:first-of-type{border-top-left-radius: 0; border-bottom-left-radius: 4px;}
          &:last-of-type{border-top-right-radius: 0; border-bottom-right-radius: 4px;}
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
    background-color: rgba(0,0,0,0.3);
  }
}

${({ theme }) => theme.laptopL`
    br{
      display: inline-block;
      content: " ";
      padding: 0 2px;
    }
`};
`;

export default GlobalStyle;