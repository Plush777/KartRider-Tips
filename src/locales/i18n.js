import * as i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import enSlide from 'locales/en/main/slide';
import koSlide from 'locales/ko/main/slide';
import koBox from 'locales/ko/main/box';
import enBox from 'locales/en/main/box';
import koSupport from 'locales/ko/etc/support';
import enSupport from 'locales/en/etc/support';
import koNotice from 'locales/ko/etc/notice';
import enNotice from 'locales/en/etc/notice';
import koFooter from 'locales/ko/etc/footer';
import enFooter from 'locales/en/etc/footer';
import koGnb from 'locales/ko/gnb/gnb';
import enGnb from 'locales/en/gnb/gnb';
import koHeader from 'locales/ko/etc/header';
import enHeader from 'locales/en/etc/header';
import koPurpose from 'locales/ko/etc/purpose';
import enPurpose from 'locales/en/etc/purpose';
import koSource from 'locales/ko/etc/source';
import enSource from 'locales/en/etc/source';
import koCategory from 'locales/ko/common/category';
import enCategory from 'locales/en/common/category';
import koInquiry from 'locales/ko/etc/inquiry';
import enInquiry from 'locales/en/etc/inquiry';
import koSkip from 'locales/ko/etc/etc';
import enSkip from 'locales/en/etc/etc';
import koTab from 'locales/ko/tab/tab';
import enTab from 'locales/en/tab/tab';
import koTabInfo from 'locales/ko/tab/tabInfo';
import enTabInfo from 'locales/en/tab/tabInfo';
import koSpeed from 'locales/ko/mode/speedMode/contents';
import enSpeed from 'locales/en/mode/speedMode/contents';
import koItem from 'locales/ko/mode/itemMode/contents';
import enItem from 'locales/en/mode/itemMode/contents';
import koRank from 'locales/ko/etc/rank';
import enRank from 'locales/en/etc/rank';
import koKartbody from 'locales/ko/kartbody/contents';
import enKartbody from 'locales/en/kartbody/contents';
import koCharacter from 'locales/ko/character/common/contents';
import enCharacter from 'locales/en/character/common/contents';
import koGrandPrix from 'locales/ko/mode/rankMode/contents';
import enGrandPrix from 'locales/en/mode/rankMode/contents';
import koTrack from 'locales/ko/common/track';
import enTrack from 'locales/en/common/track';
import koTimeAttack from 'locales/ko/mode/singleMode/timeAttack/contents';
import enTimeAttack from 'locales/en/mode/singleMode/timeAttack/contents'
import koCustomGame from 'locales/ko/mode/singleMode/customGame/contents';
import enCustomGame from 'locales/en/mode/singleMode/customGame/contents';
import koLicense from 'locales/ko/mode/singleMode/license/contents';
import enLicense from 'locales/en/mode/singleMode/license/contents';
import koEvent from 'locales/ko/mode/eventMode/contents';
import enEvent from 'locales/en/mode/eventMode/contents';
import koLanding from 'locales/ko/landing/contents';

/* ja */
import jaSlide from 'locales/ja/main/slide';
import jaBox from 'locales/ja/main/box';
import jaSupport from 'locales/ja/etc/support';
import jaNotice from 'locales/ja/etc/notice';
import jaFooter from 'locales/ja/etc/footer';
import jaGnb from 'locales/ja/gnb/gnb';
import jaHeader from 'locales/ja/etc/header';
import jaPurpose from 'locales/ja/etc/purpose';
import jaSource from 'locales/ja/etc/source';
import jaCategory from 'locales/ja/common/category';
import jaInquiry from 'locales/ja/etc/inquiry';
import jaSkip from 'locales/ja/etc/etc';
import jaTab from 'locales/ja/tab/tab';
import jaTabInfo from 'locales/ja/tab/tabInfo';
import jaSpeed from 'locales/ja/mode/speedMode/contents';
import jaItem from 'locales/ja/mode/itemMode/contents';
import jaRank from 'locales/ja/etc/rank';
import jaKartbody from 'locales/ja/kartbody/contents';
import jaCharacter from 'locales/ja/character/common/contents';
import jaGrandPrix from 'locales/ja/mode/rankMode/contents';
import jaTrack from 'locales/ja/common/track';
import jaTimeAttack from 'locales/ja/mode/singleMode/timeAttack/contents';
import jaCustomGame from 'locales/ja/mode/singleMode/customGame/contents';
import jaLicense from 'locales/ja/mode/singleMode/license/contents';
import jaEvent from 'locales/ja/mode/eventMode/contents';

const resources = {
    en: {
        translation: {
            ...enSlide,
            ...enBox,
            ...enSupport,
            ...enNotice,
            ...enFooter,
            ...enGnb,
            ...enHeader,
            ...enPurpose,
            ...enSource,
            ...enCategory,
            ...enInquiry,
            ...enSkip,
            ...enTab,
            ...enTabInfo,
            ...enSpeed,
            ...enItem,
            ...enRank,
            ...enKartbody,
            ...enCharacter,
            ...enGrandPrix,
            ...enTrack,
            ...enTimeAttack,
            ...enCustomGame,
            ...enLicense,
            ...enEvent
        }
    },
    ko: {
        translation: {
            ...koSlide,
            ...koBox,
            ...koSupport,
            ...koNotice,
            ...koFooter,
            ...koGnb,
            ...koHeader,
            ...koPurpose,
            ...koSource,
            ...koCategory,
            ...koInquiry,
            ...koSkip,
            ...koTab,
            ...koTabInfo,
            ...koSpeed,
            ...koItem,
            ...koRank,
            ...koKartbody,
            ...koCharacter,
            ...koGrandPrix,
            ...koTrack,
            ...koTimeAttack,
            ...koCustomGame,
            ...koLicense,
            ...koEvent,
            ...koLanding
        }
    },
    ja: {
        translation: {
            ...jaSlide,
            ...jaBox,
            ...jaSupport,
            ...jaNotice,
            ...jaFooter,
            ...jaGnb,
            ...jaHeader,
            ...jaPurpose,
            ...jaSource,
            ...jaCategory,
            ...jaInquiry,
            ...jaSkip,
            ...jaTab,
            ...jaTabInfo,
            ...jaSpeed,
            ...jaItem,
            ...jaRank,
            ...jaKartbody,
            ...jaCharacter,
            ...jaGrandPrix,
            ...jaTrack,
            ...jaTimeAttack,
            ...jaCustomGame,
            ...jaLicense,
            ...jaEvent
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: "ko",
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;