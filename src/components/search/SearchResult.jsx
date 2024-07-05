import DetailsItem from "components/sidebar/details/DetailsItem";
import * as S from "style/components/sub/common/Sidebar.style";

/* 
    dataType: 도감 페이지 검색이랑 사이드 바 컴포넌트 검색이랑 나누기 위해 구분자를 추가함.
    값이 없으면 기본값은 사이드바 컴포넌트로 설정
*/

export default function SearchResult({ 
    dataType, 
    value, 
    setValue, 
    dataProps, 
    clicked,
    setClicked
}) {

    const loopData = value.length > 0 ? dataProps : dataProps.data;

    function renderData(dataType) {
        if (!dataType) {
            return (
                <>
                    {loopData?.map((data, dataIndex) => {
                        return (
                            <S.Group key={dataIndex}>
                                <S.SectionText>{data.sectionTitle}</S.SectionText>
                                <S.DetailsOuterList>
                                    {data.depth1.map((depth1, depth1Index) => {
                                        return (
                                            <DetailsItem
                                                key={depth1Index}
                                                type={depth1.depth2 ? 'hasDepth' : 'noDepth'}
                                                depth1={depth1}
                                                depth1Key={depth1Index}
                                                value={value}
                                            />
                                        )
                                    })}
                                </S.DetailsOuterList>
                            </S.Group>
                        )
                    })}
                </>
            )
        }

        if (dataType === 'list') {
            return (
                <DetailsItem
                    as="div"
                    type={dataType}
                    value={value}
                    setValue={setValue}
                    dataProps={dataProps}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            )
        }
    }

    return renderData(dataType)
}