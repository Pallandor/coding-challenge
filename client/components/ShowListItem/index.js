import React from 'react';
import { Link } from 'react-router';

const ShowListItem = ({slug, imageLink}) => (
  <Link className={styles.link} to={`show/${slug}`}>
    <div className={styles.image} style={styles.createBackgroundStylesObj(imageLink)} />
  </Link>
);

const styles = {
  link: 'fl w-50 w-25-l link overflow-hidden',
  image: 'vh-25 grow dim',
  createBackgroundStylesObj: (imageLink) => ({
    background: `url(${imageLink || defaults.imageLink}) no-repeat center center`,
    backgroundSize: 'cover',
  }),
};

const defaults = {
  imageLink: 'http://mi9.com.au/img/home/9Now_rotating.jpg',
};

ShowListItem.propTypes = {
  slug: React.PropTypes.string,
  imageLink: React.PropTypes.string,
};

export default ShowListItem;
