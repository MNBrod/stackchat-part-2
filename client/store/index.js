import { createStore, applyMiddleware, combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import the messages sub-reducer
import messages from './messages';
import channels from './channels';
import writeMessages from './newMessageEntry';
import writeChannel from './newChannelEntry';
import updateName from './name';

const reducer = combineReducers({
  messages,
  channels,
  writeMessages,
  writeChannel,
  updateName
});


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;
export * from './messages';
export * from './channels';
export * from './newMessageEntry';
export * from './newChannelEntry';
export * from './name';
