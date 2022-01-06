/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './StartPage.scss';
import { Link } from 'react-router-dom';

import game from '../../../assets/svg/game.svg';

const StartPage = function () {
  return (
    <div className="start-bg">
      <Link to="/toys">
        <div className="start-title">
          <div className="border" />
          <img src={game} alt="game" />
        </div>
      </Link>
    </div>
  );
};

export default StartPage;
