import React, { ChangeEvent, useEffect, useState } from 'react';
import { DataItem } from '../../interfaces';

export interface IProps {
  dataList: DataItem[];
  filterList: (list: DataItem[]) => void;
}

const Sorting = function ({ dataList, filterList }: IProps) {
  const [value, setValue] = useState('');
  const options = [
    { label: 'from A to Z', value: '1' },
    { label: 'from Z to A', value: '2' },
    { label: 'descending year', value: '3' },
    { label: 'ascending year', value: '4' },
  ];
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    switch (value) {
      case '1':
        filterList([...dataList].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case '2':
        filterList([...dataList].sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case '3':
        filterList(
          [...dataList].sort((a, b) => {
            return a.year < b.year ? 1 : -1;
          }),
        );
        break;
      case '4':
        filterList(
          [...dataList].sort((a, b) => {
            return b.year < a.year ? 1 : -1;
          }),
        );
        break;
      default:
        filterList(dataList);
    }
  }, [value]);
  return (
    <div className="sorting">
      <h3 className="filter-title">Sorting</h3>
      <select id="data-list" value={value} onChange={handleChange}>
        <option disabled value="">
          Sorting by
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
