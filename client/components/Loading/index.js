import React from 'react';
import Spinner from 'react-spinkit';

const Loading = () => (
  <div className={styles.container}>
    <Spinner spinnerName="three-bounce" noFadeIn />
  </div>
);

export default Loading;

const styles = {
  container: 'tc pv6 pv6-ns',
};
