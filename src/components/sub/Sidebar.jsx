import * as S from "style/components/sub/common/Sidebar.style";
import SearchItem from "components/search/SearchItem";
import useSearch from "hooks/useSearch";
import useSearchDataObject from "hooks/useSearchDataObject";
import useSearchRenderResults from "hooks/useSearchRenderResults";

export default function Sidebar({ 
    wrapClassName, 
    dimmedClassName, 
    data,
    children, 
    sidebarRef  
}) {

    const dataObject = useSearchDataObject(data);

    const { 
        value, 
        results, 
        focused, 
        handleFocus, 
        handleBlur, 
        handleValueChange, 
        handleValueRemove  
    } = useSearch(dataObject);
    
    const commonProps = {
        value: value,
        dataType: 'sidebar'
    };

    const dataPropsType = value.length > 0 ? results : dataObject;
    const renderResults = useSearchRenderResults(commonProps, dataPropsType);

    return (
        <>
            <S.Wrap ref={sidebarRef} className={wrapClassName}>
                <S.Top>
                    <SearchItem 
                        value={value}
                        focused={focused} 
                        onFocusFn={handleFocus}
                        onBlurFn={handleBlur}
                        onChangeFn={handleValueChange}
                        removeFn={handleValueRemove}
                        placeholder={"어떤 걸 찾고 계세요?"}
                        inputId={"s01"}
                    >
                    </SearchItem>
                    {children}
                </S.Top>
                <S.Inner>
                    <S.GroupContainer>
                        {renderResults}
                    </S.GroupContainer>
                </S.Inner>
            </S.Wrap>
            <S.Dimmed aria-hidden="true" className={dimmedClassName} />
        </>
    )
}