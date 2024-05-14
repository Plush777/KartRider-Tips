import '@dotlottie/player-component';
import * as Mainstyled from 'components/style/common/Area.style';

export default function MainTitle ({ lottieName, lottieSrc, title, right, marginBottom }) {
    return(
        <Mainstyled.MainComponentTitle marginBottom={marginBottom}>
            <Mainstyled.MainComponentTitleBox>
                <Mainstyled.LottieWrapper lottieName={lottieName}>
                    <dotlottie-player
                        src={lottieSrc}
                        autoplay
                        loop
                    />
                </Mainstyled.LottieWrapper>
                <span className='text'>{title}</span>
            </Mainstyled.MainComponentTitleBox>

            {right}
        </Mainstyled.MainComponentTitle>
    )
}