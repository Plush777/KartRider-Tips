import * as Substyled from 'components/style/common/Area.style';
import parse from 'html-react-parser';
import BtnTop from 'components/article/BtnTop'; 
import { Min768 } from 'components/style/mobile/MediaQuery';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import { useSelector } from 'react-redux';
import BtnClipBoard from 'components/article/BtnClipBoard';
import { useTranslation } from 'react-i18next';

const InquiryContents = ({ themeMode }) => {

    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    let inquiryData = useSelector(state => state.inquiry);
    const { t } = useTranslation();

    const infoList = ['mail','github','instagram'];
    const infoListSpread = infoList.map(item => (item));

    return ( 
        <>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <Substyled.TitleGroup>
                            <Substyled.Title>{t(`inquiry.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{parse(t(`inquiry.group1.description`))}</Substyled.Desc>
                        </Substyled.TitleGroup>

                        <Substyled.GroupContainer className="type02">
                            <Substyled.GroupList>
                                {Object.keys(inquiryData.listInquiry).map((item,index) => {
                                    return(
                                        <Substyled.GroupItem key={index} bullet="''" ico data-name={infoListSpread[index]} className={themeMode === 'dark' ? 'dark' : ''}>
                                            <Substyled.SmallDesc mFz as="a" href={t(`listInquiry.group${index+1}.link`)} target="_blank" rel='noopener noreferrer'>
                                            {parse(t(`listInquiry.group${index+1}.name`))}
                                            </Substyled.SmallDesc>
                                        </Substyled.GroupItem>
                                    )})
                                }
                            </Substyled.GroupList>
                        </Substyled.GroupContainer>
                    </div>
                <BtnClipBoard/>
                <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
        
    );
}

export default InquiryContents;