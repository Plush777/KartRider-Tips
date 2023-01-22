import styled from "styled-components";

const TabWrap = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff;
`

const TabWrapInner = styled.div`
    display: flex;
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 15px 0;
`

const TabInfo = styled.div`
    min-width: 125px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #ddd;
    background-color: #f2f2f2;
`

const TabInfoTxt = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: 'nexonLv1Gothic';
    color: #626262;

    &::after{
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        background: url('../images/common/ico-arrow-right.svg') no-repeat center;
    }
`

const TabList = styled.ul`
    display: flex;
`

const TabItem = styled.li`
    width: 110px;
    height: 50px;
    border-radius: 25px;
    font-size: 18px;
    font-family: 'nexonLv1Gothic';
    color: #767676;
`

const TabBtn = styled.button.attrs({type: "button"})`

`

const tabName = [
    {
        name: "스피드전"
    },
    {
        name: "아이템전"
    }
]


const SubTab = () => {
    return ( 
        <TabWrap>
            <TabWrapInner>
                <TabInfo>
                    <TabInfoTxt>모드</TabInfoTxt>
                </TabInfo>
                <TabList>
                    {tabName.map((item, index) => {
                        return (
                            <TabItem key={index}>
                                <TabBtn>{item.name}</TabBtn>
                            </TabItem>
                        )})
                    }
                </TabList>
            </TabWrapInner>
        </TabWrap>
    );
}

export default SubTab;