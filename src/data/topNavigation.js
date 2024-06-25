export const changeLinkName = (item) => {
    // console.log(item);

    /* 1차 카테고리 */
    if (item === 'learn') return '배우기';

    /* 2차 카테고리 */
    if (item === 'basic') return '기초';
    if (item === 'speed') return '스피드전';
    if (item === 'item') return '아이템전';
    if (item === 'tuning') return '튜닝';

    /* 기초 */
    if (item === 'startbooster') return '출발 부스터';
    if (item === 'grip') return '그립';
    if (item === 'drift') return '드리프트';
    if (item === 'combobooster') return '순간 부스터';

    /* 캐릭터 */
    if (item === 'character') return '캐릭터';
    if (item === 'dao') return '다오';
    if (item === 'bazzi') return '배찌';
    if (item === 'brodi') return '브로디';
    if (item === 'diz') return '디지니';
    if (item === 'marid') return '마리드';
    if (item === 'kris') return '크리스';
    if (item === 'neo') return '네오';
    if (item === 'sophia') return '소피아';
    if (item === 'mos') return '모스';
    if (item === 'uni') return '우니';
    if (item === 'airi') return '아이리';
    if (item === 'ethen') return '에띠';
    if (item === 'rex') return '렉스';
    if (item === 'keffy') return '케피';
    if (item === 'brian') return '브라이언';
    if (item === 'rave') return '레이브';
    if (item === 'vivi') return '비비';
    if (item === 'pim') return '휘';
    if (item === 'tobi') return '토비';
    if (item === 'miso') return '미소';
    if (item === 'tiera') return '티이라';
    if (item === 'lodumani') return '로두마니';
    if (item === 'derek') return '데릭';
    if (item === 'orion') return '오리온';
    if (item === 'mobi') return '모비';
    if (item === 'toto') return '투투';
    if (item === 'martin') return '마틴';
    if (item === 'rena') return '레나';
    if (item === 'draki') return '드라키';
    if (item === 'spiritkid') return '꼬마유령';
    if (item === 'mayorzipi') return '지피시장';
    if (item === 'viktor') return '투탑';
    if (item === 'raptorL') return '랍토르 L';
    if (item === 'raptorR') return '랍토르 R';
    if (item === 'taki') return '타키';
    if (item === 'erini') return '에리니';
    if (item === 'rivaski') return '리바스키';
    if (item === 'lucid') return '루시드';
    if (item === 'pinkbean') return '핑크빈';
    if (item === 'koya') return 'koya';
    if (item === 'rj') return 'rj';
    if (item === 'shooky') return 'shooky';
    if (item === 'mang') return 'mang';
    if (item === 'chimmy') return 'chimmy';
    if (item === 'tata') return 'tata';
    if (item === 'cooky') return 'cooky';
    if (item === 'jisu') return '블랙핑크 지수';
    if (item === 'jennie') return '블랙핑크 제니';
    if (item === 'rose') return '블랙핑크 로제';
    if (item === 'lisa') return '블랙핑크 리사';

    /* 착용 아이템 */
    if (item === 'wear') return '착용 아이템';
    if (item === 'balloon') return '풍선';

    /* 공격 아이템 */
    if (item === 'attack') return '공격 아이템';
    if (item === 'banana') return '바나나';
    if (item === 'bigbanana') return '대왕 바나나';
    if (item === 'baricade') return '바리케이드';
    if (item === 'waterbomb') return '물폭탄';
    if (item === 'waterfly') return '물파리';
    if (item === 'missile') return '미사일';
    if (item === '1stmissile') return '1등 미사일';
    if (item === 'thunderbolt') return '벼락';
    if (item === 'spaceship') return '우주선';
    if (item === 'siren') return '사이렌';
    if (item === 'landmine') return '지뢰';

    /* 방어 아이템 */
    if (item === 'struggle' && item === 'defence') return '디펜스';
    if (item === 'item' && item === 'defence') return '방어 아이템';
    if (item === 'electromagnetic') return '전자파';
    if (item === 'shield') return '실드';
    if (item === 'angel') return '천사';
    if (item === 'scanner') return '스캐너';

    /* 가속 아이템 */
    if (item === 'acceleration') return '가속 아이템';
    if (item === 'booster') return '부스터';
    if (item === 'magnet') return '자석';

    /* 특수 아이템 */
    if (item === 'special') return '특수 아이템';
    if (item === 'sirenplus') return '강화 사이렌';
    if (item === 'bunchwaterbomb') return '다발 물폭탄';
    if (item === 'book') return '책';
    if (item === 'bombard') return '폭격 폭탄';

    /* 주행기술 */
    if (item === 'tech') return '주행기술';
    if (item === 'optimize') return '최적화 드리프트';
    if (item === 'short') return '숏 드리프트';
    if (item === 'full') return '풀 드리프트';
    if (item === 'double') return '더블 드리프트';
    if (item === 'cutting') return '커팅 드리프트';
    if (item === 'twist') return '비틀기 드리프트';
    if (item === 'combo') return '연타 드리프트';
    if (item === 'long') return '끌기';
    if (item === 'spinturn') return '스핀턴';
    if (item === 'shortcut') return '숏 커팅';
    if (item === 'draft') return '드래프트';
    if (item === 'twobooster') return '투 부스터';
    if (item === 'combocancel') return '순간 부스터 캔슬';

    /* 몸싸움 전략 */
    if (item === 'struggle') return '몸싸움 전략';
    if (item === 'defence') return '디펜스';
    if (item === 'straight') return '직진 부스터 (직부)';
    if (item === 'deliberate') return '고의 삽';

    /* 팀전 전략 */
    if (item === 'team') return '팀전 전략';
    if (item === 'distance') return '거리유지';
    if (item === 'runner') return '러너';
    if (item === 'middle') return '미들';
    if (item === 'sweeper') return '스위퍼';

    /* 튜닝 */
    if (item === 'tuning') return '튜닝';

    return 'undefined';
}