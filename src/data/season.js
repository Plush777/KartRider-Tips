export const itemScore = [
    {"mp": 100, "tier": "노랑 장갑 다섯손가락"},
    {"mp": 110, "tier": "노랑 장갑 네손가락"},
    {"mp": 140, "tier": "노랑 장갑 세손가락"},
    {"mp": 200, "tier": "노랑 장갑 두손가락"},
    {"mp": 300, "tier": "노랑 장갑 한손가락"},
    {"mp": 440, "tier": "초록 장갑 다섯손가락"},
    {"mp": 640, "tier": "초록 장갑 네손가락"},
    {"mp": 910, "tier": "초록 장갑 세손가락"},
    {"mp": 1260, "tier": "초록 장갑 두손가락"},
    {"mp": 1700, "tier": "초록 장갑 한손가락"},
    {"mp": 2220, "tier": "파랑 장갑 다섯손가락"},
    {"mp": 2860, "tier": "파랑 장갑 네손가락"},
    {"mp": 3610, "tier": "파랑 장갑 세손가락"},
    {"mp": 4490, "tier": "파랑 장갑 두손가락"},
    {"mp": 5500, "tier": "파랑 장갑 한손가락"},
    {"mp": 6650, "tier": "빨강 장갑 다섯손가락"},
    {"mp": 7960, "tier": "빨강 장갑 네손가락"},
    {"mp": 9430, "tier": "빨강 장갑 세손가락"},
    {"mp": 11070, "tier": "빨강 장갑 두손가락"},
    {"mp": 12900, "tier": "빨강 장갑 한손가락"},
    {"mp": 15200, "tier": "검은 장갑 다섯손가락"},
    {"mp": 22300, "tier": "검은 장갑 네손가락"},
    {"mp": 30000, "tier": "검은 장갑 세손가락"},
    {"mp": 38500, "tier": "검은 장갑 두손가락"},
    {"mp": 47600, "tier": "검은 장갑 한손가락"},
    {"mp": 57600, "tier": "무지개 장갑 다섯손가락"},
    {"mp": 68300, "tier": "무지개 장갑 네손가락"},
    {"mp": 79900, "tier": "무지개 장갑 세손가락"},
    {"mp": 92300, "tier": "무지개 장갑 두손가락"},
    {"mp": 92301, "tier": "무지개 장갑 한손가락"}
];

export const speedScore = [
    {"mp": 100, "tier": "브론즈 III"},
    {"mp": 130, "tier": "브론즈 II"},
    {"mp": 280, "tier": "브론즈 I"},
    {"mp": 680, "tier": "실버 III"},
    {"mp": 1530, "tier": "실버 II"},
    {"mp": 3080, "tier": "실버 I"},
    {"mp": 5620, "tier": "골드 III"},
    {"mp": 9520, "tier": "골드 II"},
    {"mp": 15190, "tier": "골드 I"},
    {"mp": 23100, "tier": "플래티넘 III"},
    {"mp": 31100, "tier": "플래티넘 II"},
    {"mp": 39900, "tier": "플래티넘 I"},
    {"mp": 49700, "tier": "다이아몬드 III"},
    {"mp": 60600, "tier": "다이아몬드 II"},
    {"mp": 72600, "tier": "다이아몬드 I"},
    {"mp": 85800, "tier": "마스터 III"},
    {"mp": 100100, "tier": "마스터 II"},
    {"mp": 115700, "tier": "마스터 I"},
    {"mp": 132500, "tier": "그랜드마스터 III"},
    {"mp": 150500, "tier": "그랜드마스터 II"},
    {"mp": 150501, "tier": "그랜드마스터 I"},
];

export const findNextMp = (data, current) => {
    const nextMp = data.find((mp) => mp.mp > current);

    if (current === '' || current === 0) {
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

export const mode = ['아이템', '스피드', '점수표 보기'];