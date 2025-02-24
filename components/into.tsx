import Image from "next/image";
import Logo from "../public/image/person.svg";

import IconGoogle from "../public/icon/google.svg";
import IconNike from "../public/icon/nike.svg";
import IconSamsung from "../public/icon/samsung.svg";
import IconApple from "../public/icon/apple.svg";
import IconAddidas from "../public/icon/addidas.svg";

import ImgProductDesign from "../public/image/product-design.svg";
import ImgVisualDesign from "../public/image/visual-design.svg";
import ImgArtDirection from "../public/image/art-direction.svg";

export default function into() {
  return (
    <>
      <header>
        <ul className="flex justify-between w-full items-center p-4 py-6 md:p-6 md:px-8">
          <li className="font-semibold text-[20px]">KARIN</li>
          <div className="flex  text-[17px]">
            <li className="ml-4">About</li>
            <li className="ml-4">Work</li>
            <li className="ml-4">Contact</li>
          </div>
        </ul>
      </header>

      <div className="into flex flex-col m-3 md:flex-row md:p-6 md:px-16 md:justify-between">
        <div className=" md:mt-[58px]">
          <span className="text-[20px]">Branding | Image making</span>

          <h1 className="text-[40px] font-semibold my-[20px] text-center md:text-[68px] md:mt-[24px] md:text-start">
            Visual Designer
          </h1>

          <div className="mt-4 flex justify-center items-center md:hidden">
            <Image
              className="w-[300px]"
              src={Logo}
              width={1000}
              height={1000}
              alt="Logo person"
            />
          </div>

          <p className="mt-6 md:mt-0 text-[17px] text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <button className="text-[20px] w-[211px] h-[78px] bg-[#2D2D2D] text-white mt-[48px]">
            Contact
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <Image
            className="w-[480px]"
            src={Logo}
            width={1000}
            height={1000}
            alt="Logo person"
          />
        </div>
      </div>

      <div className="p-3 mt-[50px] md:p-6 md:px-16 md:mt-[100px]">
        <div className="grid grid-cols-3 gap-4 md:hidden">
          <div className="flex justify-center">
            <Image src={IconGoogle} alt="Icon addidas" />
          </div>
          <div className="flex justify-center">
            <Image src={IconNike} alt="Icon Nike" />
          </div>
          <div className="flex justify-center">
            <Image className="px-3" src={IconSamsung} alt="Icon samsung" />
          </div>
          <div className="col-span-3 flex justify-center gap-8 mt-4">
            <div>
              <Image src={IconApple} alt="Icon apple" />
            </div>
            <div>
              <Image src={IconAddidas} alt="Icon addidas" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-between w-full flex-wrap">
          <div>
            <Image src={IconGoogle} alt="Icon addidas" />
          </div>
          <div>
            <Image src={IconNike} alt="Icon Nike" />
          </div>
          <div>
            <Image className="px-3" src={IconSamsung} alt="Icon samsung" />
          </div>
          <div>
            <Image src={IconApple} alt="Icon apple" />
          </div>
          <div>
            <Image src={IconAddidas} alt="Icon addidas" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-16 md:flex-row md:justify-between md:p-6 md:px-16">
        <div className="flex flex-col items-center my-6 md:my-0">
          <Image src={ImgProductDesign} alt="Icon product design" />
          <h3 className="m-9 text-3xl font-semibold">Product Design</h3>
          <p className="text-[17px] w-[340px] text-center">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
        <div className="flex flex-col items-center  my-6 md:my-0">
          <Image src={ImgVisualDesign} alt="Icon visual design" />
          <h3 className="m-9 text-3xl font-semibold">Product Design</h3>
          <p className="text-[17px] w-[340px] text-center">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
        <div className="flex flex-col items-center  my-6 md:my-0">
          <Image src={ImgArtDirection} alt="Icon art direction" />
          <h3 className="m-9 text-3xl font-semibold">Product Design</h3>
          <p className="text-[17px] w-[340px] text-center">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
      </div>
    </>
  );
}
