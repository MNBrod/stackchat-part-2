import React, { Component} from 'react';
import { NavLink, withRouter  } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
    channels: state.channels,
    messages: state.messages
  };
};


function ChannelList(props) {
  return (
    <ul>
      {
        props.channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span># {channel.name}</span>
                <span className="badge">{props.messages.filter(message => message.channelId === channel.id).length}</span>
              </NavLink>
            </li>
          );
        })
      }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
const channelListContainer = connect(mapStateToProps)(ChannelList);
export default withRouter(channelListContainer);
