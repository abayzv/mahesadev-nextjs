import Hero from "@/components/hero";
import MediaSlider from "@/components/media-slider";
import FormTicket from "./form-ticket";
import CardDate from "@/components/card-date";
import RunningText from "@/components/running-text";
import Service from "@/components/service";
import Galleries, { Gallery } from "@/components/gallery";
import HeaderContent from "@/components/header-content";

interface Media {
  src: string;
  title: string;
}

export default async function Home() {
  const mediaData: Array<Media> = [
    {
      src: "https://awsimages.detik.net.id/community/media/visual/2022/09/14/penumpang-ka-bertambah-usai-harga-bbm-makin-mahal-ini-buktinya-3.jpeg?w=700&q=90",
      title: "KAI Access",
    },
    {
      src: "https://swamediainc.storage.googleapis.com/swa.co.id/wp-content/uploads/2020/05/12191311/Kereta-APi.jpg",
      title: "KAI Access",
    },
    {
      src: "https://www.pegipegi.com/travel/wp-content/uploads/2022/06/Jenis-kereta-api-berdasarkan-kelas-penumpang.jpg",
      title: "KAI Access",
    },
    {
      src: "https://s3.us-east-1.wasabisys.com/agendaindonesia/2022/05/Kereta-Api-Lewat.jpeg",
      title: "KAI Access",
    },
    {
      src: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/06/30/3940544672.jpg",
      title: "KAI Access",
    },
  ];
  const galleryData: Array<Gallery> = [
    {
      src: "https://mahesadev.com/LOGOKAISERVICES-01.png",
      title: "KAI Services",
    },
    {
      src: "https://mahesadev.com/LOGOKAIWISATA-01.png",
      title: "KAI Wisata",
    },
    {
      src: "https://mahesadev.com/LOGOKAIPROPERTI-01.png",
      title: "KAI Properti",
    },
    {
      src: "https://mahesadev.com/LOGOKAILOGISTIK-01.png",
      title: "KAI Logistik",
    },
    {
      src: "https://mahesadev.com/LOGOKAICOMMUTER-01.png",
      title: "KAI Commuter",
    },
    {
      src: "https://mahesadev.com/LOGOKAIBANDARA-01.png",
      title: "KAI Bandara",
    }
  ];

  return (
    <div>
      <RunningText />
      <Hero />

      {/* Section Order */}
      <div className="relative flex justify-center">
        <div className="container mx-auto bg-white lg:shadow-lg flex lg:flex-row flex-col lg:absolute lg:-top-20">
          <CardDate />
          <FormTicket />
        </div>
      </div>
      {/* End Section order */}

      {/* Content 1  */}
      <section className="bg-white lg:pb-32 lg:pt-96 lg:py-0 py-10 overflow-clip lg:text-start text-center">
        <div className="container mx-auto lg:px-20 px-5 flex lg:flex-row flex-col items-center justify-between gap-10">
          <div className="lg:w-1/2 fadein-left">
            <h2 className="lg:text-4xl text-2xl text-blue-800 font-black">
              AYO UPGRADE MEMBERSHIP KAI ACCESS KAMU KE{" "}
              <span className="text-orange-500">MEMBER PREMIUM</span> DAN
              NIKMATI RAGAM MANFAATNYA
            </h2>
            <p className="mt-5 text-lg">
              Dengan mengupgrade membership KAI Access-mu menjadi member
              premium, Railpoint yang di kumpulkan bisa digunakan untuk membeli
              tika KA Komersial dan diskon pada merchant yang telah bekerjasama
              dengan KAI lho. Program Loyalitas Railpoint ini menggantikan
              program Award Ticket yang telah berakhir pada 31 Desember 2020.
            </p>
            <div className="mt-7">
              <button className="bg-orange-500 px-10 py-3 text-white">
                Upgrade Sekarang
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center style-1 fadein-right">
            <img
              src="https://mahesadev.com/1c8bdc9a4fc72dbe29bc1e51e13d8bad.jpeg"
              className="w-[500px] rounded-lg style-1 hover:transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </section>
      {/* End Content 1 */}

      {/* Call to Action */}
      <section className="bg-blue-800 bg-[url('https://static.republika.co.id/uploads/member/images/news/rvgw9m2nui.jpg')] bg-blend-multiply bg-cover bg-center py-20 text-white">
        <div className="container mx-auto px-20 text-center grid gap-5">
          <h2 className="lg:text-3xl text-2xl font-black">Premium Member</h2>
          <p className="text-lg">
            Nikmati Berbagai Keuntungan Dengan Menjadi Premium Member
          </p>
          <div className="mt-5">
            <button className="bg-orange-500 px-10 py-3 text-white">
              Lihat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
      {/* End Call to Action */}

      {/* Content 2  */}
      <section className="bg-white lg:py-32 py-10 overflow-clip lg:text-start text-center">
        <div className="container mx-auto lg:px-20 px-5 flex lg:flex-row flex-col items-center justify-between gap-10">
          <div className="lg:w-1/2 flex justify-center style-1 fadein-left">
            <img
              src="https://i.ytimg.com/vi/eq4CGvMt4F8/maxresdefault.jpg"
              className="w-[500px] rounded-lg style-1 hover:transform hover:scale-105 transition-all"
            />
          </div>
          <div className="lg:w-1/2 fadein-right">
            <h2 className="lg:text-6xl text-3xl text-blue-800 font-black">
              CARA PEMBATALAN TIKET KERETA DI KAI ACCESS
            </h2>
            <p className="mt-5 text-lg">
              Sekarang pembatalan tiket menggunakan KAI Acess sangat mudah, yuk
              simak informasi berikut untuk mengetahui tata cara pembatalan
              tiket di KAI Access.
            </p>
            <div className="mt-5">
              <button className="bg-orange-500 px-10 py-3 text-white">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End Content 1 */}

      {/* Service */}
      <Service />
      {/* End Service */}

      {/* Subsidiary */}
      <section className="bg-white lg:py-10 py-0">
        <div className="container mx-auto lg:px-20">
         {/* <HeaderContent title="Anak Perusahaan" /> */}
          <div>
            <Galleries gallery={galleryData} type="partners" />
          </div>
        </div>
      </section>
      {/* End Subsidiary */}

      {/* Media Slider */}
      <MediaSlider media={mediaData} />
      {/* End Media Slider */}
    </div>
  );
}
