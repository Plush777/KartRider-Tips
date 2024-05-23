import * as S from "style/components/sub/Sidebar.style";
import DetailsItem from "components/sidebar/DetailsItem";
import SearchItem from "components/sidebar/SearchItem";

export default function Sidebar({ 
    wrapClassName, 
    dimmedClassName, 
    data,
    children, 
    sidebarRef  
}) {

    return (
        <>
            <S.Wrap ref={sidebarRef} className={wrapClassName}>
                <S.Inner>
                    <S.GroupContainer>
                        {children}
                        <SearchItem />
                        {data?.map((data, dataIndex) => {
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
                                                />
                                            )
                                        })}
                                    </S.DetailsOuterList>
                                </S.Group>
                            )
                        })}
                    </S.GroupContainer>
                </S.Inner>
            </S.Wrap>
            <S.Dimmed aria-hidden="true" className={dimmedClassName} />
        </>
    )
}