'use client'

import {useState} from 'react'
import Icon from '../icon'
import { useSearchStore } from '../../../lib/store'

export default function Input({name, type = "text", icon = "", placeHolder, value, required = false} : {name : string, type?: string, icon?: string, placeHolder?: string, value?: string, required?: boolean}){

    const [input, setInput] = useState(value || "")
    const { search, setSearch } = useSearchStore()

    // handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <input type={type} name={name} placeholder={placeHolder} value={input} onChange={handleInputChange} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' required={required} />
        </div>
    )
}