import PostLayout from 'components/layout/post/PostLayout';

export default function PostContents ({ themeMode, children }) {
    return(
        <PostLayout>
            {children}
        </PostLayout>
    )
}