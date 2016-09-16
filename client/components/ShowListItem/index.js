import React from 'react';

const ShowListItem = ({show}) =>  (
  <a href={show.link || defaults.link} className={styles.link}>
    <div className={styles.image} style={styles.createBackgroundStylesObj(show)} />
  </a>
);

const styles = {
  link: 'fl w-50 w-25-l link overflow-hidden',
  image: 'vh-25 grow',
  createBackgroundStylesObj: (show) => ({
    background: `url(${show.image && show.image.showImage || defaults.image}) no-repeat center center`,
    backgroundSize: 'cover',
  }),
};

const defaults = {
  link: 'https://www.9now.com.au/lovingthetechstack',
  image: 'http://mi9.com.au/img/home/9Now_rotating.jpg',
};

ShowListItem.propTypes = {
  show: React.PropTypes.shape({
    link: React.PropTypes.string,
    image: React.PropTypes.shape({
      showImage: React.PropTypes.string,
    }),
  }),
};

export default ShowListItem;
