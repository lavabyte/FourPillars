import { godRelation } from './tenGods';
import { mapToDiZhi } from './diZhi';
import { mapToTianGan } from './tianGan';

type input = {
  fourPillars: string;
  sex: 'female' | 'male';
};

let s: input = {
  fourPillars: '辛丑 辛亥 癸亥 癸亥',
  sex: 'male',
};

let ganChar = s.fourPillars
  .split(' ')
  .map((item) => item[0])
  .map(mapToTianGan);
  
let zhiChar = s.fourPillars
  .split(' ')
  .map((item) => item[1])
  .map(mapToDiZhi);

console.log(ganChar);
console.log('asdf');
