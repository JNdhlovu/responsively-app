// @flow
import React, {useState} from 'react';
import WebViewContainer from '../../containers/WebViewContainer';
import cx from 'classnames';
import Spinner from '../Spinner';
import TickAnimation from '../icons/TickAnimation';

import styles from './style.module.css';

function Renderer(props) {
  const [loading, setLoading] = useState(true);
  console.log('props.hidden', props.hidden);
  return (
    <div className={cx(styles.container, {[styles.hidden]: props.hidden})}>
      <div className={styles.titleContainer}>
        <span className={cx(styles.deviceTitle)}>{props.device.name}</span>
        {loading && <Spinner size={16} />}
      </div>
      <div className={cx(styles.deviceWrapper)}>
        <WebViewContainer
          device={props.device}
          transmitNavigatorStatus={props.transmitNavigatorStatus}
          onLoadingStateChange={setLoading}
        />
      </div>
    </div>
  );
}

export default Renderer;
