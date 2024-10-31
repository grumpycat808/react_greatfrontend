import { useEffect, useState } from 'react'

const useCurrentDate = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 100)
    }, [])

    return time
}

export default useCurrentDate
