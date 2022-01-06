import React, { useEffect, useState } from 'react';
import Nouislider from 'nouislider-react';
import { DataItem } from '../../interfaces';

export interface IProps {
  dataList: DataItem[];
  filterList: (list: DataItem[]) => void;
}

const AmountRange = function ({ dataList, filterList }: IProps) {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(12);

  const handleValues = (values: any) => {
    setMinValue(parseInt(values[0], 10));
    setMaxValue(parseInt(values[1], 10));
  };
  useEffect(() => {
    filterList(
      dataList.filter((item) => Number(item.count) >= minValue && Number(item.count) <= maxValue),
    );
  }, [maxValue, minValue]);
  return (
    <div className="amount">
      <h3 className="filter-title">Amount range</h3>
      <div className="range-wrapper">
        <span>{minValue}</span>
        <Nouislider
          range={{ min: 1, max: 12 }}
          start={[minValue, maxValue]}
          step={1}
          behaviour="drag"
          connect
          onChange={handleValues}
        />
        <span>{maxValue}</span>
      </div>
    </div>
  );
};

export default AmountRange;
