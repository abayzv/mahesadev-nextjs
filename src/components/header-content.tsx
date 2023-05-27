export default function HeaderContent({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-800">{title}</h2>
      <hr className="border-2 inline-block w-32 mt-7 border-orange-500" />
      <hr className="border-2 inline-block w-32 mt-7 border-blue-500" />
    </div>
  );
}
