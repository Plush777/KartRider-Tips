import { useQuery } from "@tanstack/react-query";
import { fetchKarts } from "scripts/api/karts";
import Tab from 'components/common/Tab';
import { tabArray } from "data/karts";
import { characterData } from "data/characters";
import useTab from 'hooks/useTab';
import Container from "components/layout/common/Container";
import useSearch from "hooks/useSearch";
import SearchItem from "components/search/SearchItem";
import useSearchDataObject from "hooks/useSearchDataObject";
import useSearchRenderResults from "hooks/useSearchRenderResults";
import Skeleton from "components/layout/common/Skeleton";
import { useEffect, useState } from "react";
import NoMatch from "components/search/NoMatch";

export default function GridWrapper({ type }) {
    const [containerActive, setContainerActive] = useState('');

    const { data, isLoading, isError, isFetched } = useQuery({
        queryKey: ["karts"],
        queryFn: fetchKarts,
        staleTime: 1000 * 60 * 60 * 12, // 12시간
        gcTime: 1000 * 60 * 60 * 24, // 24시간
        retry: 1,
    });

    const typeCondition = () => {
        if (type === 'karts') return data;
        if (type === 'characters') return characterData;

        return null;
    }

    const { tabIndex, setTabIndex, clicked, setClicked, loadData, setLoadData } = useTab(typeCondition(), callback);
    const dataObject = useSearchDataObject(typeCondition(),'list',loadData);

    const { 
        value, 
        setValue,
        results, 
        focused, 
        handleFocus, 
        handleBlur, 
        handleValueChange, 
        handleValueRemove  
    } = useSearch(dataObject);

    function callback() {
        if (tabIndex === 0) setLoadData('일반');
        if (tabIndex === 1) setLoadData('고급');
        if (tabIndex === 2) setLoadData('희귀');
        if (tabIndex === 3) setLoadData('영웅');
        if (tabIndex === 4) setLoadData('전설');
    }

    const dataProps = {
        ency: {
            loopData: typeCondition()
        },
        search: {
            loopData: results
        }
    }

    const commonProps = {
        kartGradeData: loadData,
        tabIndex: tabIndex,
        value: value,
        setValue: setValue,
        clicked: clicked,
        setClicked: setClicked,
        setContainerActive: setContainerActive,
        isLoading: isLoading,
        dataType: "list"
    };

    const dataPropsType = value.length > 0 ? dataProps.search : dataProps.ency;
    const renderResults = useSearchRenderResults(value, results, commonProps, dataPropsType);

    const renderResultCondition = () => {
        if (isLoading) {
            return (
                Array.from({ length: 10 }, (_, i) => (
                    <Skeleton key={i} />
                ))
            )
        } 
        
        if (isFetched) {
            return renderResults;
        }
        
        if (data.length <= 0) return <NoMatch text={'이런, 데이터가 없네요!'}/>;
    }

    useEffect(() => {
        results.length <= 0 ? setContainerActive('auto') : setContainerActive('500px');
    }, [tabIndex])

    return(
        <div className="reset">
            <Container displayProp="flex" alignItems="flex-start" flexDirection="column">
                <Tab 
                    type="ency" 
                    tabIndex={tabIndex}
                    setTabIndex={setTabIndex} 
                    clicked={clicked}
                    setClicked={setClicked}
                    data={tabArray} 
                    marginBottom="15px"
                    disabledIndex={3}
                    styleProps="ency"
                    indicator={true}
                />

                <SearchItem 
                    inputDisabled={isLoading ? true : false}
                    value={value}
                    focused={focused} 
                    onFocusFn={handleFocus}
                    onBlurFn={handleBlur}
                    onChangeFn={handleValueChange}
                    removeFn={handleValueRemove}
                    placeholder={"어떤 걸 찾고 계세요?"}
                    inputId={"s02"}
                    styleProps="ency"
                    inputStyleClassName="encyInput"
                />
            </Container>

            <Container minHeight={containerActive} styleProp={isLoading ? 'grid' : ''}>
                {renderResultCondition()}
            </Container>
        </div>
    )
}