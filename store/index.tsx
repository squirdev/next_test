import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from "next-redux-wrapper";
import thunk from 'redux-thunk'
import reducer from './reducers'

const configureStore = () => {
  const middlewares = [thunk];

  const isProduction = process.env.NODE_ENV === "production";

  const enhancer = isProduction
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);

  return store;
};

export const wrapper = createWrapper(configureStore, {
  debug: false,
});
