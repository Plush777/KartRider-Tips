import * as Substyled from 'components/style/common/Area.style';
import parse from 'html-react-parser';

const SourceContents = props => {
    return ( 
        <>
            <Substyled.Wrap>
                <Substyled.Inner>
                    {props.sourceData.source.map((item, index) => {
                        return(
                            <div className="container" key={index}>
                                <Substyled.TitleGroup>
                                    <Substyled.Title>{item.group.title}</Substyled.Title>
                                    <Substyled.Desc>{parse(item.group.description)}</Substyled.Desc>
                                </Substyled.TitleGroup>

                                <Substyled.GroupContainer>
                                    <Substyled.SmallTitle>{item.group4.title}</Substyled.SmallTitle>
                                    <ul className="groupList">
                                        {props.sourceData.list.map((items,index) => {
                                            return(
                                                <Substyled.GroupItem key={index} bullet="''">
                                                    <Substyled.SmallDesc>{parse(items.details)}</Substyled.SmallDesc>
                                                </Substyled.GroupItem>
                                            )})
                                        }
                                    </ul>
                                </Substyled.GroupContainer>
                            </div>
                        )
                    })}
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
    );
}

export default SourceContents;