import React from 'react';

import ShowListItem from '../ShowListItem';
import { cleanSlugForRouting } from '../../util';

const ShowList = ({shows}) => {
  const renderShowList = showArr =>
    showArr.map((show, ind) => (
      <ShowListItem
        key={ind}
        slug={cleanSlugForRouting(show.slug)}
        imageLink={show.image && show.image.showImage || ''}
      />
    ));
  return (
    <article>
      {renderShowList(shows)}
    </article>
  );
};

ShowList.propTypes = {
  shows: React.PropTypes.array,
};

export default ShowList;
