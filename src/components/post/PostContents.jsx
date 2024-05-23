import PostLayout from 'components/layout/post/PostLayout';

export default function PostContents ({ themeMode, children, type }) {
    return(
        <PostLayout type={type}>
            {children}
        </PostLayout>
    )
}