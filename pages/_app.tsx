import React from 'react'
import type { AppProps } from "next/app";
import { wrapper } from "../store";
// Create the Redux store
const App = ({ Component, pageProps }: AppProps) => {
  return (
      <Component {...pageProps} />
  );
};

export default wrapper.withRedux(App);

