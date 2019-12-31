import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Search from '../components/search';
import Details from '../components/details';

const searchStackNavigator = createStackNavigator({
  Search:{
    screen:Search,
    navigationOptions:{
    }
  },
  Details:{
    screen:Details,
    navigationOptions:{
    }
  }
})

export default createAppContainer(searchStackNavigator);
