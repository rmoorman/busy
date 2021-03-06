import React, { Component, PropTypes } from 'react';
import { Origin } from 'redux-tooltip';
import ProfileTooltip from './ProfileTooltip';

export default class ProfileTooltipOrigin extends Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.username !== this.props.username;
  }

  render() {
    return (
      <Origin
        name="userProfile"
        content={<ProfileTooltip username={this.props.username} store={this.context.store} />}
        delay={500}
        delayOn="both"
      >
        { this.props.children }
      </Origin>
    );
  }
}
