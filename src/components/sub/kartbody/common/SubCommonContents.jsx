import * as Substyled from '../../../style/Sub.style';
import parse from 'html-react-parser';
import BtnTop from '../../../article/BtnTop';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SubCommonContents = (props) => {

    let {id} = useParams();

    return ( 
        <>
            <Substyled.SubContentsWrap>
                <Substyled.SubContentsInner>
                    {props.commonContents.kartbody.map((items,index) => {
                        return(
                            <Substyled.SubContainer key={index}>
                                <Substyled.TitleArea>
                                    <Substyled.SubTitle>{items.title}</Substyled.SubTitle>
                                </Substyled.TitleArea>
                            </Substyled.SubContainer>
                        )
                    })}
                    <Substyled.TabWrap>
                        <Substyled.TabInner>
                            {Object.entries(props.commonContents).map(([key,values]) => (
                                <>
                                    {console.log(values)}
                                    {values.map(item => (
                                        <>
                                            {console.log(item.list)}
                                        </>
                                    ))}
                                </>
                            ))}

                            {/* {Object.entries(build).map(([key, values]) => (
                                <F>
                                    <div className="key">{key}</div>
                                    {values.map(row => (
                                        <div key={row.label}>{row.label}</div>
                                    ))}
                                </F>
                            ))} */}
                            
                        </Substyled.TabInner>
                    </Substyled.TabWrap>
                </Substyled.SubContentsInner>
            </Substyled.SubContentsWrap>
            <BtnTop/>
        </>
     );
}

export default SubCommonContents;