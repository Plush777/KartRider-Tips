import * as FootBarstyled from 'components/style/common/FootBar.style'

const FootNotice = () => {
    return ( 
        <FootBarstyled.Bar backgroundColor="#970303">
            <FootBarstyled.Txt as="p">이 사이트는 넥슨에서 공식적으로 운영하는 사이트가 아닙니다.</FootBarstyled.Txt>
        </FootBarstyled.Bar>
    );
}

export default FootNotice;