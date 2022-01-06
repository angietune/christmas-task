/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

interface IProps {
  setUserFieldBg: (bg: string) => void;
}

const TreeBackground = function ({ setUserFieldBg }: IProps) {
  const bgs = [...Array(10).keys()].map((el) => {
    return (
      <li key={el} className="bg-item" onClick={() => setUserFieldBg((el + 1).toString())}>
        <img src={require(`../../assets/bg/${el + 1}.jpg`)} alt="bg" />
      </li>
    );
  });
  return (
    <div className="tree-background">
      <h3 className="tree-title">background</h3>
      <ul className="background-list">{bgs}</ul>
    </div>
  );
};

export default TreeBackground;
