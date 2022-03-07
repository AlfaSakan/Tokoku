import {images} from '../assets/images';
import {ItemDocument} from '../types/itemType';
import {randomNumber} from '../utils/randomNumber';

export const items: ItemDocument[] = [
  {
    id: randomNumber(),
    name: 'gula',
    amounts: 5,
    units: 'kg',
    description: 'blablabla',
    img: images.sugar,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: randomNumber(),
    name: 'beras',
    amounts: 10,
    units: 'kg',
    description: '',
    img: images.rice,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
];
