import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessagesList from './MessagesList';
import NewChannelEntry from './NewChannelEntry';
import store, { fetchMessages, fetchChannels } from '../store';

export default class Main extends Component {

  componentDidMount () {
    const messagesThunk = fetchMessages();
    const channelThunk = fetchChannels();
    store.dispatch(messagesThunk);
    store.dispatch(channelThunk);
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route path="/new-channel" component={NewChannelEntry} />
            <Route path="/channels/:channelId" component={MessagesList} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}
