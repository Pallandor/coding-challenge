import React from 'react';
import { injectReactChildrenWithProps } from '../../util';

const BasePage = ({title, children, paragraphStyles}) => (
  <article className={styles.container}>
    <h1>{title}</h1>
    {injectReactChildrenWithProps(children, { className: paragraphStyles || styles.paragraph })}
  </article>
);

const styles = {
  container: 'pa3 pa5-ns',
  paragraph: 'measure lh-copy',
};

BasePage.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.any,
  paragraphStyles: React.PropTypes.string,
};

export default BasePage;
