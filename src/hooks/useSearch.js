import { useState } from "react";
import { filterData } from "data/sidebar";

export default function useSearch(dataObject) {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const [focused, setFocused] = useState(false);
   
    // console.log(results)

    const handleFocus = () => {
        setFocused(true);
    }

    const handleBlur = (e) => {
        if (e.target.value === '') {
            setFocused(false);
        }
    }

    const handleValueChange = (e) => {
        setValue(e.target.value);
        setResults(filterData(dataObject, e.target.value));
    }

    const handleValueRemove = () => {
        setValue('');
        setFocused(false);
    }

    return {
        value,
        setValue,
        results,
        focused,
        handleFocus,
        handleBlur,
        handleValueChange,
        handleValueRemove
    }
}