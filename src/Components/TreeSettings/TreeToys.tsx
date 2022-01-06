/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { DataItem } from '../../interfaces';
import Toy from './Toy';

interface IProps {
  list: DataItem[];
}

const TreeToys = function ({ list }: IProps) {
  return (
    <div className="selected-toys-list">
      {list.map((item: DataItem) => (
        <Toy listItem={item} key={`${item.num}toy`} id={item.num} />
      ))}
    </div>
  );
};

export default TreeToys;
