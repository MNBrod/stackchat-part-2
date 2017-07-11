import axios from 'axios';

const WRITE_CHANNEL = 'WRITE_CHANNEL';


export function writeChannel (name) {
  const action = {
    type: WRITE_CHANNEL,
    name
  };
  return action;
}

export default function newChannelReducer (state = '', action) {
  switch (action.type) {
    case WRITE_CHANNEL:
      return action.name;
    default:
      return state;
  }

}
