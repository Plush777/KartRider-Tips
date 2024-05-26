import * as PLay from 'style/layout/ArticleLayout.style';
import MdxLayout from 'components/mdx/mdx-layout'; 
import ArticleTop from 'components/article/ArticleTop';

export default function ArticleLayout ({ children, type }) {
    return(
        <PLay.Wrap>
            <PLay.Inner className={type}>
                <ArticleTop />
                <MdxLayout>
                    {children}
                </MdxLayout>
            </PLay.Inner>
        </PLay.Wrap>
    )
}