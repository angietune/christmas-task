import React, { ChangeEvent, useState } from 'react';
import { DataItem } from '../interfaces';

interface IProps {
  filterList: (list: DataItem[]) => void;
  dataList: DataItem[];
}

const Search = function ({ filterList, dataList }: IProps) {
  const [search, setSearch] = useState('');
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    filterList(dataList.filter((item: DataItem) => item.name.toLowerCase().includes(search.toLowerCase())));
  };
  return (
    <div className="search-bar">
      <input className="search-input" type="text" placeholder="search" onChange={handleSearch} />
    </div>
  );
};

export default Search;
