export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full bg-blue-800 bg-[url(https://www.pegipegi.com/travel/wp-content/uploads/2022/06/Jenis-kereta-api-berdasarkan-kelas-penumpang.jpg)] bg-cover bg-center bg-blend-multiply text-white text-4xl font-bold p-16 text-center">
        BERITA
      </div>
      <div className="bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto lg:px-20  px-5 lg:py-16 py-10">
            {children}
        </div>
      </div>
    </div>
  );
}
