import * as S from "style/components/sidebar/SearchItem.style";
import SCsearch from 'svg/ico-search.svg';
import SCclose from 'svg/ico-close.svg';

export default function SearchItem({ children, focused, setFocused, value, setValue }) {
    const removeClick = () => {
        setValue('');
        setFocused(false);
    }

    return(
        <S.SearchWrap>
            <S.SearchContainer>
                <S.SearchWrapInner className={focused ? 'active' : ''}>
                    {children}
                    <S.SearchLabel htmlFor="s01">
                        <SCsearch width="20px" height="20px"/>
                    </S.SearchLabel>
                    <S.RemoveButton className={value.length > 0 && 'active'} onClick={removeClick}>
                        <SCclose width="16px" height="16px"/>
                        <span className="hidden">검색어 지우기</span>
                    </S.RemoveButton>
                </S.SearchWrapInner>
            </S.SearchContainer>
        </S.SearchWrap>
    )
}