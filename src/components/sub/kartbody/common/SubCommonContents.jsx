import * as Substyled from '../../../../components/style/common/Area.style';
import * as Tabstyled from '../../../style/components/sub/TabComponent.style';
import * as Introstyled from '../../../style/components/sub/Intro.style';
import ImgSkeleton from '../../../article/ImgSkeleton';
import parse from 'html-react-parser';
import BtnTop from '../../../article/BtnTop';
import React, { useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom';
import Star from './Star';
import { useDispatch , useSelector } from 'react-redux';
import { setRouterScroll , setImgSkeleton } from '../../../../redux/store/store';

const SubCommonContents = (props) => {

    let {id} = useParams();
    id = parseInt(id);
    let kartId = props.commonContents.kartDesc.find(x => x.id === id);
    let kartId2 = props.commonContents.kartDescDepth.find(x => x.id === id);
    let dispatch = useDispatch();
    // let routerScroll = useSelector(state => state.routerScroll);
    let imgSkeleton = useSelector(state => state.imgSkeleton);

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(setImgSkeleton(false));
            return () => clearTimeout(timer);
        },1500)
    },[dispatch])

    const handleScrollState = () => {
        dispatch(setRouterScroll(false));
    }

    return ( 
        <>
            <Substyled.Wrap>
                <Substyled.Inner>
                    {props.commonContents.kartbody.map((items,index) => {
                        return(
                            <div className="container" key={index}>
                                <div className="titleArea">
                                    <Substyled.Title>{items.title}</Substyled.Title>
                                </div>
                            </div>
                        )
                    })}
                    <Tabstyled.TabWrap mt="20px">
                        <Tabstyled.TabInner>
                            <Tabstyled.TabList>
                                {props.commonContents.tabList.map((items,index) => {
                                    return(
                                        <Tabstyled.TabItem key={index}>
                                            <NavLink to={`/kartbody/common/${items.id}`} className={ ({isActive}) => isActive ? 'active' : ''} 
                                            onClick={handleScrollState} data-name={items.className}>{items.name}</NavLink>
                                        </Tabstyled.TabItem>
                                    )
                                })}
                            </Tabstyled.TabList>
                        </Tabstyled.TabInner>
                    </Tabstyled.TabWrap>

                    <Tabstyled.TabContentWrap>
                        <Tabstyled.TabContentInner>
                            <Tabstyled.TabContnetBox>
                                <Tabstyled.TabContent>
                                    <Introstyled.Top>
                                        <Substyled.SmallTitle fz1 bullet>{kartId.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(kartId.desc)}</Substyled.SmallDesc>
                                    </Introstyled.Top>
                                    <Introstyled.Bottom>
                                        <Introstyled.Row>
                                            {props.commonContents.staticDesc.map((items,index) => {
                                                return(
                                                    <React.Fragment key={index}>
                                                        <Introstyled.RowDesc mwd mt={items.mt}>{items.name}</Introstyled.RowDesc>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Introstyled.Row>

                                        <Introstyled.Row>
                                            <Introstyled.RowDesc>{kartId2.desc}</Introstyled.RowDesc>
                                            <Star commonContents={props.commonContents} starParam={id}/>
                                            <Introstyled.RowDesc mt="15px">{parse(kartId2.desc2)}</Introstyled.RowDesc>
                                            <Introstyled.RowDesc mt="15px">{parse(kartId2.desc3)}</Introstyled.RowDesc>
                                        </Introstyled.Row>
                                    </Introstyled.Bottom>
                                </Tabstyled.TabContent>

                                <Tabstyled.TabContent>
                                    {imgSkeleton ?
                                    
                                    <Substyled.SkeletonArea ht="305px">
                                        <ImgSkeleton/>
                                    </Substyled.SkeletonArea> :

                                    <Introstyled.PreviewArea ht="305px">
                                        <Introstyled.PreviewImg src={kartId2.img} alt={kartId2.alt} />
                                    </Introstyled.PreviewArea>
                                    }
                                </Tabstyled.TabContent>
                            </Tabstyled.TabContnetBox>
                        </Tabstyled.TabContentInner>
                    </Tabstyled.TabContentWrap>
                </Substyled.Inner>
            </Substyled.Wrap>
            <BtnTop/>
        </>
     );
}

export default SubCommonContents;