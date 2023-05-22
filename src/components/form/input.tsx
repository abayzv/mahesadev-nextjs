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

        // render icon
        const renderIcon = () => {
            if(icon !== ""){
                return (
                    <div className='flex items-center justify-center p-2 px-3 bg-slate-200'>
                        <Icon name={icon} size='20' color='#00000070' />
                    </div>
                )
            }
        }

    return (
        <div className='flex border'>
            {renderIcon()}
            <input type={type} name={name} placeholder={placeHolder} value={input} onChange={handleInputChange}  className="p-2 px-4 w-full outline-none" required={required} />
        </div>
    )
}