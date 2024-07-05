import { useQuery } from "@tanstack/react-query";
import { fetchKarts } from "scripts/api/karts";
import Tab from 'components/common/Tab';
import { tabArray } from "data/karts";
import useTab from 'hooks/useTab';
import Container from "components/layout/common/Container";
import useSearch from "hooks/useSearch";
import SearchItem from "components/search/SearchItem";
import useSearchDataObject from "hooks/useSearchDataObject";
import useSearchRenderResults from "hooks/useSearchRenderResults";

export default function Karts() {
    const { tabIndex, setTabIndex, clicked, setClicked, loadData, setLoadData } = useTab(data, callback);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["karts"],
        queryFn: fetchKarts,
        staleTime: 1000 * 60 * 60 * 12, // 12시간
        gcTime: 1000 * 60 * 60 * 24, // 24시간
        retry: 1
    });

    const dataObject = useSearchDataObject(data,'list',loadData);

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
            loopData: data,
            kartGradeData: loadData,
            tabIndex: tabIndex
        },
        search: {
            loopData: results,
            kartGradeData: loadData,
            tabIndex: tabIndex
        }
    }

    const commonProps = {
        value: value,
        setValue: setValue,
        clicked: clicked,
        setClicked: setClicked,
        dataType: "list"
    };

    const dataPropsType = value.length > 0 ? dataProps.search : dataProps.ency;
    const renderResults = useSearchRenderResults(value, results, commonProps, dataPropsType);

    console.log(results)

    return(
        <div className="reset">
            <Container alignItems="flex-start" flexDirection="column">
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

            {renderResults}
        </div>
    )
}