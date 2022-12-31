import { TianGanName, ElementRelation } from './basicTypes';
import { TianGan } from './tianGan';
import { DiZhi } from './diZhi';

type God = {
  fullName: string;
  shortName: string;
};

const biJian: God = {
  fullName: '比肩',
  shortName: '比',
};

const jieCai: God = {
  fullName: '劫财',
  shortName: '劫',
};

const shiShen: God = {
  fullName: '食神',
  shortName: '食',
};

const shangGuan: God = {
  fullName: '伤官',
  shortName: '伤',
};

const zhengCai: God = {
  fullName: '正财',
  shortName: '财',
};

const pianCai: God = {
  fullName: '偏财',
  shortName: '才',
};

const zhengYin: God = {
  fullName: '正印',
  shortName: '印',
};

const xiaoYin: God = {
  fullName: '枭印',
  shortName: '枭',
};

const qiSha: God = {
  fullName: '七杀',
  shortName: '杀',
};

const zhengGuan: God = {
  fullName: '正官',
  shortName: '官',
};

function elementOrder(gan: TianGan) {
  if (gan.gender == '阴') {
    return (gan.order - 1) / 2;
  } else {
    return gan.order / 2;
  }
}

function elementRelation(otherGan: TianGan, riZhu: TianGan): ElementRelation {
  let orderOther = elementOrder(otherGan);
  let orderSelf = elementOrder(riZhu);
  let diff = orderOther - orderSelf;
  if (orderSelf < orderOther) {
    switch (diff) {
      case 1:
        return '我生';
      case 2:
        return '我克';
      case 3:
        return '克我';
      case 4:
        return '生我';
    }
  } else if (orderSelf == orderOther) {
    return '同我';
  } else {
    switch (diff) {
      case -1:
        return '生我';
      case -2:
        return '克我';
      case -3:
        return '我克';
      case -4:
        return '我生';
    }
  }
}

function godRelation(otherGan: TianGan, riZhu: TianGan): God {
  let eleRelation = elementRelation(otherGan, riZhu);
  if (otherGan.gender == riZhu.gender) {
    switch (eleRelation) {
      case '同我':
        return biJian;
      case '我生':
        return shiShen;
      case '我克':
        return pianCai;
      case '克我':
        return qiSha;
      case '生我':
        return xiaoYin;
    }
  } else {
    switch (eleRelation) {
      case '同我':
        return jieCai;
      case '我生':
        return shangGuan;
      case '我克':
        return zhengCai;
      case '克我':
        return zhengGuan;
      case '生我':
        return zhengYin;
    }
  }
}

export { godRelation };
