import React from 'react';

interface IProps {
  selectedData: string[];
}

const SelectedToys = function ({ selectedData }: IProps) {
  const favorite = selectedData.length;
  return <div className="favorite-count">{favorite}</div>;
};

export default SelectedToys;
