const y5 = 1;
const y4 = 101;
const y3 = 121;
const y2 = 171;
const y1 = 261;
const g5 = 421;
const g4 = 661;
const g3 = 991;
const g2 = 1431;
const g1 = 1991;
const b5 = 2701;
const b4 = 3561;
const b3 = 4591;
const b2 = 5811;
const b1 = 7231;
const r5 = 8871;
const r4 = 10741;
const r3 = 12871;
const r2 = 15261;
const r1 = 17931;
const bl5 = 20901;
const bl4 = 25001;
const bl3 = 30501;
const bl2 = 36601;
const bl1 = 43201;
const rb5 = 50501;
const rb4 = 58301;
const rb3 = 66701;
const rb2 = 75801;
const rb1 = 85501;

const bz3 = 1;
const bz2 = 121;
const bz1 = 271;
const sv3 = 621;
const sv2 = 1241;
const sv1 = 2181;
const gd3 = 3501;
const gd2 = 5261;
const gd1 = 7501;
const pt3 = 10281;
const pt2 = 13631;
const pt1 = 17601;
const dm3 = 22231;
const dm2 = 27571;
const dm1 = 33661;
const ms3 = 40531;
const ms2 = 48231;
const ms1 = 56791;
const gm3 = 66261;
const gm2 = 76651;
const gm1 = 88031;

export const itemScore = [
    {"mp": y5, "tier": "노랑 장갑 다섯손가락"},
    {"mp": y4, "tier": "노랑 장갑 네손가락"},
    {"mp": y3, "tier": "노랑 장갑 세손가락"},
    {"mp": y2, "tier": "노랑 장갑 두손가락"},
    {"mp": y1, "tier": "노랑 장갑 한손가락"},
    {"mp": g5, "tier": "초록 장갑 다섯손가락"},
    {"mp": g4, "tier": "초록 장갑 네손가락"},
    {"mp": g3, "tier": "초록 장갑 세손가락"},
    {"mp": g2, "tier": "초록 장갑 두손가락"},
    {"mp": g1, "tier": "초록 장갑 한손가락"},
    {"mp": b5, "tier": "파랑 장갑 다섯손가락"},
    {"mp": b4, "tier": "파랑 장갑 네손가락"},
    {"mp": b3, "tier": "파랑 장갑 세손가락"},
    {"mp": b2, "tier": "파랑 장갑 두손가락"},
    {"mp": b1, "tier": "파랑 장갑 한손가락"},
    {"mp": r5, "tier": "빨강 장갑 다섯손가락"},
    {"mp": r4, "tier": "빨강 장갑 네손가락"},
    {"mp": r3, "tier": "빨강 장갑 세손가락"},
    {"mp": r2, "tier": "빨강 장갑 두손가락"},
    {"mp": r1, "tier": "빨강 장갑 한손가락"},
    {"mp": bl5, "tier": "검은 장갑 다섯손가락"},
    {"mp": bl4, "tier": "검은 장갑 네손가락"},
    {"mp": bl3, "tier": "검은 장갑 세손가락"},
    {"mp": bl2, "tier": "검은 장갑 두손가락"},
    {"mp": bl1, "tier": "검은 장갑 한손가락"},
    {"mp": rb5, "tier": "무지개 장갑 다섯손가락"},
    {"mp": rb4, "tier": "무지개 장갑 네손가락"},
    {"mp": rb3, "tier": "무지개 장갑 세손가락"},
    {"mp": rb2, "tier": "무지개 장갑 두손가락"},
    {"mp": rb1, "tier": "무지개 장갑 한손가락"}
];

export const speedScore = [
    {"mp": bz3, "tier": "브론즈 III"},
    {"mp": bz2, "tier": "브론즈 II"},
    {"mp": bz1, "tier": "브론즈 I"},
    {"mp": sv3, "tier": "실버 III"},
    {"mp": sv2, "tier": "실버 II"},
    {"mp": sv1, "tier": "실버 I"},
    {"mp": gd3, "tier": "골드 III"},
    {"mp": gd2, "tier": "골드 II"},
    {"mp": gd1, "tier": "골드 I"},
    {"mp": pt3, "tier": "플래티넘 III"},
    {"mp": pt2, "tier": "플래티넘 II"},
    {"mp": pt1, "tier": "플래티넘 I"},
    {"mp": dm3, "tier": "다이아몬드 III"},
    {"mp": dm2, "tier": "다이아몬드 II"},
    {"mp": dm1, "tier": "다이아몬드 I"},
    {"mp": ms3, "tier": "마스터 III"},
    {"mp": ms2, "tier": "마스터 II"},
    {"mp": ms1, "tier": "마스터 I"},
    {"mp": gm3, "tier": "그랜드마스터 III"},
    {"mp": gm2, "tier": "그랜드마스터 II"},
    {"mp": gm1, "tier": "그랜드마스터 I"},
];

export const findNextMp = (data, current) => {
    const nextMp = data.find((mp) => mp.mp > current);

    if (current === '') {
        if (data == itemScore) {
            return "현재 아이템 점수를 입력해주세요.";
        } 

        if (data == speedScore) {
            return "현재 스피드 점수를 입력해주세요.";
        }

        return "현재 점수를 입력해주세요.";
    }

    if (nextMp) {
        return `${nextMp.tier} 까지 ${nextMp.mp - current}점 남았어요.`;
    } else {
        return "다음 티어가 없어요. 고수시군요?";
    }
};

export const renderItemIcon = (current) => {
    switch (true) {
        case current === 0:
            return "y5";
        case current >= y5 && current < y4:
            return "y4";
        case current >= y4 && current < y3:
            return "y3";
        case current >= y3 && current < y2:
            return "y2";
        case current >= y2 && current < y1:
            return "y1";
        case current >= y1 && current < g5:
            return "g5";
        case current >= g5 && current < g4:
            return "g4";
        case current >= g4 && current < g3:
            return "g3";
        case current >= g3 && current < g2:
            return "g2";
        case current >= g2 && current < g1:
            return "g1";
        case current >= g1 && current < b5:
            return "b5";
        case current >= b5 && current < b4:
            return "b4";
        case current >= b4 && current < b3:
            return "b3";
        case current >= b3 && current < b2:
            return "b2";
        case current >= b2 && current < b1:
            return "b1";
        case current >= b1 && current < r5:
            return "r5";
        case current >= r5 && current < r4:
            return "r4";
        case current >= r4 && current < r3:
            return "r3";
        case current >= r3 && current < r2:
            return "r2";
        case current >= r2 && current < r1:
            return "r1";
        case current >= r1 && current < bl5:
            return "bl5";
        case current >= bl5 && current < bl4:
            return "bl4";
        case current >= bl4 && current < bl3:
            return "bl3";
        case current >= bl3 && current < bl2:
            return "bl2";
        case current >= bl2 && current < bl1:
            return "bl1";
        case current >= bl1 && current < rb5:
            return "rb5";
        case current >= rb5 && current < rb4:
            return "rb4";
        case current >= rb4 && current < rb3:
            return "rb3";
        case current >= rb3 && current < rb2:
            return "rb2";
        case current >= rb2 && current < rb1:
            return "rb1";
        case current > rb1:
            return "rb1";
        default:
            return "white0";
    }
};

export const renderSpeedIcon = (current) => {
    switch (true) {
        case current === 0:
            return "bz3";
        case current >= bz3 && current < bz2:
            return "bz2";
        case current >= bz2 && current < bz1:
            return "bz1";
        case current >= bz1 && current < sv3:
            return "sv3";
        case current >= sv3 && current < sv2:
            return "sv2";
        case current >= sv2 && current < sv1:
            return "sv1";
        case current >= sv1 && current < gd3:
            return "gd3";
        case current >= gd3 && current < gd2:
            return "gd2";
        case current >= gd2 && current < gd1:
            return "gd1";
        case current >= gd1 && current < pt3:
            return "pt3";
        case current >= pt3 && current < pt2:
            return "pt2";
        case current >= pt2 && current < pt1:
            return "pt1";
        case current >= pt1 && current < dm3:
            return "dm3";
        case current >= dm3 && current < dm2:
            return "dm2";
        case current >= dm2 && current < dm1:
            return "dm1";
        case current >= dm1 && current < ms3:
            return "ms3";
        case current >= ms3 && current < ms2:
            return "ms2";
        case current >= ms2 && current < ms1:
            return "ms1";
        case current >= ms1 && current < gm3:
            return "gm3";
        case current >= gm3 && current < gm2:
            return "gm2";
        case current >= gm2 && current < gm1:
            return "gm1";
        case current > gm1:
            return "gm-no-tier";
        default:
            return "minus";
    }
};

export const mode = ['아이템', '스피드', '등급표 보기'];