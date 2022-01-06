/* eslint-disable import/extensions */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DataItem } from '../../../interfaces';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import SelectedToys from '../../SelectedToys';
import TreeBackground from '../../TreeSettings/TreeBackground';
import TreeField from '../../TreeSettings/TreeField';
import TreeLightsSettings from '../../TreeSettings/TreeLightsSettings';
import TreeList from '../../TreeSettings/TreeList';
import TreeResult from '../../TreeSettings/TreeResult';
import TreeToys from '../../TreeSettings/TreeToys';
import './Tree.scss';
import datajs from '../../../data.js';

const Tree = function () {
  const [userBg, setUserBg] = useState('1');
  const [userTree, setUserTree] = useState('1');
  // const [data, setData] = useState<DataItem[]>(datajs);

  // const src = require('../../../data.json');

  const selectedData = Array.from({ length: 20 }, (v, i) => (i + 1).toString());

  // useEffect(() => {
  //   fetch(src).then(async (res) => {
  //     try {
  //       await res.json().then((item) => setData(item));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // }, [selectedData]);

  const list = datajs.filter((el: DataItem) => selectedData.includes(el.num));

  const setUserFieldBg = (bg: string) => {
    setUserBg(bg);
  };
  const setUserFieldTree = (tree: string) => {
    setUserTree(tree);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="tree-bg">
        <Header>
          <div className="right-wrapper">
            <SelectedToys selectedData={selectedData} />
          </div>
        </Header>
        <div className="tree">
          <div className="settings-wrapper">
            <TreeList setUserFieldTree={setUserFieldTree} />
            <TreeBackground setUserFieldBg={setUserFieldBg} />
            <TreeLightsSettings />
          </div>
          <TreeField userBg={userBg} userTree={userTree} />
          <div className="result-wrapper">
            <TreeToys list={list} />
            <TreeResult />
          </div>
        </div>
        <Footer />
      </div>
    </DndProvider>
  );
};

export default Tree;
