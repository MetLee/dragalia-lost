import React from 'react';
import { connect } from 'react-redux';
import { loadHalidom } from 'actions';
import { getFilteredHalidomKey, removeState, saveState, useEvent } from 'utils';
import { BtnPanel } from 'components';
import HalidomItem from './HalidomItem';

const btns = ['del', 'refresh', 'save'];

function Halidom({ halidom, keyList, loadHalidom }) {
  const onClick = useEvent(e => {
    switch (e.currentTarget.name) {
      case 'del':
        removeState('halidom');
        break;
      case 'refresh':
        loadHalidom();
        break;
      case 'save':
        saveState('halidom', halidom);
        break;
      default:
        break;
    }
  });

  if (keyList === null) return null;

  return (
    <>
      <BtnPanel btns={btns} onClick={onClick} />
      <div className="list">
        {keyList.map(key => (
          <HalidomItem key={key} halidomKey={key} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    halidom: state.halidom,
    keyList: getFilteredHalidomKey(state),
  };
};

const mapDispatchToProps = { loadHalidom };

export default connect(mapStateToProps, mapDispatchToProps)(Halidom);
