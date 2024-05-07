import PostContainer from 'components/layout/PostContainer';

const PostContents = ({ themeMode, children }) => {
    return(
        <PostContainer>
            {children}
        </PostContainer>
    )
}

export default PostContents;