import { Image } from "@nextui-org/react";

export interface CardI {
    id: number,
    name: string,
    cost: string,
    pic: string,
}

export const CatCard = (lot: CardI) => {
    return (
        <div id={'lot'+ `${lot.id}`.padStart(3, '0')} className="w-[276px] h-[375px] flex flex-col justyfy-end item-start">
            <div className="grow-1 w-full h-full flex justyfy-center item-center p-[10px]">
                <Image src={lot.pic} alt={lot.pic}></Image>
            </div>
            <p className="font-normal text-[14px] leading-[18px]">{lot.name}</p>
            <p className="font-normal text-[12px] leading-[14px] text-content2">{lot.cost}</p>
        </div>
    );
}
