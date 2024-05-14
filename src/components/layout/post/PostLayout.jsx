import * as Area from 'components/style/common/Area.style';
import MdxLayout from 'components/mdx/mdx-layout';

export default function PostLayout ({ children }) {
    return(
        <Area.Wrap>
            <Area.Inner>
                <MdxLayout>
                    {children}
                </MdxLayout>
            </Area.Inner>
        </Area.Wrap>
    )
}