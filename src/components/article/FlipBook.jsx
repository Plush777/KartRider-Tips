'use client';

import { useCallback, useEffect, useRef , useState } from "react";
import * as Buttonstyled from "components/style/common/Button.style";
import HTMLFlipBook from "react-pageflip";
import { useTranslation } from 'react-i18next';
import { M768, Min768 } from "components/style/mobile/MediaQuery";
import * as Bookstyled from "components/style/mobile/Book.style";
import Portal from "components/layout/Portal";
import SCarrowNext from 'svg/ico-arrow-slide-next.svg';
import SCarrowPrev from 'svg/ico-arrow-slide-prev.svg';
import SCclose from 'svg/ico-close.svg';

const FlipBook = () => {

    let [currentPage, setCurrentPage] = useState(0);
    let [currentPortrait, setCurrentPortrait] = useState('');
    let [bookOpened, setBookOpened] = useState(false);
    let [bookViewer, setBookViewer] = useState(false);
    const flipbook = useRef(null);
    const { t } = useTranslation();

    const handlePrev = () => {
        flipbook.current.pageFlip().flipPrev();
        console.log(currentPage)

        if(currentPage <= 1){
            setBookOpened(false);
        } 
    }

    const handleNext = () => {
        flipbook.current.pageFlip().flipNext();
        
        if(currentPage >= 0){
            setBookOpened(true);
        } 

        console.log(bookOpened)
        console.log(currentPage)
    }

    const getCurrentPage = (e) => {
        setCurrentPage(e.data);
    }

    const handleBookViewer = (state) => {
        setBookViewer(state);
    }

    const onChangeOrientation = (e) => {
        setCurrentPortrait(e.data);
    }   

    return(
        <>
            <Min768>
                <div className={`htmlFlipBook ${bookOpened ? 'active' : ''}`}>
                    <HTMLFlipBook 
                        width={410} 
                        height={500}
                        onFlip={getCurrentPage}
                        drawShadow={false}
                        showCover={true}
                        flippingTime={750}
                        useMouseEvents={false}
                        usePortrait={false}
                        ref={flipbook}
                    >   
                        <div className="stf__page front"></div>
                        <div className="stf__page left">Page 2</div>
                        <div className="stf__page right">Page 3</div>
                        <div className="stf__page left">Page 4</div>
                        <div className="stf__page right">Page 5</div>
                        <div className="stf__page back">Page 6</div>
                    </HTMLFlipBook>
                </div>
            </Min768>

            <M768>
                <Bookstyled.BookThumbnail/>

                {bookViewer &&
                    <Portal>
                        <Bookstyled.BookFrame>
                            <Bookstyled.Close onClick={() => handleBookViewer(false)}>
                                <SCclose width="32px" height="32px" fill="var(--commonSvgFill)"/>
                            </Bookstyled.Close>
                            <div className={`htmlFlipBook viewer ${bookOpened ? 'active' : ''}`}>
                                <HTMLFlipBook 
                                    width={600}
                                    height={500}
                                    onFlip={getCurrentPage}
                                    drawShadow={false}
                                    showCover={true}
                                    flippingTime={750}
                                    useMouseEvents={false}
                                    // usePortrait={false}
                                    onChangeOrientation={onChangeOrientation}
                                    ref={flipbook}
                                >   
                                    <div className={`stf__page front ${bookOpened ? 'active' : ''}`}></div>
                                    <div className="stf__page left">Page 1</div>
                                    <div className="stf__page right"></div>
                                    <div className="stf__page left">Page 2</div>
                                    <div className="stf__page right"></div>
                                    <div className="stf__page back">Page 3</div>
                                </HTMLFlipBook>
                            </div>
    
                            <Bookstyled.Prev>
                                <SCarrowPrev onClick={handlePrev} width="50px" height="50px" fill="var(--commonSvgFill)"/>
                            </Bookstyled.Prev>
                            <Bookstyled.Next>
                                <SCarrowNext onClick={handleNext} width="50px" height="50px" fill="var(--commonSvgFill)"/>
                            </Bookstyled.Next>  
                        </Bookstyled.BookFrame>
                    </Portal>
                }
                
            </M768>

            <Buttonstyled.BtnArea cg="10px">
                <Min768>
                    <Buttonstyled.Btn radius="4px" color="#fff" fontSize="0.875rem" 
                    border="none" height="44px" padding="0 19.67px" background="#333"
                    onClick={handlePrev}>{t(`book.prev`)}</Buttonstyled.Btn>
                    <Buttonstyled.Btn radius="4px" color="#fff" fontSize="0.875rem" 
                    border="none" height="44px" padding="0 19.67px" background="#333"
                    onClick={handleNext}>{t(`book.next`)}</Buttonstyled.Btn>
                </Min768>
                <M768>
                    <Buttonstyled.Btn onClick={() => handleBookViewer(true)} radius="4px" color="#fff" fontSize="0.875rem" 
                    border="none" height="44px" padding="0 19.67px" background="#333"
                    >{t(`book.unfold`)}</Buttonstyled.Btn>
                </M768>
            </Buttonstyled.BtnArea>
        </>
    )
}

export default FlipBook;