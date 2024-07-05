import NoMatch from "components/search/NoMatch";
import SearchResult from "components/search/SearchResult";

export default function useSearchRenderResults(value, results, commonProps, dataPropsType) {
    if (value.length > 0 && results.length === 0) {
        return <NoMatch />
    }

    return <SearchResult {...commonProps} dataProps={dataPropsType} />
}