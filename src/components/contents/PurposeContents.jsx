import * as Substyled from 'components/style/common/Area.style';

const PurposeContents = ({ themeMode }) => {
    return ( 
        <Substyled.Wrap>
            <Substyled.Inner>
                <div className="container">
                    <Substyled.TitleGroup>
                        <Substyled.Title>목적</Substyled.Title>
                        <Substyled.TitleGroupDesc>이 사이트는 다음과 같은 목적을 가지고 있습니다.</Substyled.TitleGroupDesc>
                    </Substyled.TitleGroup>

                    <Substyled.GroupContainer>
                        <Substyled.GroupList rowGap="10px">
                            <Substyled.GroupItem>
                                <Substyled.Desc>1. 카트라이더 초심자 또는 잘하고 싶으신 분들을 위한 가이드 및 숨겨진 팁들을 제공합니다.</Substyled.Desc>
                            </Substyled.GroupItem>
                            <Substyled.GroupItem>
                                <Substyled.Desc className={themeMode === 'dark' ? 'dark' : ''}>2. 이 사이트는<a href='https://member.nexon.com/policy/gameipguide.aspx?date=20210622' className='openInNew' target='_blank' style={{'margin': '0 4px'}} rel='noopener noreferrer'><strong>넥슨 게임IP사용가이드 (2021.06.22 기준)</strong></a>를 준수하고 있습니다.</Substyled.Desc>
                            </Substyled.GroupItem>
                            <Substyled.GroupItem>
                                <Substyled.Desc>3. 해당 사이트는 넥슨에서 공식적으로 제작한 것이 아닙니다.</Substyled.Desc>
                            </Substyled.GroupItem>
                        </Substyled.GroupList>
                    </Substyled.GroupContainer>
                </div>
            </Substyled.Inner>
        </Substyled.Wrap>
    );
}

export default PurposeContents;