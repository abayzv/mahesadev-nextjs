export default function Hero(){
    return(
        <section className="bg-blue-600 lg:text-start text-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/6b/Kereta_api_Lokal_Merak_yang_memiliki_relasi_Rangkasbitung-Merak_PP.jpg')] bg-cover bg-blend-multiply lg:py-36 py-10 overflow-hidden">
            <div className="container mx-auto lg:px-20 px-5">
                <div className="flex items-center lg:flex-row flex-col">
                    <div className="lg:w-1/2 fadein-left">
                        <h1 className="lg:text-7xl text-3xl font-bold text-white"><span className="bg-orange-500 p-2">Menjelajahi</span> Nusantara dengan Kereta Api Indonesia</h1>
                        <p className="text-white mt-5 text-lg">Terhubung dengan Warisan Sejarah, Keajaiban Alam, dan Kebudayaan yang Membuat Perjalanan Anda Menakjubkan dan Penuh Kenangan.</p>
                        {/* <div className="mt-5"><button className="py-3 px-10 bg-orange-500 text-white font-medium">Get Started</button></div> */}
                    </div>
                    <div className="lg:w-1/2 lg:transform lg:translate-x-[300px] lg:mt-0 mt-8 fadein-right-custom">
                        <img src="https://mahesadev.com/kai.png" className="object-cover object-left lg:w-[700px] lg:h-[500px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}