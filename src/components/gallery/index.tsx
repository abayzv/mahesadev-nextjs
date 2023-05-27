import GalleryStandard from "./standard";
import GalleryPartner from "./partners";

export interface Gallery {
  src: string;
  title: string;
}

export default function Galleries({
  gallery,
  type = "standard",
}: {
  gallery: Gallery[];
  type?: string;
}) {
  const renderGallery = (type: string) => {
    switch (type) {
      case "standard":
        return <GalleryStandard gallery={gallery} />;
      case "partners":
        return <GalleryPartner gallery={gallery} />;
    }
  };

  return <div className="overflow-x-auto overflow-y-hidden">{renderGallery(type)}</div>;
}
