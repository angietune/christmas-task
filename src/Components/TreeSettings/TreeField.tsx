/* eslint-disable global-require */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-dynamic-require */
import React, { useState } from 'react';
import { useDrop, XYCoord, useDrag } from 'react-dnd';

interface IProps {
  userBg: string;
  userTree: string;
}

interface IItem {
  id: string;
  coords: XYCoord | null;
}

const TreeField = function ({ userBg, userTree }: IProps) {
  const [toys, setToys] = useState<IItem[]>([]);
  const src = require(`../../assets/bg/${userBg}.jpg`);
  const srcTree = require(`../../assets/tree/${userTree}.png`);

  const [, drop] = useDrop(
    () => ({
      accept: 'toy',
      drop: (item: IItem, monitor) => setToys([...toys, { id: item.id, coords: monitor.getSourceClientOffset() }]),
    }),
    [toys],
  );
  const [, drag] = useDrag(
    () => ({
      type: 'toy',
    }),
    [toys],
  );
  return (
    <div
      className="tree-field"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        ref={drop}
        className="tree-on-bg"
        style={{
          backgroundImage: `url(${srcTree})`,
          backgroundPosition: 'center',
          backgroundSize: '80%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {toys.length
          ? toys.map((toy) => (
              <img
                style={{ position: 'absolute', top: `${toy.coords?.y}px`, left: `${toy.coords?.x}px` }}
                src={require(`../../assets/toys/${toy.id}.png`)}
                key={toy.coords?.x}
                ref={drag}
                id={toy.id}
                alt={toy.id}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default TreeField;
