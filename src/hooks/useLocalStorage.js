import React, {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    setValue = value =>{
        setStoredValue(value);
        window.localStorage.setItem(key,JSON.stringify(value));
    }


    return [storedValue];
};