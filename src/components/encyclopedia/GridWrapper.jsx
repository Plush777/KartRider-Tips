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
import GridSkeleton from "components/layout/skeleton/Grid";
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

    const typeCondition = (value) => {
        if (value === 'data') {
            if (type === 'karts') return data;
            if (type === 'characters') return characterData;

            return null;
        }

        if (value === 'tab') {
            if (type === 'karts') return 3;
            if (type === 'characters') return 4;

            return null;
        }

        return null;
    }

    const { tabIndex, setTabIndex, clicked, setClicked, loadData, setLoadData } = useTab(typeCondition('data'), callback);
    const dataObject = useSearchDataObject(typeCondition('data'),'list',loadData);

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
            loopData: typeCondition('data')
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
    const renderResults = useSearchRenderResults(commonProps, dataPropsType);

    const renderResultCondition = () => {
        if (isLoading) {
            return (
                Array.from({ length: 10 }, (_, i) => (
                    <GridSkeleton key={i} />
                ))
            )
        } 

        if (value.length > 0 && results.length === 0) {
            if (!clicked.includes(true)) {
                return <NoMatch styleProp="grid" text={'이런, 데이터가 없네요!'}/>
            }
        }
        
        if (isFetched) {
            return renderResults;
        }
    }

    console.log(clicked)
   
    useEffect(() => {
        isLoading ? setContainerActive('500px') : setContainerActive('auto');
    }, [data, tabIndex])

    return(
        <div className="reset">
            <Container displayProp="flex" alignItems="flex-start" flexDirection="column">
                <Tab 
                    value={value}
                    type="ency" 
                    tabIndex={tabIndex}
                    setTabIndex={setTabIndex} 
                    clicked={clicked}
                    setClicked={setClicked}
                    data={tabArray} 
                    marginBottom="15px"
                    disabledIndex={typeCondition('tab')}
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