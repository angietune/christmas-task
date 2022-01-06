/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from 'react';
import ball from '../../assets/svg/ball.svg';
import { DataItem } from '../../interfaces';

export interface IProps {
  dataList: DataItem[];
  filterList: (list: DataItem[]) => void;
}
const Bysize = function ({ dataList, filterList }: IProps) {
  const [sizes, setSizes] = useState<string[]>([]);
  const handleClick = (item: string) => {
    if (sizes.includes(item)) {
      setSizes(sizes.filter((el) => item !== el));
    } else {
      setSizes([...sizes, item]);
    }
  };
  useEffect(() => {
    sizes.length ? filterList(dataList.filter((item) => sizes.includes(item.size))) : filterList(dataList);
  }, [sizes]);
  return (
    <div className="bysize">
      <h3 className="filter-title">By size:</h3>
      <img
        className={`big ${sizes.includes('большой') ? 'active' : ''}`}
        src={ball}
        alt="ball"
        role="button"
        onKeyDown={() => handleClick('большой')}
        onClick={() => {
          handleClick('большой');
        }}
      />
      <img
        className={`medium ${sizes.includes('средний') ? 'active' : ''}`}
        src={ball}
        alt="ball"
        role="button"
        onKeyDown={() => handleClick('средний')}
        onClick={() => {
          handleClick('средний');
        }}
      />
      <img
        className={`small ${sizes.includes('малый') ? 'active' : ''}`}
        src={ball}
        alt="ball"
        role="button"
        onKeyDown={() => handleClick('малый')}
        onClick={() => {
          handleClick('малый');
        }}
      />
    </div>
  );
};

export default Bysize;
