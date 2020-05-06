import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage(someValue)

    useEffect(() => {
        if(someValue === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [someValue]);

    const toggleDarkMode = e => {
        e.preventDefault()
        setSomeValue(someValue)
    }

    return [someValue, toggleDarkMode]
}

