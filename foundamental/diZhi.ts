import { TianGanName, DiZhiName, Gender } from './basicTypes';
import { TianGan, mapToTianGan } from './tianGan';

class Dizhi {
  season: string;
  seasonOrder: number;
  order: number;
  name: DiZhiName;
  element: string;
  gender: Gender;
  hidden: TianGan[];

  setSeason(order: number) {
    const fourSeason = ['春', '夏', '秋', '冬'];
    const threeStage = ['孟', '仲', '季'];
    this.seasonOrder = Math.floor(order / 3);
    const stageOrder = (order + 1) % 3;
    return threeStage[stageOrder] + fourSeason[this.seasonOrder];
  }

  setElement(order: number) {
    const fourElement = ['木', '火', '金', '水'];
    if ((order + 1) % 3 == 0) {
      return '土';
    } else {
      return fourElement[this.seasonOrder];
    }
  }

  setHidden(tianGan: TianGanName[]) {
    return tianGan.map(mapToTianGan);
  }

  constructor(name: DiZhiName, order: number, ...hidden: TianGanName[]) {
    this.name = name;
    this.order = order;
    this.season = this.setSeason(this.order);
    this.element = this.setElement(this.order);
    this.hidden = this.setHidden(hidden);
  }
}

const yinMu = new Dizhi('寅', 0, '甲', '丙', '戊');
const shenJin = new Dizhi('申', 6, '庚', '壬', '戊');
const siHuo = new Dizhi('巳', 3, '丙', '庚', '戊');
const haiShui = new Dizhi('亥', 9, '壬', '甲');

const ziShui = new Dizhi('子', 10, '癸');
const wuHuo = new Dizhi('午', 4, '丁', '己');
const maoMu = new Dizhi('卯', 1, '乙');
const youJin = new Dizhi('酉', 7, '辛');

const chenTu = new Dizhi('辰', 2, '戊', '乙', '癸');
const xuTu = new Dizhi('戌', 8, '戊', '辛', '丁');
const chouTu = new Dizhi('丑', 11, '己', '癸', '辛');
const weiTu = new Dizhi('未', 5, '己', '丁', '乙');

function mapToDiZhi(name: DiZhiName) {
  switch (name) {
    case '寅':
      return yinMu;
    case '申':
      return shenJin;
    case '巳':
      return siHuo;
    case '亥':
      return haiShui;
    case '子':
      return ziShui;
    case '午':
      return wuHuo;
    case '卯':
      return maoMu;
    case '酉':
      return youJin;
    case '辰':
      return chenTu;
    case '戌':
      return xuTu;
    case '丑':
      return chouTu;
    case '未':
      return weiTu;
  }
}
export { mapToDiZhi };
