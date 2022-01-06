/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import './TreeSettings.scss';

interface IProps {
  setUserFieldTree: (tree: string) => void;
}

const TreeList = function ({ setUserFieldTree }: IProps) {
  const trees = [...Array(6).keys()].map((el) => {
    return (
      <li key={el} className="tree-item" onClick={() => setUserFieldTree((el + 1).toString())}>
        <img src={require(`../../assets/tree/${el + 1}.png`)} alt="tree" />
      </li>
    );
  });
  return (
    <div className="tree-tree">
      <h3 className="tree-title">tree</h3>
      <ul className="tree-list">{trees}</ul>
    </div>
  );
};

export default TreeList;
