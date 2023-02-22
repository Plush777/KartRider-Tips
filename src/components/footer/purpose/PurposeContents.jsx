import * as Substyled from 'components/style/common/Area.style';
import parse from 'html-react-parser';

const PurposeContents = props => {
    return ( 
        <Substyled.Wrap>
            <Substyled.Inner>
            {props.purpose.purpose.map((item, index) => {
                return(
                    <div className="container" key={index}>
                        <Substyled.TitleGroup>
                            <Substyled.Title>{item.group.title}</Substyled.Title>
                            <Substyled.Desc>{parse(item.group.description)}</Substyled.Desc>
                        </Substyled.TitleGroup>

                        <Substyled.GroupContainer>
                            <ul className="groupList fir">
                                {props.purpose.list.map((item,index) => {
                                    return(
                                        <Substyled.GroupItem key={index}>
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
    );
}

export default PurposeContents;