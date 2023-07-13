import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setSelectIndex, setLanguage } from 'redux/store/store'
import useSelect from 'hooks/useSelect';

export const useLanguageSelect = () => {
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const getLang = localStorage.getItem('lang');
    const [selected, toggle, handleSelectClick, handleToggleSelect, setSelected] = useSelect();
    const { i18n } = useTranslation();

    const handleSelectLang = index => {
        dispatch(
            setSelectIndex({ //다른 셀렉트 index는 0으로 고정 (state 공유 방지)
                kartIndex: 0,
                characterIndex: 0,
                langIndex: index
            })
        );

        let langCode;

        if (index === 0) {
            langCode = 'ko';
        } else if (index === 1) {
            langCode = 'en';
        } else if (index === 2) {
            langCode = 'ja';
        } else if (index === 3) {
            langCode = 'zh';
        }

        dispatch(setLanguage(langCode));
        localStorage.setItem('lang', langCode); //로컬 스토리지에 선택한 언어 저장
        i18n.changeLanguage(langCode); //선택한 언어로 변경
    };

    useLayoutEffect(() => {
        if (!getLang || !language) { //저장된 언어가 없으면 한국어로 고정
            dispatch(setLanguage('ko'));
            localStorage.setItem('lang', 'ko');
        } else if (getLang) { //있으면 저장된거 가져와서 언어 변경
            i18n.changeLanguage(getLang);
            localStorage.setItem('lang', getLang);
            dispatch(setLanguage(getLang));
        }
    }, [language, i18n, dispatch, getLang]);

    useLayoutEffect(() => {
        if (getLang === 'ko') {
            setSelected({ lang: '한국어' });
        } else if (getLang === 'en') {
            setSelected({ lang: 'English' });
        } else if (getLang === 'ja') {
            setSelected({ lang: '日本語' });
        } else if (getLang === 'zh') {
            setSelected({ lang: '中文' });
        }
    }, [getLang, dispatch, setSelected]);

    return { selected, toggle, handleSelectClick, handleToggleSelect, handleSelectLang };
};

export default useLanguageSelect;