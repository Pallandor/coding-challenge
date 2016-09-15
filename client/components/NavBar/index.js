import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav className={styles.nav}>
    <Link className={styles.leftLink} to={'/'}>Home</Link>
    <div className={styles.rightContainer}>
      <Link className={styles.rightLink} to={'/'}>TV Shows</Link>
      <Link className={styles.rightLink} to={'about'}>About</Link>
      <a href='https://www.github.com/pallandor/coding-challenge' className={styles.lastRightLink}>Github</a>
    </div>
  </nav>
);

const styles = {
  nav: 'dt w-100 border-box pa3 ph5-ns',
  rightContainer: 'dtc v-mid w-75 tr',
  leftLink: 'dtc v-mid link dim w-25 black b',
  rightLink: 'link dim dark-gray f6 f5-ns dib mr3 mr4-ns',
  lastRightLink: 'link dim dark-gray f6 f5-ns dib',
};

export default NavBar;
