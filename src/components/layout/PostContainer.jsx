import * as Area from 'components/style/common/Area.style';

const PostContainer = ({ children }) => {
    return(
        <Area.Wrap>
            <Area.Inner>
                <div className="markdownContainer">
                    {children}
                </div>
            </Area.Inner>
        </Area.Wrap>
    )
}

export default PostContainer;