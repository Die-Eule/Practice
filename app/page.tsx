import { ExternalControlledCarousel } from "@/components/Carusel/Carusel";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-[93vh] flex-col items-center justify-between p-24">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[60px] leading-[62px] max-w-[70%]">Welcome to our collection of premium watches</p>
        <p className="font-normal text-[14px] leading-[18px] max-w-[280px]">Our watches are not just timepieces,
           but also an expression of your personality and lifestyle.
           From classic designs to modern ones, we have a watch to suit every taste and occasion.</p>
      </div>
      <div className="flex justify-between items-center">
        <ExternalControlledCarousel />
        <Image src={"/main_pic.png"} alt="watch picture" width={676} radius="none"></Image>
      </div>
    </main>
  );
}
