import React from 'react';

const ShowPage = ({title, tvChannel, description, imageLink}) => (
  <article className={styles.page}>
    <header className={styles.header}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <h2 className={styles.channelTitle}>Channel: {tvChannel}</h2>
      <p className={styles.descriptionTitle}>Show Description</p>
      <p className={styles.description}>{description}</p>
    </header>
    <div className={styles.imgContainer}>
      <img src={imageLink} className={styles.img} alt={`Photo of ${title}`} />
    </div>
  </article>
);

const styles = {
  page: 'cf ph3 ph5-ns pv4',
  header: 'fn fl-ns w-50-ns pr4-ns',
  mainTitle: 'f2 lh-title fw9 mb3 mt0 pt3 bt bw2',
  channelTitle: 'f3 mid-gray lh-title',
  descriptionTitle: 'f6 ttu tracked gray',
  description: 'f5 lh-copy measure mt0-ns',
  imgContainer: 'fn fl-ns w-50-ns',
  img: 'w-100 f5 measure',
};

ShowPage.defaultProps = {
  title: 'Title not found',
  imageLink: 'http://mi9.com.au/img/home/9Now_rotating.jpg',
  tvChannel: 'Cannot find TV channel',
  description: 'No description found for this TV show.',
};

ShowPage.propTypes = {
  title: React.PropTypes.string,
  tvChannel: React.PropTypes.string,
  description: React.PropTypes.string,
  imageLink: React.PropTypes.string,
};

export default ShowPage;
