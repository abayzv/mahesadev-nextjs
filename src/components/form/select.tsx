'use client'

import {useState} from 'react'
import Icon from '../icon'
import { useSearchStore } from '../../../lib/store'

interface options{
    label: string
    value: string
    group?: string
}

interface groupResult {
    [key: string]: options[]
}

export default function Select({name, options, icon = "", placeHolder, value, required = false} : {name : string, options: options[], icon?: string, placeHolder?: string, value?: string, required?: boolean}){
    const [input, setInput] = useState(value || "")
    const [showResult, setShowResult] = useState(false)
    const { search, setSearch } = useSearchStore()

    // handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        
        if(e.target.value.length > 1){
            setShowResult(true)
        }else{
            setShowResult(false)
        }

    }

    const result = options.filter(option => option.label.toLowerCase().includes(input.toLowerCase()))
    const groupResult : groupResult = {}

    result.forEach(option => {
        if(option.group){
            if(!groupResult[option.group]){
                groupResult[option.group] = []
            }
            groupResult[option.group].push(option)
        }
    })
    
    // render result
    const renderResult = () => {
        if(showResult && result.length > 0){
            return (
                <div className='absolute mt-2 bg-white border w-full max-h-60 overflow-y-auto'>
                    {
                        Object.keys(groupResult).map((group, index) => (
                            <div key={index}>
                                <div className='bg-gray-100 p-2'>{group}</div>
                                <div>
                                    {
                                        groupResult[group].map((option, index) => (
                                            <div key={index} className='p-2 hover:bg-blue-100 cursor-pointer' onClick={() => {
                                                setInput(option.label)
                                                setShowResult(false)
                                                setSearch({...search, [name]: option.value})
                                            }}>{option.label}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
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

    // render required
    const renderRequired = () => {
        if(required && !search[name]){
            return (
                <div className='absolute mt-2  text-red-500 text-sm'>Silahkan Pilih {placeHolder}</div>
            )
        }
    }

    return (
        <div className='relative'>
           <div className='flex border'>
                {renderIcon()}
                <input type="text" className="p-2 px-4 w-full outline-none" name={name} onChange={handleInputChange} onFocus={()=> {
                    setInput("")
                    setSearch({...search, [name]: ""})
                }} value={input} placeholder={placeHolder} autoComplete='false' />
           </div>
           {renderRequired()}
           {renderResult()}
        </div>
    )
}