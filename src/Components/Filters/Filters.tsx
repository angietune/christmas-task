import React, { useEffect, useState } from 'react';
import './Filters.scss';
import Bycolor from './Bycolor';
import Byshape from './Byshape';
import Sorting from './Sorting';
import Bysize from './Bysize';
import AmountRange from './AmountRange';
import YearRange from './YearRange';
import Field from '../Field/Field';
import { DataItem } from '../../interfaces';

interface IProps {
  dataList: DataItem[];
  filterList: (list: DataItem[]) => void;
  filteredList: DataItem[];
  handleSelected: (item: string) => void;
}

const Filters = function ({
  dataList, filteredList, filterList, handleSelected,
}: IProps) {
  const [checked, setChecked] = useState(false);

  const handleReset = () => {
    filterList(dataList);
  };

  useEffect(() => {
    return checked === false
      ? filterList(dataList)
      : filterList(dataList.filter((item: DataItem) => item.favorite));
  }, [checked]);

  return (
    <>
      <div className="filters">
        <div className="left-wrapper">
          <Byshape dataList={dataList} filterList={filterList} />
          <Bycolor dataList={dataList} filterList={filterList} />
          <Bysize dataList={dataList} filterList={filterList} />
          <div className="favorite">
            <h3 className="filter-title">Favorite</h3>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
          </div>
        </div>
        <div className="right-wrapper">
          <Sorting dataList={dataList} filterList={filterList} />
          <AmountRange dataList={dataList} filterList={filterList} />
          <YearRange dataList={dataList} filterList={filterList} />
          <button type="button" className="filters-reset" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
      <Field dataList={filteredList} handleSelected={handleSelected} />
    </>
  );
};

export default Filters;
