/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from 'react';
import snowflake from '../../assets/svg/snowflake.svg';
import ball from '../../assets/svg/ball.svg';
import bell from '../../assets/svg/bell.svg';
import cone from '../../assets/svg/cone.svg';
import toy from '../../assets/svg/toy-d.svg';
import { DataItem } from '../../interfaces';

export interface IProps {
  dataList: DataItem[];
  filterList: (list: DataItem[]) => void;
}

const Byshape = function ({ dataList, filterList }: IProps) {
  const [shapes, setShapes] = useState<string[]>([]);
  const handleClick = (item: string) => {
    if (shapes.includes(item)) {
      setShapes(shapes.filter((el) => item !== el));
    } else {
      setShapes([...shapes, item]);
    }
  };
  useEffect(() => {
    shapes.length ? filterList(dataList.filter((item) => shapes.includes(item.shape))) : filterList(dataList);
  }, [shapes]);
  return (
    <div className="byform">
      <h3 className="filter-title">By form:</h3>
      <img
        className={shapes.includes('шар') ? 'active' : ''}
        src={ball}
        alt="ball"
        role="button"
        onKeyDown={() => handleClick('шар')}
        onClick={() => {
          handleClick('шар');
        }}
      />
      <img
        className={shapes.includes('колокольчик') ? 'active' : ''}
        src={bell}
        alt="bell"
        role="button"
        onKeyDown={() => handleClick('шар')}
        onClick={() => {
          handleClick('колокольчик');
        }}
      />
      <img
        className={shapes.includes('шишка') ? 'active' : ''}
        src={cone}
        alt="cone"
        role="button"
        onKeyDown={() => handleClick('шар')}
        onClick={() => {
          handleClick('шишка');
        }}
      />
      <img
        className={shapes.includes('снежинка') ? 'active' : ''}
        src={snowflake}
        alt="snowflake"
        role="button"
        onKeyDown={() => handleClick('шар')}
        onClick={() => {
          handleClick('снежинка');
        }}
      />
      <img
        className={shapes.includes('фигурка') ? 'active' : ''}
        src={toy}
        alt="toy"
        role="button"
        onKeyDown={() => handleClick('шар')}
        onClick={() => {
          handleClick('фигурка');
        }}
      />
    </div>
  );
};

export default Byshape;
