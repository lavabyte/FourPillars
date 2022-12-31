import { TianGanName, Gender, FiveElement } from './basicTypes';

class TianGan {
  element: FiveElement;
  gender: Gender;
  order: number;
  name: TianGanName;

  constructor(name: TianGanName, order: number) {
    this.name = name;
    this.order = order;
    this.gender = order % 2 == 0 ? '阳' : '阴';

    const tianGanElements: FiveElement[] = ['木', '火', '土', '金', '水'];
    const elementOrder = Math.floor(this.order / 2);
    this.element = tianGanElements[elementOrder];
  }
}

const jia = new TianGan('甲', 0);
const yi = new TianGan('乙', 1);
const bing = new TianGan('丙', 2);
const ding = new TianGan('丁', 3);
const wu = new TianGan('戊', 4);
const ji = new TianGan('己', 5);
const geng = new TianGan('庚', 6);
const xin = new TianGan('辛', 7);
const ren = new TianGan('壬', 8);
const gui = new TianGan('癸', 9);

function mapToTianGan(cnName: TianGanName): TianGan {
  switch (cnName) {
    case '甲':
      return jia;
    case '乙':
      return yi;
    case '丙':
      return bing;
    case '丁':
      return ding;
    case '戊':
      return wu;
    case '己':
      return ji;
    case '庚':
      return geng;
    case '辛':
      return xin;
    case '壬':
      return ren;
    case '癸':
      return gui;
  }
}

export { TianGan, mapToTianGan };
