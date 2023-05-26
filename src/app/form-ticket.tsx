'use client'

import Search from "@/components/form/search";
import stations from "../../lib/stations";
import { useSearchStore } from "../../lib/store";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import Input from "@/components/form/input";

export default function FormTicket() {
    const stationsOptions = stations.map((station) => {
        return {
            label: station.name,
            value: station.code,
            group: station.cityname,
        };
    });

    const {search, setSearch} = useSearchStore()
    const router = useRouter()
    const searchParams = useSearchParams()

    const origin = searchParams?.get('origin')
    const destination = searchParams?.get('destination')
    const date = searchParams?.get('date')
    const adult = searchParams?.get('adult')
    const child = searchParams?.get('child')

    useEffect(() => {
        if(origin && destination && date && adult && child){
            setSearch({
                ...search,
                origin,
                destination,
                date,
                adult,
                child
            })
        }

        return () => {
            setSearch({})
        }
    },[])
    
    // get name station by code
    const getStationName = (code: string) => {
        const station = stations.find((station) => station.code === code);
        return station?.name;
    };

    // render button
    const renderButton = () => {
        // if origin and destination empty
        if(search['origin'] && search['destination'] && search['date'] && search['adult'] && search['child']){
            return (
                <Link href={{ pathname: '/search', query: search }} className="bg-blue-800 p-3 lg:p-0 text-white text-lg flex items-center justify-center rounded-md">Cari Ticket</Link>
            )
        } else {
            return (
                <button type="button" className="bg-gray-500 p-3 lg:p-0 text-white text-lg flex items-center justify-center rounded-md">Cari Ticket</button>
            )
        }
    }

    return (
        <div className="w-full p-10 relative overflow-clip">
            <div className="bg-orange-500 w-20 h-20 absolute -top-10 -right-10 transform rotate-45"></div>
            <form className="grid lg:grid-cols-2 gap-x-10 gap-y-5">
                <div className="grid gap-2">
                    <label className="text-lg font-medium text-blue-800" htmlFor="">
                        Stasiun Asal
                    </label>
                    <Search
                        name="origin"
                        options={stationsOptions}
                        icon="train"
                        placeHolder="Stasiun Asal"
                        value={origin ? getStationName(origin) : ""}
                    />
                </div>
                <div className="grid gap-2">
                    <label className="text-lg font-medium text-blue-800" htmlFor="">
                        Stasiun Tujuan
                    </label>
                    <Search
                        name="destination"
                        options={stationsOptions}
                        icon="train"
                        placeHolder="Stasiun Tujuan"
                        value={destination ? getStationName(destination) : ""}
                    />
                </div>
                <div className="grid gap-2">
                    <label className="text-lg font-medium text-blue-800" htmlFor="">
                        Tanggal Berangkat
                    </label>
                    <Input
                    name="date"
                    type="date"
                    icon="date"
                    placeHolder="Tanggal Berangkat"
                    value={date || ""}
                    />
                </div>
                <div className="grid gap-2">
                    <label className="text-lg font-medium text-blue-800" htmlFor="">
                        Dewasa
                    </label>
                    <Input
                    name="adult"
                    type="number"
                    icon="user"
                    placeHolder="Dewasa"
                    value={adult || ""}
                    />
                </div>
                <div className="grid gap-2">
                    <label className="text-lg font-medium text-blue-800" htmlFor="">
                        Anak
                    </label>
                    <Input
                    name="child"
                    type="number"
                    icon="user"
                    placeHolder="Anak"
                    value={child || ""}
                    />
                </div>
                <div className="grid gap-2">
                    <label
                        className="text-lg font-medium text-blue-800"
                        htmlFor=""
                    ></label>
                     {renderButton()}
                </div>
            </form>
        </div>
    );
}
