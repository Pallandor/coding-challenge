import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowList from '../../components/ShowList';
import { fetchShows } from '../../actions/shows';
import { getShows } from '../../reducers/shows';
import { getShowsLoadingState } from '../../reducers/ui/shows';
import Loading from '../../components/Loading';

const mapStoreToProps = store => ({
  shows: getShows(store),
  isLoadingShows: getShowsLoadingState(store),
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(fetchShows()),
});

class HomePage extends Component {
  constructor() {
    super();
    this._renderHomePage = this._renderHomePage.bind(this);
  }

  componentDidMount() {
    this.props.fetchShows();
  }

  _renderHomePage() {
    return (
      <div>
        <ShowList shows={this.props.shows} />
      </div>
    );
  }

  render() {
    return this.props.isLoadingShows ? <Loading /> : this._renderHomePage();
  }
}

HomePage.propTypes = {
  shows: React.PropTypes.array,
  isLoadingShows: React.PropTypes.bool,
  fetchShows: React.PropTypes.func,
};

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);
