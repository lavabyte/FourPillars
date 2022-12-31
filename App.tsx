import * as React from 'react';
import './style.css';
import { TenGods } from './foundamental/tenGods';
import { mapToDiZhi } from './foundamental/diZhi';

function test(text: string) {
  return <p>{text}</p>;
}

export default function App() {
  return (
    <div>
      {['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑']
        .map(mapToDiZhi)
        .map((item) => test(item))}
    </div>
  );
}
