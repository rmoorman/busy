import React, { Component } from 'react';
import steemdb from 'steemdb';
import Loading from '../widgets/Loading';
import UserList from './UserList';

export default class UserFollowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    steemdb.accounts({
      account: this.props.params.name
    }, (err, result) => {
      this.setState({ users: result[0].followers.sort() });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          { this.state.users && <UserList users={this.state.users} /> }
          { !this.state.users && <Loading /> }
        </div>
      </div>
    );
  }
}
