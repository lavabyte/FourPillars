import { TianGanName, DiZhiName, Gender } from './basicTypes';
import { TianGan, mapToTianGan } from './tianGan';

class DiZhi {
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
    const stageOrder = order % 3;
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

const yinMu = new DiZhi('寅', 0, '甲', '丙', '戊');
const shenJin = new DiZhi('申', 6, '庚', '壬', '戊');
const siHuo = new DiZhi('巳', 3, '丙', '庚', '戊');
const haiShui = new DiZhi('亥', 9, '壬', '甲');

const ziShui = new DiZhi('子', 10, '癸');
const wuHuo = new DiZhi('午', 4, '丁', '己');
const maoMu = new DiZhi('卯', 1, '乙');
const youJin = new DiZhi('酉', 7, '辛');

const chenTu = new DiZhi('辰', 2, '戊', '乙', '癸');
const xuTu = new DiZhi('戌', 8, '戊', '辛', '丁');
const chouTu = new DiZhi('丑', 11, '己', '癸', '辛');
const weiTu = new DiZhi('未', 5, '己', '丁', '乙');

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
export { mapToDiZhi, DiZhi };
