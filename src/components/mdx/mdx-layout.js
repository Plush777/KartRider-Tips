'use client';

import * as M from 'style/common/Markdown.style';

export default function MdxLayout({ children }) {
    return (
        <M.Container>
            {/* 동적으로 타이틀 가져오기 */}
            {children}
        </M.Container>
    )
}