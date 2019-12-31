import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/navigation';
import Search from './components/search'
import Store from './store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render(){
    return (
      <Provider store={Store}><Search/></Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
