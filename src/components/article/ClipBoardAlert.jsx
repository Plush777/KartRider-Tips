'use client';

import * as Alertstyled from "components/style/mobile/Alert.style";

const ClipBoardAlert = ({ active }) => {
    return ( 
        <Alertstyled.Wrap className={`${'type02'} ${active}`}>
            <Alertstyled.Inner>
                <Alertstyled.TitleArea>
                    <Alertstyled.Title>클립보드에 복사했어요.</Alertstyled.Title>
                </Alertstyled.TitleArea>
            </Alertstyled.Inner>
        </Alertstyled.Wrap>
    );
}

export default ClipBoardAlert;