/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './Toys.scss';
import Filters from '../../Filters/Filters';
import { DataItem } from '../../../interfaces';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Search from '../../Search';
import SelectedToys from '../../SelectedToys';

const data: DataItem[] = require('../../../data.json');

const Toys = function () {
  const [filteredList, setFilteredList] = useState<DataItem[]>(data);
  const dataList: DataItem[] = data;
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelected = (item: string) => {
    return selected.includes(item)
      ? setSelected(selected.filter((el) => el !== item))
      : selected.length > 19
      ? alert('Извините, все слоты заполнены')
      : setSelected([...selected, item]);
  };

  const filterList = (list: DataItem[]) => {
    setFilteredList(list);
  };

  return (
    <div className="toys-bg">
      <Header>
        <div className="right-wrapper">
          <Search dataList={dataList} filterList={filterList} />
          <SelectedToys selectedData={selected} />
        </div>
      </Header>
      <Filters
        dataList={dataList}
        filteredList={filteredList}
        filterList={filterList}
        handleSelected={handleSelected}
      />
      <Footer />
    </div>
  );
};

export default Toys;
