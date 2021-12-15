import React from 'react';
import { Provider } from 'react-redux';
import Navigation from "./src/navigation"
import store from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { Text } from 'react-native';
import { useState } from 'react';



export default function App(){
  const [test,setTest]=useState(false)
  return (
    <Provider store={store}>
      <PaperProvider >
      <Navigation/>
      </PaperProvider>
    </Provider>
  );
}

