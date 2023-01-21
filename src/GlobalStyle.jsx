import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`

body,html{width: 100%;height: 100%;margin: 0;padding: 0; color: #000;}
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
img{-webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; display: block;}
svg{fill: currentColor;}
.hidden{display: block; width: 0;height: 0; margin: 0; padding: 0; line-height: 0; font-size: 0;overflow: hidden;}

.sc{
    &::-webkit-scrollbar{width: 8px; height: 8px;}
    &::-webkit-scrollbar-button,&::-webkit-scrollbar-track {display: none;}
    &::-webkit-scrollbar-thumb {border-radius: 20px; background: #575757;}
}
`;

export default GlobalStyle;