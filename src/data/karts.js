export const tabArray = ['일반', '고급', '희귀', '영웅', '전설'];

export const statArray = ['부스터 가속', '드리프트 가속', '부스터 시간', '부스터 충전량']

export const backgroundCondition = (type) => {
    switch (type) {
        case '일반':
            return 'gray';
        case '고급':
            return 'green';
        case '희귀':
            return 'blue';
        case '영웅':
            return 'purple';
        case '전설':
            return 'orange';
        case '밸런스형':
            return 'green';
        case '속도형':
            return 'blue';
        case '드리프트형':
            return 'red';
        default:
            return 'gray';
    }
}

export const kartAcquisitionCondition = (name) => {
    const acq = {
        first: '첫 접속 지급',
        shop: '상점 구매',
        limited: '시즌 한정판매 (상점)',
        mission: '미션 올인원 박스 (싱글 미션)',
        growth: '성장 시스템',
        collab: {
            bt21: 'BT21 콜라보레이션 (현재 획득 불가)',
            blackpink: '블랙핑크 콜라보레이션 (현재 획득 불가)',
            porsche: '포르쉐 콜라보레이션 (현재 획득 불가)',
            lamborghini: '람보르기니 콜라보레이션 (현재 획득 불가)',
        },
        box: {
            normal: '올인원 박스 (상점)',
            nice: '나이스 올인원 박스 (상점)',
            kart: '카트바디 세트 박스 (상점)',
            plus: '플러스 박스 (레이싱 패스 트로피 교환)',
            premiumPlus: '프리미엄 플러스 박스 (레이싱 패스 트로피 교환)',
            specialKart1: '스패셜 카트바디 박스 1탄 (이벤트)',
            specialKart2: '스패셜 카트바디 박스 2탄 (이벤트)',
            speedChampion: '스피드 챔피언 박스 (등급전 보상)',
        },
        personalOutlet: '퍼스널 아울렛',
        none: '현재 획득 불가',
        platform: {
            android: 'Android 플랫폼에서 로그인',
            ios: 'IOS 플랫폼에서 로그인',
            nexon: 'Nexon 플랫폼에서 로그인',
            ps: 'PlayStation 플랫폼에서 로그인',
            steam: 'Steam 플랫폼에서 로그인',
            xbox: 'Xbox 플랫폼에서 로그인',
        },
        cbt: 'CBT 보상',
        grandprix: {
            s1: '그랑프리 시즌1 보상',
            s2: '그랑프리 시즌2 보상',
            s3: '그랑프리 시즌3 보상',
            s4: '그랑프리 시즌4 보상',
            s5: '그랑프리 시즌5 보상'
        },
        rank: {
            s1: '2024 1st 등급전 보상',
            s2: '2024 2nd 등급전 보상',
        },
        original: '카트라이더 헌정 패키지 (현재 획득 불가)',
        mileage: '상점에서 마일리지로 구매',
        racingPass: {
            common: '레이싱 패스 일반 보상',
            premium: '레이싱 패스 프리미엄 보상',
        },
        event: {
            e1: 'RISE 업데이트 기념 온타임 이벤트',
            e2: '2023 KDL 팬 레이스 이벤트',
            e3: 'Twitch 드롭스 보상',
            e4: 'PC방 누적 접속 이벤트',
            e5: '2024.06.29 오늘의 미션 최종 단계 완료 보상'
        },
        pc: 'PC방 전용'
    }

    if (name === '연습 카트' || name === '프로토' || name === '해적 거북') {
        return [acq.first]
    }

    if (name === '코튼' || name === '버스트' || name === '솔리드' || name === '마라톤' || name === '세이버') {
        return [acq.shop]
    }

    if (name === '뉴욕 머슬카' || name === '꽃마차' || name === '제니스') {
        return [acq.mission]
    }

    if (name === '복돼지' || name === '삼바' || name === '노블') {
        return [acq.growth]
    }

    if (
        name === '스톰' || 
        name === '스파이더' || 
        name === '와일드 덤프'||
        name === '루나' ||
        name === '드래고니아' ||
        name === '드래고니스' ||
        name === '튜닝 슬래쉬' ||
        name === '노르딕' ||
        name === '인펙터' ||
        name === '뉴트로이드' ||
        name === '크리처' ||
        name === '코스모스 헥사' ||
        name === '삼색냥' ||
        name === '스페이스 워' ||
        name === '우주 탐사' ||
        name === '웨딩 마치' ||
        name === '찻잔' ||
        name === '스틸 코어' ||
        name === '파워 포스' ||
        name === '나이트이글' ||
        name === '안테나' ||
        name === '병아리 유모차' ||
        name === '마왕' ||
        name === '리치 골드' 
    ) {
        return [acq.limited]
    }
    
    if (name === '플레이 카트') return [acq.platform.android]
    if (name === '넥슨 카트') return [acq.platform.nexon]
    if (name === '에이블 카트') return [acq.platform.ios]
    if (name === '퀀텀 머슬') return [acq.platform.ps]
    if (name === '코멧 머슬') return [acq.platform.steam]
    if (name === '코스믹 머슬') return [acq.platform.xbox]
    if (name === '광산 수레') return [acq.cbt]

    if (
        name === '소방차' ||
        name === '저스티스' ||
        name === '스마트 모빌리티' ||
        name === '나이트 우퍼' ||
        name === '흑룡' ||
        name === '킬러' ||
        name === '플라밍고' ||
        name === '솔라' ||
        name === '박쥐' ||
        name === '이클립스 알파' ||
        name === '닌자' ||
        name === '몬스터' ||
        name === '흑기사'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '오로라' ||
        name === '렉카' ||
        name === '굴착기' ||
        name === '마린' ||
        name === 'GT60' ||
        name === '블러드' ||
        name === '화이트 멜로우' ||
        name === '마피아' ||
        name === '빌런' ||
        name === '마귀상어' ||
        name === '인더스트'
    ) {
        return [acq.box.plus]
    }

    if (
        name === 'Huracán EVO Spyder' ||
        name === 'Aventador Ultimae Roadster'
    ) {
        return [acq.collab.lamborghini]
    }

    if (
        name === 'Pink Venom 슈퍼카' ||
        name === 'Pink Venom 몬스터' 
    ) {
        return [acq.collab.blackpink]
    }

    if (
        name === '718 Boxster' ||
        name === '911 Turbo S Cabriolet'
    ) {
        return [acq.collab.porsche]
    }

    if (
        name === 'BT21 캠핑버스' ||
        name === 'BT21 드림카'
    ) {
        return [acq.collab.bt21]
    }

    if (
        name === '타이탄' ||
        name === '뉴욕 택시' ||
        name === '플라즈마PT' ||
        name === '탐정 소파' ||
        name === '하운드' ||
        name === '스펙터' ||
        name === '아이스크림 트럭' ||
        name === '블랙 마크' ||
        name === '개구리' ||
        name === '파인애플' ||
        name === '스콜 윙' ||
        name === '무에르토' ||
        name === '유령 호박' ||
        name === '아이언 윌' ||
        name === '투 페이스' ||
        name === '데빌' ||
        name === '엔젤' ||
        name === '스위피' ||
        name === '크리스탈' ||
        name === '루돌프' 
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '슈가레빗' ||
        name === '스파이크' ||
        name === '뉴욕 투어 버스' ||
        name === 'F724' ||
        name === '메탈 로더' ||
        name === '세이버 프로' ||
        name === '어둠의 수호자' ||
        name === '빌리지' ||
        name === '스쿠너' ||
        name === '세이프티' ||
        name === '장수풍뎅이' ||
        name === '캐리어' ||
        name === '퓨리파이어' ||
        name === '왕문어' ||
        name === '뱀파이어' ||
        name === '이클립스 베타' ||
        name === '플랫포스' ||
        name === '서커스' ||
        name === '요술복치' ||
        name === '그래피티' ||
        name === '골드문' ||
        name === '코리스마튼' ||
        name === '이걸루' ||
        name === '리타이어' ||
        name === '레드 블렛' ||
        name === '베토벤'
    ) {
        return [acq.box.normal, acq.box.nice, acq.box.kart]
    }
    
    if (name === '비밀 변기') {
        return [acq.shop, acq.box.normal, acq.box.nice, acq.box.kart]
    }

    if (
        name === '에이스' || 
        name === '롤러' ||
        name === '마법 호박' ||
        name === '젠틀리'
    ) {
        return [acq.box.normal, acq.box.nice, acq.box.kart, acq.box.specialKart2]
    }

    if (
        name === '브루터스' ||
        name === '공부의 신' ||
        name === '플라즈마FT' ||
        name === '드링크' ||
        name === '이런 수박'
    ) {
        return [acq.box.normal, acq.box.nice, acq.box.kart, acq.box.specialKart1]
    }

    if (name === '드릴' && name === '백사') {
        return [acq.box.specialKart1, acq.personalOutlet]
    }

    if (name === '인더스틸') {
        return [acq.box.normal, acq.box.nice, acq.box.kart, acq.box.plus]
    }

    if (name === '스톰') {
        return [acq.none]
    }

    if (name === '노블' || name === '삼바') {
        return [acq.growth]
    }

    if (name === '스팀 클래식' || name === '양산형 모빌리티') {
        return [acq.grandprix.s1, acq.box.speedChampion]
    }

    if (name === '와일드 더스트' || name === '스카이 로켓') {
        return [acq.grandprix.s2, acq.box.speedChampion]
    }

    if (name === '볼트' || name === 'KDI 경찰 트럭') {
        return [acq.grandprix.s3, acq.box.speedChampion]
    }

    if (name === '전기톱' || name === '검은 늑대') {
        return [acq.grandprix.s4, acq.box.speedChampion]
    }

    if (name === '어릿광대' || name === '핫도그') {
        return [acq.grandprix.s5, acq.box.speedChampion]
    }

    if (name === '폭스' || name === '스트라이크') {
        return [acq.rank.s1]
    }

    if (name === '컵라면' || name === '골든 이글') {
        return [acq.rank.s2]
    }

    if (name === '페이라' || name === '하마' || name === '우유 배달' || name === '태풍') {
        return [acq.box.specialKart2, acq.personalOutlet]
    }

    if (name === '샤크 타이탄') {
        return [acq.event.e1]
    }

    if (name === '2023 KDL 빅토리 이글') {
        return [acq.event.e2]
    }

    if (name === '레이싱 트럭') {
        return [acq.event.e3]
    }

    if (name === '워호그') {
        return [acq.event.e4]
    }

    if (name === '복고탐사') {
        return [acq.event.e5]
    }

    if (name === '레그 익스텐션' || name === '업사이드 다운') {
        return [acq.mileage]
    }

    if (
        name === '메카 라이언' || 
        name === '레트로이드' ||
        name === '레이저' ||
        name === 'Urus Performante' ||
        name === 'Macan GTS'
    ) {
        return [acq.racingPass.common]
    }

    if (
        name === '스토커' || 
        name === '래빗홀릭 윙' || 
        name === '배틀 버기' ||
        name === '밀키웨이' ||
        name === '올드 머니'
    ) {
        return [acq.racingPass.premium]
    }

    if (name === '멘티스') {
        return [acq.pc, acq.limited]
    }

    return ['추가 예정'];
}