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
                                    <Substyled.SmallTitle>{item.group2.title}</Substyled.SmallTitle>
                                    <ul className="groupList">
                                        {props.sourceData.list.map((item,index) => {
                                            return(
                                                <Substyled.GroupItem key={index} bullet="''">
                                                    <Substyled.SmallDesc as="a" href={item.link} target="_blank" rel='noopener noreferrer' openInNew>{parse(item.details)}</Substyled.SmallDesc>
                                                </Substyled.GroupItem>
                                            )})
                                        }
                                    </ul>
                                </Substyled.GroupContainer>

                                <Substyled.GroupContainer>
                                    <Substyled.SmallTitle>{item.group3.title}</Substyled.SmallTitle>
                                    <ul className="groupList">
                                        {props.sourceData.list2.map((item,index) => {
                                            return(
                                                <Substyled.GroupItem key={index} bullet="''">
                                                    <Substyled.SmallDesc as="a" href={item.link} target="_blank" rel='noopener noreferrer' openInNew>{parse(item.details)}</Substyled.SmallDesc>
                                                </Substyled.GroupItem>
                                            )})
                                        }
                                    </ul>
                                </Substyled.GroupContainer>

                                <Substyled.GroupContainer>
                                    <Substyled.SmallTitle>{item.group4.title}</Substyled.SmallTitle>
                                    <ul className="groupList">
                                        {props.sourceData.list3.map((item,index) => {
                                            return(
                                                <Substyled.GroupItem key={index} bullet="''">
                                                    <Substyled.SmallDesc>{parse(item.details)}</Substyled.SmallDesc>
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