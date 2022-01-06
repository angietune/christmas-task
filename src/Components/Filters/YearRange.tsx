import React, { useEffect, useState } from 'react';
import Nouislider from 'nouislider-react';
import { DataItem } from '../../interfaces';

export interface IProps {
  dataList: DataItem[];
  filterList: (list: DataItem[]) => void;
}

const YearRange = function ({ dataList, filterList }: IProps) {
  const [minValue, setMinValue] = useState(1940);
  const [maxValue, setMaxValue] = useState(2020);

  const handleValues = (values: string[]) => {
    setMinValue(parseInt(values[0], 10));
    setMaxValue(parseInt(values[1], 10));
  };
  useEffect(() => {
    filterList(
      dataList.filter((item) => Number(item.year) >= minValue && Number(item.year) <= maxValue),
    );
  }, [maxValue, minValue]);
  return (
    <div className="year">
      <h3 className="filter-title">Year range </h3>
      <div className="range-wrapper">
        <span>{minValue}</span>
        <Nouislider
          range={{ min: 1940, max: 2020 }}
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

export default YearRange;
