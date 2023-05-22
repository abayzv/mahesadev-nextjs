'use client'

export default function CardDate(){
    const date = new Date();
    const dateLocale = date.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="text-3xl font-bold text-white bg-orange-500 w-1/4 p-5 flex flex-col items-center justify-center text-center">
            {dateLocale}
        </div>
    )
}