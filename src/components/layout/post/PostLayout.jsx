import * as PLay from 'style/layout/PostLayout.style';
import MdxLayout from 'components/mdx/mdx-layout'; 

export default function PostLayout ({ children, type }) {
    return(
        <PLay.Wrap>
            <PLay.Inner className={type}>
                <MdxLayout>
                    {children}
                </MdxLayout>
            </PLay.Inner>
        </PLay.Wrap>
    )
}