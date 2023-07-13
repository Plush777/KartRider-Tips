'use client';

import * as FootBarstyled from 'components/style/common/FootBar.style'
import { useTranslation } from 'react-i18next';

const FootNotice = () => {

    const { t } = useTranslation();

    return ( 
        <FootBarstyled.Bar backgroundColor="#970303">
            <FootBarstyled.Txt as="p">{t(`notice.txt`)}</FootBarstyled.Txt>
        </FootBarstyled.Bar>
    );
}

export default FootNotice;