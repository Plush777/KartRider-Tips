import ArticleLayout from 'components/layout/article/ArticleLayout';

export default function ArticleContents ({ children, type }) {
    return(
        <ArticleLayout type={type}>
            {children}
        </ArticleLayout>
    )
}