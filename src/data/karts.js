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