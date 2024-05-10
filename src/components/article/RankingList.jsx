import styled, { css } from "styled-components";
import SCrankArrowUp from 'svg/ico-rank-arrow-up.svg';
import SCrankArrowDown from 'svg/ico-rank-arrow-down.svg';
import Image from 'next/image';

const RankWrap = styled.div`
    position: relative;
`

const RankList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    overflow-y: auto;
    max-height: var(--main-scroll-height);
    padding-bottom: 70px;
`

const RankBoxItem = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--background5);
    column-gap: 20px;
    max-height: 100px;
    transition: .3s ease-in-out;
    transition-property: background-color;

    &:last-of-type{
        border-radius: 8px 8px 0 0;
    }

    ${({ theme }) => theme.mobile`
        padding: 12px;
        column-gap: 12px;
        max-height: 80px;
    `};
`

const RankInnerBox = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;

    ${props => props.seq && css`
        min-width: 32px;
    `}

    img{
        border-radius: 8px;
        object-fit: cover;
    }

    ${({ theme }) => theme.tablet`
        img{
            width: 52px;
            height: 52px;
        }
    `};

    ${({ theme }) => theme.mobile`
        img{
            width: 44px;
            height: 44px;
        }
    `};
`

const RankStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const RankText = styled.span`
    &.number{
        font-size: 1.375rem;
        color: var(--text1);

        &:where([data-number="1"], [data-number="2"], [data-number="3"]){
            color: var(--active);
        }
    }

    &.status {
        margin-left: 1.5px;
        font-size: .8125rem;
        color: var(--text1);
    }

    &.icon{
        font-size: .625rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        color: var(--red);
    }

    &.gameName{
        display: flex;
        align-items: center;
        height: 64px;
        padding-left: 20px;
        font-size: 1.25rem;
        color: var(--text1);
    }

    ${({ theme }) => theme.tablet`
        &.gameName{
            font-size: 1.125rem;
        }
    `};

    ${({ theme }) => theme.mobile`
        &.gameName{
            font-size: 1rem;
            padding-left: 15px;
        }

        &.number{
            font-size: 1.25rem;
        }
    `};
`

const BottomBar = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 14px);
    display: flex;
    align-items: center;
    column-gap: 20px;
    border-radius: 0 0 8px 8px;
    background-color: var(--background1);
    z-index: 990;

    svg{
        width: 8px;
        height: 8px;
    }

    ${RankBoxItem}{
        max-height: 70px;
        border-radius: 0 0 8px 8px;
        border-radius: 0;
    }

    .number{
        font-size: 1.125rem;
    }

    .gameName{
        font-size: 1rem;
    }

    .status{
        font-size: .75rem;
    }

    ${({ theme }) => theme.tablet`
        img{
            width: 38px;
            height: 38px;
        }
    `};

    ${({ theme }) => theme.mobile`
        .gameName{
            font-size: .875rem;
        }

        img{
            width: 34px;
            height: 34px;
        }
    `};
`

const RankingList = ({ data, isLoading }) => {
    const rankIconCondition = (data) => {
        if (data) {
            if (data.includes('ranking-static-up')) return <SCrankArrowUp width="12px" height="12px" fill="#eb0400"/>
            if (data.includes('ranking-static-down')) return <SCrankArrowDown width="12px" height="12px" fill="#0094ff"/>
            if (data.includes('new')) return 'new'
        }
    }

    const rankImgCondition = (conditionData, returnData) => {
        if (conditionData === '카트라이더 드리프트') {
            return '/images/common/img-kart-app.webp';
        } else {
            return returnData;
        }
    }

    const myGameRank = data && data.filter((list) => list.title === '카트라이더 드리프트');

    return(
        <RankWrap>
            <BottomBar>
                {myGameRank?.map((list, index) => {
                    const { title, rank, rankChange, rankStatus, img } = list;

                    return(
                        <RankBoxItem key={index} as="div">
                            <RankInnerBox direction="column" seq>
                                <RankText className="number" as="strong">{rank}</RankText>
                                {
                                    rankChange === '' && rankStatus === '' ?
                                    null
                                    :
                                    <RankStatus>
                                        <RankText className="icon">{rankIconCondition(rankStatus)}</RankText>
                                        <RankText className="status">{rankChange}</RankText>
                                    </RankStatus>
                                }
                            </RankInnerBox>
                            <RankInnerBox direction="row">
                                <Image width={38} height={38} src={rankImgCondition(title,img)} alt="카트라이더 드리프트"/>
                                <RankText as="h3" className="gameName">{title}</RankText>
                            </RankInnerBox>
                        </RankBoxItem>
                    )
                })}
            </BottomBar>
            <RankList>
                {data && data.map((list, index) => {
                    const { title, rank, rankChange, rankStatus, img } = list;

                    return(
                        <RankBoxItem key={index}>
                            <RankInnerBox direction="column" seq>
                                <RankText className="number" as="strong" data-number={index+1}>{rank}</RankText>
                                {
                                    rankChange === '' && rankStatus === '' ?
                                    null
                                    :
                                    <RankStatus>
                                        <RankText className="icon">{rankIconCondition(rankStatus)}</RankText>
                                        <RankText className="status">{rankChange}</RankText>
                                    </RankStatus>
                                }
                            </RankInnerBox>
                            <RankInnerBox direction="row">
                                <Image width={64} height={64} src={rankImgCondition(title,img)} alt="카트라이더 드리프트"/>
                                <RankText as="h3" className="gameName">{title}</RankText>
                            </RankInnerBox>
                        </RankBoxItem>
                    )
                })}
            </RankList>
        </RankWrap>
    )
}

export default RankingList;