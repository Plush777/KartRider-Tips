import styled, { css } from "styled-components";
import { styles } from "const";

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 100%;
    height: 100%;

    .top, .bottom {
        width: 100%;
        height: 100%;
    }
`

export const Top = styled.div`
    border-radius: 4px;
    background-color: var(--background1);
    transition: background-color .3s ease-in-out;
`

export const Bottom = styled(Top)`
    
`

/* ------------- Rank Component ------------- */

export const Wrap = styled.div`
    position: relative;

    ${props => props.type === 'grid' && css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-auto-rows: 240px;
        column-gap: 20px;
        row-gap: 80px;

        .bottom {
            min-height: 20px;
            max-height: 40px;
        }
    `}

    ${props => props.type === 'ranking' && css`
        ${css(styles.skeleton.ranking.wrap.properties)}
    `}

    ${props => props.type === 'card' && css`
        
    `}
`;

export const RankList = styled.div`
    ${css(styles.skeleton.ranking.list.properties)}
`

export const RankItem = styled.div`
    ${css(styles.skeleton.ranking.item.properties)}
    ${css(styles.skeleton.ranking.item.pseudo)}

    ${props => props.styleType === 'bottom' && css`
        height: 70px;
        padding: 10px 20px;
    `}

    ${({ theme }) => theme.laptop`
        ${css(styles.skeleton.ranking.item.mobile.laptop)}
    `};
`

export const RankInnerBox = styled.div`
    ${css(styles.skeleton.ranking.innerBox.properties)}
    flex-direction: ${props => props.direction};

    ${props => props.direction === 'row' && !props.type && css`
        flex: 1;
    `}

    ${props => props.direction === 'row' && props.type === 'gameDataContainer' && css`
        min-width: 210px;
        border-radius: 4px;
        flex-wrap: wrap;
        ${css(styles.skeleton.ranking.innerBox.props.type.gameDataContainer)}
    `}

    ${props => props.direction === 'row' && props.type === 'gameData' && css`
        height: ${props => props.styleType === 'bottom' ? '15px' : '18px'};
        column-gap: 5px;
        background-color: var(--skeleton-background);
        flex: 1;
        border-radius: 4px;
    `}

    ${props => props.direction === 'row' && !props.seq && props.styleType === 'bottom' && !props.type && css`
        height: 100%;
    `}

    ${props => props.direction === 'column' && props.seq && css`
        justify-content: space-between;
        height: ${props => props.styleType === 'bottom' ? '100%' : '64px'};
    `}

    ${props => props.direction === 'column' && !props.seq && css`
        ${css(styles.skeleton.ranking.innerBox.props.flexDirection.column.noSeq)}
        flex: 1;
        height: ${props => props.styleType === 'bottom' ? '100%' : ''};
        justify-content: space-between;
        ${css(styles.skeleton.ranking.innerBox.props.styleType.default)}

        ${({ theme }) => theme.laptop`
            padding-left: 10px;
        `};
    `}
`

export const RankImgBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 4px;
    background-color: var(--skeleton-background);
`

export const RankStatus = styled.div`
    ${css(styles.skeleton.ranking.status)}
    width: 32px;
    height: ${props => props.styleType === 'bottom' ? '14px' : '16px'};
    border-radius: 4px;
    background-color: var(--skeleton-background);
`

export const RankText = styled.div`
    ${props => props.styleProp === 'number' && css`
        max-width: 32px;
        height: ${props => props.styleType === 'bottom' ? '26px' : '37px'};
        border-radius: 4px;
        background-color: var(--skeleton-background);
    `}
    
    ${props => props.styleProp === 'gameName' && css`
        height: ${props => props.styleType === 'bottom' ? '24px' : '32px'};
        border-radius: 4px;
        background-color: var(--skeleton-background);

        ${css(styles.skeleton.ranking.rankText.props.gameName.properties)}
    `}

    ${({ theme }) => theme.mobile`
        ${props => props.styleProp === 'gameName' && css`
            ${css(styles.skeleton.ranking.rankText.props.mobile.mobile.gameName)}
        `}
    `};
`

export const RankBottomBar = styled.div`
    ${css(styles.skeleton.ranking.BottomBar.properties)}

    ${RankItem}{
        ${css(styles.skeleton.ranking.BottomBar.children.rankBoxItem)}
    }

    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.ranking.BottomBar.mobile.tablet.properties)}
    `};
`

export const RankButtonWrap = styled.div`
    width: 100%;
    height: 40px;
    ${css(styles.skeleton.ranking.ButtonWrap.properties)}
    border-radius: 4px;
    background-color: var(--background5);
`
/* ------------- //Rank Component ------------- */

/* ------------- Card Component ------------- */

//MainInner (Main.style.js)
export const CardInner = styled.div`
    ${css(styles.skeleton.card.mainInner.properties)}
    ${css(styles.skeleton.card.mainInner.props.season.properties)}

    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.card.mainInner.mobile.tablet.props.season.properties)}
        ${css(styles.skeleton.card.mainInner.mobile.tablet.props.ranking.properties)}
    `};
`

export const CardHead = styled.div`
    ${css(styles.skeleton.card.head.properties)}
    width: 70%;
    height: 29px;
    border-radius: 4px;
    background-color: var(--skeleton);

    ${({ theme }) => theme.laptop`
        ${css(styles.skeleton.card.head.mobile.laptop.properties)}
    `};

    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.card.head.mobile.tablet.properties)}
    `};
`

export const CardBottom = styled.div`
    ${css(styles.skeleton.card.bottom.properties)}
    width: 50%;
    height: 24px;
    border-radius: 4px;
    background-color: var(--skeleton);

    @media screen and (max-width: 1200px) {
        ${css(styles.skeleton.card.bottom.mobile[1200].properties)}
    }

    ${({ theme }) => theme.laptop`
        ${css(styles.skeleton.card.bottom.mobile.laptop.properties)}
    `};
    

    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.card.bottom.mobile.tablet.properties)}
    `};
`

export const CardGroup = styled.div`
    ${css(styles.skeleton.card.group.properties)}
    ${css(styles.skeleton.card.group.adjacent)}
    display: ${props => props.display};
    grid-template-columns: ${props => props.gtc};
    row-gap: ${props => props.rg};

    ${({ theme }) => theme.laptop`
        ${css(styles.skeleton.card.group.mobile.laptop.properties)}
    `};
`

export const CardItem = styled.div`
    ${css(styles.skeleton.card.item.properties)}

    ${({ theme }) => theme.laptop`
        ${css(styles.skeleton.card.item.mobile.laptop.properties)}
    `};
`

export const CardThumbnailWrapper = styled.div`
    ${css(styles.skeleton.card.thumbnailWrapper.properties)}
`

export const CardThumbnail = styled.div`
    ${css(styles.skeleton.card.thumbnail.properties)}
`

// Title (Title.style.js)
export const CardTitleText = styled.div`
    ${css(styles.skeleton.card.title.titleText.properties)}
    
    ${({ theme }) => theme.laptop`
        ${css(styles.skeleton.card.title.titleText.mobile.laptop.pseudo)}
    `};

    ${({ theme }) => theme.tablet`
         ${css(styles.skeleton.card.title.titleText.mobile.tablet.pseudo)}
    `};

    ${({ theme }) => theme.mobile`
        ${css(styles.skeleton.card.title.titleText.mobile.mobile.properties)}
    `};
`

export const CardButtonWrap = styled.div`
    ${css(styles.skeleton.card.buttons.btnWrap.properties)}
`

export const CardButtonArea = styled.div`
    ${css(styles.skeleton.card.buttons.btnArea.properties)}
`

export const CardVideoInfo = styled.div`
    width: 48px;

    ${css(styles.skeleton.card.videoInfo.infoBox.properties)}
   
    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.card.videoInfo.infoBox.mobile.tablet.properties)}
    `};

    ${({ theme }) => theme.mobile`
        ${css(styles.skeleton.card.videoInfo.infoBox.mobile.mobile.properties)}
    `};
`

/* ------------- //Card Component ------------- */