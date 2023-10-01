import styled from "styled-components";
import mixins from 'components/style/mixins';
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react";
import errorCatLottie from 'lottie/errorCat.json';
import loadingPaperplaneLottie from 'lottie/loadingPaperplane.json';

const Center = styled.div`
    ${mixins.fc};
    flex-direction: column;
    padding: ${props => props.padding};

    >.paperPlane{
        width: 423px;
    }

    >.cat {
        width: 317px;
    }

    ${({ theme }) => theme.mobile`
        >.cat {
            width: 250px;
            height: 254px;
        }

        >.paperPlane{
            width: 300px;
            height: 254px;
        }
    `};
`;

const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.f16};
    ${mixins.font('nexonLv1Gothic', 'var(--text)')};

    ${({ theme }) => theme.mobile`
        font-size: ${({ theme }) => theme.fontSizes.f14};
    `};
`;

export default function RssState({ type, padding }) {

    const { t } = useTranslation();

    const handleTextCondition = (type) => {
        if (type === 'error') return t(`rssState.error`);
        if (type === 'loading') return t(`rssState.loading`);

        return null;
    }

    return(
        <Center padding={padding}>
            
            {type === 'error' && 
                <div className="cat">
                    <Lottie animationData={errorCatLottie}/>    
                </div>
            }

            {type === 'loading' && 
                <div className="paperPlane">
                    <Lottie animationData={loadingPaperplaneLottie}/>
                </div>
            }

            <Text>{handleTextCondition(type)}</Text>
        </Center>
    )
}