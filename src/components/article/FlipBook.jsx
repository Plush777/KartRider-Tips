'use client';

import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import * as Buttonstyled from "components/style/common/Button.style";
import { useTranslation } from 'react-i18next';
import { M768, Min768 } from "components/style/mobile/MediaQuery";
import * as Bookstyled from "components/style/mobile/Book.style";
import Portal from "components/layout/Portal";
import SCarrowNext from 'svg/ico-arrow-slide-next.svg';
import SCarrowPrev from 'svg/ico-arrow-slide-prev.svg';
import SCclose from 'svg/ico-close.svg';
import glossaryData from "locales/ko/glossary/contents.json";
import etc from "locales/ko/etc/etc.json"

const FlipBook = () => {

    let [bookOpened, setBookOpened] = useState(false); //처음에 펴졌을 때 active (right 0 margin-left 220px)
    let [bookClosed, setBookClosed] = useState(false); //닫을 때 active (left 0 margin-left 440px)
    const { t } = useTranslation();
    const totalPages = Object.keys(glossaryData.glossary);
    const totalPagesLength = totalPages.length +2; //인트로랑 아웃트로 페이지 2개 포함해서 +2
    const pageTitles = [etc.glossaryTitle.detail1,etc.glossaryTitle.detail2]; //플립북 타이틀
    const pageContents = [glossaryData.glossary.speedTerm,glossaryData.glossary.itemTerm]; //플립북 내용
    const [currentPage, setCurrentPage] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState({
        prev: false,
        next: false
    });

    const handleNextPage = () => {
        if (window.innerWidth <= 1300) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage + 2);
        }

        if(window.innerWidth <= 1300 && currentPage === 0 || currentPage === 1){
            setCurrentPage(currentPage + 2);
        }
    };

    const handlePrevPage = () => {
        if (window.innerWidth <= 1300 && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(currentPage - 2);
        }

        if(window.innerWidth <= 1300 && currentPage === 2){
            setCurrentPage(currentPage - 2);
        }
    }

    useEffect(() => {
        if(currentPage > 0){
            setBookOpened(true);
            setButtonDisabled({prev: false});
        } else {
            setBookOpened(false);
        }
        
        if(currentPage >= totalPagesLength) {
            setBookOpened(false);
            setBookClosed(true);
        } else {
            setBookClosed(false);
        }
    },[currentPage,setBookOpened,setButtonDisabled,setBookClosed]);
    
    useEffect(() => {
        if (currentPage === 0) {
            setButtonDisabled({ prev: true });
        } else if (currentPage === totalPagesLength) {
            setButtonDisabled({ next: true });
        } else {
            setButtonDisabled({ prev: false, next: false });
        }
    }, [currentPage, totalPagesLength]);

    console.log(currentPage);
    // console.log(totalPagesLength)

    return(
        <>  
            <Bookstyled.BookWrap className={`${bookOpened ? 'active' : ''} ${bookClosed ? 'closed' : ''}`}>
                <Bookstyled.PageWrap>
                    <Bookstyled.Page className={currentPage >= 1 ? 'first flipped' : 'first'}/>

                    {totalPages.map((item,index) => {
                        return(
                            <Bookstyled.Page key={index} className={currentPage >= index+2 ? 'flipped' : ''}>
                                <Bookstyled.PageTitle>{pageTitles[index]}</Bookstyled.PageTitle>
                                <Bookstyled.PageContent>
                                    {Object.values(pageContents[index]).map((item,index) => {
                                        return <Bookstyled.PageContentText key={item.id}>{parse(item.detail)}</Bookstyled.PageContentText>
                                    })}
                                </Bookstyled.PageContent>
                            </Bookstyled.Page>
                        )
                    })}

                    <Bookstyled.Page className={currentPage >= totalPagesLength ? 'end flipped' : 'end'}/>
                </Bookstyled.PageWrap>
            </Bookstyled.BookWrap>

            <Buttonstyled.BtnArea cg="10px">
                <Buttonstyled.Btn radius="4px" onClick={handlePrevPage} color="#fff" fontSize="0.875rem" 
                border="none" height="44px" padding="0 19.67px" background="#333" className={buttonDisabled.prev ? 'disabled' : ''}
                >{t(`book.prev`)}</Buttonstyled.Btn>
                <Buttonstyled.Btn onClick={handleNextPage} radius="4px" color="#fff" fontSize="0.875rem" 
                border="none" height="44px" padding="0 19.67px" background="#333" className={buttonDisabled.next ? 'disabled' : ''}
                >{t(`book.next`)}</Buttonstyled.Btn>
            </Buttonstyled.BtnArea>
        </>
    )
}

export default FlipBook;