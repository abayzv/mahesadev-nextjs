import stations from "../../api/stations";
import Icon from "./icon";
import { useSearchParams } from "next/navigation";

interface TicketCardProps {
    id: number;
    name: string;
    type: string;
    origin: string;
    destination: string;
    departureDate: string;
    arivalDate: string;
    estimatedTime: string;
    status: string;
    price: number;
}

export default function TicketCard({trains}: {trains?: TicketCardProps[]}) {
    const searchParams = useSearchParams()
    const origin = searchParams?.get('origin')
    const destination = searchParams?.get('destination')

    const getDate = (date: string) => {
        const dateOnly = date.split(" ")[0];
        // change month to name
        const month = dateOnly.split("-")[1];
        const monthName = new Date(dateOnly).toLocaleString("id-ID", {
            month: "long",
        });

        const dateName = dateOnly.split("-")[2];
        const yearName = dateOnly.split("-")[0];

        return `${dateName} ${monthName} ${yearName}`;
    };

    const getTime = (date: string) => {
        const timeOnly = date.split(" ")[1];
        return timeOnly;
    };

    // get name station by code
    const getStationName = (code: string) => {
        const station = stations.find((station) => station.code === code);
        return station?.name;
    };

    // render ticket
    const renderTicket = () => {
        // if trains empty
        if(trains?.length === 0 && origin && destination){
            return (
                <div className="border bg-white flex justify-center text-black font-bold p-10 px-20 rounded-xl">Jadwal untuk relasi {origin} ke {destination} tidak ditemukan</div>
            )
        } else {
            return trains?.map((train) => (
                <div key={train.id} className="bg-blue-800 flex justify-between text-white p-10 px-20 rounded-xl">
                    <div className="w-1/3">
                        <div className="text-xl font-bold">{train.name}</div>
                        <div>{train.type}</div>
                    </div>
                    <div className="grid grid-cols-3 w-2/3">
                        <div>
                            <div>{getStationName(train.origin)}</div>
                            <div className="font-bold">{getTime(train.arivalDate)}</div>
                            <div>{getDate(train.arivalDate)}</div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-2/3">
                            <Icon name="arrow-right" size="40" color="#F97316" />
                            <div className="mt-2">{train.estimatedTime}</div>
                        </div>
                        <div>
                            <div>{getStationName(train.destination)}</div>
                            <div className="font-bold">{getTime(train.departureDate)}</div>
                            <div>{getDate(train.departureDate)}</div>
                        </div>
                    </div>
                    <div className="text-center w-1/3">
                        <div className="text-xl font-semibold text-orange-400">Rp {train.price.toLocaleString('id')},-</div>
                        <div><button className="bg-orange-500 text-white p-1 px-7 mt-2">Pesan</button></div>
                        <div className="mt-2">{train.status}</div>
                    </div>
                </div>
            ))
        }
    }

    return (
        <div className="grid gap-5">
            {renderTicket()}
        </div>
    )
}