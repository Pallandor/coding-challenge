import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchShows } from '../../actions/shows';
import { getShows } from '../../reducers/shows';
import { getShowsLoadingState } from '../../reducers/ui/shows';
import Loading from '../../components/Loading';
import * as util from '../../util';

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
    const { children, shows } = this.props;
    let propsToInject = { shows };
    if (util.containsRoute(this.props.location.pathname, 'show/')) {
      if (!this.props.shows.length) {
        this.props.fetchShows();
      } else {
        const currentShow = this.props.shows.find(show => show.slug === `show/${this.props.params.slug}`);
        propsToInject = {
          title: currentShow.title,
          tvChannel: currentShow.tvChannel,
          description: currentShow.description,
          imageLink: currentShow.image && currentShow.image.showImage,
        };
      }
    }
    return (
      <div>
        {util.injectReactChildrenWithProps(children, propsToInject)}
      </div>
    );
  }

  render() {
    return this.props.isLoadingShows ? <Loading /> : this._renderHomePage();
  }
}

HomePage.propTypes = {
  location: React.PropTypes.object,
  children: React.PropTypes.node,
  params: React.PropTypes.object,
  shows: React.PropTypes.array,
  isLoadingShows: React.PropTypes.bool,
  fetchShows: React.PropTypes.func,
};

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);
