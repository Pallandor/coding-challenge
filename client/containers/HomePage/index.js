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
    this._viewingShowPage = this._viewingShowPage.bind(this);
    this._showsInformationWasFetched = this._showsInformationWasFetched.bind(this);
    this._createPropsToInjectForShowPage = this._createPropsToInjectForShowPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchShows();
  }

  _viewingShowPage() {
    return util.containsRoute(this.props.location.pathname, 'show/');
  }

  _showsInformationWasFetched() {
    return this.props.shows.length;
  }

  _createPropsToInjectForShowPage() {
    const currentShow = this.props.shows.find(show => show.slug === `show/${this.props.params.slug}`);
    return {
      title: currentShow.title,
      tvChannel: currentShow.tvChannel,
      description: currentShow.description,
      imageLink: currentShow.image && currentShow.image.showImage,
    };
  }

  _renderHomePage() {
    const { children, shows } = this.props;
    let propsToInject = { shows };
    if (this._viewingShowPage()) {
      if (!this._showsInformationWasFetched()) {
        this.props.fetchShows();
      } else {
        propsToInject = this._createPropsToInjectForShowPage();
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
