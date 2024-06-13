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
