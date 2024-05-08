import * as Area from 'components/style/common/Area.style';
import MdxLayout from 'components/mdx/mdx-layout';

const PostContainer = ({ children }) => {
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

export default PostContainer;