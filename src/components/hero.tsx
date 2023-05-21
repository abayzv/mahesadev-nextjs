export default function Hero(){
    return(
        <section className="bg-blue-600 bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/6b/Kereta_api_Lokal_Merak_yang_memiliki_relasi_Rangkasbitung-Merak_PP.jpg')] bg-cover bg-blend-multiply py-36 overflow-hidden">
            <div className="container mx-auto px-20">
                <div className="flex items-center">
                    <div className="w-1/2 fadein-left">
                        <h1 className="text-7xl font-bold text-white"><span className="bg-orange-500 p-2">Menjelajahi</span> Nusantara dengan Kereta Api Indonesia</h1>
                        <p className="text-white mt-5 text-lg">Terhubung dengan Warisan Sejarah, Keajaiban Alam, dan Kebudayaan yang Membuat Perjalanan Anda Menakjubkan dan Penuh Kenangan.</p>
                        {/* <div className="mt-5"><button className="py-3 px-10 bg-orange-500 text-white font-medium">Get Started</button></div> */}
                    </div>
                    <div className="w-1/2 transform translate-x-[300px] fadein-right-custom">
                        <img src="https://mahesadev.com/kai.png" className="object-cover object-left w-[700px] h-[500px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}