'use client';

import * as FootBarstyled from 'components/style/common/FootBar.style'
import { useTranslation } from 'react-i18next';

const FootSupport = () => {

    const { t } = useTranslation();

    return ( 
        <FootBarstyled.Bar backgroundColor="#1C559C">
            <FootBarstyled.Txt href="https://forms.gle/4i8vvDYz9VbLbJGN9" target="_blank" rel="noopener noreferrer">
                <strong>{t(`support.strong`)}</strong>
                {t(`support.txt`)}
            </FootBarstyled.Txt>
        </FootBarstyled.Bar>
    );
}

export default FootSupport;