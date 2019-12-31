import React from 'react'
import { View, Image, Animated,StyleSheet } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class machineItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Text>Je suis le machineItem</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default machineItem
