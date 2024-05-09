import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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
button{display: inline-block;border: none;background-color: transparent; cursor: pointer; font-family: unset;}
pre{word-break:break-all;white-space:pre-line;margin: 0;}
*{box-sizing: border-box;}
img{-webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-select: none; display: block; -webkit-touch-callout:none; pointer-events: none;}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox  */
input[type='number'] {
    -moz-appearance: textfield;
}

input{
    height: 100%;
    border: 1px solid var(--stroke1);
    border-radius: 4px;
    color: var(--text1);
    padding: 0 10px;
    background-color: var(--background2);
}

body{touch-action: pan-y;}

html{
    &.small{font-size: 15px;}
    &.default{font-size: 16px;}
    &.large{font-size: 17.5px;}
}

body{
    --mainHeightDefault: 371px;
    --mainHeightWide: 802px;
    --mainHeightNews: 660px;
    --section-gap: 150px;
    --dimmed: rgba(0, 0, 0, 0.3);
    --live: #eb0400;

    &[data-theme="light"]{
        --main-background: #f2f2f2;
        --sub-background: #f2f2f2;
        --background1: #fff;
        --background2: #fff;
        --background3: #000;
        --background4: #ececec;
        --background5: #f9f9f9;
        --scrollbar-background: #A6A6A6;
        --active-background: #000;
        --stroke1: #ddd;
        --stroke2: #c1c1c1;
        --description: #626262;
        --active: #309ED5;
        --skeleton: #f5f5f5;
        --disabled: rgba(0, 0, 0, 0.6);
        --title: #000;
        --text1: #333;
        --text2: #333;
        --text3: #fff;
        --red: #ff0000;
        --open-in-new: url('/images/common/ico-open-in-new.svg');
    }

    &[data-theme="dark"]{
        --main-background: #121212;
        --sub-background: #121212;
        --background1: #292A2D;
        --background2: #1e1e1e;
        --background3: #fff;
        --background4: #1e1e1e;
        --background5: #1e1e1e;
        --scrollbar-background: #aaa;
        --active-background: #fff;
        --stroke1: #2A2A2A;
        --stroke2: rgba(255,255,255,.2);
        --description: #BBBBBF;
        --active: #0094ff;
        --skeleton: #1e1e1e;
        --disabled: rgba(255,255,255,.55);
        --title: #F8F8FA;
        --text1: #ECECEC;
        --text2: #fff;
        --text3: #000;
        --red: #ff4353;
        --open-in-new: url('/images/common/ico-open-in-new-w.svg');
    }
}

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

.openInNew{display: inline-flex; align-items: center;
    &::after{content: "새창 열림"; position: relative; top: -2px;
    display: inline-block; width: 18px; height: 18px; font-size: 0; color: transparent; margin-left: 5px;
    background: var(--open-in-new) no-repeat center;}
}

#modalRoot,#modalDimmed{position: fixed; top: 0; left: 0; width: 100%; height: 100%;}
#modalRoot{z-index: 10000; pointer-events: none;}
#modalDimmed{background-color: var(---dimmed); z-index: 10010; pointer-events: all;}

${({ theme }) => theme.laptopL`
    br{
        display: inline-block;
        content: " ";
        padding: 0 2px;
    }

    body {
        --section-gap: 120px;
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

    body {
        --mainHeightDefault: 200px;
        --section-gap: 100px;
    }
`};

${({ theme }) => theme.small`
    body {
        --section-gap: 120px;
    }
`};
`;

export default GlobalStyle;