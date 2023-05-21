'use client'
import { useSearchParams } from "next/navigation"
import { useAppStore } from "../../../lib/store"
import {useState} from 'react'
import TicketCard from "@/components/ticket-card"
import FormTicket from "../form-ticket"

export default function SearchResult(){
    const searchParams = useSearchParams()
    const origin = searchParams?.get('origin')
    const destination = searchParams?.get('destination')
    const date = searchParams?.get('date')

    const { trains } = useAppStore()
    
    const result = trains.filter(train => {
        return train.origin?.toLowerCase() === origin?.toLocaleLowerCase() && train.destination.toLocaleLowerCase() === destination?.toLocaleLowerCase()
    })

    return (
        <div>
            <div className="ustify-center mb-10">
                <div className="container mx-auto bg-white shadow-lg">
                    <FormTicket />
                </div>
            </div>

            <TicketCard trains={result} />
        </div>
    )
}