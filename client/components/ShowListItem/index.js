import React from 'react';
import { Link } from 'react-router';

// const ShowListItem = ({show}) =>  (
//   <a href={show.link || defaults.link} className={styles.link}>
//     <div className={styles.image} style={styles.createBackgroundStylesObj(show)} />
//   </a>
// );

const ShowListItem = ({slug, imageLink}) => (
  <Link className={styles.link} to={`show/${slug}`}>
    <div className={styles.image} style={styles.createBackgroundStylesObj(imageLink)} />
  </Link>
);

const styles = {
  link: 'fl w-50 w-25-l link overflow-hidden',
  image: 'vh-25 grow',
  createBackgroundStylesObj: (imageLink) => ({
    background: `url(${imageLink || defaults.image}) no-repeat center center`,
    backgroundSize: 'cover',
  }),
};

const defaults = {
  image: 'http://mi9.com.au/img/home/9Now_rotating.jpg',
};

ShowListItem.propTypes = {
  slug: React.PropTypes.string,
  imageLink: React.PropTypes.string,
};

// ShowListItem.propTypes = {
//   show: React.PropTypes.shape({
//     link: React.PropTypes.string,
//     image: React.PropTypes.shape({
//       showImage: React.PropTypes.string,
//     }),
//   }),
// };

export default ShowListItem;
