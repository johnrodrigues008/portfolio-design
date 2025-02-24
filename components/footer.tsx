import Image from "next/image";

import IconDiscord from "../public/icon/icon-discord.svg";
import IconFacebook from "../public/icon/icon-facebook.svg";
import IconInstagram from "../public/icon/icon-instagram.svg";
import IconDribble from "../public/icon/icon-dribble.svg";
import IconBehance from "../public/icon/icon-behance.svg";

export default function Footer() {
  return (
    <footer className="px-3 py-4 md:p-10">
      <div className="md:hidden flex flex-col">
        <div>
          <h4 className="text-[32px] font-semibold">Lets work together</h4>
          <p className="pt-[24px]">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
        </div>
        <div className="pt-5">
          <input
            className="bg-[#F3F3F3] w-full h-[59px] mb-[12px] px-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-[#F3F3F3] w-full h-[59px] px-3"
            type="email"
            placeholder="Email"
          />
          <button className="text-[20px] w-[150px] h-[58px] bg-[#2D2D2D] text-white mt-[24px]">
            Submit
          </button>
        </div>
        <div className="flex space-x-4 pt-[42px]">
          <Image
            className="w-[36px] h-full"
            src={IconDiscord}
            alt="Icon discord"
          />
          <Image
            className="w-[36px] h-full"
            src={IconFacebook}
            alt="Icon facebook"
          />
          <Image
            className="w-[36px] h-full"
            src={IconDribble}
            alt="Icon dribble"
          />
          <Image
            className="w-[36px] h-full"
            src={IconInstagram}
            alt="Icon instagram"
          />
          <Image
            className="w-[36px] h-full"
            src={IconBehance}
            alt="Icon behance"
          />
        </div>
      </div>

      <div className="hidden md:flex md:justify-between">
        <div>
          <h4 className="text-[32px] font-semibold">Lets work together</h4>
          <p className="pt-[24px] w-[500px]">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex space-x-4 pt-[42px]">
            <Image
              className="w-[36px] h-full"
              src={IconDiscord}
              alt="Icon discord"
            />
            <Image
              className="w-[36px] h-full"
              src={IconFacebook}
              alt="Icon facebook"
            />
            <Image
              className="w-[36px] h-full"
              src={IconDribble}
              alt="Icon dribble"
            />
            <Image
              className="w-[36px] h-full"
              src={IconInstagram}
              alt="Icon instagram"
            />
            <Image
              className="w-[36px] h-full"
              src={IconBehance}
              alt="Icon behance"
            />
          </div>
        </div>
        <div className="flex flex-col pt-5">
          <input
            className="bg-[#F3F3F3] w-[520px] h-[59px] mb-[12px] px-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-[#F3F3F3] w-[520px] h-[59px] px-3"
            type="email"
            placeholder="Email"
          />
          <button className="text-[20px] w-[150px] h-[58px] bg-[#2D2D2D] text-white mt-[24px]">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
}
