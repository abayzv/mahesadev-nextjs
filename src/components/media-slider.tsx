interface Media{
    src: string
    title: string
}

export default function MediaSlide({media} : {media: Media[]}) {
    return (
        <div className="w-full overflow-clip">
            <div className="flex flex-nowrap w-[200%] slide-left">
                {media.map((item, index) => (
                    <div key={index} className="w-[20%]">
                        <img src={item.src} alt={item.title} className="h-[100%] bg-cover" />
                    </div>
                ))}
                {media.map((item, index) => (
                    <div key={index} className="w-[20%]">
                        <img src={item.src} alt={item.title} className="h-[100%] bg-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}