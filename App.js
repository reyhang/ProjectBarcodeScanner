import React from 'react';
import { Provider } from 'react-redux';
import Navigation from "./src/navigation"
import store from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';



export default function App(){

  return (
    <Provider store={store}>
      <PaperProvider>
                   <Navigation />

      </PaperProvider>
    </Provider>
  )
}

