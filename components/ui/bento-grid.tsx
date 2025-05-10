'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./grid-globe";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:grid-row-7 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () =>{
    navigator.clipboard.writeText('surajprince0009@gmail.com');
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl relative border border-white/[0.1] bg-white p-4 transition duration-200 hover:shadow-xl dark:shadow-none overflow-hidden hover:border-[1px] hover:border-purple-300",
        className,
      )}
      style={{
        backgroundColor: 'rgb(4,7,29)',
        background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >

      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              height={500}
              width={500}
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center, w-auto, h-auto')}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <Image
             height={500}
             width={500}
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center, w-full, h-full'}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>

          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && (
            <GlobeDemo />
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                {['React.js', 'Next.js', 'TypeScript'].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs text-center bg-[#10132E] opacity-50 rounded-lg lg:py-4 lg:px-3 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                <span className="py-4 px-3 lg:py-4 lg:px-3 rounded-lg text-center bg-[#10132E]" />
                {['Express.js', 'Node.js', 'MongoDB'].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs text-center bg-[#10132E] opacity-50 rounded-lg lg:py-4 lg:px-3 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div>

              <MagicButton
              title={copied ? 'Email copied' : 'Copy my email'}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses={`bg-[#161A31]`}
              handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
