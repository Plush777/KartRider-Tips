import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
  &.small{font-size: 15px;}
  &.default{font-size: 16px;}
  &.large{font-size: 17.5px;}
}

body{touch-action: pan-y;}

body,html{margin: 0; padding: 0; -webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-text-size-adjust: 100%;
-moz-text-size-adjust : none; -o-text-size-adjust : none; -webkit-touch-callout:none; width: 100%; height: 100%;}
:where(html, body, div, span, object,h1, h2, h3, h4, h5, h6, p, blockquote, a, button, abbr, address, img, q,dl, dt, dd, ol, ul, li,fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,article, aside, footer, header, section, summary){
  margin:0;padding:0;border:0;
}  
:where(article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section){display: block;}
:where(ol,ul,li){list-style: none;}
:where(h1,h2,h3,h4,h5,h6){font-weight: normal;}
table{border-collapse: collapse;border-spacing: 0;}
a{text-decoration: none;color: inherit;}
address{font-style: normal;}
button{display: inline-block;border: none;background-color: transparent;cursor: pointer; font-family: unset;}
pre{word-break:break-all;white-space:pre-line;margin: 0;}
*{box-sizing: border-box;}
img{-webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-select: none; display: block; -webkit-touch-callout:none; pointer-events: none;}
figure{margin: 0;}
figcaption{position: absolute; clip: rect(0 0 0 0); width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;}

/* mobile scroll */
::-webkit-scrollbar {-webkit-appearance: none; -webkit-overflow-scrolling: auto;}
::-webkit-scrollbar:vertical {width: 14px;}
::-webkit-scrollbar:horizontal {height: 14px;}
/*---*/

::-webkit-scrollbar{width: 14px;}
::-webkit-scrollbar-button{display: none;}
::-webkit-scrollbar-track{background-color: transparent;}
::-webkit-scrollbar-thumb {border: solid transparent; background-clip: padding-box; 
border-radius: 8px; background-color: var(--scrollbar-background);}

.hidden{display: block; width: 0;height: 0; margin: 0; padding: 0; line-height: 0; font-size: 0;overflow: hidden;}

.eps{width: 100%; max-width: 100%; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;
    &.type01{display: table; table-layout: fixed; white-space: nowrap;
        >*{display: table-cell; overflow: hidden; text-overflow: ellipsis;}
    }
}

.scY{overflow-y: auto;
  &::-webkit-scrollbar {width: 5px;}
  &::-webkit-scrollbar-thumb {border: 0; border-radius: 10px; background-color: var(--scrollbar-background);}
}

.dark{
  .openInNew >*::after{
      background: url('/images/common/ico-open-in-new-w.svg') no-repeat center;
  }
}

.openInNew{display: inline-flex;
  >*{display: flex; align-items: center;
    &::after{
      content: "새창 열림";
      position: relative;
      top: -1px;
      display: inline-block;
      width: 18px;
      height: 18px;
      font-size: 0;
      color: transparent;
      margin-left: 2px;
      background: url('/images/common/ico-open-in-new.svg') no-repeat center;
    }
  }
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
      &::-webkit-scrollbar-thumb {border-radius: 0; background-color: var(--scrollbar-background);}
      
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