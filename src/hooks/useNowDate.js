import { useEffect, useState } from "react";
import { format } from 'date-fns';

const useNowDate = () => {
    const [dateTime, setDateTime] = useState('');

    const handleShowDateTime = () => {
        const now = new Date();
        const dateString = format(now, 'yyyy-MM-dd HH:mm:ss');
        setDateTime(dateString);
    };

    useEffect(() => {
        handleShowDateTime();
    }, []);

    return {
        dateTime,
        handleShowDateTime
    };
}

export default useNowDate;