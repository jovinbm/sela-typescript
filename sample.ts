import { sampleInterface } from './interface';
import { constants } from './constants';
import { ISchema } from '@types';

export const sum = (a: number, b: number) => {
  return a + b;
};

const schema: ISchema = {
  title: 'I love Jovin',
  properties: constants.stuff
};
console.log(schema);
console.log(sum(1, 2));
console.log(
  sampleInterface({
    first_name: 'Sela',
    name: 'l',
    last_name: 'Kasepa'
  })
);
