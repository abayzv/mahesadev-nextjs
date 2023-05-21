'use client'

import {useState} from 'react'
import Icon from '../icon'

interface options{
    label: string
    value: string
    group?: string
}

interface groupResult {
    [key: string]: options[]
}

export default function Select({label, options, icon = "", placeHolder} : {label: string, options: options[], icon?: string, placeHolder?: string}){
    const [input, setInput] = useState('')
    const [showResult, setShowResult] = useState(false)

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

    return (
        <div className='relative'>
           <div className='flex border'>
                {renderIcon()}
                <input type="text" className="p-2 w-full outline-none" onChange={handleInputChange} value={input} placeholder={placeHolder} />
           </div>
           {renderResult()}
        </div>
    )
}