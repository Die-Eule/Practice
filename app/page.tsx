"use client"
import { ExternalControlledCarousel } from "@/components/Carusel/Carusel";
import { CatCard } from "@/components/CatCard/CatCard";
import { LoadCatalog } from "@/components/LoadCatalog/LoadCatalog";
import { Image } from "@nextui-org/react";
import { useState } from "react";

const watches = [
  '/watch1.png',
  '/watch2.png',
  '/watch3.png',
  '/watch4.png',
  '/watch5.png',
]

export default function Home() {
  const [catlogView, setCatalogView] = useState({offset: 0, count: 12});
  return (
    <>
      <main className="flex min-h-[93vh] flex-col items-center justify-between p-24">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[60px] leading-[62px] max-w-[70%]">Welcome to our collection of premium watches</p>
          <p className="font-normal text-[14px] leading-[18px] max-w-[280px]">Our watches are not just timepieces,
            but also an expression of your personality and lifestyle.
            From classic designs to modern ones, we have a watch to suit every taste and occasion.</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[30%]">
            <ExternalControlledCarousel slideList={watches}/>
          </div>
          <Image src={"/main_pic.png"} alt="watch picture" width={676} radius="none"></Image>
        </div>
      </main>
      <div className="mythemeLit text-foreground bg-background flex min-h-[93vh] flex-col items-center justify-between p-24">
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold text-[40px] leading-[44px] text-content1 min-w-[25%]">About us</p>
          <p className="font-normal text-[14px] leading-[18px]">
            Welcome to our premium watch collection, where luxury and style meet functionality and precision.
            Our selection of timepieces embodies the very best in Swiss craftsmanship and engineering,
            ensuring that you&lsquo;ll always have a reliable and stylish accessory on your wrist.
          </p>
          <p className="font-normal text-[14px] leading-[18px] pl-[20px]">
            At our premium watch collection, we believe that a watch is more than just a timekeeping device
            – it&lsquo;s a statement piece that reflects your personality and style. So why settle for anything
            less than the best? Browse our collection today and discover the perfect watch for you.
          </p>
        </div>
        <div className="flex items-center justify-end w-full">
          <div className="max-w-[75%]">
            <Image src="/about_pic.png" alt="about watch" radius="none"></Image>
          </div>
        </div>
      </div>
      <div className="mythemeLit text-foreground bg-background flex min-h-[93vh] flex-col items-center justify-start p-24">
        <p className="font-semibold text-[40px] leading-[44px] text-content1 min-w-[25%] self-start">Catalog</p>
        <div className="flex justify-between flex-wrap w-full">
          {
            LoadCatalog(catlogView.offset, catlogView.count).map((value) => {
              return <CatCard key={value.id} {...value} />;
            })
          }
        </div>
      </div>
    </>
  );
}
