import { useState, useEffect } from "react";

const calcSeason = () => {
    const [currentSeasonStart, setCurrentSeasonStart] = useState(new Date(Date.UTC(2024, 1, 15))); // 초기 시즌 시작일
    const [currentSeasonNumber, setCurrentSeasonNumber] = useState(1);
    const [endDate, setEndDate] = useState('');
    const [daysCount, setDaysCount] = useState(0);
    const [error, setError] = useState(false);

    useEffect(() => {
        /* 주어진 시작일로부터 13주 후를 시즌 종료일로 계산 */
        const calcEnd = (startDate) => {
            if (isNaN(startDate)) {
                setError(true);
                return;
            }

            return new Date(startDate.getTime() + 13 * 7 * 24 * 60 * 60 * 1000);
        };

        const seasonEnd = calcEnd(currentSeasonStart);

        if (!seasonEnd) {
            setError(true);
            return;
        }

        const nextSeasonStart = new Date(seasonEnd.getTime() + 24 * 60 * 60 * 1000); // 다음 시즌 시작일은 종료일 다음날

        // 현재 시간과 시즌 종료 시간 비교
        const now = new Date();

        // 현재 날짜가 시즌 종료일 이후라면 다음 시즌 시작일을 설정
        if (now >= seasonEnd) {
            setCurrentSeasonStart(nextSeasonStart);
            setCurrentSeasonNumber(currentSeasonNumber + 1);
        } else {
            // 시즌 종료일 및 남은 일수 설정
            setEndDate(seasonEnd.toISOString().substring(0, 10));
            const timeDiff = seasonEnd.getTime() - now.getTime();
            setDaysCount(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
        }
    }, [currentSeasonStart]); 

    return {
        currentSeasonStart,
        currentSeasonNumber,
        endDate,
        daysCount,
        error
    }
}

export default calcSeason;