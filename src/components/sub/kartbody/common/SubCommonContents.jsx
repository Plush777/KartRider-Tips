import * as Substyled from 'components/style/common/Area.style';
import * as Tabstyled from 'components/style/components/sub/TabComponent.style';
import * as Introstyled from 'components/style/components/sub/Intro.style';
import parse from 'html-react-parser';
import BtnTop from 'components/article/BtnTop';
import { useParams,NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRouterScroll } from 'redux/store/store';
import { M768 } from 'components/style/mobile/MediaQuery';
import Select from 'components/mobile/Select';
import * as Previewstyled from 'components/style/mobile/Preview.style';

const SubCommonContents = (props) => {

    let {id} = useParams();
    id = parseInt(id);
    let kartId = props.commonContents.kartDesc.find(x => x.id === id);
    let kartId2 = props.commonContents.kartDescDepth.find(x => x.id === id);
    let dispatch = useDispatch();
    // let routerScroll = useSelector(state => state.routerScroll);

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
                                            <NavLink to={`/kartbody/${items.id}`} className={ ({isActive}) => isActive ? 'active' : ''} 
                                            onClick={handleScrollState} data-name={items.className}>{items.name}</NavLink>
                                        </Tabstyled.TabItem>
                                    )
                                })}
                            </Tabstyled.TabList>
                        </Tabstyled.TabInner>
                    </Tabstyled.TabWrap>

                    <M768>
                        <Select commonContents={props.commonContents}/>
                        <Previewstyled.Wrap>
                            <Previewstyled.Img src={kartId2.img === "" ? "/images/common/img-no-image.webp" : kartId2.img} 
                            alt={kartId2.alt}/>
                        </Previewstyled.Wrap>
                    </M768>

                    <Tabstyled.TabContentWrap>
                        <Tabstyled.TabContentInner>
                            <Tabstyled.TabContnetBox>
                                <Tabstyled.TabContent>
                                    <Introstyled.Top>
                                        <Introstyled.Title>{kartId.title}</Introstyled.Title>
                                        <Introstyled.Desc>{parse(kartId.desc)}</Introstyled.Desc>
                                    </Introstyled.Top>
                                    <div className="bottom">
                                        <Introstyled.RowList>
                                            <Introstyled.Row>
                                                <Introstyled.RowTitle>{kartId2.title}</Introstyled.RowTitle>
                                                <Introstyled.RowDesc as="dd">{kartId2.desc}</Introstyled.RowDesc>
                                            </Introstyled.Row>
                                            <Introstyled.Row>
                                                <Introstyled.RowTitle>{kartId2.title2}</Introstyled.RowTitle>
                                                <Introstyled.RowDesc as="dd">{parse(kartId2.desc2)}</Introstyled.RowDesc>
                                            </Introstyled.Row>
                                            <Introstyled.Row>
                                                <Introstyled.RowTitle>{kartId2.title3}</Introstyled.RowTitle>
                                                <Introstyled.RowDesc as="dd">{parse(kartId2.desc3)}</Introstyled.RowDesc>
                                            </Introstyled.Row>
                                        </Introstyled.RowList>
                                    </div>
                                </Tabstyled.TabContent>

                                <Tabstyled.TabContent>
                                    <Introstyled.PreviewArea>
                                        {
                                            kartId2.img === '' ? 
                                            <Introstyled.PreviewImg src="/images/common/img-no-image.webp" alt="" ratio="136/136" className="auto"/>
                                            :
                                            <Introstyled.PreviewImg src={kartId2.img} alt={kartId2.alt} ratio="445/305" className="auto"/>
                                        }
                                    </Introstyled.PreviewArea>
                                </Tabstyled.TabContent>
                            </Tabstyled.TabContnetBox>
                        </Tabstyled.TabContentInner>
                    </Tabstyled.TabContentWrap>
                    
                    <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
     );
}

export default SubCommonContents;