import * as Substyled from 'components/style/common/Area.style';
import parse from 'html-react-parser';
import BtnTop from 'components/article/BtnTop'; 
import { Min768 } from 'components/style/mobile/MediaQuery';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import { useSelector } from 'react-redux';
import BtnClipBoard from 'components/article/BtnClipBoard';
import { useTranslation } from 'react-i18next';

const SourceContents = ({ sources }) => {

    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const { t } = useTranslation();

    return ( 
        <>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                        <div className="container">
                            <Substyled.TitleGroup>
                                <Substyled.Title>{t(`source.group1.title`)}</Substyled.Title>
                                <Substyled.Desc>{t(`source.group1.description`)}</Substyled.Desc>
                            </Substyled.TitleGroup>

                            <Substyled.GroupContainer>
                                <Substyled.SmallTitle>{t(`source.group2.title`)}</Substyled.SmallTitle>
                                <ul className="groupList">
                                    {Object.keys(sources.list).map((item,index) => {
                                        return(
                                            <Substyled.GroupItem key={index} bullet="''">
                                                <Substyled.SmallDesc as="a" href={t(`list.group${index+1}.link`)} target="_blank" rel='noopener noreferrer' openInNew>
                                                    {parse(t(`list.group${index+1}.details`))}
                                                </Substyled.SmallDesc>
                                            </Substyled.GroupItem>
                                        )})
                                    }
                                </ul>
                            </Substyled.GroupContainer>

                            <Substyled.GroupContainer>
                                <Substyled.SmallTitle>{parse(t(`source.group3.title`))}</Substyled.SmallTitle>
                                <ul className="groupList">
                                    {Object.keys(sources.list2).map((item,index) => {
                                        return(
                                            <Substyled.GroupItem key={index} bullet="''">
                                                <Substyled.SmallDesc as="a" href={t(`list2.group${index+1}.link`)} target="_blank" rel='noopener noreferrer' openInNew>
                                                    {parse(t(`list2.group${index+1}.details`))}
                                                </Substyled.SmallDesc>
                                            </Substyled.GroupItem>
                                        )})
                                    }
                                </ul>
                            </Substyled.GroupContainer>

                            <Substyled.GroupContainer>
                                <Substyled.SmallTitle>{parse(t(`source.group4.title`))}</Substyled.SmallTitle>
                                <ul className="groupList">
                                    {Object.keys(sources.list3).map((item,index) => {
                                        return(
                                            <Substyled.GroupItem key={index} bullet="''">
                                                <Substyled.SmallDesc>{parse(t(`list3.group${index+1}.details`))}</Substyled.SmallDesc>
                                            </Substyled.GroupItem>
                                        )})
                                    }
                                </ul>
                            </Substyled.GroupContainer>
                        </div>
                    <BtnClipBoard/>
                    <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
    );
}

export default SourceContents;