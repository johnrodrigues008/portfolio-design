import Image from "next/image";

import GaleryCard1 from "../public/image/galery-card1.svg";
import GaleryCard2 from "../public/image/galery-card2.svg";
import GaleryCard3 from "../public/image/galery-card3.svg";
import GaleryCard4 from "../public/image/galery-card4.svg";
import GaleryCard5 from "../public/image/galery-card5.svg";
import GaleryCard6 from "../public/image/galery-card6.svg";

export default function Works() {
  return (
    <section className="m-3 md:m-10">
      <h2 className="text-center text-[32px] font-semibold mb-5">Latest work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6">
        <div className="flex flex-col">
          <Image
            src={GaleryCard1}
            alt="Imagem 1"
            className="w-full object-cover h-auto"
          />
          <h3 className="mt-2 text-[20px] font-semibold">Project title</h3>
          <p className="mb-2 text-[17px]">UI, Art direction</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={GaleryCard2}
            alt="Imagem 2"
            className="w-full object-cover h-auto"
          />
          <h3 className="mt-2 text-[20px] font-semibold">Project title</h3>
          <p className="mb-2 text-[17px]">UI, Art direction</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={GaleryCard3}
            alt="Imagem 3"
            className="w-full object-cover h-auto"
          />
          <h3 className="mt-2 text-[20px] font-semibold">Project title</h3>
          <p className="mb-2 text-[17px]">UI, Art direction</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={GaleryCard4}
            alt="Imagem 4"
            className="w-full object-cover h-auto"
          />
          <h3 className="mt-2 text-[20px] font-semibold">Project title</h3>
          <p className="mb-2 text-[17px]">UI, Art direction</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={GaleryCard5}
            alt="Imagem 5"
            className="w-full object-cover h-auto"
          />
          <h3 className="mt-2 text-[20px] font-semibold">Project title</h3>
          <p className="mb-2 text-[17px]">UI, Art direction</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={GaleryCard6}
            alt="Imagem 6"
            className="w-full object-cover h-auto"
          />
          <h3 className="mt-2 text-[20px] font-semibold">Project title</h3>
          <p className="mb-2 text-[17px]">UI, Art direction</p>
        </div>
      </div>
    </section>
  );
}
