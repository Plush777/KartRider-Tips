import '@dotlottie/player-component';
import * as Tit from 'style/components/title/Title.style';
import * as L from 'style/components/lottie/Lottie.style';

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