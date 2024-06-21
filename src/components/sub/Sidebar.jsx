import * as S from "style/components/sub/Sidebar.style";
import * as Sh from "style/components/sidebar/SearchItem.style";
import SearchItem from "components/sidebar/search/SearchItem";
import SearchResult from "components/sidebar/search/SearchResult";
import NoMatch from "components/sidebar/search/NoMatch";
import { useState } from "react";
import { filterData } from "data/sidebar";

export default function Sidebar({ 
    wrapClassName, 
    dimmedClassName, 
    data,
    children, 
    sidebarRef  
}) {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const [focused, setFocused] = useState(false);

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
        setResults(filterData(data, e.target.value));
    }

    const renderResults = () => {
        if (value.length > 0 && results.length === 0) {
            return <NoMatch />
        }

        if (value.length > 0) {
            return <SearchResult value={value} loopData={results} />
        } 

        if (value.length === 0) {
            return <SearchResult value={value} loopData={data} />
        }
    }

    return (
        <>
            <S.Wrap ref={sidebarRef} className={wrapClassName}>
                <S.Top>
                    <SearchItem 
                        data={data} 
                        value={value}
                        setValue={setValue}   
                        focused={focused} 
                        setFocused={setFocused}
                    >
                        <Sh.SearchInput 
                            type="search" 
                            id="s01"
                            placeholder="어떤 걸 찾고 계세요?" 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(e) => {
                                handleValueChange(e);
                            }}
                            value={value}
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </SearchItem>
                    {children}
                </S.Top>
                <S.Inner>
                    <S.GroupContainer>
                        {renderResults()}
                    </S.GroupContainer>
                </S.Inner>
            </S.Wrap>
            <S.Dimmed aria-hidden="true" className={dimmedClassName} />
        </>
    )
}