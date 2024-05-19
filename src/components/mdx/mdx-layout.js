import * as M from 'style/common/Markdown.style';

export default function MdxLayout({ children, title }) {
    return (
        <M.Container>
            {children}
        </M.Container>
    )
}