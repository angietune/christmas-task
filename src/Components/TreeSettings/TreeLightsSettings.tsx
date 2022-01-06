/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';

const TreeLightsSettings = function () {
  return (
    <div className="tree-lights">
      <h3 className="tree-title">christmas lights</h3>
      <ul className="lights-options">
        <button className="lights-item multi" />
        <button className="lights-item red" />
        <button className="lights-item blue" />
        <button className="lights-item yellow" />
        <button className="lights-item green" />
      </ul>
    </div>
  );
};

export default TreeLightsSettings;
