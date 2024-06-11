import * as A from "style/components/sub/ArticleTop.style";
import ArticleBack from "components/article/ArticleBack";
import { usePathname } from "next/navigation";

export default function ArticleTop() {
    const pathname = usePathname();
    const pathnameArr = pathname.split("/");
    const learnCondition = pathnameArr.includes("basic") 
    || pathnameArr.includes("item") 
    || pathnameArr.includes("speed") 
    || pathnameArr.includes("tuning");

    function renderBackButton(type) {
        if (learnCondition) return <ArticleBack type={type} link="/docs/learn" />;

        return <ArticleBack type={type} link="/" />;
    }

    function getBackButtonType() {
        if (learnCondition) return "back";
        
        return "home";
    }

    const backButtonType = getBackButtonType();
    
    return (
        <A.Wrap>
            {renderBackButton(backButtonType)}
        </A.Wrap>
    )
}   