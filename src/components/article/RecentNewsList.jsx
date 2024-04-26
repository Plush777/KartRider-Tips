import { M768 } from 'components/style/mobile/MediaQuery';
import * as Mainstyled from 'components/style/common/Area.style';

const RecentNewsList = ({ data, tabIndex }) => {
    const renderCategory = () => {
        if (tabIndex === 0) return 'News';
        if (tabIndex === 1) return 'Dev blog';
        if (tabIndex === 2) return 'Update';

        return null;
    }

    return(
        <Mainstyled.MainComponentArticleWrap>
            <Mainstyled.MainComponentArticleList>
                {data && data.map((item,index) => {
                    return(
                        <li key={index}>
                            <Mainstyled.MainComponentArticleLink href={tabIndex === 0 ? item.link : item.url} target='_blank' rel="noopener noreferrer">
                                <Mainstyled.MainComponentnameDivision>
                                    <Mainstyled.MainComponentInnerDivision>
                                        <Mainstyled.MainComponentArticleCategory>{renderCategory()}</Mainstyled.MainComponentArticleCategory>
                                        <M768>
                                            <Mainstyled.MainComponentArticleDate as="time">{item.date}</Mainstyled.MainComponentArticleDate>
                                        </M768>
                                    </Mainstyled.MainComponentInnerDivision>
                                    
                                    <div className="eps type01">
                                        <Mainstyled.MainComponentArticleTitle>{item.title}</Mainstyled.MainComponentArticleTitle>
                                    </div>
                                </Mainstyled.MainComponentnameDivision>
                                
                                <Mainstyled.MainComponentArticleDate mobileDisplay as="time">{item.date}</Mainstyled.MainComponentArticleDate>
                            </Mainstyled.MainComponentArticleLink>
                        </li>
                    )
                })}
            </Mainstyled.MainComponentArticleList>
        </Mainstyled.MainComponentArticleWrap>
    )
}

export default RecentNewsList;