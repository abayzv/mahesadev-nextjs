const Train = ({size, color} : {size: string, color: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} fill={color} viewBox="0 0 448 512"><path d="M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96zm-48 136V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24zm-176 64c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56z"/></svg>
    )
}

const ArrowRigt = ({size, color} : {size: string, color: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} fill={color} viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"/></svg>
    )
}

export default function Icon({name, size, color} : {name: string, size: string, color: string}){

    const renderIcon = () => {
        switch(name){
            case 'train' : 
                return <Train size={size} color={color} />
            case 'arrow-right' :
                return <ArrowRigt size={size} color={color} />
        }
    }

    return (
        <>
        {renderIcon()}
        </>
    )
}