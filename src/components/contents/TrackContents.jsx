'use client';

import parse from 'html-react-parser';
import * as Substyled from 'components/style/common/Area.style';
import * as Trackstyled from 'components/style/components/sub/Track.style';
import * as Buttonstyled from 'components/style/common/Button.style';
import BtnTop from 'components/article/BtnTop';
import React from 'react'; 
import ImgSkeleton from 'components/article/ImgSkeleton';
import useImageLoading from 'hooks/useImageLoading';
import { useTranslation } from 'react-i18next';
import { Min768 } from 'components/style/mobile/MediaQuery';
import { useSelector } from 'react-redux';
import BtnClipBoard from 'components/article/BtnClipBoard';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import villageData from 'locales/ko/track/village.json';
import desertData from 'locales/ko/track/desert.json';
import forestData from 'locales/ko/track/forest.json';
import iceData from 'locales/ko/track/ice.json';
import mineData from 'locales/ko/track/mine.json';
import worldData from 'locales/ko/track/world.json';
import factoryData from 'locales/ko/track/factory.json';
import wkcData from 'locales/ko/track/wkc.json';
import graveyardData from 'locales/ko/track/graveyard.json';
import moonhillData from 'locales/ko/track/moonhill.json';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useState , useLayoutEffect , useEffect } from 'react';
import Difficulty from 'components/article/Difficulty';

const TrackContents = () => {
    const trackObjs = {
        village: {
            translationPrefix: 'trackVillage.group',
            image: '/images/track/village/track-village0',
            link: ['https://youtu.be/Di1rcEIUAQk','https://youtu.be/uKsel-OqdXc','https://youtu.be/jW-Mrg8BlFE',
            'https://youtu.be/040H0Qyu_fw','https://youtu.be/LJiDuJdvIuU','https://youtu.be/4BaLixnwixk',
            'https://youtu.be/-vPCzwKg59A']
        },
        desert: {
            translationPrefix: 'trackDesert.group',
            image: '/images/track/desert/track-desert0',
            link: ['https://youtu.be/S3A8sHveAvo','https://youtu.be/Nv549p92QHg','https://youtu.be/RoFdeamd7C4',
            'https://youtu.be/ht4-26qEOZE','https://youtu.be/XT_HQhmDesU','https://youtu.be/rOFObOfe1A8']
        },
        forest: {
            translationPrefix: 'trackForest.group',
            image: '/images/track/forest/track-forest0',
            link: ['https://youtu.be/FGNp8n_FARo','https://youtu.be/hQLvPOcbO9I','https://youtu.be/soEPMyE61vw',
            'https://youtu.be/r20H2ASBjDA','https://youtu.be/rzLHBq16h-s','https://youtu.be/cAzjC-blwks',
            'https://youtu.be/SEJtvPXkXcY']
        },
        ice: {
            translationPrefix: 'trackIce.group',
            image: '/images/track/ice/track-ice0',
            link: ['https://youtu.be/1_R3n-ggZtY','https://youtu.be/aIaSt-fb7bw','https://youtu.be/rvJHw11DpY4',
            'https://youtu.be/FNRhcDEfIgE','https://youtu.be/nm7A9awEv24','https://youtu.be/DVVTp2zBZkw']
        },
        mine: {
            translationPrefix: 'trackMine.group',
            image: '/images/track/mine/track-mine0',
            link: ['https://youtu.be/L84Q2T5wF3U','https://youtu.be/X1-gyUnugUw','https://youtu.be/WbA0nMqkLGA',
            'https://youtu.be/ImtwNLT5R-o','https://youtu.be/bF9azGmAhbo','https://youtu.be/u5LJ6nEzeK4']
        },
        world: {
            translationPrefix: 'trackWorld.group',
            image: '/images/track/world/track-world0',
            link: ['https://youtu.be/k_giXjJHNhM','https://youtu.be/FRry2YCfxtc','https://youtu.be/r_-11fq1iLU',
            'https://youtu.be/qrZmtw-7MO8','https://youtu.be/7_4GRs6UVcQ','https://youtu.be/SM83yA-JsxI',
            'https://youtu.be/4cTGkjrEP18','https://youtu.be/q0pTA7zn-h0','https://youtu.be/G4daHNZaRfU',
            'https://youtu.be/GStqCBFVGoM','https://youtu.be/surKZ8Nvq-8']
        },
        factory: {
            translationPrefix: 'trackFactory.group',
            image: '/images/track/factory/track-factory0',
            link: ['https://youtu.be/O0euUWHiYwk','https://youtu.be/gwtSN_OSweY','https://youtu.be/0ahnVxmrTl8',
            'https://youtu.be/Le9PqEjSicg']
        },
        wkc: {
            translationPrefix: 'trackWkc.group',
            image: '/images/track/wkc/track-wkc0',
            link: ['https://youtu.be/XIieTpx6gDk','https://youtu.be/SHxpWYtgpHg','https://youtu.be/VLFA5UH1Y8c',
            'https://youtu.be/nH2wHu8KfCs']
        },
        graveyard: {
            translationPrefix: 'trackGraveyard.group',
            image: '/images/track/graveyard/track-graveyard0',
            link: ['https://youtu.be/jGsyZOCS5uQ','https://youtu.be/7cTBHSY5bMQ','https://youtu.be/BLbAOS72kq4']
        },
        moonhill: {
            translationPrefix: 'trackMoonhill.group',
            image: '/images/track/moonhill/track-moonhill0',
            link: ['https://youtu.be/QnEmfMXGFsc','https://youtu.be/QnEmfMXGFsc','https://youtu.be/QnEmfMXGFsc',
            'https://youtu.be/QnEmfMXGFsc']
        }
    };

    const [loading, handleLoad] = useImageLoading();
    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const { t } = useTranslation();
    const currentPathname = usePathname();

    let [trackData, setTrackData] = useState('');
    let [categoryName, setCategoryName] = useState('');

    useLayoutEffect(() => {
        if(currentPathname.startsWith('/track/village')){
            setTrackData(villageData.trackVillage);
            setCategoryName('village');
        } else if(currentPathname.startsWith('/track/desert')){
            setTrackData(desertData.trackDesert);
            setCategoryName('desert');
        } else if(currentPathname.startsWith('/track/forest')){
            setTrackData(forestData.trackForest);
            setCategoryName('forest');
        } else if(currentPathname.startsWith('/track/ice')){
            setTrackData(iceData.trackIce);
            setCategoryName('ice');
        } else if(currentPathname.startsWith('/track/mine')){
            setTrackData(mineData.trackMine);
            setCategoryName('mine');
        } else if(currentPathname.startsWith('/track/world')){
            setTrackData(worldData.trackWorld);
            setCategoryName('world');
        } else if(currentPathname.startsWith('/track/factory')){
            setTrackData(factoryData.trackFactory);
            setCategoryName('factory');
        } else if(currentPathname.startsWith('/track/wkc')){
            setTrackData(wkcData.trackWkc);
            setCategoryName('wkc');
        } else if(currentPathname.startsWith('/track/graveyard')){
            setTrackData(graveyardData.trackGraveyard);
            setCategoryName('graveyard');
        } else if(currentPathname.startsWith('/track/moonhill')){
            setTrackData(moonhillData.trackMoonhill);
            setCategoryName('moonhill');
        }
    },[currentPathname]);

    const trackLicenseCondition = (index) => {
        if(trackData[index].license === 'all'){
            return {
                src: '/images/common/ico-all.svg',
                width: '38',
                height: '38'
            }
        } else if(trackData[index].license === 'b2'){
            return {
                src: '/images/common/ico-B2.webp',
                width: '30',
                height: '33'
            }
        } else if(trackData[index].license === 'b1'){
            return {
                src: '/images/common/ico-B1.webp',
                width: '30',
                height: '33'
            }
        } else if(trackData[index].license === 'l3'){
            return {
                src: '/images/common/ico-L3.webp',
                width: '30',
                height: '33'
            }
        } else if(trackData[index].license === 'l2'){
            return {
                src: '/images/common/ico-L2.webp',
                width: '30',
                height: '33'
            }
        } else if(trackData[index].license === 'l1'){
            return {
                src: '/images/common/ico-L1.webp',
                width: '30',
                height: '33'
            }
        } else if(trackData[index].license === 'pro'){
            return {
                src: '/images/common/ico-PRO.webp',
                width: '30',
                height: '33'
            }
        } 
    }

    const trackDifficultyCondition = (index) => {
        if(trackData[index].difficulty === '2'){ //난이도1
            return '2';
        } else if(trackData[index].difficulty === '4'){ //난이도2
            return '4';
        } else if(trackData[index].difficulty === '5.9'){ //난이도3
            return '5.9';
        } else if(trackData[index].difficulty === '7.8'){ //난이도4
            return '7.8';
        } else if(trackData[index].difficulty === '10'){ //난이도5
            return '10';
        }
    }

    const trackModeCondition = (index) => {
        if(trackData[index].mode === 'all'){
            return 'all'
        } else if(trackData[index].mode === 'item'){
            return {
                src: '/images/common/ico-item-mode.webp'
            }
        } else if(trackData[index].mode === 'speed'){
            return {
                src: '/images/common/ico-speed-mode.webp'
            }
        }
    }

    return(
        <>
            <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <div className="titleArea">
                            <Substyled.Title>{t(`trackTitle.txt`)}</Substyled.Title>
                        </div>

                        <Trackstyled.Wrap>
                            <Trackstyled.ListWrap>
                                <Trackstyled.List>
                                    {Object.keys(trackData).map((item, index) => {

                                        const trackLicenseResult = trackLicenseCondition(`group${index+1}`);
                                        const trackDifficultyResult = trackDifficultyCondition(`group${index+1}`);
                                        const trackModeResult = trackModeCondition(`group${index+1}`);

                                        return(
                                            <Trackstyled.Item key={index}>
                                                <Trackstyled.Top>
                                                    {loading && (
                                                        <ImgSkeleton mwd="100%" type="absolute2" pt="59.603"/>
                                                    )}
                                                    <Image src={`${trackObjs[categoryName].image}${index+1}.webp`} 
                                                    alt="track" width={302} height={180} onLoad={handleLoad} 
                                                    activeDisplay={loading ? 'none' : 'block'}/>
                                                    
                                                    <Trackstyled.TopGroupWrap>
                                                        <Trackstyled.TopGroup className="left">
                                                            <Image 
                                                                src={trackLicenseResult?.src} 
                                                                width={trackLicenseResult?.width} 
                                                                height={trackLicenseResult?.height} 
                                                                alt="" 
                                                                className="licenseInfo"
                                                            />
                                                            <Difficulty value={trackDifficultyResult}/>
                                                        </Trackstyled.TopGroup>
                                                        <Trackstyled.TopGroup className="right">
                                                            {
                                                                trackModeResult === 'all' ? (
                                                                    <>
                                                                        <Image src="/images/common/ico-speed-mode.webp" width={30} height={30} alt=""/>
                                                                        <Image src="/images/common/ico-item-mode.webp" width={30} height={30} alt=""/>
                                                                    </>
                                                                ) : (
                                                                    <Image src={trackModeResult?.src} width={30} height={30} alt=""/>
                                                                )
                                                            }
                                                        </Trackstyled.TopGroup>
                                                    </Trackstyled.TopGroupWrap>
                                                </Trackstyled.Top>
                                                <Trackstyled.Bottom>
                                                    <Trackstyled.Title>{t(`${trackObjs[categoryName].translationPrefix}${index+1}.name`)}</Trackstyled.Title>
                                                    <Trackstyled.Date>{t(`${trackObjs[categoryName].translationPrefix}${index+1}.date`)}</Trackstyled.Date>
                                                    <Trackstyled.Lap>{t(`${trackObjs[categoryName].translationPrefix}${index+1}.lap`)}</Trackstyled.Lap>
                                                    <Buttonstyled.White 
                                                        as="a" 
                                                        className="sm"
                                                        href={trackObjs[categoryName].link[index]}
                                                        target="_blank"
                                                    >
                                                        {t(`${trackObjs[categoryName].translationPrefix}${index+1}.txt`)}
                                                    </Buttonstyled.White>
                                                </Trackstyled.Bottom>
                                            </Trackstyled.Item>
                                        )
                                    })}
                                </Trackstyled.List>
                            </Trackstyled.ListWrap>
                        </Trackstyled.Wrap>
                    </div>
                    <BtnClipBoard/>
                    <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
    )
}

export default TrackContents;