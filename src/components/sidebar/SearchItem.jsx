import * as S from "style/components/sidebar/SearchItem.style";
import SCsearch from 'svg/ico-search.svg';
import { useState } from "react";
import SCclose from 'svg/ico-close.svg';

export default function SearchItem() {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const [isClick, setIsClick] = useState(false);

    const removeClick = () => {
        setIsClick(true);
    }

    const handleFocus = () => {
        setFocused(true);
    }

    const handleBlur = (e) => {
        if (e.target.value === '') {
            setFocused(false);
        }
    }

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleRemove = () => {
        if (isClick) {
            setValue('');
        }
    }


    return(
        <S.SearchWrap>
            <S.SearchContainer>
                <S.SearchWrapInner className={focused ? 'active' : ''}>
                    <S.SearchInput 
                        type="search" 
                        placeholder="어떤 걸 찾고 계세요?" 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={(e) => {
                            handleValueChange(e);
                            handleRemove();
                        }}
                        value={value}
                    />
                    <SCsearch width="20px" height="20px"/>
                    {value.length > 1 && 
                        <S.RemoveButton onClick={() => removeClick()}>
                            <SCclose width="16px" height="16px"/>
                            <span className="hidden">검색어 지우기</span>
                        </S.RemoveButton>
                    }
                </S.SearchWrapInner>
            </S.SearchContainer>
        </S.SearchWrap>
    )
}