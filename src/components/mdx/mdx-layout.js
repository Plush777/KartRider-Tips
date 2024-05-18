import * as M from 'style/common/Markdown.style';

export default function MdxLayout({ children, title }) {
    return (
        <M.Container>
            <h2>{title}</h2>
            {children}
        </M.Container>
    )
}