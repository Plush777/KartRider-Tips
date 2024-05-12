export const itemScore = [
    {"mp": 1, "tier": "노랑 장갑 다섯손가락"},
    {"mp": 101, "tier": "노랑 장갑 네손가락"},
    {"mp": 111, "tier": "노랑 장갑 세손가락"},
    {"mp": 141, "tier": "노랑 장갑 두손가락"},
    {"mp": 201, "tier": "노랑 장갑 한손가락"},
    {"mp": 301, "tier": "초록 장갑 다섯손가락"},
    {"mp": 441, "tier": "초록 장갑 네손가락"},
    {"mp": 641, "tier": "초록 장갑 세손가락"},
    {"mp": 911, "tier": "초록 장갑 두손가락"},
    {"mp": 1261, "tier": "초록 장갑 한손가락"},
    {"mp": 1701, "tier": "파랑 장갑 다섯손가락"},
    {"mp": 2221, "tier": "파랑 장갑 네손가락"},
    {"mp": 2861, "tier": "파랑 장갑 세손가락"},
    {"mp": 3611, "tier": "파랑 장갑 두손가락"},
    {"mp": 4491, "tier": "파랑 장갑 한손가락"},
    {"mp": 5501, "tier": "빨강 장갑 다섯손가락"},
    {"mp": 6651, "tier": "빨강 장갑 네손가락"},
    {"mp": 7961, "tier": "빨강 장갑 세손가락"},
    {"mp": 9431, "tier": "빨강 장갑 두손가락"},
    {"mp": 11071, "tier": "빨강 장갑 한손가락"},
    {"mp": 12901, "tier": "검은 장갑 다섯손가락"},
    {"mp": 15201, "tier": "검은 장갑 네손가락"},
    {"mp": 22301, "tier": "검은 장갑 세손가락"},
    {"mp": 30001, "tier": "검은 장갑 두손가락"},
    {"mp": 38501, "tier": "검은 장갑 한손가락"},
    {"mp": 47601, "tier": "무지개 장갑 다섯손가락"},
    {"mp": 57601, "tier": "무지개 장갑 네손가락"},
    {"mp": 68301, "tier": "무지개 장갑 세손가락"},
    {"mp": 79901, "tier": "무지개 장갑 두손가락"},
    {"mp": 92301, "tier": "무지개 장갑 한손가락"}
];

export const speedScore = [
    {"mp": 1, "tier": "브론즈 III"},
    {"mp": 101, "tier": "브론즈 II"},
    {"mp": 131, "tier": "브론즈 I"},
    {"mp": 281, "tier": "실버 III"},
    {"mp": 681, "tier": "실버 II"},
    {"mp": 1531, "tier": "실버 I"},
    {"mp": 3081, "tier": "골드 III"},
    {"mp": 5621, "tier": "골드 II"},
    {"mp": 9521, "tier": "골드 I"},
    {"mp": 15191, "tier": "플래티넘 III"},
    {"mp": 23101, "tier": "플래티넘 II"},
    {"mp": 31101, "tier": "플래티넘 I"},
    {"mp": 39901, "tier": "다이아몬드 III"},
    {"mp": 49701, "tier": "다이아몬드 II"},
    {"mp": 60601, "tier": "다이아몬드 I"},
    {"mp": 72601, "tier": "마스터 III"},
    {"mp": 85801, "tier": "마스터 II"},
    {"mp": 100101, "tier": "마스터 I"},
    {"mp": 115701, "tier": "그랜드마스터 III"},
    {"mp": 132501, "tier": "그랜드마스터 II"},
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