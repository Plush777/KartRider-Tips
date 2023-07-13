import * as Substyled from 'components/style/common/Area.style';
import parse from 'html-react-parser';
import { Min768 } from 'components/style/mobile/MediaQuery';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import { useSelector } from 'react-redux';
import BtnClipBoard from 'components/article/BtnClipBoard';
import BtnTop from 'components/article/BtnTop';
import { useTranslation } from 'react-i18next';

const PurposeContents = ({ purposes , themeMode }) => {

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
                            <Substyled.Title>{t(`purpose.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{t(`purpose.group1.description`)}</Substyled.Desc>
                        </Substyled.TitleGroup>

                        <Substyled.GroupContainer>
                            <ul className="groupList fir">
                                {Object.keys(purposes.listPurpose).map((item,index) => {
                                    return(
                                        <Substyled.GroupItem key={index}>
                                            <Substyled.SmallDesc className={themeMode === 'dark' ? 'dark' : ''}>{parse(t(`listPurpose.group${index+1}.details`))}</Substyled.SmallDesc>
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

export default PurposeContents;