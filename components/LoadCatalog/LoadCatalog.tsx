
const catalog = [
  {
    id: 1,
    name: 'Tube Watch S42 Date Steel With Black Case',
    cost: '€395',
    pic: '/catalog/lot_001.png',
  },
  {
    id: 2,
    name: 'Avondale Watch Police For Men',
    cost: '€800',
    pic: '/catalog/lot_002.png',
  },
  {
    id: 3,
    name: 'Diver 300M Co‑Axial Master Chronometer Chronograph',
    cost: '€600',
    pic: '/catalog/lot_003.png',
  },
  {
    id: 4,
    name: 'Diver 300M Co-Axial Master Chronometer',
    cost: '€1400',
    pic: '/catalog/lot_004.png',
  },
  {
    id: 5,
    name: 'Taman Watch By Police For Men',
    cost: '€500',
    pic: '/catalog/lot_005.png',
  },
  {
    id: 6,
    name: 'Malawi Watch Police For Men',
    cost: '€555',
    pic: '/catalog/lot_006.png',
  },
  {
    id: 7,
    name: 'Diver 300M Co-Axial Master Chronometer',
    cost: '€1200',
    pic: '/catalog/lot_007.png',
  },
  {
    id: 8,
    name: 'Greenlane Watch By Police For Men',
    cost: '€1000',
    pic: '/catalog/lot_008.png',
  },
  {
    id: 9,
    name: 'Squardrc 5402 Chrono',
    cost: '€359',
    pic: '/catalog/lot_009.png',
  },
  {
    id: 10,
    name: 'Diver 300M Co‑Axial Master Chronometer Chronograph',
    cost: '€400',
    pic: '/catalog/lot_010.png',
  },
  {
    id: 11,
    name: 'Citizen',
    cost: '€519',
    pic: '/catalog/lot_011.png',
  },
  {
    id: 12,
    name: 'Armani Exchange',
    cost: '€400',
    pic: '/catalog/lot_012.png',
  },
];

export const LoadCatalog = (offset: number, count: number) => {
  return catalog.slice(offset, offset + count);
}