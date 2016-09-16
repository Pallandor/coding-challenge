import React from 'react';

import ShowListItem from '../ShowListItem';

const ShowList = ({shows}) => {
  const renderShowList = showArr =>
    showArr.map((show, ind) => (
      <ShowListItem
        key={ind}
        show={show}
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
