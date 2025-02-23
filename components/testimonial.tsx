import Image from "next/image";

import IconStar from "../public/icon/icon-start.svg";
import IconPerson from "../public/image/person-testimonial.svg";

export default function Testimonial() {
  return (
    <section className="m-3 md:m-10">
      <h2 className="text-center text-[32px] font-semibold mb-5">
        Testimonial
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6">
        <div className="flex flex-col bg-[#F3F3F3] justify-center items-center h-[330px] p-4">
          <p className="w-[300px] mb-4 max-w-md text-[20px] font-semibold text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="mr-3">
              <Image className="m-1" src={IconPerson} alt="Icon person" />
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-1">
                <Image src={IconStar} alt="Icon star 1" />
                <Image src={IconStar} alt="Icon star 2" />
                <Image src={IconStar} alt="Icon star 3" />
                <Image src={IconStar} alt="Icon star 4" />
                <Image src={IconStar} alt="Icon star 5" />
              </div>
              <span className="block font-semibold text-[20px]">
                Gemma Nolen
              </span>
              <p className="text-[17px]">Google</p>
            </div>
          </div>
        </div>

        {/* Repita o bloco abaixo para os demais depoimentos */}
        <div className="flex flex-col bg-[#F3F3F3] justify-center items-center h-[330px] p-4">
          <p className="w-[300px] mb-4 max-w-md text-[20px] font-semibold text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="mr-3">
              <Image className="m-1" src={IconPerson} alt="Icon person" />
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-1">
                <Image src={IconStar} alt="Icon star 1" />
                <Image src={IconStar} alt="Icon star 2" />
                <Image src={IconStar} alt="Icon star 3" />
                <Image src={IconStar} alt="Icon star 4" />
                <Image src={IconStar} alt="Icon star 5" />
              </div>
              <span className="block font-semibold text-[20px]">
                Gemma Nolen
              </span>
              <p className="text-[17px]">Google</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#F3F3F3] justify-center items-center h-[330px] p-4">
          <p className="w-[300px] mb-4 max-w-md text-[20px] font-semibold text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="mr-3">
              <Image className="m-1" src={IconPerson} alt="Icon person" />
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-1">
                <Image src={IconStar} alt="Icon star 1" />
                <Image src={IconStar} alt="Icon star 2" />
                <Image src={IconStar} alt="Icon star 3" />
                <Image src={IconStar} alt="Icon star 4" />
                <Image src={IconStar} alt="Icon star 5" />
              </div>
              <span className="block font-semibold text-[20px]">
                Gemma Nolen
              </span>
              <p className="text-[17px]">Google</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#F3F3F3] justify-center items-center h-[330px] p-4">
          <p className="w-[300px] mb-4 max-w-md text-[20px] font-semibold text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="mr-3">
              <Image className="m-1" src={IconPerson} alt="Icon person" />
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-1">
                <Image src={IconStar} alt="Icon star 1" />
                <Image src={IconStar} alt="Icon star 2" />
                <Image src={IconStar} alt="Icon star 3" />
                <Image src={IconStar} alt="Icon star 4" />
                <Image src={IconStar} alt="Icon star 5" />
              </div>
              <span className="block font-semibold text-[20px]">
                Gemma Nolen
              </span>
              <p className="text-[17px]">Google</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#F3F3F3] justify-center items-center h-[330px] p-4">
          <p className="w-[300px] mb-4 max-w-md text-[20px] font-semibold text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="mr-3">
              <Image className="m-1" src={IconPerson} alt="Icon person" />
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-1">
                <Image src={IconStar} alt="Icon star 1" />
                <Image src={IconStar} alt="Icon star 2" />
                <Image src={IconStar} alt="Icon star 3" />
                <Image src={IconStar} alt="Icon star 4" />
                <Image src={IconStar} alt="Icon star 5" />
              </div>
              <span className="block font-semibold text-[20px]">
                Gemma Nolen
              </span>
              <p className="text-[17px]">Google</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#F3F3F3] justify-center items-center h-[330px] p-4">
          <p className="w-[300px] mb-4 max-w-md text-[20px] font-semibold text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="mr-3">
              <Image className="m-1" src={IconPerson} alt="Icon person" />
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-1">
                <Image src={IconStar} alt="Icon star 1" />
                <Image src={IconStar} alt="Icon star 2" />
                <Image src={IconStar} alt="Icon star 3" />
                <Image src={IconStar} alt="Icon star 4" />
                <Image src={IconStar} alt="Icon star 5" />
              </div>
              <span className="block font-semibold text-[20px]">
                Gemma Nolen
              </span>
              <p className="text-[17px]">Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
