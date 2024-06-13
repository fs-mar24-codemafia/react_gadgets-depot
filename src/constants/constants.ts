import { CategoryType } from '../types/CategoryType';

export const productsCategories = [
  { category: 'phones' },
  { category: 'tablets' },
  { category: 'accessories' },
];

export const heroSliderData = [
  {
    imgUrl: 'promo/banner-iphone-14-pro.png',
    linkUrl: '/phones/apple-iphone-14-pro-512gb-spaceblack',
  },
  {
    imgUrl: 'promo/banner-phones.png',
    linkUrl: '/phones',
  },
  {
    imgUrl: 'promo/banner-tablets.png',
    linkUrl: '/tablets',
  },
  {
    imgUrl: 'promo/banner-accessories.png',
    linkUrl: '/accessories',
  },
];

export const categories: CategoryType[] = [
  {
    name: 'Mobile phones',
    src: 'img/category-phone.png',
    linkTo: '/phones',
  },
  {
    name: 'Tablets',
    src: 'img/category-tablets.png',
    linkTo: '/tablets',
  },
  {
    name: 'Accessories',
    src: 'img/category-accessories.png',
    linkTo: '/accessories',
  },
];

export const colorHexMap: { [key: string]: string } = {
  black: '#000000',
  gold: '#FFD700',
  yellow: '#FFFF00',
  green: '#008000',
  midnightgreen: '#145A32',
  silver: '#C0C0C0',
  spacegray: '#808080',
  red: '#FF0000',
  white: '#FFFFFF',
  purple: '#B68CB8',
  coral: '#FF7F50',
  rosegold: '#B76E79',
  midnight: '#2c3e50',
  spaceblack: '#1C1C1E',
  blue: '#0000FF',
  pink: '#FFC0CB',
  sierrablue: '#007396',
  graphite: '#383838',
  'space gray': '#808080',
  'space-gray': '#808080',
  'rose gold': '#B76E79',
  'sky-blue': '#87CEEB',
  starlight: '#DEE7E7',
};
