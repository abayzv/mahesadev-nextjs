import Hero from "@/components/hero";
import MediaSlider from "@/components/media-slider";
import stations from "../../api/stations";
import Select from "@/components/form/select";
import FormTicket from "./form-ticket";

interface Media {
  src: string
  title: string
}

export default function Home() {
  const mediaData : Array<Media> = [
    {
      src: 'https://awsimages.detik.net.id/community/media/visual/2022/09/14/penumpang-ka-bertambah-usai-harga-bbm-makin-mahal-ini-buktinya-3.jpeg?w=700&q=90',
      title: 'KAI Access',
    },
    {
      src: 'https://swamediainc.storage.googleapis.com/swa.co.id/wp-content/uploads/2020/05/12191311/Kereta-APi.jpg',
      title: 'KAI Access',
    },
    {
      src: 'https://www.pegipegi.com/travel/wp-content/uploads/2022/06/Jenis-kereta-api-berdasarkan-kelas-penumpang.jpg',
      title: 'KAI Access',
    },
    {
      src: 'https://s3.us-east-1.wasabisys.com/agendaindonesia/2022/05/Kereta-Api-Lewat.jpeg',
      title: 'KAI Access',
    },
    {
      src: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/06/30/3940544672.jpg',
      title: 'KAI Access',
    }
  ]

  const date = new Date();
  const dateLocale = date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
  });

  return (
    <div>
        <Hero/>

        {/* Section Order */}
        <div className="relative flex justify-center">
          <div className="container mx-auto bg-white shadow-lg flex absolute -top-20">
            <div className="text-3xl font-bold text-white bg-orange-500 w-1/4 p-5 flex flex-col items-center justify-center text-center">
                {dateLocale}
            </div>
            <FormTicket />
         </div>
        </div>
        {/* End Section order */}

        {/* Content 1  */}
        <section className="bg-white pb-32 pt-96">
          <div className="container mx-auto px-20 flex items-center justify-between gap-10">
            <div className="w-1/2 fadein-left">
              <h2 className="text-4xl text-blue-800 font-black">AYO UPGRADE MEMBERSHIP KAI ACCESS KAMU KE <span className="text-orange-500">MEMBER PREMIUM</span> DAN NIKMATI RAGAM MANFAATNYA</h2>
              <p className="mt-5 text-lg">Dengan mengupgrade membership KAI Access-mu menjadi member premium, Railpoint yang di kumpulkan bisa digunakan untuk membeli tika KA Komersial dan diskon pada merchant yang telah bekerjasama dengan KAI lho. Program Loyalitas Railpoint ini menggantikan program Award Ticket yang telah berakhir pada 31 Desember 2020.</p>
            </div>
            <div className="w-1/2 flex justify-center style-1 fadein-right">
              <img src="https://mahesadev.com/1c8bdc9a4fc72dbe29bc1e51e13d8bad.jpeg" className="w-[500px] rounded-lg style-1 hover:transform hover:scale-105 transition-all"/>
            </div>
          </div>
        </section>
        {/* End Content 1 */}

        {/* Call to Action */}
        <section className="bg-blue-800 bg-[url('https://static.republika.co.id/uploads/member/images/news/rvgw9m2nui.jpg')] bg-blend-multiply bg-cover bg-center py-20 text-white">
          <div className="container mx-auto px-20 text-center grid gap-5">
            <h2 className="text-3xl font-black">Premium Member</h2>
            <p className="text-lg">Nikmati Berbagai Keuntungan Dengan Menjadi Premium Member</p>
            <div className="mt-5"><button className="bg-orange-500 px-10 py-3 text-white">Lihat Lebih Banyak</button></div>
          </div>
        </section>
        {/* End Call to Action */}

        {/* Media Slider */}
        <MediaSlider media={mediaData} />
        {/* End Media Slider */}
    </div>
  )
}
