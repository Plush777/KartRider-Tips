'use client';

import styled, { css } from "styled-components";
import SCrankArrowUp from 'svg/ico-rank-arrow-up.svg';
import SCrankArrowDown from 'svg/ico-rank-arrow-down.svg';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import * as ButtonStyled from 'components/style/common/Button.style';

const RankWrap = styled.div`
    position: relative;
`

const RankList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    overflow-y: auto;
    max-height: 371px;
`

const RankBoxItem = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--skeletonBackground);
    column-gap: 20px;
    max-height: 100px;
    transition: .3s ease-in-out;
    transition-property: background-color;

    &.active{
        background-color: #292A2D;
    }
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
`

const RankStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const RankText = styled.span`
    ${props => props.number && css`
        font-size: 1.375rem;
        color: var(--text);
    `}

    ${props => props.status && css`
        margin-left: 1.5px;
        font-size: .8125rem;
        color: var(--text);
    `}

    ${props => props.icon && css`
        font-size: .625rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        color: #ff4353;
    `}

    ${props => props.gameName && css`
        display: flex;
        align-items: center;
        height: 64px;
        padding-left: 20px;
        font-size: 1.25rem;
        color: var(--text);
    `}

    &:where([data-number="1"], [data-number="2"], [data-number="3"]){
        color: #0094ff;
    }
`

const RankingList = ({ data, loading }) => {
    let [myGameFoucs, setMyGameFocus] = useState('');
    const myGameRef = useRef(null);

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

    const myGameScroll = () => {
        if (myGameRef.current) {
            myGameRef.current.scrollIntoView({ 
                behavior: "smooth", 
                block: "center" 
            });
        }
    }

    useEffect(() => {
        if (myGameRef.current) {
            setMyGameFocus('active');
        }
    }, [myGameRef]);
    
    return(
        <RankWrap>
             <ButtonStyled.BtnArrowDown onClick={myGameScroll}>
                <ButtonStyled.BtnArrowDownText>확인하기</ButtonStyled.BtnArrowDownText>
            </ButtonStyled.BtnArrowDown>

            <RankList>
                {data && data.map((list, index) => {
                    const { title, rank, rankChange, rankStatus, img } = list;
                    const myTitle = title === '카트라이더 드리프트'; 

                    return(
                        <RankBoxItem key={index} className={ myTitle ? myGameFoucs : ''} ref={ myTitle ? myGameRef : null}>
                            
                            <RankInnerBox direction="column" seq>
                                <RankText number as="strong" data-number={index+1}>{rank}</RankText>
                                {
                                    rankChange === '' && rankStatus === '' ?
                                    null
                                    :
                                    <RankStatus>
                                        <RankText icon>{rankIconCondition(rankStatus)}</RankText>
                                        <RankText status>{rankChange}</RankText>
                                    </RankStatus>
                                }
                            </RankInnerBox>
                            <RankInnerBox direction="row">
                                <Image width={64} height={64} src={rankImgCondition(title,img)} alt="카트라이더 드리프트"/>
                                <RankText as="h3" gameName>{title}</RankText>
                            </RankInnerBox>
                        </RankBoxItem>
                    )
                })}
            </RankList>
        </RankWrap>
    )
}

export default RankingList;