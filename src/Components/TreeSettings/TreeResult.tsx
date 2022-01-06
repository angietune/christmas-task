/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

interface IProps {
  image?: string;
}

const TreeResult = function ({ image }: IProps) {
  const [treeList, setTreeList] = useState<string[]>([]);
  if (image) {
    setTreeList([...treeList, image]);
  }
  return (
    <div className="tree-result">
      {treeList.length
        ? treeList.map(() => {
            return (
              <li className="tree-result-item">
                <img src="../../assets/tree/1.png" alt="tree" />
              </li>
            );
          })
        : null}
    </div>
  );
};

export default TreeResult;
