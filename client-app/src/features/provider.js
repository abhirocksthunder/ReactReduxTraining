import React from 'react'
import { Router } from 'react-router'
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import NewReleases from './Movies/NewReleases';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Provider({story}) {
  return (
    <ReduxProvider store={store}>
      {story}
    </ReduxProvider>
  );
};

// const ProviderWrapper = ({story}) => (
//   <Provider store={store}>
//     {story}
//   </Provider>
// )

// export default ProviderWrapper