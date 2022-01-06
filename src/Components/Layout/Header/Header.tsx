/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import tree from '../../../assets/svg/tree.svg';
import './Header.scss';

export interface IProps {
  children: ReactElement;
}

const Header = function ({ children }: IProps) {
  return (
    <header className="header">
      <div className="left-wrapper">
        <img src={tree} alt="tree" />
        <nav className="nav">
          <Link to="/toys">
            <li className="nav-item">toys</li>
          </Link>
          <Link to="/tree">
            <li className="nav-item">tree</li>
          </Link>
        </nav>
      </div>
      {children}
    </header>
  );
};

export default Header;
