import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = (toggle) => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode', toggle)

    useEffect(() => {
        someValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [someValue]);

    

    const toggleDarkMode = e => {
        setSomeValue(!someValue)
    }

    return [someValue, toggleDarkMode]
}

export default useDarkMode