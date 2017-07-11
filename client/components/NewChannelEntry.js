import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store';

function mapStateToProps(state, ownProps){
  return {
    newChannelEntry: state.newChannelEntry

  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleChange: function(event){
      dispatch(writeChannel(event.target.value));
    },
    handleSubmit: function(event){
      event.preventDefault();
      console.log('event', event.target);
      dispatch(postChannel({name: event.target.channelName.value}, ownProps.history));
      dispatch(writeChannel(''));
    }
  };
}

function NewChannelEntry (props) {
  return (
    <form onSubmit= {props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
        className="form-control"
        type="text"
        name="channelName"
        placeholder="Enter channel name"
        value={props.newChannelEntry}
        onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const newChannelContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default newChannelContainer;
