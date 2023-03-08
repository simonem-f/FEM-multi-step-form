import { Extra, Plan } from '../om/om';

export const PLANS: Plan[] = [
  {
    id: 1,
    label: 'Arcade',
    monthPrice: 9,
    yearPrice: 90,
    imgUrl: 'icon-arcade.svg',
  },
  {
    id: 2,
    label: 'Advanced',
    monthPrice: 12,
    yearPrice: 120,
    imgUrl: 'icon-advanced.svg',
  },
  {
    id: 3,
    label: 'Pro',
    monthPrice: 15,
    yearPrice: 150,
    imgUrl: 'icon-pro.svg',
  },
];

export const EXTRAS: Extra[] = [
  {
    service: 'Online service',
    description: 'Access to multiplayer games',
    monthPrice: 1,
    yearPrice: 10,
  },
  {
    service: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthPrice: 2,
    yearPrice: 20,
  },
  {
    service: 'Customizable Profile',
    description: 'Custom theme on your profile',
    monthPrice: 2,
    yearPrice: 20,
  },
];
