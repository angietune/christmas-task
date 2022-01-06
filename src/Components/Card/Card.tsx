/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Card.scss';

interface IProps {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  handleSelected: (item: string) => void;
}

const Card = function ({
  num, name, count, year, shape, color, size, favorite, handleSelected,
}: IProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`card ${selected ? 'selected' : ''}`}
      onClick={() => {
        handleSelected(num);
        setSelected(!selected);
      }}
    >
      <h2 className="title">{name}</h2>
      <div className="wrapper">
        <img src={require(`../../assets/toys/${num}.png`)} alt="toy" />
        <ul className="info">
          <li className="info-item">
            Amount:
            {count}
          </li>
          <li className="info-item">
            Year:
            {year}
          </li>
          <li className="info-item">
            Shape:
            {shape}
          </li>
          <li className="info-item">
            Color:
            {color}
          </li>
          <li className="info-item">
            Size:
            {size}
          </li>
          <li className="info-item">
            Favorite:
            {favorite ? 'yes' : 'no'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
