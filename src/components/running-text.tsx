export default function RunningText() {
    return (
        <div className="flex">
            <div className="bg-orange-500 text-white p-4 w-[150px] run-text--header">Berita Hari Ini</div>
            <div className="bg-black text-white flex overflow-clip w-full items-center">
                <ul className="flex flex-nowrap w-[200%] slide-left">
                    <li className="whitespace-nowrap w-1/5 px-10">Pelestarian Arsip KAI: Memelihara Sejarah Perkeretaapian Indonesia</li>
                    <li className="whitespace-nowrap w-1/5 px-10">KAI Terima Kunjungan Kerja Delegasi Keretapi Tanah Melayu Berhad</li>
                    <li className="whitespace-nowrap w-1/5 px-10">Wajib Tahu! Ini 6 Tempat Pendidikan dan Pelatihan Bagi SDM KAI</li>
                    <li className="whitespace-nowrap w-1/5 px-10">Catat! Ini Enam Alasan Kenapa Kamu Harus Mudik Naik Kereta Api</li>
                    <li className="whitespace-nowrap w-1/5 px-10">KAI Sediakan Vaksin Booster Gratis dan Ketepatan Waktu KA Capai 99,6 Persen</li>
                </ul>
            </div>
        </div>
    )
}