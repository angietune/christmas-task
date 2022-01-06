/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { useDrag } from 'react-dnd';
import { DataItem } from '../../interfaces';

interface IProps {
  listItem: DataItem;
  id: string;
}

const Toy = function ({ listItem, id }: IProps) {
  const src = require(`../../assets/toys/${listItem.num}.png`);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'toy',
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id],
  );
  return (
    <li className="toys-item" key={`${listItem.num}tree-toy`}>
      <img src={src} alt="toy" ref={drag} id={id} style={{ opacity: isDragging ? 0.5 : 1 }} />
      <div className="count-toy">{listItem.count}</div>
    </li>
  );
};

export default Toy;
