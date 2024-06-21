import DetailsItem from "components/sidebar/details/DetailsItem";
import * as S from "style/components/sub/Sidebar.style";

export default function SearchResult({ loopData, value }) {
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