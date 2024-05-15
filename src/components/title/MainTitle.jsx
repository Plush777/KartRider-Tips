import '@dotlottie/player-component';
import * as Tit from 'style/title/Title.style';
import * as L from 'style/lottie/Lottie.style';

export default function MainTitle ({ lottieName, lottieSrc, title, right, marginBottom }) {
    return(
        <Tit.Title marginBottom={marginBottom}>
            <Tit.TitleBox>
                <L.LottieWrapper lottieName={lottieName}>
                    <dotlottie-player
                        src={lottieSrc}
                        autoplay
                        loop
                    />
                </L.LottieWrapper>
                <span className='text'>{title}</span>
            </Tit.TitleBox>

            {right}
        </Tit.Title>
    )
}