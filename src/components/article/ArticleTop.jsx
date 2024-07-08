import * as A from "style/components/sub/common/ArticleTop.style";
import { usePathname } from "next/navigation";
import ArticleButton from "components/article/ArticleButton";

export default function ArticleTop() {
    const pathname = usePathname();
    const pathnameArr = pathname.split("/");
    const learnCondition = 
    pathnameArr.includes("basic") || 
    pathnameArr.includes("item") || 
    pathnameArr.includes("speed") || 
    pathnameArr.includes("tuning");

    const encyCondition = 
    pathnameArr.includes("karts") ||
    pathnameArr.includes("characters");


    function renderBackButton(type) {
        if (learnCondition) return <ArticleButton type={type} link="/docs/learn" />;
        if (encyCondition) return <ArticleButton type={type} link="/docs/encyclopedia" />;

        return <ArticleButton type={type} link="/" />;
    }

    function getBackButtonType() {
        if (learnCondition || encyCondition) return "back";
        
        return "home";
    }

    const backButtonType = getBackButtonType();
    
    return (
        <A.Wrap>
            {renderBackButton(backButtonType)}

            <A.Right>
                <ArticleButton type={'copy'} />
                <ArticleButton type={'kakao'} />
                <ArticleButton type={'edit'} />
            </A.Right>
        </A.Wrap>
    )
}   