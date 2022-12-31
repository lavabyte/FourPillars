type Gender = '阴' | '阳';
type FiveElement = '金' | '木' | '水' | '火' | '土';
type TianGanName =
  | '甲'
  | '乙'
  | '丙'
  | '丁'
  | '戊'
  | '己'
  | '庚'
  | '辛'
  | '壬'
  | '癸';
type ElementRelation = '生我' | '克我' | '同我' | '我生' | '我克';

// 十神

type God = {
  fullName: string;
  shortName: string;
};

const bi: God = {
  fullName: '比肩',
  shortName: '比',
};

const jie: God = {
  fullName: '劫财',
  shortName: '劫',
};

const shi: God = {
  fullName: '食神',
  shortName: '食',
};

const shang: God = {
  fullName: '伤官',
  shortName: '伤',
};

const cai: God = {
  fullName: '正财',
  shortName: '财',
};

const pianCai: God = {
  fullName: '偏财',
  shortName: '才',
};

const yin: God = {
  fullName: '正印',
  shortName: '印',
};

const xiao: God = {
  fullName: '枭印',
  shortName: '枭',
};

const sha: God = {
  fullName: '七杀',
  shortName: '杀',
};

// 天干

const guan: God = {
  fullName: '正官',
  shortName: '官',
};

type TianGan = {
  element: FiveElement;
  gender: Gender;
  name: TianGanName;
  order: number;
};

const jia: TianGan = {
  element: '木',
  gender: '阳',
  name: '甲',
  order: 0,
};

const yi: TianGan = {
  element: '木',
  gender: '阴',
  name: '乙',
  order: 1,
};

const bing: TianGan = {
  element: '火',
  gender: '阳',
  name: '丙',
  order: 2,
};

const ding: TianGan = {
  element: '火',
  gender: '阴',
  name: '丁',
  order: 3,
};

const wu: TianGan = {
  element: '土',
  gender: '阳',
  name: '戊',
  order: 4,
};

const ji: TianGan = {
  element: '土',
  gender: '阴',
  name: '己',
  order: 5,
};

const geng: TianGan = {
  element: '金',
  gender: '阳',
  name: '庚',
  order: 6,
};

const xin: TianGan = {
  element: '金',
  gender: '阴',
  name: '辛',
  order: 7,
};

const ren: TianGan = {
  element: '水',
  gender: '阳',
  name: '壬',
  order: 8,
};

const gui: TianGan = {
  element: '水',
  gender: '阴',
  name: '癸',
  order: 9,
};

function elementOrder(gan: TianGan) {
  if (gan.gender == '阴') {
    return (gan.order - 1) / 2;
  } else {
    return gan.order / 2;
  }
}

function elementRelation(otherGan: TianGan, selfGan: TianGan): ElementRelation {
  let orderOther = elementOrder(otherGan);
  let orderSelf = elementOrder(selfGan);
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

function godRelation(otherGan: TianGan, selfGan: TianGan): God {
  let eleRelation = elementRelation(otherGan, selfGan);
  if (otherGan.gender == selfGan.gender) {
    switch (eleRelation) {
      case '同我':
        return bi;
      case '我生':
        return shi;
      case '我克':
        return pianCai;
      case '克我':
        return sha;
      case '生我':
        return xiao;
    }
  } else {
    switch (eleRelation) {
      case '同我':
        return jie;
      case '我生':
        return shang;
      case '我克':
        return cai;
      case '克我':
        return guan;
      case '生我':
        return yin;
    }
  }
}

function standardTianGan(gan: TianGanName): TianGan {
  switch (gan) {
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

class TenGods {
  god: God;
  gan: TianGan;
  taiChi: TianGan;

  constructor(nameOfGan: TianGanName, nameOfTaiChi: TianGanName) {
    this.gan = standardTianGan(nameOfGan);
    this.taiChi = standardTianGan(nameOfTaiChi);
    this.god = godRelation(this.taiChi, this.gan);
  }

  godFullName() {
    return this.god.fullName;
  }

  godShortName() {
    return this.god.shortName;
  }
}

export { TenGods };
