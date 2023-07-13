import styled, { css } from "styled-components";
import mixins from 'components/style/mixins';
import { MediumTitle } from 'components/style/common/Area.style';

export const BronzeDiv = styled.div`
    color: #fff;
    background-color: ${({ theme }) => theme.bgColors.brown};
`

export const SliverDiv = styled.div`
    color: #000;
    background-color: ${({ theme }) => theme.bgColors.gray};
`

export const GoldDiv = styled.div`
    color: #000;
    background-color: ${({ theme }) => theme.bgColors.yellow};
`

export const MasterDiv = styled.div`
    color: #000;
    background-color: ${({ theme }) => theme.bgColors.sky};
`

export const GrandMasterDiv = styled.div`
    color: #000;
    background-color: ${({ theme }) => theme.bgColors.pink};
`

export const OrangeDiv = styled.div`
    background-color: #FFC876;
`

export const SkyDiv = styled.div`
    background-color: #85D3FF
`

export const Wrap = styled.div`
    display: ${props => props.display};
    column-gap: ${props => props.cg};
    row-gap: ${props => props.rg};
    justify-content: ${props => props.jc};
    grid-template-columns: ${props => props.gridTemplateColumns};

    ${props => props.mt && `
        margin-top: 20px;
    `}

    ${({ theme }) => theme.tablet`
        grid-template-columns: repeat(auto-fit, 240px);
        column-gap: 20px;

        ${props => props.type === 'none' && `
            grid-template: none;
        `}
    `};

    ${({ theme }) => theme.mobile`
        ${props => props.type === 'full' && `
            ${Head}{
                ${Row}{
                    display: flex;

                    ${CellHeader}{
                        width: 100%;
                        line-height: 35px;
                    }
                }
            }

            ${Body}{
                ${Row}{
                    width: 100%;

                    ${CellDescription}{
                        width: 100%;
                    }
                }
            }
        `}
        
        ${mixins.fcol};
        column-gap: 0;
    `};
`

export const CellHeader = styled.th`
    height: 35px;
    ${mixins.font('nexonLv1Gothic', '#000')};
    font-size: ${({ theme }) => theme.fontSizes.f16};
    box-shadow: 0 0 0 1px #ddd;
    background-color: #fff;
    font-weight: normal;
`

export const CellDescription = styled(CellHeader)`
    padding: ${props => props.padding};
    font-size: ${({ theme }) => theme.fontSizes.f14};

    img{
        width: auto;
        margin: 0 auto;
    }
`

export const Head = styled.thead`

`

export const Body = styled.tbody`
    display: ${props => props.flex ? 'flex' : 'block'};
`

export const Row = styled.tr`
   
`

export const Table = styled.table`
    &.type02{
        ${CellHeader},${CellDescription}{
            width: 120px;
            border: 0;
        }

        ${Head}{
            display: block;
        }

        ${CellHeader}{
            &:first-of-type{
                border-top-left-radius: 4px;
            }
            
            &:last-of-type{
                border-top-right-radius: 4px;
            }
        }

        ${CellDescription}{
            display: block;
            line-height: ${props => props.lineHeight ? '20px' : '35px'};

            &:last-of-type{
                border-bottom-right-radius: 4px;
            }
        }
    }

    &.type03{
        ${CellHeader},${CellDescription}{
            width: 250px;
        }

        ${Body}{display: flex;
            ${Row}{
                ${mixins.fcol}
            }
        }
    }

    &.type04{
        ${Head}{
            display: revert;
        }
        ${Body}{
            display: revert;
        }

        ${Row}{
            display: revert;
        }

        ${CellDescription}{
            display: revert;
        }
    }

    &.col2{
        width: auto;
        
        ${Head}{
            display: revert;
        }

        ${CellDescription}{
            height: 55px;
            &:last-of-type{
                width: 210px;
            }
        }

        ${props => props.width === '200' && css`
            ${CellDescription}{
                width: 200px;
            }
        `}
    }

    &.col3{
        width: auto;

        ${props => props.type01 && css`
            ${CellDescription}{
                &:last-of-type{
                    width: 268px;
                } 
            }
        `}
    }
`

export const Group = styled.div`
    ${({ theme }) => theme.tablet`
        ${props => props.type === 'type03' && `
            overflow-y: hidden;
            overflow-x: auto;
        `}
    `};
   
    ${MediumTitle}{
        margin-bottom: 20px;
    }
`

export const Box = styled.div`
    ${mixins.aic};
    height: 35px;

    span{
        display: block;
        height: 100%;
        line-height: 35px;
    }
`

export const Left = styled.div`
    height: 100%;
    border-right: 1px solid #ddd;
    flex: 1;
`

export const Right = styled.div`
    width: 70px;
    height: 100%;
    padding: 0 5px;
`