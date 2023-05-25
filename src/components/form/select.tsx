'use client'

import {useState, useEffect} from 'react'
import Icon from '../icon'
import { useSearchStore, useFormStore } from '../../../lib/store'

interface options{
    label: string
    value: string
}


export default function Select({name, icon = "", placeHolder, value, required = false, options} : {name : string, icon?: string, placeHolder?: string, value?: string, required?: boolean, options: options[]}){

    const [input, setInput] = useState(value || "")
    const { search, setSearch } = useSearchStore()
    const { form, setForm } = useFormStore()

    // handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInput(e.target.value)
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
        setForm({
            ...form,
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
            <select name={name} placeholder={placeHolder} className="p-2 px-4 w-full outline-none" required={required} onChange={handleInputChange} >
                <option value="">Pilih {placeHolder}</option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    )
}