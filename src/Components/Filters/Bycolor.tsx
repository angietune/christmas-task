/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { DataItem } from '../../interfaces';
import ColorBtn from '../ColorBtn';

export interface IProps {
  dataList: DataItem[];
  filterList: (list: DataItem[]) => void;
}

const Bycolor = function ({ dataList, filterList }: IProps) {

  const [colors, setColors] = useState<string[]>([]);

  const handleClick = (item: string) => {
    if (colors.includes(item)) {
      setColors(colors.filter((el) => item !== el));
    } else {
      setColors([...colors, item]);
    }
  };

  useEffect(() => {
    colors.length ? filterList(dataList.filter((item) => colors.includes(item.color))) : filterList(dataList);
  }, [colors]);

  return (
    <div className="bycolor">
      <h3 className="filter-title">By color:</h3>
      <ColorBtn color="белый" colors={colors} handleClick={handleClick}/>
      <ColorBtn color="желтый" colors={colors} handleClick={handleClick}/>
      <ColorBtn color="красный" colors={colors} handleClick={handleClick}/>
      <ColorBtn color="синий" colors={colors} handleClick={handleClick}/>
      <ColorBtn color="зелёный" colors={colors} handleClick={handleClick}/>
    </div>
  );
};

export default Bycolor;
