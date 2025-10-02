import { useState } from 'react'

export const useDefault = (defaultValue, initialValue) => {
    const [user, setUser] = useState(initialValue)

    const setNewUser = (newUser) => {
        if (typeof newUser === 'undefined' || newUser === null) {
            setUser(defaultValue)
            return
        }
        setUser(newUser)
    }
    return [user, setNewUser]
}
