type Gender = '阴' | '阳';
type FiveElement = '金' | '木' | '水' | '火' | '土';
type ElementRelation = '生我' | '克我' | '同我' | '我生' | '我克';

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

type DiZhiName =
  | '寅'
  | '卯'
  | '辰'
  | '巳'
  | '午'
  | '未'
  | '申'
  | '酉'
  | '戌'
  | '亥'
  | '子'
  | '丑';

export { TianGanName, DiZhiName, Gender, ElementRelation, FiveElement };
