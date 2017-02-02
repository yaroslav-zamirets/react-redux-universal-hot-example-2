import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import config from 'config';
import styles from './App.scss';

@connect(
  () => ({}),
  {
    pushState: push
  }
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    history: PropTypes.object, // eslint-disable-line
    pushState: PropTypes.func.isRequired, // eslint-disable-line
  };

  render() {
    return (
      <div className={styles.app}>
        <Helmet {...config.meta.head} />
        <div className={styles.app__container}>{this.props.children}</div>
      </div>
    );
  }
}
