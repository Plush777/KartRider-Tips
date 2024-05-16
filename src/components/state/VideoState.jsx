import * as V from "style/components/state/VideoState.style";
import { lottieSrc } from "const";

export default function VideoState({ type, emptyText, styleClassName }) {
    const handleTextCondition = (type) => {
        if (type === 'error') return '데이터를 불러오는데 실패했어요.';
        if (type === 'loading') return '데이터를 불러오는 중이에요...';

        return null;
    }

    const handlePlayerCondition = (type) => {
        if (type === 'error') return lottieSrc.error;
        if (type === 'loading') return lottieSrc.loading;
        if (type === 'empty') return lottieSrc.empty;

        return null;
    }

    return(
        <V.Center>
            <V.PlayerWrap state={type} className={styleClassName}>
                <dotlottie-player
                    src={handlePlayerCondition(type)}
                    autoplay
                    loop
                />
            </V.PlayerWrap>
            <V.Text className="lottieText">{emptyText ? emptyText : handleTextCondition(type)}</V.Text>
        </V.Center>
    )
}