import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { DataItem } from '../../interfaces';
import './Field.scss';

export interface IProps {
  dataList: DataItem[];
  handleSelected: (item: string) => void;
}

const Field = function ({ dataList, handleSelected }: IProps) {
  const [list, setList] = useState(dataList);

  useEffect(() => {
    setList(dataList);
  }, [dataList]);
  return (
    <div className="field">
      {list.length ? (
        list.map((element) => (
          <Card
            handleSelected={() => handleSelected(element.num)}
            key={element.num}
            num={element.num}
            name={element.name}
            count={element.count}
            year={element.year}
            shape={element.shape}
            color={element.color}
            size={element.size}
            favorite={element.favorite}
          />
        ))
      ) : (
        <h3 className="sub-title">There is nothing to display</h3>
      )}
    </div>
  );
};

export default Field;
